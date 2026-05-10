/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — Investment Summary

   Headline metrics derived from the LoanAmount / CostOfOwnership /
   InvestmentReturn aggregators over a hold period. Includes both additive
   cross-branch sums (annual_net_cf, total_return) and non-additive
   transformations (roi, cagr) that don't fit the Expense add/sub model.

   Non-Expense plain class — exposes pre-computed numeric fields rather
   than participating in the Expense composition tree. Mirrors the shape
   of CostOfOwnership which is also a plain class holding Expense
   sub-trees.
*/

import { LoanAmount } from "./loan_amount";
import { CostOfOwnership } from "./cost_of_ownership";
import { InvestmentReturn } from "./investment_return";

export class InvestmentSummary {

    // Hold-term cumulative (read directly from library aggregators)
    public total_invested: number;        // deposit + transaction costs (out-of-pocket equity)
    public total_rental: number;           // cumulative net rental income over hold
    public total_cash_outflow: number;     // cumulative cash out over hold
    public total_tax_benefit: number;      // cumulative tax benefit over hold
    public equity_at_exit: number;         // realised equity return at hold-end

    // Annualised (cumulative / hold_term)
    public annual_rental: number;
    public annual_cash_outflow: number;
    public annual_tax_benefit: number;
    public annual_net_cf: number;          // = annual_rental - annual_cash_outflow + annual_tax_benefit

    // Total return + ratios
    public total_return: number;           // = equity_at_exit + (annual_net_cf * hold_term)
    public roi: number;                    // = total_return / total_invested
    public cagr: number;                   // = (1 + roi)^(1/hold_term) - 1   (NaN if roi <= -1)

    // Hold term echoed for downstream period conversions
    public hold_term: number;

    constructor(loan: LoanAmount, cost: CostOfOwnership, ret: InvestmentReturn, hold_term: number) {
        this.hold_term = hold_term;

        this.total_invested = loan.deposit.upfront_amount + loan.transaction_costs.upfront_amount;
        this.total_rental = ret.investment_income.rental_income.accumulated(hold_term);
        this.total_cash_outflow = cost.cash_flow.accumulated(hold_term);
        this.total_tax_benefit = ret.investment_income.tax_benefits.accumulated(hold_term);
        this.equity_at_exit = ret.equity_return.accumulated(hold_term);

        this.annual_rental = hold_term > 0 ? this.total_rental / hold_term : 0;
        this.annual_cash_outflow = hold_term > 0 ? this.total_cash_outflow / hold_term : 0;
        this.annual_tax_benefit = hold_term > 0 ? this.total_tax_benefit / hold_term : 0;
        this.annual_net_cf = this.annual_rental - this.annual_cash_outflow + this.annual_tax_benefit;

        this.total_return = this.equity_at_exit + (this.annual_net_cf * hold_term);
        this.roi = this.total_invested > 0 ? this.total_return / this.total_invested : 0;
        this.cagr = (this.roi > -1 && hold_term > 0)
            ? Math.pow(1 + this.roi, 1 / hold_term) - 1
            : NaN;
    }
}
