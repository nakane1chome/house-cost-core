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

export class StampDuty extends Expense {

    constructor(params: Params) {
        super("Stamp Duty",
             "The one off tax that needs to be paid when the property is purchased.");
        let amount = 0;
        switch (params.location.state) {
            case "SA" :
                amount = StampDuty.calculateSA(params.property.value);
                this.update_upfront(amount, 0);
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
}

