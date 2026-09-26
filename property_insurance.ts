/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

/**
 * Annual building insurance: property.insurance_percent of the building value (the land
 * is not insured). Defaults come from defaultInsurancePercent (config.ts); for strata the
 * default is 0 because the body corporate's policy is paid through the levy.
 */
export class PropertyInsurance extends Expense {
    constructor(params: Params) {
        super("Property Insurance",
             `Cost of insuring the building: ${params.property.insurance_percent}% of the building value per year.`,
             Expense.ONE_YEAR)
        this.update_repeating(params.property.building_value * params.property.insurance_percent / 100);
    }
}
