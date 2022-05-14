import { Params } from "./param";
import { Expense } from "./expense";

export class MortgagePrinciple extends Expense {
    constructor(params: Params, loan_amount: number) {
        super("Mortgage Principle",
              "The amount of money that has been borrowed and needs to be repaid.");
        this.update_upfront(loan_amount);
    }
}

