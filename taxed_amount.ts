/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params, Purchaser } from "./param";
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

export class TaxedAmountWithDeduction extends Expense {

    constructor(reason: string,
                purchaser: Purchaser, 
                income: Expense, 
                deduction: Expense, 
                split: number) {
        const my_amount = (income.annual() - deduction.annual()) / split;
        super(`Tax on ${reason}`,
              `Tax to be paid ${my_amount}, from incomee of ${income.annual()/split} on net amount after deduction of ${deduction.annual()/split}.`, 
             Expense.ONE_YEAR);
        const amount = TaxBracket.MarginalTax(purchaser.income, my_amount);
        this.update_repeating(amount);
    }
}

export class CGTTaxedAmount extends Expense {

    constructor(params: Params, 
                reason: string,
                purchaser: Purchaser, 
                gain: Expense, 
                split: number) {

        // Holding more than 1 year is discount
        const discount_rate = params.config.hold_term >= 1 ? 0.5 : 1.0;
        // Amount for this purchaser
        const total_gain = gain.accumulated(params.config.hold_term) ;
        const taxable_amount = (total_gain * discount_rate) / split;

        super(`Capital Gains Tax for ${reason}`,
              `Apply a discount rate of ${discount_rate}, on a gain of ${total_gain} (including depreication), for a amount ${taxable_amount} that was split betwee ${split}`,
              Expense.ONE_YEAR);

        if (taxable_amount > 0) {
            // Tax on the discounted capital gain.
            const tax_amount = TaxBracket.MarginalTax(purchaser.income, taxable_amount);
            // Apply the amount as an exit amount
            this.update_upfront(0, - tax_amount);
            this.update_repeating(0);
        } else {
            this.update_upfront(0, 0);
            this.update_repeating(0);
        }

    }


}
