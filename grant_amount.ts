import { ParamTable, ParamView } from "./param";
import { ComputedAmount } from "./computed_amount";

export class GrantAmount extends ComputedAmount {

    private first_home : ParamView<number>;
    private new_home   : ParamView<boolean>;
    private postcode   : ParamView<number>;
    private state      : ParamView<string>;
    private value      : ParamView<number>;

    constructor(t: ParamTable) {
        super(t)
        this.first_home = new ParamView<number>(this, t, "config.first_home") ;
        this.new_home   = new ParamView<boolean>(this, t, "config.new_home")   ;
        this.postcode   = new ParamView<number>(this, t, "property.postcode") ;
        this.state      = new ParamView<string>(this, t, "config.state")      ;
        this.value      = new ParamView<number>(this, t, "property.value")     ;
    }

    is_known(): boolean {
        return this.state.is_known()  && this.first_home.is_known();
    }

    get(): number  {
        if (this.is_known()) {
            if (this.first_home.get()) {
                switch (this.state.get()) {
                    // http://www.revenuesa.sa.gov.au/__data/assets/pdf_file/0019/7309/FHOG-Table.pdf
                    // http://www.revenuesa.sa.gov.au/__data/assets/pdf_file/0019/7309/FHOG-TABLE.pdf
                    case "SA" :      
                    if (this.value.get() > 575000) return 0;
                    return this.new_home.get() ? 15000 : 5000;
                    default :
                    return 0;
                }
            }
        }
        return 0;
    }
    
}
