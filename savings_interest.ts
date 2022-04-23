import { ParamView, ParamRow, ParamTable } from "./param";
import { ExpenseAnnual } from "./expense_annual";

export class SavingsInterest extends ExpenseAnnual {

    private _a: number;

    private deposit : ParamView<number>;
    private rate_percent : ParamView<number>;
    private term_years  : ParamView<number>;


    constructor(t: ParamTable) {
        super(t)
        this.deposit = new ParamView<number>(this,t, "config.deposit");
        this.rate_percent = new ParamView<number>(this,t, "economy.save_rate");
        this.term_years  = new ParamView<number>(this,t, "config.term");
        this._a = 0;
    }

    is_known(): boolean {
        return true;
    }

    update(p: ParamRow): void {
        super.update(p);
        // from  http://math.ucsd.edu/~wgarner/math4c/textbook/chapter4/compoundinterest.htm
        // A = P ( 1 + r/n) ^ nt
        // P = Princliple
        // r = annual interest
        // n = compounded times per year
        // t = term in years
        const r = (this.rate_percent.get() / 100.0);
        const t = 1;
        const n = 12;
        const P = this.deposit.get();
        const A = P * Math.pow((1 + r/n) , n*t) ;
        this._a = A - P;
    }
    annual(): number  {return this._a;}

}
