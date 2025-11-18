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
        const total_equity = initial_equity + principal_paid;

        // At exit, the equity remains (remainder ratio = 1.0)
        this.update_upfront(total_equity, 0);
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
        const years = params.config.hold_term;

        // Compound appreciation: final_value = initial_value * (1 + rate)^years
        const appreciated_value = property_value * Math.pow(1 + appreciation_rate, years);
        const appreciation_gain = appreciated_value - property_value;

        // At exit, the appreciation remains (remainder ratio = 1.0)
        this.update_upfront(appreciation_gain, 0.0);
    }
}

/**
 * Calculates total investment return from property ownership
 */
export class InvestmentReturn extends Expense {

    public retained_equity: RetainedEquity;
    public asset_appreciation: AssetAppreciation;

    constructor(params: Params, loan_amount: number, property_value: number) {
        super("Investment Return",
              "Total return on investment from property ownership, including equity buildup and asset appreciation.");

        this.retained_equity = new RetainedEquity(params, loan_amount, property_value);
        this.asset_appreciation = new AssetAppreciation(params, property_value);

        this.add(this.retained_equity);
        this.add(this.asset_appreciation);
    }
}
