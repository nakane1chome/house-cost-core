/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

/**
 * The weekly rent charged. In "fixed" mode it is property.rent. In "relative" mode it
 * is set against Equivalent Rent (the cost of owning: cost of finance + ongoing
 * expenses) as Equivalent Rent × (1 + rent_relative_percent / 100), so it follows the
 * cost of owning when that changes. Rent does not feed into Equivalent Rent, so this
 * is not circular. Without an Equivalent Rent (e.g. a standalone rental calculation)
 * the fixed amount is used.
 */
export function effectiveWeeklyRent(params: Params, equivalent_rent?: Expense): number {
    if (params.property.rent_mode !== "relative" || equivalent_rent === undefined) {
        return params.property.rent;
    }
    const equivalent_weekly = equivalent_rent.periodic(params.config.hold_term, Expense.ONE_WEEK);
    return Math.max(0, equivalent_weekly * (1 + params.property.rent_relative_percent / 100));
}
