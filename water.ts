/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { NodeInfo } from "./node_info";
import { Expense } from "./expense";

const _SEWER_MIN=336;
const _WATER_MIN=293;

export class TaxesSaSewerRates extends Expense {


    public node_info = new NodeInfo("Sewerage Service (SA)",new Date(2014,1,1),"Minimum charge, residential");

    constructor(params: Params) {
        super("Sewerage Service (SA)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "SA" ) {
            this.update_repeating( _SEWER_MIN);
            this.node_info.set_link("http://www.sawater.com.au/NR/rdonlyres/A84D7160-EF94-4536-A101-35ECE80472A4/0/201213FeesandCharges.pdf");
        }
    }
}


export class  TaxesSaWaterRates  extends Expense  {

    public node_info = new NodeInfo("Water Supply (SA)",new Date(2014,1,1),"Minimum charge, residential");

    constructor(params: Params) {
        super("Water Supply (SA)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "SA" ) {
            const amount = _WATER_MIN; 
            this.update_repeating(amount);
            this.node_info.set_link("http://www.sawater.com.au/NR/rdonlyres/A84D7160-EF94-4536-A101-35ECE80472A4/0/201213FeesandCharges.pdf");
        }
    }

}

export class NewWaterSa extends Expense {
    
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesSaWaterRates(params));
        this.add(new TaxesSaSewerRates(params));
    }
}
