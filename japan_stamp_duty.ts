/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense, SunkUpfrontExpense } from "./expense";
import { ASSESSED_VALUE_RATIO } from "./japan_fixed_asset_tax";
import { jpBuildingAssessmentFactor } from "./depreciation";
import {find_bracket, find_upper_bound} from "./utils"

export class JapanContractStampDuty extends Expense {

    // https://questionjapan.com/blog/location-guides/japanese-property-tax/
    // https://uchijapan.com/news/japan-property-taxes-simple-guide
    private static _DUTY_BRACKETS = [
        // Max value, fee
        [10000000,10000],
        [50000000,30000],
        [100000000,60000],
        [500000000,60000],
        [-1,60000],
    ];

    constructor(params: Params) {
        super("Contract Stamp Duty (JP)",
             "A stamp duty is payable for a contract within Japan for a property transaction.");
        if (params.location.country != "JPN") {
            return;
        }
        const amount=find_bracket(params.property.value, 
                                  JapanContractStampDuty._DUTY_BRACKETS);
        this.update_upfront(amount, 0)
    }
}


/**
 * 固定資産税評価額 (assessed value), the base for acquisition and registration tax:
 * ~70% of market for land; for the building, ~70% at construction, reduced by the
 * 経年減価補正率 age factor (as JapanFixedAssetTax).
 */
function assessedValues(params: Params): { land: number, building: number, age_factor: number } {
    const age_factor = jpBuildingAssessmentFactor(params.property.construction, params.property.building_age);
    return {
        land: params.property.land_value * ASSESSED_VALUE_RATIO,
        building: params.property.building_value * ASSESSED_VALUE_RATIO * age_factor,
        age_factor,
    };
}

/**
 * 不動産取得税 (real-estate acquisition tax), one-off, on the assessed value.
 * Land: 宅地 special measure halves the base; rate 3% (reduced rate for land).
 * Building: 3% residential, 4% non-residential (proxied by property.commercial).
 * Not modelled: residential building deductions (by build year) and 住宅用地 land
 * deductions. Rates and special measures from general knowledge — verify expiry dates.
 */
export class JapanPropertyAcquisitionTax extends Expense {
    private static _LAND_BASE_FACTOR = 0.5;
    private static _LAND_RATE = 0.03;
    private static _BUILDING_RATE_RESIDENTIAL = 0.03;
    private static _BUILDING_RATE_OTHER = 0.04;

    constructor(params: Params) {
        super("Property Acquisition Tax (JP)",
             "One-time tax on acquiring property (不動産取得税): assessed value (land base halved) × 3%, building × 3% residential / 4% non-residential.");
        if (params.location.country != "JPN") {
            return;
        }
        const assessed = assessedValues(params);
        const building_rate = params.property.commercial
            ? JapanPropertyAcquisitionTax._BUILDING_RATE_OTHER
            : JapanPropertyAcquisitionTax._BUILDING_RATE_RESIDENTIAL;
        const amount = assessed.land * JapanPropertyAcquisitionTax._LAND_BASE_FACTOR * JapanPropertyAcquisitionTax._LAND_RATE
            + assessed.building * building_rate;
        this.update_upfront(amount, 0);
        this.link(new SunkUpfrontExpense("Assessed Land Value (JP)",
            `Land 固定資産税評価額 ≈ market × ${ASSESSED_VALUE_RATIO}.`, assessed.land));
        this.link(new SunkUpfrontExpense("Assessed Building Value (JP)",
            `Building 固定資産税評価額 ≈ market × ${ASSESSED_VALUE_RATIO} × age factor ${assessed.age_factor.toFixed(3)}.`, assessed.building));
    }
}

/**
 * 登録免許税 (registration and licence tax) on the ownership transfer by sale, on the
 * assessed value: land 1.5% (special reduced rate), building 2%. Not modelled: the
 * reduced rates for owner-occupied housing, and mortgage-registration tax.
 * Rates from general knowledge — verify the land special rate is still in force.
 */
export class JapanTitleRegistrationStampDuty extends Expense {
    private static _LAND_RATE = 0.015;
    private static _BUILDING_RATE = 0.02;

    constructor(params: Params) {
        super("Title Registration Stamp Duty (JP)",
             "Registration tax on the ownership transfer (登録免許税): assessed value × 1.5% land, 2% building.");
        if (params.location.country != "JPN") {
            return;
        }
        const assessed = assessedValues(params);
        const amount = assessed.land * JapanTitleRegistrationStampDuty._LAND_RATE
            + assessed.building * JapanTitleRegistrationStampDuty._BUILDING_RATE;
        this.update_upfront(amount, 0);
    }
}
