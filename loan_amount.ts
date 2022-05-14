import { Expense,  UpfrontExpense } from "./expense";
import { Params } from "./param";
import { GrantAmount } from "./grant_amount";
import { StampDuty } from "./stamp_duty";
import { TransferReg } from "./transfer_reg";


export class LoanAmount extends Expense {

    public grants :GrantAmount;
    public duty :StampDuty;
    public transfer_reg :TransferReg;

    constructor(params: Params) {
        super("Loan Amount",
             "The amount of money that needs to be borrowed to purchase the property.")
        this.grants = new GrantAmount(params);
        this.duty = new StampDuty(params) ;
        this.transfer_reg = new TransferReg(params);

        const value = new UpfrontExpense("Property Value",
                                         "The amount paid for the property purchased.",
                                         params.property.value);
        const deposit = new UpfrontExpense("Deposit",
                                           "Loan deposit",
                                           params.config.deposit);

        this.add(value)
        this.sub(deposit);
        this.sub(this.grants);
        this.add(this.duty);
        this.add(this.transfer_reg);
        if (params.config.new_home) {

            const build = new UpfrontExpense("Build Cost",
                                               "Construction cost to build new house.",
                                               params.new_home.build_cost);

            const establish = new UpfrontExpense("Establish Cost",
                                                 "Additional costs to establish the house.",
                                                 params.new_home.establish_cost);

            this.add(build);
            this.add(establish);
        }
    }

}
