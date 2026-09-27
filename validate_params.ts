/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";

/**
 * An investment needs a taxpayer: without an enabled purchaser with an income, rental
 * income tax, the tax benefit of deductions, CGT and the tax on the deposit's forgone
 * interest all silently read 0, overstating the investment return. Returns the error
 * to show, or null when the parameters are valid for this rule.
 */
export const INVESTMENT_INCOME_ERROR =
    "Investment needs a borrower income for tax: tick Income, Co-Borrower 1 (or 2) and enter an income.";

/** At least one enabled purchaser has an income to tax. */
export function hasBorrowerIncome(params: Params): boolean {
    return params.purchasers.some(p => p.enable && p.income > 0);
}

export function investmentIncomeError(params: Params): string | null {
    if (params.config.owner_occupier) return null;
    return hasBorrowerIncome(params) ? null : INVESTMENT_INCOME_ERROR;
}
