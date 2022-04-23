import { ParamView, ParamRow, ParamTable } from "./param";
import { ExpenseAnnual } from "./expense_annual";
import { TaxBracket } from "./marginal_tax";

export class TaxedAmount extends ExpenseAnnual {

    private _a: number;
    private income_cnt: ParamView<number>;
    private income: ParamView<number>;
    private deposit_interest: ExpenseAnnual;
    private instance: any;

    constructor(t: ParamTable, instance: any, base_income_param_name: string, deposit_interest: ExpenseAnnual) {
        super(t)
        this.instance = instance;
        this.deposit_interest = deposit_interest;
        this.income = new ParamView<number>(this, t, base_income_param_name);
        this.income_cnt = new ParamView<number>(this, t, "purchaser.count");
        this._a = 0;        
    }

    is_known(): boolean {
        return this.instance  <= this.income_cnt.get();
    }
  
    update(p: ParamRow) : void {
        super.update(p);
        if (this.instance  <= this.income_cnt.get()) {
            this.deposit_interest.update(p);
            const my_amount = this.deposit_interest.annual() / this.income_cnt.get();
            this._a = TaxBracket.MarginalTax(this.income.get(), my_amount);
        } else {
            this._a = 0;
        }
    }
    annual(): number  {return this._a;}

}
