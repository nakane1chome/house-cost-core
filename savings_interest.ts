import { Params } from "./param";
import { ExpenseAnnual } from "./expense";

export class SavingsInterest extends ExpenseAnnual {

    constructor(params: Params) {
        super();
        // from  http://math.ucsd.edu/~wgarner/math4c/textbook/chapter4/compoundinterest.htm
        // A = P ( 1 + r/n) ^ nt
        // P = Princliple
        // r = annual interest
        // n = compounded times per year
        // t = term in years
        const r = (params.economy.save_rate / 100.0);
        const t = 1;
        const n = 12;
        const P = params.config.deposit;
        const A = P * Math.pow((1 + r/n) , n*t) ;
        const amount = A - P;
        this.update(amount);
    }
}
