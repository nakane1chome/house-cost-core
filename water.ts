import { Params } from "./param";
import { NodeInfo } from "./node_info";
import { ExpenseAnnual } from "./expense";
import { ExpenseSet } from "./expense";

const _SEWER_MIN=336;
const _WATER_MIN=293;

export class TaxesSaSewerRates extends ExpenseAnnual {


    public node_info = new NodeInfo("Sewerage Service (SA)",new Date(2014,1,1),"Minimum charge, residential");

    constructor(params: Params) {
        super()
        if ( params.config.state == "SA" ) {
            this.update( _SEWER_MIN);
            this.node_info.set_link("http://www.sawater.com.au/NR/rdonlyres/A84D7160-EF94-4536-A101-35ECE80472A4/0/201213FeesandCharges.pdf");
        }
    }
}


export class  TaxesSaWaterRates  extends ExpenseAnnual  {

    public node_info = new NodeInfo("Water Supply (SA)",new Date(2014,1,1),"Minimum charge, residential");

    constructor(params: Params) {
        super()
        if (params.config.state == "SA" ) {
            const amount = _WATER_MIN; 
            this.update(amount);
            this.node_info.set_link("http://www.sawater.com.au/NR/rdonlyres/A84D7160-EF94-4536-A101-35ECE80472A4/0/201213FeesandCharges.pdf");
        }
    }

}

export class NewWaterSa extends ExpenseAnnual {
    
    public s: ExpenseSet;

    constructor(params: Params) {
        super()
        this.s = new ExpenseSet();
        this.s.add(new TaxesSaWaterRates(params));
        this.s.add(new TaxesSaSewerRates(params));
        if (this.s.is_known) {
            this.update(this.s.amount);
        }
    }
}
