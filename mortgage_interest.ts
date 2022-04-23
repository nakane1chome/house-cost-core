import { ParamView, ParamRow, ParamTable } from "./param";
import { ExpenseTerm    } from "./expense_term";
import { LoanAmount } from "./loan_amount";


export class  MortgageInterest extends ExpenseTerm {

    private _total:number;
    private loan:LoanAmount;
    private rate_percent: ParamView<number>;
    private term_years: ParamView<number>;

    constructor(t: ParamTable) {
        super(t)
        this._total =0;
        this.loan = new LoanAmount(t);
        this.rate_percent = new ParamView<number>(this, t, "economy.loan_rate");
        this.term_years  = new ParamView<number>(this, t, "config.term");
    }

    is_known(): boolean {
        return true;
    }
  
    update(p: ParamRow): void {
        super.update(p);
        // from wikipedia
        // P = Li / (1 - e -nln(1+i))
        // L = amount of loan
        // i = monthly interest
        // n = term in months
        const i = (this.rate_percent.get() / 100.0) / 12.0;
        const n = this.term_years.get()*12;
        const c = this.loan.get();
        const payment = (c * i) / (1.0 - Math.exp(-n * Math.log(1.0+i)));
        const total_payment = payment * n;
        this._total =  total_payment - c;
    }
    total(): number {return this._total;}
    term(): number {return this.term_years.get()*12;}
}
