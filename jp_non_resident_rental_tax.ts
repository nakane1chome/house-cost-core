/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — JP source income tax on rental for non-residents

   Applies to JP property (location.country === "JPN") held by non-JP-resident
   investors. JP non-resident income tax uses the national progressive brackets
   from tax_config.JAPAN_TAX (5%–45%), plus a 2.1% reconstruction surcharge
   (復興特別所得税) computed on the income-tax amount.

   The 20.42% non-resident withholding on JP-corporate-tenant rent is the
   in-year cash-flow mechanic; this class models the final liability on
   filing (確定申告), which is what matters for hold-aggregate cost-engine
   output. The withholding is creditable against final tax — net effect is
   captured.

   JP-allowable deductions (depreciation, JP property tax, mgmt fees) reduce
   the JP-side taxable income.
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { TaxBracket } from "./marginal_tax";

const RECONSTRUCTION_SURCHARGE = 1.021;   // 2.1% on top of income-tax amount

export class JpNonResidentRentalTax extends Expense {
    constructor(params: Params,
                gross_rent: Expense,
                fees: Expense,
                depreciation: Expense,
                jp_property_tax: Expense,
                split: number) {
        super("JP Non-Resident Rental Tax",
              "JP source income tax on rental income, paid in Japan. Progressive brackets + 2.1% reconstruction surcharge.",
              Expense.ONE_YEAR);

        if (params.config.owner_occupier || params.location.country !== "JPN") {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        let total_tax = 0;
        for (const purchaser of params.purchasers) {
            if (!purchaser.enable) continue;
            const tax_residence = purchaser.tax_residence || params.location.country;
            // Skip JP-resident purchasers — they go through TaxOnRentalIncome (which currently uses static AU
            // config; a future change can wire JP MTR for JP-resident purchasers via MarginalTaxFor("JPN", ...)).
            if (tax_residence === "JPN") continue;

            // JP-side net rental: gross − JP-allowable deductions (fees + depreciation + JP property tax)
            const jp_taxable = (gross_rent.annual() - fees.annual() - depreciation.annual() - jp_property_tax.annual()) / split;
            if (jp_taxable <= 0) continue;

            const tax_result = TaxBracket.MarginalTaxFor("JPN", 0, jp_taxable);
            total_tax += tax_result.amount * RECONSTRUCTION_SURCHARGE;
        }

        this.is_known = true;
        this.update_repeating(total_tax);
    }
}
