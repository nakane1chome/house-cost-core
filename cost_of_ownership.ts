import {Params} from "./param";
import {ExpenseSet} from "./expense";
import {MortgageInterest} from "./mortgage_interest"
import {MortgagePrinciple} from "./mortgage_principle"
import {DepositIncome} from "./deposit_income"
import {NewTaxesSa} from "./taxes_sa"
import {NewWaterSa} from "./water"
import {CouncilRates} from "./council_rates"
import {PropertyInsurance} from "./property_insurance"
import {ExpenseAnnual} from "./expense";

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

    public taxes : ExpenseAnnual;
    public water : ExpenseAnnual;
    public rates : CouncilRates;
    public insurance : PropertyInsurance;

    constructor(params: Params, loan_amount: number) {

        this.loan_interest = new MortgageInterest(params, loan_amount);
        this.loan_principle = new MortgagePrinciple(params, loan_amount);
        this.deposit_income = new DepositIncome(params);
        
        this.taxes = new NewTaxesSa(params);
        this.water = new NewWaterSa(params);
        this.rates = new CouncilRates(params);
        this.insurance = new PropertyInsurance(params);

        this.cost = new ExpenseSet();
        this.cash_flow = new ExpenseSet();
        this.loan_payments = new ExpenseSet();
        
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

}
