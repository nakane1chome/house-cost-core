import { ParamClient , ParamTable, ParamView} from "./param";

export abstract class ComputedAmount extends ParamClient {

    // Get the computed value
    abstract get(): number;
    
    // do we have enough information for this expense?
    abstract is_known() : boolean;
    
       
} 

export class ParamAmount extends ComputedAmount {

    private view : ParamView<number>;

    constructor(t: ParamTable, name: string) {
        super(t);
        this.view = new ParamView<number>(this, t, name);
    }

    // Get the computed value
    get(): number {
        return this.view.get();
    }
    
    // do we have enough information for this expense?
    is_known() : boolean {
        return true;
    }
    
       
} 

