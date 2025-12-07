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
import { TaxedAmountWithDeduction, CGTTaxedAmount } from "./taxed_amount";

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

export class InitialEquity extends Expense {
    constructor(params: Params) {
        super("Initial Equity",
              "The initial downpayment or deposit for this investment.");
        this.update_upfront(params.config.deposit, 0);
    }
}

/**
 * Calculates total equity return from property ownership
 */
export class EquityReturn extends Expense {

    public retained_equity: RetainedEquity;
    public asset_appreciation: AssetAppreciation;
    public cgt_tax : Array<CGTTaxedAmount>;
    public initial_equity: InitialEquity;
    public feed_equity?: FeedEquity;

    constructor(params: Params, 
                loan_amount: number, 
                property_value: number);
    constructor(params: Params, 
                loan_amount: number, 
                property_value: number, 
                ownership_cost: CostOfOwnership, 
                depreciation: Expense, 
                investment_income_to_pay_principal: Expense);
    constructor(params: Params, 
                loan_amount: number, 
                property_value: number, 
                ownership_cost?: CostOfOwnership, 
                depreciation?: Expense, 
                investment_income_to_pay_principal?: Expense) {
        super("Equity Return",
              "Total return on investment from property ownership, including equity buildup and asset appreciation.");

        this.retained_equity = new RetainedEquity(params, loan_amount, property_value);
        this.asset_appreciation = new AssetAppreciation(params, property_value);
        this.initial_equity = new InitialEquity(params);
        this.cgt_tax = [];

        const purchaser_cnt = params.purchasers.length;
        let enabled_cnt = 0;
        for (let i=0; i < purchaser_cnt; i++) {
            if (params.purchasers[i].enable) {
                enabled_cnt = enabled_cnt+1;
            }
        }


        this.add(this.retained_equity);
        this.add(this.asset_appreciation);
        if (depreciation != undefined) {
            this.link(depreciation);
        }

        if (!params.config.owner_occupier) {
            let j=0;
            for (let i=0; i < purchaser_cnt; i++) {
                if (params.purchasers[i].enable) {
                    this.cgt_tax[j] = new CGTTaxedAmount(params,
                                                         `Appreciation, purchaser ${i}`,
                                                         params.purchasers[i],
                                                         this.asset_appreciation,
                                                         enabled_cnt);
                    this.sub(this.cgt_tax[j]);
                    j+=1;
                    if (depreciation != undefined) {
                        this.cgt_tax[j] = new CGTTaxedAmount(params,
                                                             `Depreciation, purchaser ${i}`,
                                                             params.purchasers[i],
                                                             depreciation,
                                                             enabled_cnt);
                        this.sub(this.cgt_tax[j]);
                    }
                }
            }
        }
        this.sub(this.initial_equity);
        if ((ownership_cost != undefined) && (investment_income_to_pay_principal != undefined) ) {
            this.feed_equity = new FeedEquity(params, ownership_cost.loan_principle, investment_income_to_pay_principal);
            this.sub(this.feed_equity);
        }


    }
}

/**
 * Represents rental income from investment property
 */
export class GrossRentalIncome extends Expense {
    constructor(params: Params) {
        super("Gross Rental Income",
              "Income received from renting out the property.", Expense.ONE_WEEK);

        // Only applies to investment properties
        if (params.config.owner_occupier) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        const weekly_rent = params.property.rent;
        this.is_known = true;
        this.update_repeating(weekly_rent);
    }
}

export class FeeOnRentalIncome extends Expense {
    constructor(params: Params) {
        super("Rental Management Fees",
              "Fees related to renting out the property.", Expense.ONE_WEEK);

        // Only applies to investment properties
        if (params.config.owner_occupier) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        const weekly_fee = params.property.rent * params.property.rent_fee_ratio;
        this.is_known = true;
        this.update_repeating(weekly_fee);
    }
}

export class TaxOnRentalIncome extends Expense {
    constructor(params: Params,  gross_income: Expense, fees: Expense) {
        super("Rental Income Tax",
              "Tax on rental income from property.", Expense.ONE_YEAR);

        // Only applies to investment properties
        if (params.config.owner_occupier) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        const purchaser_cnt = params.purchasers.length;
        let enabled_cnt = 0;
        for (let i=0; i < purchaser_cnt; i++) {
            if (params.purchasers[i].enable) {
                enabled_cnt = enabled_cnt+1;
            }
        }
        for (let i=0; i < purchaser_cnt; i++) {
            if (params.purchasers[i].enable) {
                const taxed_amount = new TaxedAmountWithDeduction(
                    `Rent Income for purchaser ${i}`,
                    params.purchasers[i], 
                    gross_income, fees,enabled_cnt);
                this.add(taxed_amount);
            }
        }
    }
}

export class NetRentalIncome extends Expense {

    public rental_income: GrossRentalIncome;
    public rental_fee: FeeOnRentalIncome;
    public rental_tax: TaxOnRentalIncome;

    constructor(params: Params) {
        super("Net Rental Income",
              "Income received from renting out the property, minus expenses and tax.", Expense.ONE_WEEK);

        // Initialize properties first
        this.rental_income = new GrossRentalIncome(params);
        this.rental_fee = new FeeOnRentalIncome(params);
        this.rental_tax = new TaxOnRentalIncome(params, this.rental_income, this.rental_fee);

        // Only applies to investment properties
        if (params.config.owner_occupier) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        this.add(this.rental_income);
        this.sub(this.rental_fee);
        this.sub(this.rental_tax);

    }
}


/**
 * Aggregates all tax-deductible expenses for investment properties
 */
export class TaxDeductibleExpenses extends Expense {

    public finance_cost: Expense;
    public ongoing_expenses: Expense;

    constructor(params: Params, ownership_cost: CostOfOwnership) {
        super("Tax Deductible Expenses",
              "All paid for expenses that are tax-deductible for investment properties (not owner-occupied).", Expense.ONE_YEAR);

        this.finance_cost = ownership_cost.loan_interest;
        this.ongoing_expenses = ownership_cost.cost_expenses;

        // Only add these as deductible if it's an investment property
        this.add(this.finance_cost);
        this.add(this.ongoing_expenses);

    }
}

/**
 * Calculates the tax benefit from deductible expenses
 */
export class TaxBenefit extends Expense {

    constructor(params: Params, reason: string, deduction: Expense) {

        const total_claim =  deduction.periodic(params.config.hold_term, Expense.ONE_YEAR);

        super(`Tax Benefit from ${reason} Deduction`,
              `Tax savings from ${total_claim} at your marginal tax rate.`, Expense.ONE_YEAR);

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
            const per_owner =  total_claim / total_purchasers;

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

export class FeedEquity extends Expense {

    constructor(params: Params, mortgage_principal: Expense, gross_investment_income: Expense) {
        const gross_income_amount = gross_investment_income.periodic(params.config.hold_term, Expense.ONE_YEAR);
        const principal_repayment_amount = mortgage_principal.periodic(params.config.hold_term, Expense.ONE_YEAR);
        super("Feed Equity",
              `When negative gearing, additional equity must be invested to maintain principal . ${gross_income_amount} < ${principal_repayment_amount}`, 
              Expense.ONE_YEAR);

        // TODO - only needed if negative.
        
        //this.add(mortgage_principal);

        // Only calculate if there are purchasers with income and it's not owner-occupied
        if (params.config.owner_occupier) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        
        if (gross_income_amount < principal_repayment_amount)  {
            // The investment income allows for paying the loan interest (as a tax deductable expense).
            // To keep the loan terms the principal payment will need to be made from the investment income, or 
            const remaining_principal_repayment = principal_repayment_amount - gross_income_amount;
            const feed_equity_amount = gross_income_amount > 0 ? remaining_principal_repayment : principal_repayment_amount ;
            this.update_repeating(feed_equity_amount);

            this.link(mortgage_principal)
            this.link(gross_investment_income)

        } else {
            this.update_repeating(0);
        }
        
    }
}

export class NetInvestmentIncome extends Expense {

    public rental_income: NetRentalIncome;
    public tax_deductible_expenses: TaxDeductibleExpenses;
    public tax_benefit_from_expenses: TaxBenefit;
    public tax_benefit_from_depreciation: TaxBenefit;

    constructor(params: Params, loan_amount: number, 
                ownership_cost: CostOfOwnership, depreciation: Expense) {
        super("Net Investment Income",
              "Income or loss from property after expenses.");

        this.rental_income = new NetRentalIncome(params);
        this.tax_deductible_expenses = new TaxDeductibleExpenses(params, ownership_cost);
        this.tax_benefit_from_expenses = new TaxBenefit(params, "Expenses", this.tax_deductible_expenses);
        this.tax_benefit_from_depreciation = new TaxBenefit(params, "Depreciation",  depreciation);

        this.add(this.rental_income)
        this.sub(this.tax_deductible_expenses)
        this.add(this.tax_benefit_from_expenses)
        this.link(depreciation)
        this.add(this.tax_benefit_from_depreciation)

    }

}



/**
 * Complete investment return calculation including:
 * 1. Equity Return (capital gains)
 * 2. Rental Income
 * 3. Tax Deductible Expenses (for reference)
 * 4. Tax Deduction Benefit (actual tax savings)
 */
export class InvestmentReturn extends Expense {

    public depreciation: Depreciation;
    public investment_income: NetInvestmentIncome;
    public equity_return: EquityReturn;    

    constructor(params: Params, loan_amount: number, property_value: number,
                ownership_cost: CostOfOwnership) {
        super("Investment Return",
              "Total return from property investment including equity gains, rental income, and tax benefits.");

        // NOTE - this needs to be changed to remove depeciation from sum.
        // NOTE - deprication needs to be used only as tax benefit.


        // Deprication needs to be used to change the CGT calcuation.
        this.depreciation = new Depreciation(params);
        this.investment_income = new NetInvestmentIncome(params, loan_amount, ownership_cost, this.depreciation);
        this.equity_return = new EquityReturn(params, loan_amount, property_value, ownership_cost, this.depreciation, this.investment_income);

        this.add(this.investment_income);
        this.add(this.equity_return);


    }
}
