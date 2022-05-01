import {BaseAmount } from "./expense";
import { Params } from "./param";
import { GrantAmount } from "./grant_amount";
import { StampDuty } from "./stamp_duty";
import { TransferReg } from "./transfer_reg";

export class LoanAmount extends BaseAmount {

    public grants :GrantAmount;
    public duty :StampDuty;
    public transfer_reg :TransferReg;

    constructor(params: Params) {
        super()
        this.grants = new GrantAmount(params);
        this.duty = new StampDuty(params) ;
        this.transfer_reg = new TransferReg(params);

        let base = 0
            + params.property.value 
            - params.config.deposit 
            - this.grants.amount
            + this.duty.amount
            + this.transfer_reg.amount;
        console.log( "LOANAMOUNT: ",params.property.value , params.config.deposit, this.grants.amount , this.duty.amount ,this.transfer_reg.amount);
        if (params.config.new_home) {
            base += params.new_home.build_cost + params.new_home.establish_cost;
        }

        this.update( base);
    }

}
