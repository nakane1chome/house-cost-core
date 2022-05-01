import { Params } from "./param";
import { ExpenseTerm } from "./expense";

export class  MortgageInterest extends ExpenseTerm {

    constructor(params: Params, loan_amount: number) {
        const n = params.config.term*12;
        super(n)
        // from wikipedia
        // P = Li / (1 - e -nln(1+i))
        // L = amount of loan
        // i = monthly interest
        // n = term in months
        const i = (params.economy.loan_rate / 100.0) / 12.0;
        const c = loan_amount;
        const payment = (c * i) / (1.0 - Math.exp(-n * Math.log(1.0+i)));
        const total_payment = payment * n;
        const total = total_payment - c;
        this.update(total);
    }
}
