/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import {Params} from "./param";
import {Expense} from "./expense";
import {MortgageInterest, MortgagePrincipal} from "./mortgage"
import {OpportunityCostOfDownPayment} from "./deposit_income"
import {NewWater} from "./water"
import {LoanAmount} from "./loan_amount"
import {CouncilRates} from "./council_rates"
import {PropertyInsurance} from "./property_insurance"
import {JapanFixedAssetTax} from "./japan_fixed_asset_tax"
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
