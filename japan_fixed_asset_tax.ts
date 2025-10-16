/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

export class JapanFixedAssetTax extends Expense {

    private static _RATE = 0.014;

    constructor(params: Params) {
        super("Fixed Asset Tax (JP)",
             "This is an annual tax, levied on the owner of the property as of January 1st each year.",
             Expense.ONE_YEAR)
        const amount = params.property.value * JapanFixedAssetTax._RATE;
        this.update_repeating(amount);
    }
}
