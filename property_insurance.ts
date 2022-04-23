import { ParamView, ParamRow, ParamTable } from "./param";
import { ExpenseAnnual } from "./expense_annual";

export class PropertyInsurance extends ExpenseAnnual {

    private value : ParamView<number>;
    
    // rough guess From coles insurance
    private static _BASE = 300;
    private static _START = 150000;
    private static _SLOPE = 130.0 / 100000.0;
    private  _a:number;

    constructor(t: ParamTable) {
        super(t)
        this._a = 0;
        this.value = new ParamView<number>(this, t, "property.value");
    }

    is_known(): boolean {
        return true;
    }

    update(p: ParamRow): void {
        super.update(p);
        const r = this.value.get() - PropertyInsurance._START;
        if (r < 0) {
            this._a =  PropertyInsurance._BASE;
        } else {
            this._a = PropertyInsurance._BASE + PropertyInsurance._SLOPE*r;
        }
    }
    annual(): number  {return this._a;}


}

