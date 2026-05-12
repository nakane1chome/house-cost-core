/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — AU CGT Regime Configuration

   FY26 (pre-reform): 50% discount on gains held >12mo, taxed at MTR.
   FY27 (post-reform anticipated): no discount, taxed at max(MTR, 30%).

   The FY27 shape models the May 2026 budget speculation — exact legislation
   not yet final. See docs/taxation_planning.md for policy context.
*/

export interface CgtRegimeConfig {
    name: string;
    discount_rate: number;
    flat_rate_floor: number;
    description: string;
}

export const CGT_REGIME_FY26: CgtRegimeConfig = {
    name: "fy26",
    discount_rate: 0.5,
    flat_rate_floor: 0,
    description: "FY26 (pre-reform): 50% discount on gains held >12mo, taxed at MTR. Applies to assets acquired before 1 July 2026 (grandfathered)."
};

export const CGT_REGIME_FY27: CgtRegimeConfig = {
    name: "fy27",
    discount_rate: 0,
    flat_rate_floor: 0.30,
    description: "FY27 (post-reform): no discount; gain taxed at max(MTR, 30%). Applies to assets acquired on or after 1 July 2026."
};

export function getCgtRegime(name: string): CgtRegimeConfig {
    switch (name) {
        case "fy26": return CGT_REGIME_FY26;
        case "fy27": return CGT_REGIME_FY27;
        default: throw new Error(`Unknown CGT regime: ${name}. Valid: fy26, fy27.`);
    }
}
