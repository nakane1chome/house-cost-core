/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — JP source income tax on rental for non-residents

   Applies to JP property (location.country === "JPN") held by non-JP-resident
   investors. JP non-resident income tax uses the national progressive brackets
   from tax_config.JAPAN_TAX (5%–45%), plus a 2.1% reconstruction surcharge
   (復興特別所得税) computed on the income-tax amount. Non-residents pay no
   inhabitant tax on this income.

   The 20.42% non-resident withholding on JP-corporate-tenant rent is the
   in-year cash-flow mechanic; this class models the final liability on
   filing (確定申告), which is what matters for hold-aggregate cost-engine
   output. The withholding is creditable against final tax — net effect is
   captured.

   JP-allowable deductions (必要経費) reduce the JP-side taxable income:
   management fees, all ongoing outgoings (固定資産税, 都市計画税, insurance,
   管理費/修繕積立金), mortgage interest, and depreciation.
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { TaxBracket } from "./marginal_tax";

const RECONSTRUCTION_SURCHARGE = 1.021;   // 2.1% on top of income-tax amount

export class JpNonResidentRentalTax extends Expense {
    constructor(params: Params,
                gross_rent: Expense,
                fees: Expense,
                cost_expenses: Expense,
                loan_interest: Expense,
                depreciation: Expense,
                split: number) {
        super("JP Non-Resident Rental Tax",
              "JP source income tax on rental income, paid in Japan. Progressive brackets + 2.1% reconstruction surcharge, " +
              "after 必要経費 (fees, outgoings, interest, depreciation).",
              Expense.ONE_YEAR);

        if (params.config.owner_occupier || params.location.country !== "JPN") {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        const hold = params.config.hold_term;
        const net = gross_rent.annual() - fees.annual() - cost_expenses.annual()
            - loan_interest.periodic(hold, Expense.ONE_YEAR)
            - depreciation.periodic(hold, Expense.ONE_YEAR);

        let total_tax = 0;
        for (const purchaser of params.purchasers) {
            if (!purchaser.enable) continue;
            const tax_residence = purchaser.tax_residence || params.location.country;
            // JP-resident purchasers are taxed through the domestic path (TaxOnRentalIncome).
            if (tax_residence === "JPN") continue;

            const jp_taxable = net / split;
            if (jp_taxable <= 0) continue;
            // Non-resident: JP-source income is the only income in the JP return → base income 0.
            const tax_result = TaxBracket.MarginalTaxFor("JPN", 0, jp_taxable);
            total_tax += tax_result.amount * RECONSTRUCTION_SURCHARGE;
        }
        this.is_known = true;
        this.update_repeating(total_tax);
    }
}
