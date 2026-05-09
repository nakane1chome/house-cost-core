/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { find_bracket, find_upper_bound } from "./utils";
import { AUSTRALIA_TAX, TaxConfig } from "./tax_config";

export interface MarginalTaxResult {
    amount: number;      // Total tax amount
    percentage: number;  // Effective marginal rate (as decimal, e.g., 0.30 = 30%)
    reason: string;      // Explanation of how the tax was calculated
}

export class TaxBracket {

    private static _config: TaxConfig = AUSTRALIA_TAX;

    /**
     * Set the tax configuration (for different countries)
     */
    static SetConfig(config: TaxConfig): void {
        TaxBracket._config = config;
    }

    /** Return the taxable percentage for a given income */
    static GetPercent(income: number): number {
        console.log("GET PERCENT TAX!", income);
        const medicare_levy = income < TaxBracket._config.medicareLevyThreshold ? 0 : TaxBracket._config.medicareLevy;
        return find_bracket(income, TaxBracket._config.brackets) + medicare_levy;
    }

    /** Return the marginal tax for a given amount on top of a base income */
    static MarginalTax(base_income: number, additional_income: number): MarginalTaxResult {
        console.log("BASE INCOME!", base_income);
        console.log("ADDITIONAL INCOME", additional_income);

        const r0 = TaxBracket.GetPercent(base_income);
        const r1 = TaxBracket.GetPercent(base_income + additional_income);

        if (r0 == r1) {
            // All additional income taxed at the same rate
            const amount = r0 * additional_income;
            console.log("MARGINAL DONE LOWER!", r0, additional_income, amount);
            return {
                amount,
                percentage: r0,
                reason: `All income taxed at ${(r0 * 100).toFixed(2)}% (single bracket)`
            };
        }

        const upper_bound = find_upper_bound(base_income, TaxBracket._config.brackets);
        if ((base_income + additional_income) > upper_bound) {
            const income_for_next_bracket = ((base_income + additional_income) - upper_bound);
            const income_in_this_bracket = additional_income - income_for_next_bracket;
            if (income_in_this_bracket == 0) {
                // All income in the higher bracket
                const amount = r1 * additional_income;
                console.log("MARGINAL DONE UPPER!", r1, income_for_next_bracket, amount);
                return {
                    amount,
                    percentage: r1,
                    reason: `All income taxed at ${(r1 * 100).toFixed(2)}% (upper bracket)`
                };
            } else {
                // Income spans multiple brackets
                console.log("UPPER BOUND!", upper_bound, "This Bracket", income_in_this_bracket, "Next Bracket", income_for_next_bracket);
                console.log("MARGINAL TAX!", r0, r1, upper_bound, income_in_this_bracket, income_for_next_bracket);

                const this_bracket_tax = income_in_this_bracket * r0;
                const next_brackets = TaxBracket.MarginalTax(base_income + income_in_this_bracket, income_for_next_bracket);
                const total_amount = this_bracket_tax + next_brackets.amount;
                const effective_rate = total_amount / additional_income;

                return {
                    amount: total_amount,
                    percentage: effective_rate,
                    reason: `${income_in_this_bracket.toFixed(0)} at ${(r0 * 100).toFixed(2)}%, ` +
                           `${income_for_next_bracket.toFixed(0)} at higher brackets (effective: ${(effective_rate * 100).toFixed(2)}%)`
                };
            }
        } else {
            // All income in upper bracket (but not crossing boundary)
            const amount = r1 * additional_income;
            console.log("MARGINAL DONE UPPER!", r1, additional_income, amount);
            return {
                amount,
                percentage: r1,
                reason: `All income taxed at ${(r1 * 100).toFixed(2)}%`
            };
        }
    }

}
