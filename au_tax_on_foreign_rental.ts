/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — AU income tax on foreign (JP) rental for AU-resident investors

   Applies when the property is outside Australia (e.g. location.country === "JPN") AND
   at least one enabled purchaser is AU-tax-resident. AU residents are taxable on worldwide
   income; the foreign rental gross is assessable in AU at the investor's MTR with AU-allowable
   deductions (depreciation, property expenses, mortgage interest if AU-loan-funded).

   This is the GROSS AU side. The Foreign Income Tax Offset (FITO) is computed separately
   and added back to NetRentalIncome.

   Caveat: AU passive foreign-loss quarantining is NOT modelled — a JP rental net loss is
   treated here as offsetting AU MTR-taxed domestic income (over-states tax benefit when
   negatively geared). See docs/jp_taxes.md.
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { TaxBracket } from "./marginal_tax";

export class AuTaxOnForeignRentalIncome extends Expense {
    constructor(params: Params,
                gross_rent: Expense,
                fees: Expense,
                deductible_expenses: Expense,
                depreciation: Expense,
                split: number) {
        super("AU Tax on Foreign Rental",
              "AU income tax on JP-source rental for AU residents (gross AU side, before FITO).",
              Expense.ONE_YEAR);

        if (params.config.owner_occupier) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        // Only fires when property is foreign (not AU)
        if (params.location.country === "AUS") {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        let total_tax = 0;
        for (const purchaser of params.purchasers) {
            if (!purchaser.enable) continue;
            const tax_residence = purchaser.tax_residence || params.location.country;
            if (tax_residence !== "AUS") continue;

            // AU-assessable foreign rental income: gross − AU-allowable deductions
            const au_taxable = (gross_rent.annual() - fees.annual() - deductible_expenses.annual() - depreciation.annual()) / split;
            if (au_taxable <= 0) continue;

            const tax_result = TaxBracket.MarginalTaxFor("AUS", purchaser.income, au_taxable);
            total_tax += tax_result.amount;
        }

        this.is_known = true;
        this.update_repeating(total_tax);
    }
}
