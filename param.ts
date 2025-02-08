/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

export class Property {
    value= 0;
    community_title=false;
}
export class Economy {
    loan_rate= 0;
    save_rate= 0;
}
export class Purchaser {
    enable = false;
    income= 0;
}
export class Location {
    country="";
    postcode= 0;
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
export class Params {
    location = new Location;
    property = new Property;
    config = new Config;
    new_home = new NewHome;
    economy = new Economy;
    purchasers = new Array<Purchaser>(); //  Array<Purchasers>;
}
