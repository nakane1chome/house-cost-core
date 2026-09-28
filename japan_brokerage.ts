/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — 仲介手数料 (JP real-estate brokerage fee)

   Statutory maximum under 宅地建物取引業法 (Real Estate Brokerage Act), charged on
   the transaction price by the broker in a 仲介 (brokered) sale:
     5% of the first ¥2M + 4% of ¥2M–¥4M + 3% above ¥4M
     (≡ 3% + ¥60,000 when the price exceeds ¥4M), plus 10% consumption tax.
   Brokers almost always charge the maximum. Not modelled: the July-2024 special rule
   for low-price vacant houses (≤ ¥8M may be charged up to ¥300k + tax).
   Rates from general knowledge — verify against current MLIT guidance.
*/

import { Params } from "./param";
import { Expense } from "./expense";

const CONSUMPTION_TAX = 0.10;

/** Maximum brokerage fee on a price, including consumption tax. */
export function japanBrokerageFee(price: number): number {
    const tier = (lo: number, hi: number, rate: number) =>
        Math.max(0, Math.min(price, hi) - lo) * rate;
    const fee = tier(0, 2_000_000, 0.05) + tier(2_000_000, 4_000_000, 0.04) + tier(4_000_000, Infinity, 0.03);
    return fee * (1 + CONSUMPTION_TAX);
}

/** 仲介手数料 paid on purchase, when the purchase is brokered (not 売主直). */
export class JapanBrokerageFee extends Expense {
    constructor(params: Params) {
        super("Brokerage Fee (JP, 仲介手数料)",
              "Broker's fee on a brokered purchase: statutory maximum 3% + ¥60,000 (tiered below ¥4M), plus 10% consumption tax.");
        this.update_upfront(japanBrokerageFee(params.property.value), 0);
    }
}
