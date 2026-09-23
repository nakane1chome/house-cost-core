/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — Gearing

   Gearing = Net Operating Income (NOI) − year-1 mortgage interest. Positive:
   rent covers interest and outgoings without relying on the tax deduction;
   negative: it doesn't. Pre-tax, pre-principal, pre-depreciation, and
   deliberately evaluated at year 1 (on the amortisation schedule, not the
   hold-average interest figure used elsewhere in this model) because
   interest is front-loaded on a P&I loan and this margin only improves in
   later years. See docs/options/147_pirie_st.md § 5.3.1 in the parent repo
   and docs/glossary.md "Negative / positive gearing".
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { GrossRentalIncome, FeeOnRentalIncome } from "./investment_return";
import { MortgageInterest } from "./mortgage";

export class NetOperatingIncome extends Expense {
    public rental_income: GrossRentalIncome;
    public rental_fee: FeeOnRentalIncome;
    public ongoing_expenses: Expense;

    constructor(rental_income: GrossRentalIncome, rental_fee: FeeOnRentalIncome, ongoing_expenses: Expense) {
        super("Net Operating Income (NOI)",
              "Gross rent less property management fee and ongoing expenses (net of tenant recovery), before financing costs.",
              Expense.ONE_YEAR);
        this.rental_income = rental_income;
        this.rental_fee = rental_fee;
        this.ongoing_expenses = ongoing_expenses;
        this.add(rental_income);
        this.sub(rental_fee);
        this.sub(ongoing_expenses);
    }
}

export class Year1MortgageInterest extends Expense {
    constructor(params: Params, loan_amount: number) {
        super("Year 1 Mortgage Interest",
              "Interest paid in the first year on the amortisation schedule — not the hold-average used elsewhere in this report, since interest is front-loaded on a P&I loan.",
              Expense.ONE_YEAR);
        const amount = MortgageInterest.calculateInterestPaid(loan_amount, params.economy.loan_rate, params.config.loan_term, 1);
        this.is_known = true;
        this.update_repeating(amount);
    }
}

export class Gearing extends Expense {
    public noi: NetOperatingIncome;
    public year1_interest: Year1MortgageInterest;

    constructor(params: Params, loan_amount: number, rental_income: GrossRentalIncome, rental_fee: FeeOnRentalIncome, ongoing_expenses: Expense) {
        super("Gearing (Year 1)",
              "Net operating income less year-1 mortgage interest. Positive: rent covers interest and outgoings without relying on the tax deduction. " +
              "Pre-tax, pre-principal, pre-depreciation — evaluated at year 1 because interest is front-loaded on a P&I loan and this margin improves every subsequent year.",
              Expense.ONE_YEAR);
        this.noi = new NetOperatingIncome(rental_income, rental_fee, ongoing_expenses);
        this.year1_interest = new Year1MortgageInterest(params, loan_amount);
        this.add(this.noi);
        this.sub(this.year1_interest);
    }
}
