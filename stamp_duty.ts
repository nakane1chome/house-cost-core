import { Params } from "./param";
import { Expense } from "./expense";

export class StampDuty extends Expense {

    static SA_STAMP_BASE = 11330; // 
    static SA_STAMP_VAR = 5; // pct
    static SA_STAMP_VAR_OFFSET = 300000; // $

    constructor(params: Params) {
        super("Stamp Duty",
             "The one off tax that needs to be paid when the property is purchased.");
        let amount = 0;
        switch (params.config.state) {
            case "SA" :      
                if (params.property.value <= StampDuty.SA_STAMP_VAR_OFFSET) 
                    amount = StampDuty.SA_STAMP_BASE;
                else
                    amount = StampDuty.SA_STAMP_BASE 
                    + ((params.property.value 
                        - StampDuty.SA_STAMP_VAR_OFFSET) 
                        * StampDuty.SA_STAMP_VAR)/100;
                this.update_upfront(amount);
        }
    }
}

