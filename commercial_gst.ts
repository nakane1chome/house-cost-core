/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — Commercial GST treatment

   Going concern: GST-free supply per s 38-325 GST Act
                  (commercial property sold with a lease in place to a registered investor).
   Taxable input credit: 10% GST on purchase, claimed back via BAS as an input credit —
                         net-zero cash for a registered investor-buyer, but the mechanics
                         are visible as two cancelling line items in the breakdown.
   Other / n/a: no GST modelling (residential, or commercial where treatment is unspecified).
*/

import { Expense, UpfrontExpense } from "./expense";
import { Params } from "./param";

export class CommercialGST extends Expense {
    constructor(params: Params) {
        super("Commercial GST",
              "GST treatment for AU commercial property purchase. Going-concern: zero. " +
              "Taxable-with-input-credit: 10% upfront, 10% credit (net zero, visible).");

        if (!params.property.commercial || params.location.country !== "AUS") {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        switch (params.property.gst_treatment) {
            case "going_concern":
                // s 38-325 GST Act: GST-free if sold as a going concern with a lease in place
                this.is_known = true;
                this.update_upfront(0, 0);
                this.update_repeating(0);
                break;
            case "taxable_input_credit": {
                // 10% GST on purchase, claimed back as input credit (net-zero for registered buyer)
                // Modelled as two cancelling Expenses to make the mechanics visible.
                const gst = params.property.value * 0.10;
                const charge = new UpfrontExpense(
                    "GST charged on purchase",
                    "10% GST charged on commercial property purchase value.",
                    gst, params.config.loan_term, params.config.hold_term
                );
                const credit = new UpfrontExpense(
                    "GST input credit",
                    "GST input credit claimed via BAS — offsets the GST charge for a registered investor-buyer.",
                    gst, params.config.loan_term, params.config.hold_term
                );
                this.add(charge);
                this.sub(credit);
                break;
            }
            default:
                // "n/a" or anything unrecognised: no GST modelling
                this.is_known = true;
                this.update_repeating(0);
        }
    }
}
