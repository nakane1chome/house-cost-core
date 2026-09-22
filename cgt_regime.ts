/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — AU CGT reform timing

   2026–27 Budget (12 May 2026): from 1 July 2027 the 50% CGT discount for
   individuals, trusts and partnerships is replaced by cost-base indexation
   plus a 30% minimum tax on the real gain. Transitional rule: gains accrued
   before 1 July 2027 keep the 50% discount; gains accrued from that date are
   taxed under the new rules. Taxpayers may time-apportion the gain across
   the reform date rather than obtain a valuation.

   The model applies exactly that split. Because there is no CPI input, the
   post-reform slice is taxed on the full nominal gain (no indexation) at
   max(MTR, 30%) — a conservative working assumption until the legislated
   form is known. Not yet legislated as at Sep 2026.
*/

import { Params } from "./param";

/** Announced commencement of the reformed CGT rules. */
export const CGT_REFORM_START = "2027-07-01";

/** Pre-reform: 50% discount on gains held > 12 months, taxed at MTR. */
export const CGT_PRE_REFORM = { discount: 0.5, floor: 0 };

/** Post-reform working assumption: no discount, taxed at max(MTR, 30%). */
export const CGT_POST_REFORM = { discount: 0, floor: 0.30 };

function parseIsoDate(s: string): Date | null {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (!m) return null;
    const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
    return isNaN(d.getTime()) ? null : d;
}

/** Purchase date from params; empty or unparseable → today (UTC midnight). */
export function resolvePurchaseDate(params: Params): Date {
    const parsed = params.config.purchase_date ? parseIsoDate(params.config.purchase_date) : null;
    if (parsed) return parsed;
    const now = new Date();
    return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

/** purchase + hold_term years (calendar arithmetic, UTC). */
export function saleDate(purchase: Date, hold_term: number): Date {
    const whole = Math.floor(hold_term);
    const frac = hold_term - whole;
    const d = new Date(Date.UTC(purchase.getUTCFullYear() + whole, purchase.getUTCMonth(), purchase.getUTCDate()));
    if (frac > 0) d.setTime(d.getTime() + frac * 365.25 * 86400000);
    return d;
}

/**
 * Share of the holding period that falls on or after the reform date,
 * time-apportioned, clamped to [0, 1]. 0 → wholly pre-reform; 1 → wholly post.
 */
export function reformFraction(purchase: Date, sale: Date, reform: string = CGT_REFORM_START): number {
    const r = parseIsoDate(reform);
    if (!r) return 0;
    const held = sale.getTime() - purchase.getTime();
    if (held <= 0) return sale.getTime() >= r.getTime() ? 1 : 0;
    const post = sale.getTime() - Math.max(purchase.getTime(), r.getTime());
    return Math.min(1, Math.max(0, post / held));
}

export function isoDate(d: Date): string {
    return d.toISOString().slice(0, 10);
}
