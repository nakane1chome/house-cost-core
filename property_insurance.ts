import { Params } from "./param";
import { ExpenseAnnual } from "./expense";

export class PropertyInsurance extends ExpenseAnnual {

    // rough guess From coles insurance
    private static _BASE = 300;
    private static _START = 150000;
    private static _SLOPE = 130.0 / 100000.0;

    constructor(params: Params) {
        super()
        const r = params.property.value - PropertyInsurance._START;
        let amount = 0;
        if (r < 0) {
            amount =  PropertyInsurance._BASE;
        } else {
            amount = PropertyInsurance._BASE + PropertyInsurance._SLOPE*r;
        }
        this.update(amount);
    }
}

