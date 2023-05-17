/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { TaxedAmount } from "./taxed_amount";
import { SavingsInterest } from "./savings_interest";
import { Expense } from "./expense";

export class DepositIncome extends Expense {

    public savings_interest : SavingsInterest;

    constructor(params: Params) {
        super("Lost Deposit Income",
             "The income that could have been earned by equity invested in the house as a deposit. " +
            "Could be interest or other returns.",
             Expense.ONE_YEAR)
        const  purchaser_cnt = params.purchasers.length;
        let enabled_cnt = 0;
        this.savings_interest = new SavingsInterest(params);
        this.add(this.savings_interest);
        for (let i=0; i < purchaser_cnt; i++) {
            if (params.purchasers[i].enable) {
                enabled_cnt++;
            }
        }
        for (let i=0; i < purchaser_cnt; i++) {
            if (params.purchasers[i].enable) {
                const taxed_amount = new TaxedAmount(params.purchasers[i], 
                                                     this.savings_interest,enabled_cnt);
                this.sub(taxed_amount);
            }
        }
    }
}
