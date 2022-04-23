import { ComputedAmount } from "./computed_amount";
import { ParamRow, ParamTable, ParamView } from "./param";
import { GrantAmount } from "./grant_amount";
import { StampDuty } from "./stamp_duty";
import { TransferReg } from "./transfer_reg";

export class LoanAmount extends ComputedAmount {

    public prop_value :ParamView<number>;
    public deposit :ParamView<number>;
    public new_home :ParamView<boolean>;
    public build_cost :ParamView<number>;
    public establish_cost :ParamView<number>;

    public grants :GrantAmount;
    public duty :StampDuty;
    public transfer_reg :TransferReg;

    private _amounts: Array<ComputedAmount>;

    constructor(t: ParamTable) {
        super(t)

        this.prop_value = new ParamView<number>(this,t,"property.value");
        this.deposit = new ParamView<number>(this,t,"config.deposit");
        this.new_home = new ParamView<boolean>(this,t,"config.new_home");
        this.build_cost = new ParamView<number>(this,t,"new_home.build_cost");
        this.establish_cost = new ParamView<number>(this,t,"new_home.establish_cost");

        this.grants = new GrantAmount(t);
        this.duty = new StampDuty(t) ;
        this.transfer_reg = new TransferReg(t);
        
        this._amounts = [];
        this._amounts.push(this.grants);
        this._amounts.push(this.duty);
        this._amounts.push(this.transfer_reg);
    }

    is_known(): boolean {
        return true;
    }
    update(p: ParamRow): void {
        super.update(p);
        this._amounts.forEach(ee => ee.update(p))
    }
    get(): number {
        let base = this.prop_value.get() - this.deposit.get() - this.grants.get() + this.duty.get() + this.transfer_reg.get();
        console.log( "LOANAMOUNT: ",this.prop_value.get() ,this.deposit.get() ,this.grants.get() , this.duty.get() ,this.transfer_reg.get());
        if (this.new_home.get()) {
            base += this.build_cost.get() + this.establish_cost.get();
        }
        return base;
    }

}
