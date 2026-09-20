/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — AU income tax on foreign (JP) rental for AU-resident investors

   Applies when the property is outside Australia (e.g. location.country === "JPN") AND
   at least one enabled purchaser is AU-tax-resident. AU residents are taxable on
   worldwide income, so the foreign rent is assessable at the investor's MTR.

   Structure mirrors the domestic path (TaxOnRentalIncome + GrossTaxBenefits):
   - this node taxes GROSS rent less management fees;
   - the deductions (ongoing expenses, mortgage interest, depreciation) are
     credited ONCE, in GrossTaxBenefits, at the same AU MTR.
   The net of the two is MTR × (gross − fees − outgoings − interest − depreciation),
   which goes negative when the property is negatively geared — correct: Australia
   abolished the quarantining of foreign rental losses from 1 July 2008, so a JP
   rental loss offsets AU salary income like a domestic one.

   net_tax_cap is the AU tax attributable to the *net* foreign income (floored at
   zero). It is the ceiling for the Foreign Income Tax Offset on the rental stream —
   FITO cannot exceed the AU tax actually payable on the foreign income.
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { TaxBracket } from "./marginal_tax";

export class AuTaxOnForeignRentalIncome extends Expense {
    /** AU tax on the net foreign rental income (after AU-allowable deductions), ≥ 0. Ceiling for FITO. */
    public net_tax_cap = 0;

    constructor(params: Params,
                gross_rent: Expense,
                fees: Expense,
                cost_expenses: Expense,
                loan_interest: Expense,
                depreciation: Expense,
                split: number) {
        super("AU Tax on Foreign Rental",
              "AU income tax on JP-source rental for AU residents, on gross rent less management fees. " +
              "Deductions (outgoings, interest, depreciation) are credited once in Gross Tax Benefits; FITO reduces the net.",
              Expense.ONE_YEAR);

        if (params.config.owner_occupier || params.location.country === "AUS") {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        const hold = params.config.hold_term;
        const gross_less_fees = gross_rent.annual() - fees.annual();
        const deductions = cost_expenses.annual()
            + loan_interest.periodic(hold, Expense.ONE_YEAR)
            + depreciation.periodic(hold, Expense.ONE_YEAR);

        let total_tax = 0;
        let total_cap = 0;
        for (const purchaser of params.purchasers) {
            if (!purchaser.enable) continue;
            const tax_residence = purchaser.tax_residence || params.location.country;
            if (tax_residence !== "AUS") continue;

            const my_gross = gross_less_fees / split;
            if (my_gross > 0) {
                total_tax += TaxBracket.MarginalTaxFor("AUS", purchaser.income, my_gross).amount;
            }
            const my_net = (gross_less_fees - deductions) / split;
            if (my_net > 0) {
                total_cap += TaxBracket.MarginalTaxFor("AUS", purchaser.income, my_net).amount;
            }
        }
        this.net_tax_cap = total_cap;
        this.is_known = true;
        this.update_repeating(total_tax);
    }
}
