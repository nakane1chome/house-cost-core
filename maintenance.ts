/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

/**
 * Annual maintenance budget: property.maintenance_percent of the building value (the
 * land needs no maintenance). Defaults come from defaultMaintenancePercent (config.ts);
 * strata is lower because the levy's sinking fund covers common property. It is the
 * landlord's cost, so tenant outgoings recovery does not reimburse it; for investors it
 * is a deductible repair expense via ongoing expenses.
 */
export class Maintenance extends Expense {
    constructor(params: Params) {
        super("Maintenance",
              `Budget for repairs and upkeep of the building: ${params.property.maintenance_percent}% of the building value per year.`,
              Expense.ONE_YEAR);
        this.update_repeating(params.property.building_value * params.property.maintenance_percent / 100);
    }
}
