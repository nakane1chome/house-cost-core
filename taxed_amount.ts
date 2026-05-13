/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params, Purchaser } from "./param";
import { Expense } from "./expense";
import { TaxBracket } from "./marginal_tax";

export class TaxedAmount extends Expense {

    constructor(reason: string,
                purchaser: Purchaser, 
                deposit_interest: Expense, 
                split: number) {
        const my_amount = deposit_interest.annual() / split;
        const tax_result = TaxBracket.MarginalTax(purchaser.income, my_amount);
        super(`Tax on ${reason}`,
              `The tax that would have been paid on interest (${my_amount}) or other returns made on the deposit, ` +
            "if it had not been used as equity for the property purchase.",
             Expense.ONE_YEAR);
        this.update_repeating(tax_result.amount);
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
              `Tax to be paid ${my_amount}, from income of ${income.annual()/split} on net amount after deduction of ${deduction.annual()/split}.`,
             Expense.ONE_YEAR);
        const tax_result = TaxBracket.MarginalTax(purchaser.income, my_amount);
        this.update_repeating(tax_result.amount);
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

        if (taxable_amount > 0) {
            const tax_result = TaxBracket.MarginalTax(purchaser.income, taxable_amount);
            
            super(`Capital Gains Tax for ${reason}`,
                  `Apply a discount of ${discount_rate*100}%, on a gain of ${total_gain}, split between ${split} purchaser(s), for a final amount of ${taxable_amount}: ${tax_result.reason}`,
                  Expense.ONE_YEAR);
            // Tax on the discounted capital gain.
            // Apply the amount as an exit amount
            this.update_upfront(0, - tax_result.amount);
            this.update_repeating(0);


        } else {
            super(`Capital Gains Tax for ${reason}`,
                  `No income to be taxed.`,
                  Expense.ONE_YEAR);
            this.update_upfront(0, 0);
            this.update_repeating(0);

        }

    }


}
