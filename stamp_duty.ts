/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

// SA stamp duty brackets (2025-26) from RevenueSA
// https://www.revenuesa.sa.gov.au/stamp-duty-land/rate-of-stamp-duty
const SA_BRACKETS: Array<[number, number, number]> = [
    // [threshold, base_amount, marginal_rate_percent]
    [     0,     0, 1.0  ],
    [ 12000,   120, 2.0  ],
    [ 30000,   480, 3.0  ],
    [ 50000,  1080, 3.5  ],
    [100000,  2830, 4.0  ],
    [200000,  6830, 4.25 ],
    [250000,  8955, 4.75 ],
    [300000, 11330, 5.0  ],
    [500000, 21330, 5.5  ],
];

// NSW general transfer duty brackets (2026-27) from Revenue NSW
// https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty/understanding-transfer-duty/calculate-transfer-duty
// Applies uniformly to commercial and residential (NSW did not abolish commercial
// transfer duty the way SA did). Thresholds re-index annually (1 July) for CPI —
// verify against the live Revenue NSW calculator before relying on this for settlement.
// NOT modelled: premium duty (high-value residential land, separate threshold/scale),
// foreign-purchaser surcharge duty (additional 8%, requires buyer residency status
// this model doesn't track), and any concessions (corporate reconstruction, primary
// production, etc.).
const NSW_BRACKETS: Array<[number, number, number]> = [
    // [threshold, base_amount, marginal_rate_percent]
    [      0,     0, 1.25 ],
    [  18000,   225, 1.50 ],
    [  38000,   525, 1.75 ],
    [ 103000,  1662, 3.50 ],
    [ 387000, 11602, 4.50 ],
    [1290000, 52237, 5.50 ],
];
const NSW_MINIMUM_DUTY = 20;

export class StampDuty extends Expense {

    constructor(params: Params) {
        super("Stamp Duty",
             "The one off tax that needs to be paid when the property is purchased.");
        let amount = 0;
        switch (params.location.state) {
            case "SA" :
                if (params.property.commercial) {
                    // SA abolished commercial stamp duty 1 July 2018
                    // Stamp Duties (Commercial Real Property) Amendment Act 2015 (SA)
                    amount = 0;
                } else {
                    amount = StampDuty.calculateSA(params.property.value);
                }
                this.update_upfront(amount, 0);
                break;
            case "NSW" : {
                // NSW duty is assessed on total consideration. For a taxable supply
                // (commercial property sold with GST charged on top, i.e. not a
                // going-concern sale) that consideration is GST-inclusive.
                let dutiable_value = params.property.value;
                if (params.property.commercial && params.property.gst_treatment === "taxable_input_credit") {
                    dutiable_value = params.property.value * 1.10;
                }
                amount = StampDuty.calculateNSW(dutiable_value);
                this.update_upfront(amount, 0);
                break;
            }
        }
    }

    static calculateSA(value: number): number {
        let bracket = SA_BRACKETS[0];
        for (let i = SA_BRACKETS.length - 1; i >= 0; i--) {
            if (value > SA_BRACKETS[i][0]) {
                bracket = SA_BRACKETS[i];
                break;
            }
        }
        return bracket[1] + (value - bracket[0]) * bracket[2] / 100;
    }

    static calculateNSW(value: number): number {
        let bracket = NSW_BRACKETS[0];
        for (let i = NSW_BRACKETS.length - 1; i >= 0; i--) {
            if (value > NSW_BRACKETS[i][0]) {
                bracket = NSW_BRACKETS[i];
                break;
            }
        }
        const duty = bracket[1] + (value - bracket[0]) * bracket[2] / 100;
        return Math.max(duty, NSW_MINIMUM_DUTY);
    }
}

