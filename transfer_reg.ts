import { ParamView, ParamRow, ParamTable } from "./param";
import { ComputedAmount } from "./computed_amount";

// http://www.sa.gov.au/subject/Housing,+property+and+land/Customer+entry+points+and+contacts/Land+services+industry+entry+point/Fees+and+charges
// http://www.sa.gov.au/upload/franchise/Housing,%20property%20and%20land/LSG/LSG_transfer_registration_fees_2013_2014.pdf
export class  TransferReg extends ComputedAmount {

    private value : ParamView<number>;
    private state : ParamView<string>;

    constructor(t: ParamTable) {
        super(t);
        this.value = new ParamView<number>(this,t,"property.value");
        this.state = new ParamView<string>(this,t,"config.state");
    }

    is_known(): boolean {
        return this.state.is_known() && this.state.get()== "SA" ;
    }
    
    get(): number  {
        const value = this.value.get();
        if (this.is_known()) {
            switch (this.state.get()) {
                case "SA" :      
                    if (value<=5000)
                        return 148;
                    else if (value<=20000)
                        return 163;
                    else if (value<=40000)
                        return 180;
                    else {
                        const rank=value/10000;
                        return 252 + (rank-4)*73.5;
                    }
            }

        }
        return 0;
    }

    print(print_fn : any, details: string) : void {
        
    }

}
