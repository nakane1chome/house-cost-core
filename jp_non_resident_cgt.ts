/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — JP source CGT on disposal for non-residents

   AU tax residents disposing of JP property are non-residents for JP tax purposes.
   JP-source capital gain is taxed at:
     - 15% national income tax
     - + 2.1% reconstruction surcharge on the tax amount
     = 15.315% effective flat rate
   (5% local inhabitant tax is NOT applied to non-residents per standard practitioner
   reading.)

   No JP equivalent of the AU 50% CGT discount. JP-source gain includes asset appreciation
   plus depreciation recapture (same convention as AU CGT — depreciation reduces cost base).

   This is the GROSS JP-side CGT. The Foreign Income Tax Offset (FITO) for CGT is computed
   separately and reduces total CGT.
*/

import { Params } from "./param";
import { Expense } from "./expense";

const JP_NON_RESIDENT_CGT_RATE = 0.15315;   // national 15% + 2.1% reconstruction surcharge

export class JpNonResidentCgt extends Expense {
    constructor(params: Params,
                asset_appreciation: Expense,
                depreciation: Expense | undefined,
                split: number) {
        super("JP Non-Resident CGT",
              "15.315% JP source CGT on disposal for non-residents (national 15% + 2.1% reconstruction surcharge). No discount.",
              Expense.ONE_YEAR);

        if (params.config.owner_occupier || params.location.country !== "JPN") {
            this.is_known = true;
            this.update_upfront(0, 0);
            return;
        }

        const appreciation_gain = asset_appreciation.accumulated(params.config.hold_term);
        const depreciation_recapture = depreciation ? depreciation.accumulated(params.config.hold_term) : 0;
        const total_gain = appreciation_gain + depreciation_recapture;

        let total_tax = 0;
        for (const purchaser of params.purchasers) {
            if (!purchaser.enable) continue;
            const tax_residence = purchaser.tax_residence || params.location.country;
            if (tax_residence === "JPN") continue;   // JP residents not modelled here

            const jp_gain = total_gain / split;
            if (jp_gain <= 0) continue;
            total_tax += jp_gain * JP_NON_RESIDENT_CGT_RATE;
        }

        this.update_upfront(0, -total_tax);
        this.update_repeating(0);
    }
}
