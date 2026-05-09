/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

export class SavingsInterest extends Expense {

    constructor(params: Params) {
        super("Downpayment (Deposit) Sacrificed Interest",
              "The expected return on investing a sum over the hold term for a given interest rate. " +
            "The interest compounds over the hold term. " +
            "Only the interest from one year is calculated.", Expense.ONE_YEAR);
        // from  http://math.ucsd.edu/~wgarner/math4c/textbook/chapter4/compoundinterest.htm
        // A = P ( 1 + r/n) ^ nt
        // P = Principal
        // r = annual interest
        // n = compounded times per year
        // t = term in years
        const r = (params.economy.save_rate / 100.0);
        const t = params.config.hold_term;
        const n = 12;
        const P = params.config.deposit;
        const A = P * Math.pow((1 + r/n) , n*t) ;
        const amount = A - P;
        this.update_repeating(amount/t);
        //this.update_upfront(amount, 0);
    }
}
