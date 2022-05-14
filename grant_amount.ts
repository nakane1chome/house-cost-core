import { Params } from "./param";
import { Expense } from "./expense";

export class GrantAmount extends Expense {

    constructor(params: Params) {
        super("Government Grants",
              "Funding provided by the government to aid property purchase.");
        let amount = 0;
        if (params.config.first_home) {
            switch (params.config.state) {
                case "SA" :      
                    // http://www.revenuesa.sa.gov.au/__data/assets/pdf_file/0019/7309/FHOG-Table.pdf
                    // http://www.revenuesa.sa.gov.au/__data/assets/pdf_file/0019/7309/FHOG-TABLE.pdf
                    if (params.property.value > 575000) {
                        amount = 0;
                    } else {
                        amount = params.config.new_home ? 15000 : 5000;
                    }
                    this.update_upfront(amount)
            }
        } else {
            this.update_upfront(0)
        }
    }
}
