/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/
import { Params} from "./param";
import { Expense } from "./expense";
import { Postcode2Lga } from "./postcode2lga"

// City of Adelaide Annual Value as a share of purchase price.
// Residential: 5% (assumed net yield; no disclosed bills yet).
// Commercial: 4% — calibrated on two disclosed 2026 rates notices for small
// CBD strata office suites (27 m² $936/yr, 33 m² $1,116/yr at ~$165k–$177k),
// both ≈ 20% below what a 5% ratio predicts.
const ADELAIDE_AV_RATIO_RESIDENTIAL = 0.05;
const ADELAIDE_AV_RATIO_COMMERCIAL = 0.04;

export class CouncilRates extends Expense {

    constructor(params: Params) {
        super("Council Rates (AU)",
             "Local goverment taxes levied on the property owner.",
              Expense.ONE_YEAR)
        const lga = Postcode2Lga(params.location.postcode);

        // City of Adelaide — uses Annual Value (s 5 Valuation of Land Act 1971)
        //   AV = 75% × gross annual rental (landlord-pays-outgoings basis)
        // For modelling purposes AV is approximated as a ratio of purchase price.
        // Source: https://www.cityofadelaide.com.au/resident/home-management/rates/
        // (FY 2025-26 rate-in-dollar values; minimum rate adopted 1 July 2025).
        if (lga == 'sa.adelaide') {
            const av_ratio = params.property.commercial ? ADELAIDE_AV_RATIO_COMMERCIAL : ADELAIDE_AV_RATIO_RESIDENTIAL;
            const annual_value = params.property.value * av_ratio;
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
