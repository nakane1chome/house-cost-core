/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

// https://www.landservices.com.au/our-resources/2025-26-fy-transfer-registration-fees/
export class  TransferReg extends Expense {

    constructor(params: Params) {
        super("Transfer Registration Fee",
             "The fee paid to transfer the registration of the property title at purchase.")
        let amount = 0;
        switch (params.location.state) {
            case "SA" :
                amount = TransferReg.calculateSA(params.property.value);
                this.update_upfront(amount, 0)
        }
    }

    static calculateSA(value: number): number {
        if (value <= 5000) return 198;
        if (value <= 20000) return 221;
        if (value <= 40000) return 243;
        // $40,001+: $342 base + $102 per $10K bracket
        const brackets = Math.floor((value - 40001) / 10000);
        return 342 + brackets * 102;
    }
}
