/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params, Purchaser } from "./param";
import { Expense } from "./expense";
import { TaxBracket } from "./marginal_tax";
import { CGT_PRE_REFORM, CGT_POST_REFORM, resolvePurchaseDate, saleDate, reformFraction, isoDate, CGT_REFORM_START } from "./cgt_regime";

export class TaxedAmount extends Expense {

    constructor(reason: string,
                purchaser: Purchaser, 
                deposit_interest: Expense, 
                split: number) {
        const my_amount = deposit_interest.annual() / split;
        const tax_result = TaxBracket.MarginalTax(purchaser.income, my_amount);
        super(`Tax on ${reason}`,
              `The tax that would have been paid on interest (${my_amount}) or other returns made on the deposit, ` +
            "if it had not been used as equity for the property purchase.",
             Expense.ONE_YEAR);
        this.update_repeating(tax_result.amount);
    }
}

export class TaxedAmountWithDeduction extends Expense {

    constructor(reason: string,
                purchaser: Purchaser, 
                income: Expense, 
                deduction: Expense, 
                split: number) {
        const my_amount = (income.annual() - deduction.annual()) / split;
        super(`Tax on ${reason}`,
              `Tax to be paid ${my_amount}, from income of ${income.annual()/split} on net amount after deduction of ${deduction.annual()/split}.`,
             Expense.ONE_YEAR);
        const tax_result = TaxBracket.MarginalTax(purchaser.income, my_amount);
        this.update_repeating(tax_result.amount);
    }
}

/**
 * AU capital gains tax on a gain realised at hold-end, for one purchaser.
 *
 * The gain is time-apportioned across the CGT reform date (see cgt_regime.ts):
 *   pre-reform slice  → 50% discount if held ≥ 1 year, taxed at the purchaser's MTR
 *   post-reform slice → no discount, taxed at max(MTR, 30%)
 * config.cgt_reform = false disables the split (whole gain pre-reform).
 * config.purchase_date ("" → today) plus config.hold_term fixes the sale date.
 */
export class CGTTaxedAmount extends Expense {

    constructor(params: Params,
                reason: string,
                purchaser: Purchaser,
                gain: Expense,
                split: number) {

        const hold = params.config.hold_term;
        const total_gain = gain.accumulated(hold);
        const my_gain = total_gain / split;

        if (my_gain <= 0) {
            super(`Capital Gains Tax for ${reason}`, `No income to be taxed.`, Expense.ONE_YEAR);
            this.update_upfront(0, 0);
            this.update_repeating(0);
            return;
        }

        const purchase = resolvePurchaseDate(params);
        const sale = saleDate(purchase, hold);
        const f = params.config.cgt_reform ? reformFraction(purchase, sale) : 0;

        // Pre-reform slice: discount for holds of a year or more.
        const pre_gain = my_gain * (1 - f);
        const pre_discount = hold >= 1 ? CGT_PRE_REFORM.discount : 0;
        const pre_taxable = pre_gain * (1 - pre_discount);
        const pre = pre_taxable > 0
            ? TaxBracket.MarginalTaxFor("AUS", purchaser.income, pre_taxable)
            : { amount: 0, percentage: 0, reason: "" };

        // Post-reform slice: full nominal gain at max(MTR, floor).
        const post_gain = my_gain * f;
        const post_taxable = post_gain * (1 - CGT_POST_REFORM.discount);
        const post_mtr = post_taxable > 0
            ? TaxBracket.MarginalTaxFor("AUS", purchaser.income, post_taxable)
            : { amount: 0, percentage: 0, reason: "" };
        const post_rate = Math.max(post_mtr.percentage, CGT_POST_REFORM.floor);
        const post_amount = post_taxable * post_rate;

        const tax = pre.amount + post_amount;
        const pct = (x: number) => (x * 100).toFixed(1) + "%";
        const desc =
            `Gain ${total_gain.toFixed(0)} split between ${split} purchaser(s) = ${my_gain.toFixed(0)}. ` +
            `Purchased ${isoDate(purchase)}, sold ${isoDate(sale)}` +
            (params.config.cgt_reform
                ? `; ${pct(1 - f)} of the hold before ${CGT_REFORM_START} (${pct(pre_discount)} discount, MTR ${pct(pre.percentage)} → tax ${pre.amount.toFixed(0)}), ` +
                  `${pct(f)} after (no discount, max(MTR, ${pct(CGT_POST_REFORM.floor)}) = ${pct(post_rate)} → tax ${post_amount.toFixed(0)}). `
                : `; reform disabled — ${pct(pre_discount)} discount, MTR ${pct(pre.percentage)}. `) +
            `Tax: ${tax.toFixed(0)}.`;

        super(`Capital Gains Tax for ${reason}`, desc, Expense.ONE_YEAR);
        // Tax on the capital gain is realised at exit.
        this.update_upfront(0, -tax);
        this.update_repeating(0);
    }
}
