import { ParamTable, ParamSchema } from "./param";

export function ConfigLoad(t: ParamTable):void {
    t.add_param(new ParamSchema("property.value",480000)); // https://www.sa.gov.au/topics/planning-and-property/buying-a-home-or-property/researching-a-property/median-house-sales-by-quarter
    t.add_param(new ParamSchema("property.postcode",5000));
    t.add_param(new ParamSchema("config.deposit",96000)); // 20%
    t.add_param(new ParamSchema("economy.loan_rate",3.8));  // https://www.canstar.com.au/compare/first-home-buyer-home-loans/?profile=First+Home+Buyer+350k&amount=390000&purpose=First+Home+Buyer&repayment_type=P%2BI&state=SA&Loan+Type%5B%5D=Variable&provider_link%5B%5D=Yes%2C+just+compare+results+with+links
    t.add_param(new ParamSchema("economy.save_rate",2.75)); // https://www.canstar.com.au/term-deposits/
    t.add_param(new ParamSchema("config.term",25));
    t.add_param(new ParamSchema("config.first_home",0));
    t.add_param(new ParamSchema("config.state","SA"));
    t.add_param(new ParamSchema("config.new_home",0));
    t.add_param(new ParamSchema("new_home.build_cost",200000));
    t.add_param(new ParamSchema("new_home.establish_cost",40000));

    t.add_param(new ParamSchema("purchaser.count",1));
    t.add_param(new ParamSchema("purchaser.income1",82440)); // ave male weekly total earn * 52, http://www.abs.gov.au/ausstats/abs@.nsf/Latestproducts/6302.0Main%20Features5Nov%202018?opendocument&tabname=Summary&prodno=6302.0&issue=Nov%202018&num=&view=
    t.add_param(new ParamSchema("purchaser.income2",0));
}
