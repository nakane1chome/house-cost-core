/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — 固定資産税 (JP Fixed Asset Tax)

   Annual JP municipal tax on real property. Real mechanics:
   - Base is 固定資産税評価額 (assessed value), typically ~70% of market for land,
     50-70% of construction cost for buildings. We approximate with a single ratio.
   - Rate: 1.4% standard (statutory; some municipalities differ slightly).
   - Reductions:
     - Small-scale residential land (≤200㎡): base reduced to 1/6 (drops effective rate
       to ~0.233% on the assessed land portion).
     - General residential land (200-1000㎡): base reduced to 1/3.
     - Commercial-use land or building portion: no reduction.

   Modelling:
   - If `property.land_value > 0` or `property.building_value > 0`: split-aware calc
     with assessed-value ratio and residential reduction (proxied by `commercial=false`
     getting the 1/6 small-land treatment).
   - Else: legacy fallback `value × 0.014` for backwards compat with old samples.
*/

import { Params } from "./param";
import { Expense, SunkUpfrontExpense } from "./expense";

const ASSESSED_VALUE_RATIO = 0.7;   // approximate 固定資産税評価額 / market value
const FIXED_ASSET_RATE = 0.014;     // statutory 1.4%
const RESIDENTIAL_LAND_FACTOR = 1 / 6;   // small-scale residential land reduction (≤200㎡)

export class JapanFixedAssetTax extends Expense {
    constructor(params: Params) {
        super("Fixed Asset Tax (JP)",
             "Annual JP municipal tax (固定資産税) on real property. Levied on the owner as of January 1st each year.",
             Expense.ONE_YEAR);

        const land = params.property.land_value;
        const building = params.property.building_value;

        let amount: number;
        if (land > 0 || building > 0) {
            const land_assessed = land * ASSESSED_VALUE_RATIO;
            const building_assessed = building * ASSESSED_VALUE_RATIO;
            // Residential small-land reduction: applies when use is residential.
            // Coarse proxy via the existing `commercial` flag (AU-originated but
            // re-purposed here for JP residential-vs-commercial 固定資産税 treatment).
            const land_factor = params.property.commercial ? 1.0 : RESIDENTIAL_LAND_FACTOR;
            amount = (land_assessed * land_factor + building_assessed) * FIXED_ASSET_RATE;

            // Surface the working values as linked-only children (visible in the
            // breakdown but not aggregated into any parent's sum).
            this.link(new SunkUpfrontExpense(
                "Assessed Land Value (JP)",
                `Land 固定資産税評価額 ≈ market × ${ASSESSED_VALUE_RATIO} (${params.property.commercial ? "commercial — no reduction" : "small-residential land 1/6 reduction applies"}).`,
                land_assessed));
            this.link(new SunkUpfrontExpense(
                "Assessed Building Value (JP)",
                `Building 固定資産税評価額 ≈ market × ${ASSESSED_VALUE_RATIO}.`,
                building_assessed));
        } else {
            // Legacy fallback: flat 1.4% × market value (no split, no reduction).
            amount = params.property.value * FIXED_ASSET_RATE;
        }

        this.update_repeating(amount);
    }
}
