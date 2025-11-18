/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

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

    constructor(params: Params, loan_amount: number) {
        super("Mortgage Interest",
              "The interest payments required to service the property loan.")
        const total_amount = MortgageInterest.calculateTotalInterest(
            loan_amount,
            params.economy.loan_rate,
            params.config.loan_term
        );
        const remainder_amount = MortgageInterest.calculateRemainingInterest(
            loan_amount,
            params.economy.loan_rate,
            params.config.loan_term,
            params.config.hold_term
        );
        this.update_upfront(total_amount, remainder_amount/total_amount);
    }
}

export class MortgagePrinciple extends Expense {
    constructor(params: Params, loan_amount: number) {
        super("Mortgage Principle",
              "The amount of money that has been borrowed and needs to be repaid.");
        // NOTE - this remainder should never include appreciation/deprecation.
        // TODO - should this be calculated based on non linear repayment schedule with interest payed earlier.?
        const remainder_amount = MortgageInterest.calculateRemainingPrincipal(
            loan_amount,
            params.economy.loan_rate,
            params.config.loan_term,
            params.config.hold_term
        );
        this.update_upfront(loan_amount, remainder_amount / loan_amount);
    }
}
