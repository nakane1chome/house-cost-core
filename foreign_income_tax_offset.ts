/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — Foreign Income Tax Offset (AU FITO)

   AU FITO credits foreign tax paid against AU tax payable on the same foreign-source
   income, capped at the AU tax on that foreign income (i.e., FITO cannot reduce AU tax
   on AU-source income; you don't get a refund of more than the AU tax on the foreign
   portion).

   Two streams:
   - Rental: credits JP rental tax against AU tax on the JP rental
   - CGT: credits JP CGT against AU CGT on the JP disposal

   Per-stream FITO matches AU rules (FITO categorisation by income type).

   Caveat: the modelled cap is min(foreign_tax, au_tax_on_foreign) per stream. Real AU
   FITO has additional category and aggregation rules; this approximation suffices for
   the dual-jurisdiction single-property case.
*/

import { Expense } from "./expense";

export class ForeignIncomeTaxOffsetRental extends Expense {
    constructor(jp_rental_tax: Expense, au_tax_on_foreign_rental: Expense) {
        super("Foreign Income Tax Offset (Rental)",
              "AU FITO crediting JP rental tax against AU tax payable on the same JP rental income.",
              Expense.ONE_YEAR);

        const jp = jp_rental_tax.annual();
        const au = au_tax_on_foreign_rental.annual();
        const credit = Math.min(jp, au);

        this.is_known = true;
        this.update_repeating(credit);
    }
}

export class ForeignIncomeTaxOffsetCgt extends Expense {
    constructor(jp_cgt: Expense, au_cgt_total: number) {
        super("Foreign Income Tax Offset (CGT)",
              "AU FITO crediting JP CGT against AU CGT on the same JP-source disposal.",
              Expense.ONE_YEAR);

        // JP CGT is realised at exit; exit_remainder_amount is negative (tax cost).
        const jp = -jp_cgt.exit_remainder_amount;
        const au = au_cgt_total;
        const credit = Math.min(Math.max(jp, 0), Math.max(au, 0));

        // FITO credit realised at hold-end (offsetting AU CGT)
        this.update_upfront(0, credit);
        this.update_repeating(0);
    }
}
