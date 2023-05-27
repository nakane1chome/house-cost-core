/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

export class PropertyInsurance extends Expense {

    // rough guess From coles insurance
    private static _BASE = 300;
    private static _START = 150000;
    private static _SLOPE = 130.0 / 100000.0;

    constructor(params: Params) {
        super("Property Insurance",
             "Cost of insuring the buildings on the property.",
             Expense.ONE_YEAR)
        const r = params.property.value - PropertyInsurance._START;
        let amount = 0;
        if (r < 0) {
            amount =  PropertyInsurance._BASE;
        } else {
            amount = PropertyInsurance._BASE + PropertyInsurance._SLOPE*r;
        }
        this.update_repeating(amount);
    }
}

