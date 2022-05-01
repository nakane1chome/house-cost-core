import { Purchaser } from "./param";
import { ExpenseAnnual } from "./expense";
import { TaxBracket } from "./marginal_tax";

export class TaxedAmount extends ExpenseAnnual {

    constructor(purchaser: Purchaser, 
                deposit_interest: ExpenseAnnual, 
                split: number) {
        super();
        const my_amount = deposit_interest.annual() / split;
        const amount = TaxBracket.MarginalTax(purchaser.income, my_amount);
        this.update(amount);
    }
}
