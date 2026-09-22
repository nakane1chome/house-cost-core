/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import {Params} from "./param";
import {Expense} from "./expense";
import {MortgageInterest, MortgagePrincipal} from "./mortgage"
import {OpportunityCostOfDownPayment} from "./deposit_income"
import {OffsetSavings} from "./offset_savings"
import {NewWater} from "./water"
import {LoanAmount} from "./loan_amount"
import {CouncilRates} from "./council_rates"
import {PropertyInsurance} from "./property_insurance"
import {JapanFixedAssetTax} from "./japan_fixed_asset_tax"
import { CityPlanningTax } from "./city_planning_tax"
import { BodyCorporateFees } from "./body_corp_fees"
import { TenantOutgoingsRecovery } from "./tenant_outgoings_recovery"
import { NodeInfo } from "./node_info";

export class CostOfOwnership {

    // Cost of ownership
    public cost : Expense;
    // Cash flow required to own (cost + principle)
    public cash_flow : Expense;
    // Payments needed to service loan
    public loan_payments : Expense;
    public cost_finance : Expense;
    public cost_expenses : Expense;
    
    public loan_interest : MortgageInterest;
    public loan_principle : MortgagePrincipal;
    public deposit_income : OpportunityCostOfDownPayment;
    public offset_savings : OffsetSavings;
    public jp_fixed_asset_tax? : JapanFixedAssetTax;
    public jp_city_planning_tax? : CityPlanningTax;
    public currency : string;

    //public taxes? : Expense;
    //public water? : Expense;
    //public rates? : CouncilRates;
    //public insurance : PropertyInsurance;
    constructor(params: Params, loan_amount: LoanAmount) {

        this.currency = params.location.currency;
        this.loan_interest = new MortgageInterest(params, loan_amount);
        this.loan_principle = new MortgagePrincipal(params, loan_amount);
        this.deposit_income = new OpportunityCostOfDownPayment(params);
        this.offset_savings = new OffsetSavings(params, loan_amount);

        this.cost = new Expense(`Equivalent Rent`,
                                   "All expenses and financing costs. This represents the net cost of owning comparable to renting. " +
                                   "(Excludes equity building through principal repayment.)");
        this.cost_finance = new Expense("Cost of Finance",
                                           "The cost borrowing money " +
                                           "to purchase and the opportunity cost of not investing " +
                                           "the equity elsewhere.",
                                       Expense.ONE_YEAR);
        this.cost_expenses = new Expense("Ongoing Expenses",
                                           "Costs that must be paid for by the property owner.",
                                        Expense.ONE_YEAR);
        this.cash_flow = new Expense("Cash Outflow",
                                     "Sum of all payments needed to maintain ownership of the property.",
                                    Expense.ONE_YEAR);

        if (params.location.country === "JPN") {
            this.jp_fixed_asset_tax = new JapanFixedAssetTax(params);
            this.jp_city_planning_tax = new CityPlanningTax(params);
            this.cost_expenses.add(this.jp_fixed_asset_tax);
            this.cost_expenses.add(this.jp_city_planning_tax);
        }
        let water_expense: Expense | null = null;
        let council_rates_expense: Expense | null = null;
        if (params.location.country === "AUS") {
            water_expense = new NewWater(params);
            council_rates_expense = new CouncilRates(params);
            this.cost_expenses.add(water_expense);
            this.cost_expenses.add(council_rates_expense);
        }
        const insurance = new PropertyInsurance(params);
        this.cost_expenses.add(insurance);
        const body_corp = new BodyCorporateFees(params);
        this.cost_expenses.add(body_corp);
        // Tenant outgoings recovery (commercial leases only): subtracts a
        // mirror of recovered outgoings from cost_expenses. Zero for gross
        // leases and residential.
        this.cost_expenses.sub(new TenantOutgoingsRecovery(params, water_expense, council_rates_expense, insurance, body_corp));

        this.loan_payments = new Expense("Loan Payments",
                                           "Payments that must be made to service the home loan.");
        
        this.cost_finance.add(this.loan_interest); // Actual cost
        this.cost_finance.add(this.deposit_income)  // Oportunity cost
        this.cost_finance.sub(this.offset_savings); // Savings from offset account

        this.cost.add(this.cost_finance);
        this.cost.add(this.cost_expenses);

        this.cash_flow.add(this.cost_expenses);
        this.cash_flow.add(this.loan_interest);
        this.cash_flow.add(this.loan_principle);
        this.cash_flow.sub(this.offset_savings);

        this.loan_payments.add(this.loan_interest);
        this.loan_payments.add(this.loan_principle);
    }

}
