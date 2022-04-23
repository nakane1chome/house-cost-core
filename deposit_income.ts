import { ParamView, ParamRow, ParamTable } from "./param";
import { TaxedAmount } from "./taxed_amount";
import { SavingsInterest } from "./savings_interest";
import { ExpenseAnnual } from "./expense_annual";

export class DepositIncome extends ExpenseAnnual {

    private _a : number;

    private income_cnt : ParamView<number>;
    public savings_interest : SavingsInterest;
    public tax_income1 : TaxedAmount;
    public tax_income2 : TaxedAmount;

    constructor(t: ParamTable) {
        super(t)
        this._a = 0;
        this.income_cnt = new ParamView<number>(this, t, "purchaser.count");
        this.savings_interest = new SavingsInterest(t);
        this.tax_income1 = new TaxedAmount(t, 1, "purchaser.income1", this.savings_interest);
        this.tax_income2 = new TaxedAmount(t, 2, "purchaser.income2", this.savings_interest);

    }

    is_known(): boolean {
        return true;
    }
  
    update(p: ParamRow): void  {
        super.update(p);
        this.savings_interest.update(p);
        this.tax_income1.update(p);
        this.tax_income2.update(p);
        this._a = this.savings_interest.annual() - this.tax_income1.annual() - this.tax_income2.annual();
    }
    annual(): number {return this._a;}

}
