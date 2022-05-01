export class Property {
    value= 0;
    postcode= 0;
}
export class Economy {
    loan_rate= 0;
    save_rate= 0;
} 
export class Purchaser {
    income= 0;
}
export class Config {
    state= "";
    term= 0;
    deposit= 0;
    new_home = false;
    first_home = false;
}
export class NewHome {
    build_cost= 0;
    establish_cost= 0;
}
export class Params {
    property = new Property;
    config = new Config;
    new_home = new NewHome;
    economy = new Economy;
    purchasers = new Array<Purchaser>(); //  Array<Purchasers>;
}
