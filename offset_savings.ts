/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { LoanAmount } from "./loan_amount";
import { MortgageInterest } from "./mortgage";

export class OffsetSavings extends Expense {

    constructor(params: Params, loan_amount: LoanAmount) {
        super("Offset Savings",
              "Interest savings from holding funds in a mortgage offset account.");

        const starting = params.offset.starting_balance;
        const monthly = params.offset.monthly_contribution;
        if (starting <= 0 && monthly <= 0) {
            this.is_known = true;
            return;
        }

        const baseline_total = MortgageInterest.calculateTotalInterest(
            loan_amount.upfront_amount,
            params.economy.loan_rate,
            params.config.loan_term);
        const baseline_at_hold = MortgageInterest.calculateInterestPaid(
            loan_amount.upfront_amount,
            params.economy.loan_rate,
            params.config.loan_term,
            params.config.hold_term);

        const sim = OffsetSavings.simulate(
            loan_amount.upfront_amount,
            params.economy.loan_rate,
            params.config.loan_term,
            params.config.hold_term,
            starting,
            monthly);

        const total_saving = baseline_total - sim.total_interest;
        const saving_at_hold = baseline_at_hold - sim.interest_at_hold;
        const exit_remainder = total_saving - saving_at_hold;

        this.update_upfront(total_saving, exit_remainder);
    }

    private static simulate(
        loan: number, rate_pct: number, term_yrs: number, hold_yrs: number,
        starting_offset: number, monthly_contribution: number,
    ): { total_interest: number; interest_at_hold: number } {
        const monthly_rate = (rate_pct / 100) / 12;
        const total_months = term_yrs * 12;
        const hold_months = hold_yrs * 12;
        const payment = MortgageInterest.calculateMonthlyPayment(loan, rate_pct, term_yrs);

        let principal = loan;
        let offset = starting_offset;
        let total_interest = 0;
        let interest_at_hold = 0;
        let captured_at_hold = false;

        for (let m = 1; m <= total_months && principal > 0; m++) {
            offset += monthly_contribution;
            const effective_principal = Math.max(principal - offset, 0);
            const interest_this_month = effective_principal * monthly_rate;
            const principal_payment = Math.min(payment - interest_this_month, principal);
            principal -= principal_payment;
            total_interest += interest_this_month;
            if (m === hold_months) {
                interest_at_hold = total_interest;
                captured_at_hold = true;
            }
        }
        if (!captured_at_hold) {
            // Loan paid off before hold_term — interest_at_hold equals total
            interest_at_hold = total_interest;
        }
        return { total_interest, interest_at_hold };
    }
}
