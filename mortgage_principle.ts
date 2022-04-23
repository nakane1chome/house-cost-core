import { ParamTable, ParamView } from "./param";
import { ExpenseTerm } from "./expense_term";
import { LoanAmount } from "./loan_amount";

export class MortgagePrinciple extends ExpenseTerm {

    public term_years: ParamView<number>;
    public loan: LoanAmount;

    constructor(t: ParamTable) {
        super(t)
        this.loan = new LoanAmount(t);
        this.term_years = new ParamView<number>(this, t, "config.term");
    }

    is_known(): boolean {
        return true;
    }

    total(): number {return this.loan.get();}

    term(): number {return this.term_years.get()*12;}

}

