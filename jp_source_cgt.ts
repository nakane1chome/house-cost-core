/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — JP source CGT on disposal of Japanese real property

   Japan taxes gains on real property separately (分離課税) at flat rates that
   depend on how long the asset was held as at 1 January of the year of sale:
     long-term  (held > 5 years at that date):  15% national + 5% inhabitant
     short-term (held ≤ 5 years at that date):  30% national + 9% inhabitant
   plus the 2.1% reconstruction surcharge on the national component.

   Non-residents (e.g. AU-resident investors) pay no inhabitant tax:
     long  15% × 1.021          = 15.315%
     short 30% × 1.021          = 30.63%
   Residents pay both:
     long  15% × 1.021 + 5%     = 20.315%
     short 30% × 1.021 + 9%     = 39.63%

   No JP equivalent of the AU 50% discount. The JP gain includes asset
   appreciation plus depreciation recapture (depreciation reduces the JP
   cost base, same convention as the AU side).

   For AU-resident purchasers this is the GROSS JP-side CGT; the AU CGT also
   applies (worldwide gains) and ForeignIncomeTaxOffsetCgt credits the JP tax
   against it. For JP-resident purchasers this is the whole CGT liability.
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { resolvePurchaseDate, saleDate, isoDate } from "./cgt_regime";

const SURCHARGE = 1.021;
export const JP_CGT_RATES = {
    non_resident: { long: 0.15 * SURCHARGE, short: 0.30 * SURCHARGE },          // 15.315% / 30.63%
    resident:     { long: 0.15 * SURCHARGE + 0.05, short: 0.30 * SURCHARGE + 0.09 }, // 20.315% / 39.63%
};

/** Long-term if held more than 5 years as at 1 January of the year of sale. */
export function jpIsLongTerm(purchase: Date, sale: Date): boolean {
    const jan1 = new Date(Date.UTC(sale.getUTCFullYear(), 0, 1));
    const fiveYearsOn = new Date(Date.UTC(purchase.getUTCFullYear() + 5, purchase.getUTCMonth(), purchase.getUTCDate()));
    return jan1.getTime() > fiveYearsOn.getTime();
}

export class JpSourceCgt extends Expense {
    constructor(params: Params,
                asset_appreciation: Expense,
                depreciation: Expense | undefined,
                split: number) {
        const hold = params.config.hold_term;
        const purchase = resolvePurchaseDate(params);
        const sale = saleDate(purchase, hold);
        const long_term = jpIsLongTerm(purchase, sale);

        super("JP Source CGT",
              `JP 分離課税 on the disposal gain. Purchased ${isoDate(purchase)}, sold ${isoDate(sale)}: ` +
              `${long_term ? "long-term (> 5 years at 1 Jan of sale year)" : "short-term (≤ 5 years at 1 Jan of sale year)"} — ` +
              `non-resident ${(JP_CGT_RATES.non_resident[long_term ? "long" : "short"] * 100).toFixed(3)}%, ` +
              `resident ${(JP_CGT_RATES.resident[long_term ? "long" : "short"] * 100).toFixed(3)}%. No discount.`,
              Expense.ONE_YEAR);

        if (params.config.owner_occupier || params.location.country !== "JPN") {
            this.is_known = true;
            this.update_upfront(0, 0);
            return;
        }

        const appreciation_gain = asset_appreciation.accumulated(hold);
        const depreciation_recapture = depreciation ? depreciation.accumulated(hold) : 0;
        const total_gain = appreciation_gain + depreciation_recapture;

        let total_tax = 0;
        for (const purchaser of params.purchasers) {
            if (!purchaser.enable) continue;
            const tax_residence = purchaser.tax_residence || params.location.country;
            const rates = tax_residence === "JPN" ? JP_CGT_RATES.resident : JP_CGT_RATES.non_resident;
            const jp_gain = total_gain / split;
            if (jp_gain <= 0) continue;
            total_tax += jp_gain * (long_term ? rates.long : rates.short);
        }
        this.update_upfront(0, -total_tax);
        this.update_repeating(0);
    }
}
