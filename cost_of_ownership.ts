import { ParamRow, ParamTable, ParamView } from "./param";

import {ExpenseSet} from "./expense_set";
import {MortgageInterest} from "./mortgage_interest"
import {MortgagePrinciple} from "./mortgage_principle"
import {DepositIncome} from "./deposit_income"
import {NewTaxesSa} from "./taxes_sa"
import {NewWaterSa} from "./water"
import {CouncilRates} from "./council_rates"
import {PropertyInsurance} from "./property_insurance"
import { Expense } from "./expense";


export class CostOfOwnership {

    // Cost of ownwer ship
    public cost : ExpenseSet;
    // Cash flow required to own (cost + principle)
    public cash_flow : ExpenseSet;
    // Payments needed to service loan
    public loan_payments : ExpenseSet;
    
    public loan_interest : MortgageInterest;
    public loan_principle : MortgagePrinciple;
    public deposit_income : DepositIncome;

    public taxes : Expense;
    public water : Expense;
    public rates : CouncilRates;
    public insurance : PropertyInsurance;

    constructor(t: ParamTable) {

        // Cost of ownwer ship
        this.cost = new ExpenseSet(t);
        // Cash flow required to own (cost + principle)
        this.cash_flow = new ExpenseSet(t);
        // Payments needed to service loan
        this.loan_payments = new ExpenseSet(t);
        
        this.loan_interest = new MortgageInterest(t);
        this.loan_principle = new MortgagePrinciple(t);
        this.deposit_income = new DepositIncome(t);
        
        this.taxes = NewTaxesSa(t);
        this.water = NewWaterSa(t);
        this.rates = new CouncilRates(t);
        this.insurance = new PropertyInsurance(t);
        
        this.cost.add(this.loan_interest);
        this.cost.add(this.deposit_income)
        this.cost.add(this.taxes);
        this.cost.add(this.water);
        this.cost.add(this.rates);
        this.cost.add(this.insurance);

        this.cash_flow.add(this.loan_interest);
        this.cash_flow.add(this.loan_principle);
        this.cash_flow.add(this.taxes);
        this.cash_flow.add(this.water);
        this.cash_flow.add(this.rates);
        this.cash_flow.add(this.insurance);

        this.loan_payments.add(this.loan_interest);
        this.loan_payments.add(this.loan_principle);
    }

    update(p: ParamRow): void {
        this.cost.update(p);
        this.cash_flow.update(p);
        this.loan_payments.update(p);
    }

}
