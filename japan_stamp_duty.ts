/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";
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
        this.update_upfront(amount)
    }
}


export class JapanPropertyAcquisitionTax extends Expense {
    private static _LAND_RATE = 0.04;
    private static _BUILDING_RATE = 0.03;

    constructor(params: Params) {
        super("Property Acquisition Tax (JP)",
             "This is a one-time tax that is levied when you acquire property.");
        if (params.location.country != "JPN") {
            return;
        }
        const amount=(params.property.land_value * JapanPropertyAcquisitionTax._LAND_RATE + 
            params.property.building_value * JapanPropertyAcquisitionTax._BUILDING_RATE);
        this.update_upfront(amount)
    }
    

}

export class JapanTitleRegistrationStampDuty extends Expense {
    private static _LAND_RATE = 0.02;
    private static _BUILDING_RATE = 0.02;

    constructor(params: Params) {
        super("Title Registration Stamp Duty (JP)",
             "Stamp duty applied when you register a property or change the registered information.");
        if (params.location.country != "JPN") {
            return;
        }
        const amount=(params.property.land_value * JapanTitleRegistrationStampDuty._LAND_RATE + 
            params.property.building_value * JapanTitleRegistrationStampDuty._BUILDING_RATE);
        this.update_upfront(amount)
    }
    

}
