/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

/**
 * Tokyo residential utility defaults for furnished-apartment mode
 * (property.furnished — see furnished_utilities.ts). Each default =
 * daily standing/base charge + estimated daily usage x rate, so the
 * construction is legible rather than one opaque annual figure. The
 * usage estimate for electricity and gas is chosen so the resulting
 * annual total reconciles exactly to 総務省統計局 家計調査 単身世帯
 * (Family Income and Expenditure Survey, single-person households,
 * Kanto region, 2025, stat.go.jp/data/kakei/) — an actual-expenditure
 * average, which already bakes in real surcharges (fuel-cost / raw-
 * material-cost adjustments) that a static tariff base rate alone
 * would miss. Water has no Kanto-region breakdown; its reconciliation
 * target is the national single-person survey figure instead — the
 * weakest geographic match of the three, flagged here and in SCHEMA.md.
 *
 * Scope: Tokyo-sourced, applied at country === "JPN" granularity (no
 * prefecture branching) — every JP lead in this repo is a Tokyo
 * property, and this is a documented simplification, not independently
 * verified for other JP regions. See docs/design-04-country-config.md
 * and docs/references.md.
 */

// TEPCO 従量電灯B (30A) — regulated low-voltage residential tariff, the
// standard default unless a customer has opted into a different plan.
// https://tepco.co.jp/ep/private/plan/pdf/20240401_teiatsu_minaoshi_kisei.pdf
// (403-blocked on direct fetch during research; figures corroborated via
// search-engine extraction and a secondary tariff-summary site, not a
// clean primary-source fetch — flagged, not independently re-verified.)
const _TOKYO_ELECTRICITY_BASE_DAILY = 30.73;      // ¥935.25/mo basic charge
const _TOKYO_ELECTRICITY_USAGE_KWH_DAILY = 6.197; // ≈188.6 kWh/mo — reconciled to 2025 Kanto single-person 家計調査 (¥7,009/mo)
const _TOKYO_ELECTRICITY_BLENDED_RATE = 32.20;    // ¥/kWh — blends TEPCO tier-1 (¥29.80, 0-120kWh) + tier-2 (¥36.40, 120-300kWh); single-person usage crosses this boundary, so this is a stated blend, not a single tariff line

// Tokyo Gas 一般料金 (general/default residential tariff).
// https://home.tokyo-gas.co.jp/gas_power/plan/gas/calculation.html
const _TOKYO_GAS_BASE_DAILY = 24.94;              // ¥759.00/mo basic charge (0-20m³ tier)
const _TOKYO_GAS_USAGE_M3_DAILY = 0.390;          // ≈11.88 m³/mo — reconciled to 2025 Kanto single-person 家計調査 (¥2,873/mo); stays within the single 0-20m³ tier, no blending needed
const _TOKYO_GAS_RATE_PER_M3 = 177.92;            // single tier — a real tariff rate, not blended

// Tokyo Metropolitan Waterworks Bureau (水道局) — water + sewer billed
// together on one statement, two separate tariffs. water_annual models
// them combined (上下水道料); there is no separate sewer field.
// https://waterworks.metro.tokyo.lg.jp/tetsuduki/ryokin/hayami/rh_23ku
const _TOKYO_WATER_SEWER_BASE_DAILY = 51.32;      // combined base: water ¥1,892/2mo (0-10m³) + sewer ¥1,232/2mo (0-16m³)
// Single-person usage — OFFICIAL, directly-surveyed (not back-derived like
// the other two): Tokyo Waterworks Bureau FY2020 生活用水実態調査.
// https://waterworks.metro.tokyo.lg.jp/faq/qa-14
const _TOKYO_WATER_USAGE_M3_DAILY = 0.266;        // ≈8.1 m³/mo
const _TOKYO_WATER_RECONCILED_RATE = 70.86;       // ¥/m³ — reconciled residual (national single-person 家計調査 total minus base) / usage, NOT an independently-sourced marginal tariff step rate: the official tier-2 step price wasn't fully available from this research pass

export function tokyoElectricityAnnual(): number {
    return (_TOKYO_ELECTRICITY_BASE_DAILY + _TOKYO_ELECTRICITY_USAGE_KWH_DAILY * _TOKYO_ELECTRICITY_BLENDED_RATE) * 365.25;
}

export function tokyoGasAnnual(): number {
    return (_TOKYO_GAS_BASE_DAILY + _TOKYO_GAS_USAGE_M3_DAILY * _TOKYO_GAS_RATE_PER_M3) * 365.25;
}

export function tokyoWaterAnnual(): number {
    return (_TOKYO_WATER_SEWER_BASE_DAILY + _TOKYO_WATER_USAGE_M3_DAILY * _TOKYO_WATER_RECONCILED_RATE) * 365.25;
}
