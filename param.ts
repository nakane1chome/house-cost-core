/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

export class Property {
    value= 0;
    // Share of `value` attributable to the building (0–100); the rest is land. This is
    // the only stored split — land and building amounts are derived from it, so they
    // always sum to `value`. Serialised (JSON) params therefore carry only the percent.
    building_percent= 0;
    // Annual building insurance premium as a % of building_value; the only stored
    // insurance figure (the amount is derived). See defaultInsurancePercent (config.ts).
    insurance_percent= 0;
    // Annual maintenance budget as a % of building_value; the amount is derived.
    // See defaultMaintenancePercent (config.ts).
    maintenance_percent= 0;
    rent= 0;                              // weekly rent when rent_mode is "fixed"
    // "relative": weekly rent = Equivalent Rent × (1 + rent_relative_percent/100), following
    // the cost of owning; "fixed": the amount in rent is kept. See effective_rent.ts.
    rent_mode = "relative";
    rent_relative_percent = 0;
    max_rent=0;
    rent_fee_ratio = 0;
    community_title=false;
    commercial = false;                   // commercial vs residential
    gst_treatment = "n/a";                // "going_concern" | "taxable_input_credit" | "n/a"
    body_corp_fees_annual = 0;            // annual body corp / strata levies (AUD or JPY per location.country)
    lease_type = "gross";                 // "gross" | "net" | "semi_gross" — outgoings recovery from tenant (commercial only)
    construction = "rc";                  // "wood" (22yr) | "light_steel" (27yr) | "heavy_steel" (34yr) | "rc" (47yr) — JP statutory life
    building_age = 0;                     // years at acquisition; drives JP used-building depreciation formula
    renovation_value = 0;                 // capital improvement / 資本的支出 spend, tracked as a separate depreciation account
    renovation_useful_life = 0;           // years; explicit per lead based on scope of work. 0 → no renovation deduction
    has_water_connection = true;          // false for properties with no water/sewer connection (e.g. a storage unit with no plumbing fixture) — zeroes the AU water/sewer expense (water.ts)
    furnished = false;                    // true when the landlord/operator bears utilities directly (e.g. a furnished/serviced-apartment lease) — gates furnished_utilities.ts
    water_annual = 0;                     // landlord-borne annual water cost (AUD or JPY per location.country); consumed only when furnished=true
    electricity_annual = 0;               // landlord-borne annual electricity cost; consumed only when furnished=true
    gas_annual = 0;                       // landlord-borne annual gas cost; consumed only when furnished=true
    internet_annual = 0;                  // landlord-borne annual internet cost; consumed only when furnished=true

    // Depreciable building basis (AU Div 43 / JP 減価償却) and building assessment base.
    get building_value(): number { return this.value * this.building_percent / 100; }
    // Land share: JP fixed asset / city planning / acquisition tax land base.
    get land_value(): number { return this.value - this.building_value; }
}
export class Economy {
    loan_rate= 0;
    save_rate= 0;
    appreciation_rate= 0;
}
export class Purchaser {
    enable = false;
    income = 0;
    tax_residence = "";                   // "AUS" | "JPN" | "" (default empty → falls back to params.location.country for backwards compat)
}
export class Location {
    country="";
    fixed= false;
    postcode= "";
    state= "";
    currency="-";
}

export class Config {
    loan_term= 0;
    hold_term= 0;
    deposit= 0;
    new_home = false;
    first_home = false;
    owner_occupier=true;
    cgt_reform = true;                    // apply the announced post-1-July-2027 CGT rules (no discount, max(MTR, 30%)) to the share of the gain accrued after that date; false → 50% discount throughout
    purchase_date = "";
    sale_agent_percent = 2.5;             // AU agent commission at sale, % of sale price incl. GST (JP uses the brokerage formula)                   // ISO YYYY-MM-DD; "" → today. With hold_term it fixes the sale date and hence the pre/post-reform split of the gain
}
export class NewHome {
    build_cost= 0;
    establish_cost= 0;
}
export class PurchaseCosts {
    conveyancing = 0;                     // AU conveyancing; JP 司法書士 (judicial scrivener) fee
    inspections = 0;
    brokered = true;                      // JP: bought (and sold) through a broker (仲介) → 仲介手数料; false for 売主直
}
export class Offset {
    starting_balance = 0;
    monthly_contribution = 0;
}
export class Params {
    location = new Location;
    property = new Property;
    config = new Config;
    new_home = new NewHome;
    purchase_costs = new PurchaseCosts;
    offset = new Offset;
    economy = new Economy;
    purchasers = new Array<Purchaser>(); //  Array<Purchasers>;
}
