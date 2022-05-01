import { Params} from "./param";
import { ExpenseAnnual } from "./expense";

export class CouncilRates extends ExpenseAnnual {

    constructor(params: Params) {
        super()
        //e.g. from salisbury
        const NRL=36.50;
        const RATES_RATE=0.003879 
        const RATES_MIN=500;
        if (params.property.value) {
            let base_rate = RATES_RATE*params.property.value;
            if (base_rate < RATES_MIN) base_rate = RATES_MIN;
            const amount = NRL + base_rate;
            this.update(amount);
        }
    }
    
}
