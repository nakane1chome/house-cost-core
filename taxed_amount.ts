/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Purchaser } from "./param";
import { Expense } from "./expense";
import { TaxBracket } from "./marginal_tax";

export class TaxedAmount extends Expense {

    constructor(purchaser: Purchaser, 
                deposit_interest: Expense, 
                split: number) {
        super("Tax on Income",
              "The tax that would have been paid on interest or other returns made on the deposit, " +
            "if it had not been used as equity for the property purchase.", 
             Expense.ONE_YEAR);
        const my_amount = deposit_interest.annual() / split;
        const amount = TaxBracket.MarginalTax(purchaser.income, my_amount);
        this.update_repeating(amount);
    }
}
