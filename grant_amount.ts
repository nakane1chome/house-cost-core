import { Params } from "./param";
import { BaseAmount } from "./expense";

export class GrantAmount extends BaseAmount {

    constructor(params: Params) {
        super();
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
                    this.update(amount)
            }
        } else {
            this.update(0)
        }
    }
}
