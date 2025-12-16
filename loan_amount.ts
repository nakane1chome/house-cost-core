/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Expense,  UpfrontExpense } from "./expense";
import { Params } from "./param";
import { GrantAmount } from "./grant_amount";
import { StampDuty } from "./stamp_duty";
import { JapanContractStampDuty,  JapanPropertyAcquisitionTax, JapanTitleRegistrationStampDuty } from "./japan_stamp_duty";
import { TransferReg } from "./transfer_reg";


export class LoanAmount extends Expense {

    //public grants :GrantAmount;
    //public duty :StampDuty;
    //public transfer_reg :TransferReg;
    
    public value: UpfrontExpense;
    public deposit: UpfrontExpense;

    constructor(params: Params) {
        super("Loan Amount",
             "The amount of money that needs to be borrowed to purchase the property.")

        this.value = new UpfrontExpense("Property Value",
                                         "The amount paid for the property purchased.",
                                         params.property.value,
                                         params.config.loan_term,
                                         params.config.hold_term);
        
        this.deposit = new UpfrontExpense("Deposit",
                                           "Loan deposit",
                                           params.config.deposit,
                                           params.config.loan_term,
                                           params.config.hold_term);

        this.add(this.value)
        this.sub(this.deposit);

        
        if (params.location.country == "JPN") {
            this.add(new JapanContractStampDuty(params));            
            this.add(new JapanPropertyAcquisitionTax(params));            
            this.add(new JapanTitleRegistrationStampDuty(params));
        }
        if (params.location.country == "AUS") {
            this.sub(new GrantAmount(params));
            this.add(new StampDuty(params) );
            this.add(new TransferReg(params));
        }

        if (params.config.new_home) {

            const build = new UpfrontExpense("Build Cost",
                                             "Construction cost to build new house.",
                                             params.new_home.build_cost,
                                             params.config.loan_term,
                                             params.config.hold_term);

            const establish = new UpfrontExpense("Establish Cost",
                                                 "Additional costs to establish the house.",
                                                 params.new_home.establish_cost,
                                                 params.config.loan_term,
                                                 params.config.hold_term);


            this.add(build);
            this.add(establish);
        }
    }

}
