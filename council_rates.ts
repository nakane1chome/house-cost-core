/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/
import { Params} from "./param";
import { Expense } from "./expense";
import { Postcode2Lga } from "./postcode2lga"

export class CouncilRates extends Expense {

    constructor(params: Params) {
        super("Council Rates (AU)",
             "Local goverment taxes levied on the property owner.",
              Expense.ONE_YEAR)
        const lga = Postcode2Lga(params.location.postcode);

        // City of Adelaide — uses Annual Value (s 5 Valuation of Land Act 1971)
        //   AV = 75% × gross annual rental (landlord-pays-outgoings basis)
        // For modelling purposes we approximate AV = 5% × purchase price
        // (5% net yield assuming owner pays rates and other outgoings).
        // Source: https://www.cityofadelaide.com.au/resident/home-management/rates/
        // (FY 2025-26 rate-in-dollar values; minimum rate adopted 1 July 2025).
        if (lga == 'sa.adelaide') {
            const annual_value = params.property.value * 0.05;
            const rate = params.property.commercial ? 0.141126 : 0.115205;
            const rll_rate = 0.001678;
            const minimum = 400;
            let council = rate * annual_value;
            if (council < minimum) council = minimum;
            const rll = rll_rate * annual_value;
            this.update_repeating(council + rll);
            return;
        }

        // Other SA councils — use the simpler CV-proxy single-rate model.
        // e.g. https://www.campbelltown.sa.gov.au/council/rates/rates-information
        let NRL = 0;
        let RATES_RATE=0;
        let RATES_MIN=0;
        if (lga == 'sa.campbelltown') {
            RATES_RATE=0.00217122;
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
