/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import {Params} from "./param";
import {Expense} from "./expense";
import {MortgageInterest} from "./mortgage_interest"
import {MortgagePrinciple} from "./mortgage_principle"
import {DepositIncome} from "./deposit_income"
import {NewWater} from "./water"
import {CouncilRates} from "./council_rates"
import {PropertyInsurance} from "./property_insurance"
import {JapanFixedAssetTax} from "./japan_fixed_asset_tax"
import { NodeInfo } from "./node_info";

export class CostOfOwnership {

    // Cost of ownwer ship
    public cost : Expense;
    // Cash flow required to own (cost + principle)
    public cash_flow : Expense;
    // Payments needed to service loan
    public loan_payments : Expense;
    public cost_finance : Expense;
    public cost_expenses : Expense;
    
    public loan_interest : MortgageInterest;
    public loan_principle : MortgagePrinciple;
    public deposit_income : DepositIncome;
    public currency : string;

    //public taxes? : Expense;
    //public water? : Expense;
    //public rates? : CouncilRates;
    //public insurance : PropertyInsurance;
    constructor(params: Params, loan_amount: number) {

        this.currency = params.location.currency;
        this.loan_interest = new MortgageInterest(params, loan_amount);
        this.loan_principle = new MortgagePrinciple(params, loan_amount);
        this.deposit_income = new DepositIncome(params);

        this.cost = new Expense(`Cost of Ownership ${params.location.state}`,
                                   "All expenses and financing costs. This is the equivalent of rent. " +
                                   "(Excludes equity in the property.)");
        this.cost_finance = new Expense("Finance Cost",
                                           "The cost borrowing money " +
                                           "to purchase and the opportunity cost of not investing " +
                                           "the equity elsewhere.",
                                       Expense.ONE_YEAR);
        this.cost_expenses = new Expense("Ongoing Expenses",
                                           "Costs that must be paid for by the property owner.",
                                        Expense.ONE_YEAR);
        this.cash_flow = new Expense("Cash Flow",
                                     "Sum of all payments needed to maintain ownership of the property.",
                                    Expense.ONE_YEAR);

        if (params.location.country === "JPN") {
            this.cost_expenses.add(new JapanFixedAssetTax(params));
        }
        if (params.location.country === "AUS") {
            this.cost_expenses.add(new NewWater(params));
            this.cost_expenses.add(new CouncilRates(params));
        }
        const insurance = new PropertyInsurance(params);
        this.cost_expenses.add(insurance);

        this.loan_payments = new Expense("Loan Payments",
                                           "Payments that must be made to service the home loan.");
        
        this.cost_finance.add(this.loan_interest); // Actual cost
        this.cost_finance.add(this.deposit_income)  // Oportunity cost

        this.cost.add(this.cost_finance);
        this.cost.add(this.cost_expenses);

        this.cash_flow.add(this.cost_expenses);
        this.cash_flow.add(this.loan_interest);
        this.cash_flow.add(this.loan_principle);

        this.loan_payments.add(this.loan_interest);
        this.loan_payments.add(this.loan_principle);
    }

}
