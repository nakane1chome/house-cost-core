/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — FY27 Capital Gains Tax (post-reform)

   No discount; full gain taxed at max(MTR, 30%). For investors with
   MTR >= 30% the floor is non-binding and the rate equals MTR. For
   low-income investors (MTR < 30%) the floor applies and the rate is 30%.

   Sibling to CGTTaxedAmount in taxed_amount.ts which implements the FY26
   (pre-reform) regime. Selection between the two is done by CGTax in
   investment_return.ts based on params.config.cgt_regime.
*/

import { Params, Purchaser } from "./param";
import { Expense } from "./expense";
import { TaxBracket } from "./marginal_tax";
import { CGT_REGIME_FY27 } from "./cgt_regime";

export class CGTTaxedAmountFy27 extends Expense {

    constructor(params: Params,
                reason: string,
                purchaser: Purchaser,
                gain: Expense,
                split: number) {

        const total_gain = gain.accumulated(params.config.hold_term);
        const taxable_amount = total_gain / split;

        if (taxable_amount > 0) {
            const mtr_result = TaxBracket.MarginalTax(purchaser.income, taxable_amount);
            const floor = CGT_REGIME_FY27.flat_rate_floor;
            const effective_rate = Math.max(mtr_result.percentage, floor);
            const tax_amount = effective_rate * taxable_amount;

            super(`Capital Gains Tax (FY27) for ${reason}`,
                  `FY27 regime: no discount on gain of ${total_gain}, split between ${split} purchaser(s) = ${taxable_amount} per purchaser. ` +
                  `MTR-derived rate ${(mtr_result.percentage*100).toFixed(2)}% vs. ${(floor*100).toFixed(0)}% floor; effective rate ${(effective_rate*100).toFixed(2)}%. ` +
                  `Tax: ${tax_amount.toFixed(0)}.`,
                  Expense.ONE_YEAR);
            this.update_upfront(0, -tax_amount);
            this.update_repeating(0);

        } else {
            super(`Capital Gains Tax (FY27) for ${reason}`,
                  `No income to be taxed.`,
                  Expense.ONE_YEAR);
            this.update_upfront(0, 0);
            this.update_repeating(0);
        }
    }
}
