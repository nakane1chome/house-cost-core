import { Params } from "./param";
import { TaxedAmount } from "./taxed_amount";
import { SavingsInterest } from "./savings_interest";
import { Expense } from "./expense";

export class DepositIncome extends Expense {

    public savings_interest : SavingsInterest;
    public taxed_amounts : Array<TaxedAmount>;

    constructor(params: Params) {
        super("Deposit Income",
             "The income that could have been earned by equity invested in the house as a deposit. " +
            "Could be interest or other returns.",
             Expense.ONE_YEAR)
        let amount = 0;
        const  purchaser_cnt = params.purchasers.length;
        this.savings_interest = new SavingsInterest(params);
        this.taxed_amounts = new Array<TaxedAmount>();
        for (let i=0; i < purchaser_cnt; i++) {
            const taxed_amount = new TaxedAmount(params.purchasers[i], 
                                this.savings_interest, purchaser_cnt);
            this.taxed_amounts.push(taxed_amount);
            amount -= taxed_amount.annual();
        }
        this.update_repeating(amount);
    }
}
