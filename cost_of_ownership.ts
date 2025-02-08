/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import {Params} from "./param";
import {Expense} from "./expense";
import {MortgageInterest} from "./mortgage_interest"
import {MortgagePrinciple} from "./mortgage_principle"
import {DepositIncome} from "./deposit_income"
import {NewTaxesSa} from "./taxes_sa"
import {NewWaterSa} from "./water"
import {CouncilRates} from "./council_rates"
import {PropertyInsurance} from "./property_insurance"

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

        
        this.cost = new Expense("Cost of Ownership",
                                   "The cost refers to all expenses and financing costs " +
                                   "that do not contribute to the equity in the property.");
        this.cost_finance = new Expense("Finance Cost",
                                           "The cost of finance refers to the cost borrowing money " +
                                           "to purchase and the opportunity cost of not investing " +
                                           "any upfront equity (deposit) elsewhere.",
                                       Expense.ONE_YEAR);
        this.cost_expenses = new Expense("Ongoing Expenses",
                                           "The cost of expenses that must be paid for by the property owner.",
                                        Expense.ONE_YEAR);
        this.cash_flow = new Expense("Cash Flow",
                                        "The cash flow that must be provided to maintain ownership of the property.",
                                    Expense.ONE_YEAR);

        if (params.location.country === "AUS") {
            const taxes = new NewTaxesSa(params);
            const water = new NewWaterSa(params);
            const rates = new CouncilRates(params);
            this.cost_expenses.add(taxes);
            this.cost_expenses.add(water);
            this.cost_expenses.add(rates);
        }
        const insurance = new PropertyInsurance(params);
        this.cost_expenses.add(insurance);

        this.loan_payments = new Expense("Loan Payments",
                                           "Payments that must be made to maintain the home loan.");
        
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
