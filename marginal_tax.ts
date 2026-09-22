/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { find_bracket, find_upper_bound } from "./utils";
import { AUSTRALIA_TAX, TaxConfig, getTaxConfig } from "./tax_config";

export interface MarginalTaxResult {
    amount: number;      // Total tax amount
    percentage: number;  // Effective marginal rate (as decimal, e.g., 0.30 = 30%)
    reason: string;      // Explanation of how the tax was calculated
}

export class TaxBracket {

    private static _config: TaxConfig = AUSTRALIA_TAX;

    /**
     * Set the tax configuration (for different countries).
     * Mutates static state — prefer MarginalTaxFor for new code paths.
     */
    static SetConfig(config: TaxConfig): void {
        TaxBracket._config = config;
    }

    /** Return the taxable percentage for a given income (uses the global static _config). */
    static GetPercent(income: number): number {
        return TaxBracket.GetPercentFor(TaxBracket._config, income);
    }

    /** Return the marginal tax for a given amount on top of a base income (AU; uses static _config for backwards compat). */
    static MarginalTax(base_income: number, additional_income: number): MarginalTaxResult {
        return TaxBracket.MarginalTaxFor(TaxBracket._config, base_income, additional_income);
    }

    /** Return the taxable percentage for a given income, against an explicit config. Pure; no state. */
    static GetPercentFor(config: TaxConfig, income: number): number {
        const medicare_levy = income < config.medicareLevyThreshold ? 0 : config.medicareLevy;
        return find_bracket(income, config.brackets) + medicare_levy;
    }

    /**
     * Return the marginal tax for an additional amount on top of a base income, against an explicit config.
     *
     * `config` may be passed as either a TaxConfig object or a country code ("AUS" | "JPN"); the country
     * form is resolved via getTaxConfig(). Pure; does not mutate static state.
     */
    static MarginalTaxFor(config: TaxConfig | string, base_income: number, additional_income: number): MarginalTaxResult {
        const cfg: TaxConfig = typeof config === "string" ? getTaxConfig(config) : config;

        const r0 = TaxBracket.GetPercentFor(cfg, base_income);
        const r1 = TaxBracket.GetPercentFor(cfg, base_income + additional_income);

        if (r0 == r1) {
            const amount = r0 * additional_income;
            return {
                amount,
                percentage: r0,
                reason: `All income taxed at ${(r0 * 100).toFixed(2)}% (single bracket)`
            };
        }

        const upper_bound = find_upper_bound(base_income, cfg.brackets);
        if ((base_income + additional_income) > upper_bound) {
            const income_for_next_bracket = ((base_income + additional_income) - upper_bound);
            const income_in_this_bracket = additional_income - income_for_next_bracket;
            if (income_in_this_bracket == 0) {
                const amount = r1 * additional_income;
                return {
                    amount,
                    percentage: r1,
                    reason: `All income taxed at ${(r1 * 100).toFixed(2)}% (upper bracket)`
                };
            } else {
                const this_bracket_tax = income_in_this_bracket * r0;
                const next_brackets = TaxBracket.MarginalTaxFor(cfg, base_income + income_in_this_bracket, income_for_next_bracket);
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
            const amount = r1 * additional_income;
            return {
                amount,
                percentage: r1,
                reason: `All income taxed at ${(r1 * 100).toFixed(2)}%`
            };
        }
    }

}
