import { ParamView, ParamRow, ParamTable } from "./param";
import { NodeInfo } from "./node_info";
import { ExpenseAnnual } from "./expense_annual";
import { ExpenseSet } from "./expense_set";
import { TaxesSaWaterRates, TaxesSaSewerRates } from "./water";


export class TaxesSaEsLevy extends ExpenseAnnual {

    private _a: number;
    private static _ESL_BASE = 50.0;
    private static _ESL_RATE = 0.000260;

    private node_info = new NodeInfo("Emergency Services Levy (SA)",
                            new Date(2014,1,1),
                            "Assumes Residental Land in Regional Area 4 (Adelaide and suburbs)");
    
    private value : ParamView<number>;
    private state : ParamView<string>;

    constructor(t: ParamTable) {
        super(t)
        this.node_info.set_link("http://www.revenuesa.sa.gov.au/taxes-and-duties/emergency-services-levy");
        this.value = new ParamView<number>(this,t,"property.value");
        this.state = new ParamView<string>(this,t,"config.state");
        this._a = 0;
    }

    is_known(): boolean {
        return this.state.is_known() && this.state.get()== "SA" ;
    }

    update(p: ParamRow): void {
        super.update(p);
        if (this.is_known()) {
            this._a = TaxesSaEsLevy._ESL_BASE + TaxesSaEsLevy._ESL_RATE*this.value.get();
        }
    }

    annual(): number {
        return this._a;
    }
}


export class TaxesSaMurrayLevy extends ExpenseAnnual{

    private static _MURRAY_LEVY=38.0;

    private node_info = new NodeInfo("River Murray Levy (SA)",
            new Date(2014,1,1),
            "Catagory 1 Residential");

    private state : ParamView<string>;

    constructor(t: ParamTable) {
        super(t);
        this.state = new ParamView<string>(this,t,"config.state");
        this.node_info.set_link("http://www.environment.sa.gov.au/managing-natural-resources/river-murray/water-charges-and-how-they-are-spent/save-the-river-murray-levy");
    }

    is_known(): boolean {
        return this.state.is_known() && this.state.get()== "SA" ;
    }

    annual(): number  {
        return this.is_known()? TaxesSaMurrayLevy._MURRAY_LEVY : 0; 
    }

}

export class TaxesSaNaturalResourcesLevy extends ExpenseAnnual {

    static _NR_LEVY=36.50;

    private node_info = new NodeInfo(" NaturalResources Levy (SA)",new Date(2014,1,1),"Catagory 1 Residential");
    private state : ParamView<string>;

    constructor(t: ParamTable) {
        super(t)
        this.state = new ParamView<string>(this,t,"config.state");
        this.node_info.set_link("http://www.portenf.sa.gov.au/webdata/resources/files/NRM_Brochure_(new)_WEB.pdf");
    }

    is_known(): boolean{
        return this.state.is_known() && this.state.get()== "SA" ;
    }

    annual(): number {
        return this.is_known()? TaxesSaNaturalResourcesLevy._NR_LEVY : 0; 
    }

}



export function NewTaxesSa(t: ParamTable): ExpenseSet {

    const s = new ExpenseSet(t);
    s.add(new TaxesSaEsLevy(t));
    s.add(new TaxesSaMurrayLevy(t));
    s.add(new TaxesSaNaturalResourcesLevy(t));
    s.add(new TaxesSaWaterRates(t));
    s.add(new TaxesSaSewerRates(t));


    return s;
}
