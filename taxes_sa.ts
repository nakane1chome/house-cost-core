import { Params } from "./param";
import { NodeInfo } from "./node_info";
import { Expense } from "./expense";

export class TaxesSaEsLevy extends Expense {

    private static _ESL_BASE = 50.0;
    private static _ESL_RATE = 0.000260;

    private node_info = new NodeInfo("Emergency Services Levy (SA)",
                            new Date(2014,1,1),
                            "Assumes Residental Land in Regional Area 4 (Adelaide and suburbs)");

    constructor(params: Params) {
        super("Emergency Services Levy (SA)",
             "The Emergency Services Levy (ESL)  paid annually to the state government by property owners.",
             Expense.ONE_YEAR);
        if (params.config.state == "SA") {
            const value = TaxesSaEsLevy._ESL_BASE + TaxesSaEsLevy._ESL_RATE*params.property.value;
            this.update_repeating(value);
            this.node_info.set_link("http://www.revenuesa.sa.gov.au/taxes-and-duties/emergency-services-levy");
        }
    }
}


export class TaxesSaMurrayLevy extends Expense{

    private static _MURRAY_LEVY=38.0;

    private node_info = new NodeInfo("River Murray Levy (SA)",
            new Date(2014,1,1),
            "Catagory 1 Residential");

    constructor(params: Params) {
        super("River Murray Levy (SA)",
              "The River Murray Levy paid annually to the state government by property owners.",
              Expense.ONE_YEAR);
        if (params.config.state == "SA") {
            const value =  TaxesSaMurrayLevy._MURRAY_LEVY ; 
            this.update_repeating(value);
            this.node_info.set_link("http://www.environment.sa.gov.au/managing-natural-resources/river-murray/water-charges-and-how-they-are-spent/save-the-river-murray-levy");
        }
    }

}

export class TaxesSaNaturalResourcesLevy extends Expense {

    static _NR_LEVY=36.50;

    private node_info = new NodeInfo(" NaturalResources Levy (SA)",new Date(2014,1,1),"Catagory 1 Residential");

    constructor(params: Params) {
        super("NaturalResources Levy (SA)",
              "The NaturalResources Levy paid annually to the state government by property owners.",
             Expense.ONE_YEAR);
        if (params.config.state == "SA") {
            const value = TaxesSaNaturalResourcesLevy._NR_LEVY ; 
            this.update_repeating( value);
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
