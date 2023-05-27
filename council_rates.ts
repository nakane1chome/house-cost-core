/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/
import { Params} from "./param";
import { Expense } from "./expense";
import { Postcode2Lga } from "./postcode2lga"

export class CouncilRates extends Expense {

    constructor(params: Params) {
        super("Council Rates",
             "Local goverment taxes levied on the property owner.", 
              Expense.ONE_YEAR)
        const lga = Postcode2Lga(params.property.postcode);
        // e.g. from campbelltown sa
        // https://www.campbelltown.sa.gov.au/council/rates/rates-information
        let NRL = 0;
        let RATES_RATE=0;
        let RATES_MIN=0;
        if (lga == 'sa.campbelltown') {
            RATES_RATE=0.00253979;
            RATES_MIN=1037;
        }
        if (lga == 'sa.salisbury') {
            NRL=36.50;
            RATES_RATE=0.003879 
            RATES_MIN=500;
        }
        if (params.property.value) {
            let base_rate = RATES_RATE*params.property.value;
            if (base_rate < RATES_MIN) base_rate = RATES_MIN;
            const amount = NRL + base_rate;
            this.update_repeating(amount);
        }
    }
    
}
