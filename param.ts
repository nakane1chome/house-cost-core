/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

export class Property {
    value= 0;
    land_value= 0;
    building_value= 0;
    rent= 0;
    max_rent=0;
    rent_fee_ratio = 0;
    community_title=false;
    commercial = false;                   // commercial vs residential
    gst_treatment = "n/a";                // "going_concern" | "taxable_input_credit" | "n/a"
    body_corp_fees_annual = 0;            // annual body corp / strata levies (AUD or JPY per location.country)
    lease_type = "gross";                 // "gross" | "net" | "semi_gross" — outgoings recovery from tenant (commercial only)
}
export class Economy {
    loan_rate= 0;
    save_rate= 0;
    appreciation_rate= 0;
}
export class Purchaser {
    enable = false;
    income = 0;
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
}
export class NewHome {
    build_cost= 0;
    establish_cost= 0;
}
export class PurchaseCosts {
    conveyancing = 0;
    inspections = 0;
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
