import { ParamView, ParamRow, ParamTable } from "./param";
import { ComputedAmount } from "./computed_amount";

export class  StampDuty extends ComputedAmount {

    private value : ParamView<number>;
    private state : ParamView<string>;

    static SA_STAMP_BASE = 11330; // 
    static SA_STAMP_VAR = 5; // pct
    static SA_STAMP_VAR_OFFSET = 300000; // $

    constructor(t: ParamTable) {
        super(t);
        this.value = new ParamView<number>(this,t,"property.value");
        this.state = new ParamView<string>(this,t,"config.state");
    }



    is_known(): boolean {
        return this.state.is_known() && this.state.get()== "SA" ;
    }
    
    get(): number  {
        if (this.is_known()) {
            switch (this.state.get()) {
                case "SA" :      
                if (this.value.get() <= StampDuty.SA_STAMP_VAR_OFFSET) 
                    return  StampDuty.SA_STAMP_BASE;
                else
                    return  StampDuty.SA_STAMP_BASE + ((this.value.get() - StampDuty.SA_STAMP_VAR_OFFSET) * StampDuty.SA_STAMP_VAR)/100;
                default : return 0;
            }
        }
        return 0;
        
    }

    print(print_fn : any, details: boolean) : void {
        //
    }

}

