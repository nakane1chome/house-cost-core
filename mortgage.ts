/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import {LoanAmount} from "./loan_amount"
import { Expense,  UpfrontExpense } from "./expense";

export class MortgageInterest extends Expense {

    /**
     * Calculate monthly payment for a mortgage
     * Formula from Wikipedia:
     * P = Li / (1 - e^(-n*ln(1+i)))
     * where:
     * L = amount of loan
     * i = monthly interest rate
     * n = term in months
     * P = monthly payment
     */
    static calculateMonthlyPayment(loan_amount: number, annual_rate_percent: number, term_years: number): number {
        const n = term_years * 12; // term in months
        const i = (annual_rate_percent / 100.0) / 12.0; // monthly interest rate
        return (loan_amount * i) / (1.0 - Math.exp(-n * Math.log(1.0 + i)));
    }

    /**
     * Calculate total interest paid over the life of a mortgage
     */
    static calculateTotalInterest(loan_amount: number, annual_rate_percent: number, term_years: number): number {
        const n = term_years * 12; // term in months
        const payment = MortgageInterest.calculateMonthlyPayment(loan_amount, annual_rate_percent, term_years);
        const total_payment = payment * n;
        const total_interest = total_payment - loan_amount;
        return total_interest;
    }

    /**
     * Calculate remaining principal balance after a given number of years
     * Using the formula: B = L * (1 - e^(-n*ln(1+i))) / (1 - e^(-N*ln(1+i)))
     * where:
     * L = original loan amount
     * i = monthly interest rate
     * n = months remaining (N - months_paid)
     * N = total term in months
     */
    static calculateRemainingPrincipal(loan_amount: number, annual_rate_percent: number, term_years: number, years_paid: number): number {
        const N = term_years * 12; // total term in months
        const months_paid = years_paid > term_years ? term_years*12 : years_paid * 12;
        const months_remaining = N - months_paid;

        if (months_remaining <= 0) return 0;
        if (months_paid <= 0) return loan_amount;

        const i = (annual_rate_percent / 100.0) / 12.0; // monthly interest rate

        // Remaining balance formula
        const remaining_balance = loan_amount *
            (1.0 - Math.exp(-months_remaining * Math.log(1.0 + i))) /
            (1.0 - Math.exp(-N * Math.log(1.0 + i)));

        return remaining_balance;
    }

    /**
     * Calculate interest paid up to a given point in years
     */
    static calculateInterestPaid(loan_amount: number, annual_rate_percent: number, term_years: number, years_paid: number): number {        
        const months_paid = years_paid > term_years ? term_years*12 : years_paid * 12;
        const payment = MortgageInterest.calculateMonthlyPayment(loan_amount, annual_rate_percent, term_years);
        const total_paid = payment * months_paid;
        const principal_paid = loan_amount - MortgageInterest.calculateRemainingPrincipal(loan_amount, annual_rate_percent, term_years, years_paid);
        return total_paid - principal_paid;
    }

    /**
     * Calculate remaining interest to be paid after a given number of years
     */
    static calculateRemainingInterest(loan_amount: number, annual_rate_percent: number, term_years: number, years_paid: number): number {
        const total_interest = MortgageInterest.calculateTotalInterest(loan_amount, annual_rate_percent, term_years);
        const interest_paid = MortgageInterest.calculateInterestPaid(loan_amount, annual_rate_percent, term_years, years_paid);
        return total_interest - interest_paid;
    }

    constructor(params: Params, loan_amount: LoanAmount) {
        super("Mortgage Interest",
              "Interest paid to service the loan during the hold, per the amortisation schedule (front-loaded: early years are mostly interest). " +
              "Interest that would fall due after the sale is never incurred and is not shown.")
        // Only the interest actually paid during the hold is a cost; there is no
        // "remainder" — interest after the sale simply never happens.
        const paid_during_hold = MortgageInterest.calculateInterestPaid(
            loan_amount.upfront_amount,
            params.economy.loan_rate,
            params.config.loan_term,
            params.config.hold_term
        );
        this.link(loan_amount);
        this.update_upfront(paid_during_hold, 0);
    }
}


export class MortgageEquityAtEndOfHoldTerm extends Expense {
    constructor(params: Params, loan_amount: LoanAmount) {
        const remainder_amount = loan_amount.upfront_amount - MortgageInterest.calculateRemainingPrincipal(
            loan_amount.upfront_amount,
            params.economy.loan_rate,
            params.config.loan_term,
            params.config.hold_term
        );
        super(`Mortgage Paid Principal Amount at ${params.config.hold_term} years`,
              `The principal paid off during the ${params.config.hold_term}-year hold (of a ${params.config.loan_term}-year loan), per the amortisation schedule.`);

        // All of this principal is cash paid out during the hold; nothing remains at exit.
        this.update_upfront(remainder_amount, 0);
    }
}

export class MortgagePayoffAtEndOfHoldTerm extends Expense {
    constructor(params: Params, loan_amount: LoanAmount) {
        const remainder_amount = MortgageInterest.calculateRemainingPrincipal(
            loan_amount.upfront_amount,
            params.economy.loan_rate,
            params.config.loan_term,
            params.config.hold_term
        );
        super(`Mortgage Payoff Amount at ${params.config.hold_term} years`,
              `The loan balance still owing at hold-end (${params.config.hold_term} of ${params.config.loan_term} years), repaid from the sale proceeds. Shown as an at-exit amount; not a cost during the hold.`);

        // A balance owed at exit: preserved in full (nothing accrues per period).
        this.update_upfront(remainder_amount, remainder_amount);
    }
}

export class EquityInPropertyAtTerm extends Expense {
    constructor( equity: MortgageEquityAtEndOfHoldTerm, loan_amount: LoanAmount) {
        super("Equity Retained at end of Holding Term",
              "After paying down the Mortgage, how much is retained.");
        this.add(equity);
        this.add(loan_amount.deposit);
        this.sub(loan_amount.transaction_costs);
    }
}

export class MortgagePrincipal extends Expense {
    constructor(params: Params, loan_amount: LoanAmount) {
        super("Mortgage Principal",
              "Principal repaid during the hold, per the amortisation schedule (interest is front-loaded, so this is well below a straight-line share of the loan). " +
              "The balance still owing at hold-end is repaid from the sale proceeds and is shown linked, not summed.");
        const paid = new MortgageEquityAtEndOfHoldTerm(params, loan_amount);
        const payoff = new MortgagePayoffAtEndOfHoldTerm(params, loan_amount);

        this.add(paid);
        this.link(payoff);
        this.link(new EquityInPropertyAtTerm(paid, loan_amount));
    }
}

