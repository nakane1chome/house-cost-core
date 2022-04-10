/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { NodeInfo } from "./node_info";
import { Expense } from "./expense";

export class TaxesSaEsLevy extends Expense {

    private static _BASE = 50.0;
    private static _RATE = 0.000393; // Effecive is 0.001125, Actual is calculated by "prescribed rate"
    private static _AREA = 1.0; // R4
    private static _USE = 0.4; // RE


    constructor(params: Params) {
        super("Emergency Services Levy (SA)",
             "The Emergency Services Levy (ESL)  paid annually to the state government by property owners.",
             Expense.ONE_YEAR);
        if (params.location.state == "SA") {
            const value = TaxesSaEsLevy._BASE + (TaxesSaEsLevy._AREA*TaxesSaEsLevy._USE*TaxesSaEsLevy._RATE*params.property.value);
            this.update_repeating(value);
            this.node_info.date = new Date(2022,6,1); // 2022-23 ESL Calculator
            this.node_info.set_link("https://www.revenuesa.sa.gov.au/esl/calculate-emergency-services-levy/2022-23-esl-calculator");
        }
    }
}


export class TaxesSaMurrayLevy extends Expense{

    private static _MURRAY_LEVY=38.0;

    constructor(params: Params) {
        super("River Murray Levy (SA)",
              "The River Murray Levy paid annually to the state government by property owners.",
              Expense.ONE_YEAR);
        if (params.location.state == "SA") {
            const value =  TaxesSaMurrayLevy._MURRAY_LEVY ; 
            this.update_repeating(value);
            this.node_info.date = new Date(2014,1,1); // 2014-15 River Murray Levy
            this.node_info.set_link("http://www.environment.sa.gov.au/managing-natural-resources/river-murray/water-charges-and-how-they-are-spent/save-the-river-murray-levy");
        }
    }

}

export class TaxesSaNaturalResourcesLevy extends Expense {

    static _NR_LEVY=36.50;

    constructor(params: Params) {
        super("NaturalResources Levy (SA)",
              "The NaturalResources Levy paid annually to the state government by property owners.",
             Expense.ONE_YEAR);
        if (params.location.state == "SA") {
            const value = TaxesSaNaturalResourcesLevy._NR_LEVY ; 
            this.update_repeating( value);
            // "Catagory 1 Residential"
            this.node_info.date = new Date(2014,1,1); // 2014-15 Natural Resources Levy
            this.node_info.set_link("http://www.portenf.sa.gov.au/webdata/resources/files/NRM_Brochure_(new)_WEB.pdf");
        }
    }
}


export class NewTaxesSa extends Expense {
    
    constructor(params: Params) {
        super("State Taxes",
              "All taxes that are required to be paid to the state government by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesSaEsLevy(params));
        this.add(new TaxesSaMurrayLevy(params));
        this.add(new TaxesSaNaturalResourcesLevy(params));
    }
}
