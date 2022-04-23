import { ParamView, ParamRow, ParamTable } from "./param";
import { ExpenseAnnual } from "./expense_annual";

export class CouncilRates extends ExpenseAnnual {

    private _a : number;
    private value : ParamView<number>;
    private postcode : ParamView<number>;

    constructor(t: ParamTable) {
        super(t)
        this.value = new ParamView<number>(this, t, "property.value");
        this.postcode  = new ParamView<number>(this, t, "property.postcode");
        this._a = 0;
    }
    
    is_known() : boolean {
        return true;
    }

    update(p: ParamRow) : void {
        super.update(p);
        //e.g. from salisbury
        const NRL=36.50;
        const RATES_RATE=0.003879 
        const RATES_MIN=500;

        let base_rate = RATES_RATE*this.value.get();
        if (base_rate < RATES_MIN) base_rate = RATES_MIN;
        this._a = NRL + base_rate;

    }

    annual() : number {
        return this._a;
    }

}
