/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

export class SavingsInterest extends Expense {

    constructor(params: Params) {
        super("Downpayment (Deposit) Sacrificed Interest",
              "The interest the deposit would have earned if invested instead, compounding monthly. " +
            "The hold view counts the interest forgone during the hold; the loan-term view counts it over the whole loan term.",
              Expense.ONE_YEAR);
        // from  http://math.ucsd.edu/~wgarner/math4c/textbook/chapter4/compoundinterest.htm
        // A = P ( 1 + r/n) ^ nt
        // P = Principal
        // r = annual interest
        // n = compounded times per year
        // t = term in years
        const r = (params.economy.save_rate / 100.0);
        const n = 12;
        const P = params.config.deposit;
        const interest = (t: number) => P * Math.pow((1 + r/n), n*t) - P;
        // Full-term + exit-remainder convention (as for OffsetSavings): the upfront amount
        // is the interest forgone over the loan term; the part after the hold is the exit
        // remainder, so the hold view (upfront − remainder) is the hold's interest.
        const over_hold = interest(params.config.hold_term);
        const over_loan = interest(Math.max(params.config.loan_term, params.config.hold_term));
        this.update_upfront(over_loan, over_loan - over_hold);
    }
}
