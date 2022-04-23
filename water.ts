import { ParamView, ParamRow, ParamTable } from "./param";
import { NodeInfo } from "./node_info";
import { ExpenseAnnual } from "./expense_annual";
import { ExpenseSet } from "./expense_set";


export class TaxesSaSewerRates extends ExpenseAnnual {

    private static _SEWER_MIN=336;

    private node_info = new NodeInfo("Sewerage Service (SA)",new Date(2014,1,1),"Minimum charge, residential");
    private state : ParamView<string>;

    constructor(t: ParamTable) {
        super(t)
        this.node_info.set_link("http://www.sawater.com.au/NR/rdonlyres/A84D7160-EF94-4536-A101-35ECE80472A4/0/201213FeesandCharges.pdf");
        this.state = new ParamView<string>(this,t,"config.state");
    }

    is_known(): boolean {
        return this.state.is_known() && this.state.get()== "SA" ;
    }

    annual(): number {
        return this.is_known()? TaxesSaSewerRates._SEWER_MIN : 0; 
    }
}


export class  TaxesSaWaterRates  extends ExpenseAnnual  {

    private node_info = new NodeInfo("Water Supply (SA)",new Date(2014,1,1),"Minimum charge, residential");
    private static _WATER_MIN=293;
    private state : ParamView<string>;

    constructor(t: ParamTable) {
        super(t)
        this.node_info.set_link("http://www.sawater.com.au/NR/rdonlyres/A84D7160-EF94-4536-A101-35ECE80472A4/0/201213FeesandCharges.pdf");
        this.state = new ParamView<string>(this,t,"config.state");

    }

    is_known(): boolean {
        return this.state.is_known() && this.state.get()== "SA" ;
    }

    annual(): number {
        return this.is_known()? TaxesSaWaterRates._WATER_MIN : 0; 
    }

}

export function NewWaterSa(t: ParamTable): ExpenseSet {

    const s = new ExpenseSet(t);
    s.add(new TaxesSaWaterRates(t));
    s.add(new TaxesSaSewerRates(t));

    return s;
}
