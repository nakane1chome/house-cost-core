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
import { CommercialGST } from "./commercial_gst";

export class TransactionCosts extends Expense {

    constructor(params: Params) {
        super("Transaction Costs",
             "The costs of  purchasing the property that can be rolled into the loan.")
        
        if (params.location.country == "JPN") {
            this.add(new JapanContractStampDuty(params));            
            this.add(new JapanPropertyAcquisitionTax(params));            
            this.add(new JapanTitleRegistrationStampDuty(params));
        }
        if (params.location.country == "AUS") {
            this.sub(new GrantAmount(params));
            this.add(new StampDuty(params) );
            this.add(new TransferReg(params));
            if (params.property.commercial) {
                this.add(new CommercialGST(params));
            }
            if (params.purchase_costs.conveyancing > 0) {
                this.add(new UpfrontExpense("Conveyancing",
                    "Legal fees for property transfer.",
                    params.purchase_costs.conveyancing,
                    params.config.loan_term, params.config.hold_term));
            }
            if (params.purchase_costs.inspections > 0) {
                this.add(new UpfrontExpense("Building Inspections",
                    "Pre-purchase property inspections.",
                    params.purchase_costs.inspections,
                    params.config.loan_term, params.config.hold_term));
            }
        }
        
    }
}

export class NewHomeCosts extends Expense {
    constructor(params: Params) {
        super("New Home Costs",
             "The costs of building that can be rolled into the loan.")

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


export class LoanAmount extends Expense {

    //public grants :GrantAmount;
    //public duty :StampDuty;
    //public transfer_reg :TransferReg;
    
    public value: UpfrontExpense;
    public deposit: UpfrontExpense;
    public transaction_costs: TransactionCosts;

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
        
        this.transaction_costs = new TransactionCosts(params);

        this.add(this.value)
        this.sub(this.deposit);
        this.add(this.transaction_costs);

        if (params.config.new_home) {
            
            this.add(new NewHomeCosts(params));
        }
    }

}
