/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { MortgageInterest } from "./mortgage";

/**
 * Represents the equity retained in the property
 */
export class RetainedEquity extends Expense {
    constructor(params: Params, loan_amount: number, property_value: number) {
        super("Retained Equity",
              "The equity you build in the property through loan repayments (principal paid down).");

        // Calculate how much principal has been paid off during hold_term
        const remaining_principal = MortgageInterest.calculateRemainingPrincipal(
            loan_amount,
            params.economy.loan_rate,
            params.config.loan_term,
            params.config.hold_term
        );

        const principal_paid = loan_amount - remaining_principal;

        // Add the initial deposit/equity
        const initial_equity = property_value - loan_amount;

        // Total equity = initial deposit + principal paid
        const retained_equity = initial_equity + principal_paid;

        // At exit, the equity remains
        const exit_remainder_amount = property_value - retained_equity;
        this.update_upfront(property_value, exit_remainder_amount);
    }
}

/**
 * Represents asset appreciation over the hold period
 */
export class AssetAppreciation extends Expense {
    constructor(params: Params, property_value: number) {
        super("Asset Appreciation",
              "Estimated increase in property value based on annual appreciation rate.");

        // Calculate appreciation over hold_term
        const appreciation_rate = params.economy.appreciation_rate / 100.0;
        const hold_years = params.config.hold_term;
        const term_years = params.config.loan_term;

        // Compound appreciation: final_value = initial_value * (1 + rate)^years
        const appreciated_value_at_hold = property_value * Math.pow(1 + appreciation_rate, hold_years);
        const appreciated_value_at_term = property_value * Math.pow(1 + appreciation_rate, term_years);
        const appreciation_gain_at_hold = appreciated_value_at_hold - property_value;
        const appreciation_gain_at_term = appreciated_value_at_term - property_value;

        const exit_remainder_amount = appreciation_gain_at_term - appreciation_gain_at_hold;
        this.update_upfront(appreciation_gain_at_term, exit_remainder_amount);
    }
}

/**
 * Calculates total equity return from property ownership
 */
export class EquityReturn extends Expense {

    public retained_equity: RetainedEquity;
    public asset_appreciation: AssetAppreciation;

    constructor(params: Params, loan_amount: number, property_value: number) {
        super("Equity Return",
              "Total return on investment from property ownership, including equity buildup and asset appreciation.");

        this.retained_equity = new RetainedEquity(params, loan_amount, property_value);
        this.asset_appreciation = new AssetAppreciation(params, property_value);

        this.add(this.retained_equity);
        this.add(this.asset_appreciation);
    }
}
