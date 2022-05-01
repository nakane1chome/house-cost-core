import { Params } from "./param";
import { ExpenseTerm } from "./expense";

export class MortgagePrinciple extends ExpenseTerm {
    constructor(params: Params, loan_amount: number) {
        super(params.config.term*12);
        this.update(loan_amount);
    }
}

