import { Params } from "./param";
import { NodeInfo } from "./node_info";
import { ExpenseAnnual } from "./expense";
import { ExpenseSet } from "./expense";


export class TaxesSaEsLevy extends ExpenseAnnual {

    private static _ESL_BASE = 50.0;
    private static _ESL_RATE = 0.000260;

    private node_info = new NodeInfo("Emergency Services Levy (SA)",
                            new Date(2014,1,1),
                            "Assumes Residental Land in Regional Area 4 (Adelaide and suburbs)");

    constructor(params: Params) {
        super();
        if (params.config.state == "SA") {
            const value = TaxesSaEsLevy._ESL_BASE + TaxesSaEsLevy._ESL_RATE*params.property.value;
            this.update(value);
            this.node_info.set_link("http://www.revenuesa.sa.gov.au/taxes-and-duties/emergency-services-levy");
        }
    }
}


export class TaxesSaMurrayLevy extends ExpenseAnnual{

    private static _MURRAY_LEVY=38.0;

    private node_info = new NodeInfo("River Murray Levy (SA)",
            new Date(2014,1,1),
            "Catagory 1 Residential");

    constructor(params: Params) {
        super();
        if (params.config.state == "SA") {
            const value =  TaxesSaMurrayLevy._MURRAY_LEVY ; 
            this.update(value);
            this.node_info.set_link("http://www.environment.sa.gov.au/managing-natural-resources/river-murray/water-charges-and-how-they-are-spent/save-the-river-murray-levy");
        }
    }

}

export class TaxesSaNaturalResourcesLevy extends ExpenseAnnual {

    static _NR_LEVY=36.50;

    private node_info = new NodeInfo(" NaturalResources Levy (SA)",new Date(2014,1,1),"Catagory 1 Residential");

    constructor(params: Params) {
        super();
        if (params.config.state == "SA") {
            const value = TaxesSaNaturalResourcesLevy._NR_LEVY ; 
            this.update( value);
            this.node_info.set_link("http://www.portenf.sa.gov.au/webdata/resources/files/NRM_Brochure_(new)_WEB.pdf");
        }
    }
}


export class NewTaxesSa extends ExpenseAnnual {
    
    public s: ExpenseSet;

    constructor(params: Params) {
        super()
        this.s = new ExpenseSet(); 
        this.s.add(new TaxesSaEsLevy(params));
        this.s.add(new TaxesSaMurrayLevy(params));
        this.s.add(new TaxesSaNaturalResourcesLevy(params));
        //s.add(new TaxesSaWaterRates(params));
        //s.add(new TaxesSaSewerRates(params));
        if (this.s.is_known) {
            this.update(this.s.amount);
        }
    }
}
