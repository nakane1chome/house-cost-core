/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { MortgageInterest } from "./mortgage";
import { Depreciation } from "./depreciation";
import { TaxBracket } from "./marginal_tax";
import { CostOfOwnership } from "./cost_of_ownership";

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

/**
 * Aggregates all tax-deductible expenses for investment properties
 */
export class TaxDeductibleExpenses extends Expense {

    public depreciation: Depreciation;
    public finance_cost: Expense;
    public ongoing_expenses: Expense;

    constructor(params: Params, ownership_cost: CostOfOwnership) {
        super("Tax Deductible Expenses",
              "All expenses that are tax-deductible for investment properties (not owner-occupied).", Expense.ONE_YEAR);

        this.depreciation = new Depreciation(params);
        this.finance_cost = ownership_cost.loan_interest;
        this.ongoing_expenses = ownership_cost.cost_expenses;

        // Only add these as deductible if it's an investment property
        if (!params.config.owner_occupier) {
            this.add(this.depreciation);
            this.add(this.finance_cost);
            this.add(this.ongoing_expenses);
        } else {
            this.add(this.finance_cost);
            this.add(this.ongoing_expenses);
            this.is_known = true;
        }
    }
}

/**
 * Calculates the tax benefit from deductible expenses
 */
export class TaxBenefit extends Expense {

    constructor(params: Params, tax_deductible_expenses: TaxDeductibleExpenses) {
        super("Tax Deduction Benefit",
              "Tax savings from deductible investment property expenses at your marginal tax rate.", Expense.ONE_YEAR);

        // Only calculate if there are purchasers with income and it's not owner-occupied
        if (params.config.owner_occupier || params.purchasers.length === 0) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        // Calculate total income from all purchasers
        let total_purchasers = 0;
        for (const purchaser of params.purchasers) {
            if (purchaser.enable) {
                total_purchasers += 1;
            }
        }

        if (total_purchasers === 0) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        // Only applies to Australian tax system for now
        // Japan has different tax treatment which could be added later
        if (params.location.country === "AUS") {

            // TODO - this is ammorized over the hold period. Realistically interest decreases over each year.
            const per_owner = tax_deductible_expenses.periodic(params.config.hold_term, Expense.ONE_YEAR) / total_purchasers;

            // Calculate marginal tax on the deductions
            // Negative because it's a benefit (reduces tax)
            let tax_savings = 0;

            for (const purchaser of params.purchasers) {
                if (purchaser.enable) {
                    tax_savings += TaxBracket.MarginalTax(purchaser.income, per_owner);
                }
            }
            // Tax benefit is the amount saved, so it's a negative expense (income)
            this.is_known = true;
            this.update_repeating(tax_savings);
        } else {
            // For other countries, no tax benefit calculation yet
            this.is_known = true;
            this.update_repeating(0);
        }
    }
}

/**
 * Complete investment return calculation including:
 * 1. Equity Return (capital gains)
 * 2. Tax Deductible Expenses (for reference)
 * 3. Tax Deduction Benefit (actual tax savings)
 */
export class InvestmentReturn extends Expense {

    public equity_return: EquityReturn;
    public tax_deductible_expenses: TaxDeductibleExpenses;
    public tax_benefit: TaxBenefit;

    constructor(params: Params, loan_amount: number, property_value: number,
                ownership_cost: CostOfOwnership) {
        super("Investment Return",
              "Total return from property investment including equity gains and tax benefits.");

        this.equity_return = new EquityReturn(params, loan_amount, property_value);
        this.tax_deductible_expenses = new TaxDeductibleExpenses(params, ownership_cost);
        this.tax_benefit = new TaxBenefit(params, this.tax_deductible_expenses);

        this.add(this.equity_return);
        this.sub(this.tax_deductible_expenses);
        this.add(this.tax_benefit);
    }
}
