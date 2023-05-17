/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params, Purchaser } from "./param";
import { PostcodeToState } from "./aus_state"

export function ConfigLoad(p: Params, postcode?: string):void {
    p.property.value = 480000; // https://www.sa.gov.au/topics/planning-and-property/buying-a-home-or-property/researching-a-property/median-house-sales-by-quarter

    p.property.postcode = parseInt(postcode ||  "5000");

    p.config.deposit = 96000; // 20%
    p.config.loan_term = 25;
    p.config.hold_term = 25;
    p.config.first_home = false;
    p.config.state = PostcodeToState(p.property.postcode);
    p.config.new_home = false;

    p.new_home.build_cost = 200000;
    p.new_home.establish_cost = 40000;

    p.purchasers.push(new Purchaser());
    p.purchasers.push(new Purchaser());
    p.purchasers[0].income = 82440; // ave male weekly total earn * 52, http://www.abs.gov.au/ausstats/abs@.nsf/Latestproducts/6302.0Main%20Features5Nov%202018?opendocument&tabname=Summary&prodno=6302.0&issue=Nov%202018&num=&view=
    //p.purchasers[2].income2 = 0;
    //https://www.rba.gov.au/statistics/interest-rates/
    p.economy.loan_rate = 5.0;  // https://www.canstar.com.au/compare/first-home-buyer-home-loans/?profile=First+Home+Buyer+350k&amount=390000&purpose=First+Home+Buyer&repayment_type=P%2BI&state=SA&Loan+Type%5B%5D=Variable&provider_link%5B%5D=Yes%2C+just+compare+results+with+links
    //p.economy.save_rate = 2.75; // https://www.canstar.com.au/term-deposits/
    //https://www.rba.gov.au/statistics/cash-rate/
    p.economy.save_rate = 3.1; // https://www.canstar.com.au/term-deposits/


}
