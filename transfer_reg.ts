import { Params } from "./param";
import { Expense } from "./expense";

// http://www.sa.gov.au/subject/Housing,+property+and+land/Customer+entry+points+and+contacts/Land+services+industry+entry+point/Fees+and+charges
// http://www.sa.gov.au/upload/franchise/Housing,%20property%20and%20land/LSG/LSG_transfer_registration_fees_2013_2014.pdf
export class  TransferReg extends Expense {
    
    constructor(params: Params) {
        super("Transfer Registration Fee",
             "The fee paid to tranfer the registration of the property title at purchase.")
        let amount = 0;
        switch (params.config.state) {
            case "SA" :
                if (params.property.value<=5000)
                    amount=148;
                else if (params.property.value<=20000)
                    amount=163;
                else if (params.property.value<=40000)
                    amount=180;
                else {
                    const rank=params.property.value/10000;
                    amount=252 + (rank-4)*73.5;
                }
                this.update_upfront(amount)
        }
    }
}
