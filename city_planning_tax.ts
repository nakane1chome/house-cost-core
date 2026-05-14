/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — 都市計画税 (JP City Planning Tax)

   Annual JP municipal tax in 市街化区域 (urbanisation-promotion) zones. Levied
   on the same 固定資産税評価額 base as 固定資産税, billed on the same notice.

   - Rate: up to 0.3% (statutory ceiling; some municipalities lower).
   - Residential small-land reduction: 1/3 for ≤200㎡ (vs 1/6 for 固定資産税).
   - Residential general land (200-1000㎡): 2/3.
   - Commercial/building portion: no reduction.

   Modelled in parallel with JapanFixedAssetTax — splits land/building when the
   property fields are set, falls back to flat rate × value otherwise.

   Note: the model does NOT validate whether the property is in a 市街化区域 zone.
   Most urban properties are; rural properties may not be. For an active lead in
   the 23 wards of Tokyo or another major metro, this tax applies. Set
   `property.land_value = property.building_value = 0` to fall back to flat
   approximation; set `params.property` to suppress entirely is future work
   (currently consumed unconditionally on JP leads).
*/

import { Params } from "./param";
import { Expense, SunkUpfrontExpense } from "./expense";
import { jpBuildingAssessmentFactor } from "./depreciation";

const ASSESSED_VALUE_RATIO = 0.7;
const CITY_PLANNING_RATE = 0.003;          // statutory max 0.3%
const RESIDENTIAL_LAND_FACTOR = 1 / 3;     // small-scale residential land reduction

export class CityPlanningTax extends Expense {
    constructor(params: Params) {
        super("City Planning Tax (JP)",
              "Annual JP city planning tax (都市計画税) on real property in 市街化区域 zones.",
              Expense.ONE_YEAR);

        const land = params.property.land_value;
        const building = params.property.building_value;

        let amount: number;
        if (land > 0 || building > 0) {
            const land_assessed = land * ASSESSED_VALUE_RATIO;
            const building_assessed_initial = building * ASSESSED_VALUE_RATIO;
            const age_factor = jpBuildingAssessmentFactor(params.property.construction, params.property.building_age);
            const building_depreciated = building_assessed_initial * age_factor;
            const land_factor = params.property.commercial ? 1.0 : RESIDENTIAL_LAND_FACTOR;
            amount = (land_assessed * land_factor + building_depreciated) * CITY_PLANNING_RATE;

            // Surface the working values as linked-only children.
            this.link(new SunkUpfrontExpense(
                "Assessed Land Value (JP)",
                `Land 固定資産税評価額 ≈ market × ${ASSESSED_VALUE_RATIO} (${params.property.commercial ? "commercial — no reduction" : "small-residential land 1/3 reduction applies"}).`,
                land_assessed));
            this.link(new SunkUpfrontExpense(
                "Assessed Building Value (JP, initial)",
                `Building 固定資産税評価額 at construction ≈ market × ${ASSESSED_VALUE_RATIO}, before age depreciation.`,
                building_assessed_initial));
            this.link(new SunkUpfrontExpense(
                "Depreciated Building Value (JP)",
                `Building assessment after 経年減価補正率 (${params.property.construction}, age ${params.property.building_age}yr → factor ${age_factor.toFixed(3)}).`,
                building_depreciated));
        } else {
            // Legacy fallback: flat 0.3% × market value (no split, no reduction, no age depreciation).
            amount = params.property.value * CITY_PLANNING_RATE;
        }

        this.update_repeating(amount);
    }
}
