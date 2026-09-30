/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

/**
 * Landlord-borne water supply cost for a furnished/serviced-apartment lease
 * (property.water_annual). Only meaningful when property.furnished — see
 * FurnishedUtilities below.
 */
export class WaterSupply extends Expense {
    constructor(params: Params) {
        super("Water Supply",
              "Water supply cost borne by the landlord/operator under a furnished lease.",
              Expense.ONE_YEAR);
        this.update_repeating(params.property.water_annual);
    }
}

/**
 * Landlord-borne electricity cost for a furnished/serviced-apartment lease
 * (property.electricity_annual).
 */
export class Electricity extends Expense {
    constructor(params: Params) {
        super("Electricity",
              "Electricity cost borne by the landlord/operator under a furnished lease.",
              Expense.ONE_YEAR);
        this.update_repeating(params.property.electricity_annual);
    }
}

/**
 * Landlord-borne gas cost for a furnished/serviced-apartment lease
 * (property.gas_annual).
 */
export class Gas extends Expense {
    constructor(params: Params) {
        super("Gas",
              "Gas cost borne by the landlord/operator under a furnished lease.",
              Expense.ONE_YEAR);
        this.update_repeating(params.property.gas_annual);
    }
}

/**
 * Landlord-borne internet cost for a furnished/serviced-apartment lease
 * (property.internet_annual).
 */
export class Internet extends Expense {
    constructor(params: Params) {
        super("Internet",
              "Internet cost borne by the landlord/operator under a furnished lease.",
              Expense.ONE_YEAR);
        this.update_repeating(params.property.internet_annual);
    }
}

/**
 * Utilities bundled into a furnished/serviced-apartment lease (e.g. the マンスリーマンション
 * pattern — see docs/options/monthly_mansion.md in the parent repo): the landlord or
 * master-lease operator bears water, electricity, gas and internet directly, priced into
 * rent, rather than the tenant contracting and paying for each utility themselves. Gated
 * on property.furnished — zero (and omitted from reports, see render-html.ts's
 * notApplicable) for an ordinary lease. Each of the four components is independently
 * optional: only components with a sourced non-zero *_annual value are added, so a lead
 * with partial data (e.g. only water and internet known) doesn't show fabricated zero
 * lines for the rest.
 */
export class FurnishedUtilities extends Expense {
    constructor(params: Params) {
        super("Furnished Utilities",
              "Water, electricity, gas and internet borne by the landlord/operator under a furnished lease.",
              Expense.ONE_YEAR);

        if (!params.property.furnished) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        if (params.property.water_annual > 0) this.add(new WaterSupply(params));
        if (params.property.electricity_annual > 0) this.add(new Electricity(params));
        if (params.property.gas_annual > 0) this.add(new Gas(params));
        if (params.property.internet_annual > 0) this.add(new Internet(params));
    }
}
