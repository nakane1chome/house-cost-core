/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

export class SavingsInterest extends Expense {

    constructor(params: Params) {
        super("Savings Interest",
              "The expected return on investing a sum over a period for a given interest rate. " +
            "The interest compounds over the term of the loan. " +
            "Only the interest from one year is calculated.", Expense.ONE_YEAR);
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
        this.update_repeating(amount);
    }
}
