/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params, Purchaser } from "./param";
import { PostcodeToState } from "./aus_state";
import * as fs from "fs";
import * as path from "path";

export function ConfigCurrency(country: string) : string {
    if (country == "JPN") {
        return "￥";
    }
    if (country == "AUS") {
        return "$";
    }
    return "";
}

async function loadRatesData() {
    try {
        if (typeof window == 'undefined') {
            // Node.js environment
            const ratesContent = fs.readFileSync(path.join(__dirname, "rates.json"), 'utf8');
            console.log(`config: Loaded rates from: file`);
            return JSON.parse(ratesContent);
        } else {
            const url = `${window.location.protocol}//${window.location.host}/js/rates.json`
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}: ${url}`);
            }
            console.log(`config: Loaded rates from: server`);
            return await response.json();
        }    
    } catch (error) {
        console.warn('config: Could not load rates.json, using fallback rates:', error);
        // Fallback rates
        return {
            rates: {
                AUS: { mortgageRate: 6.0, savingsRate: 3.5, appreciationRate: 4.0 },
                JPN: { mortgageRate: 1.9, savingsRate: 0.1, appreciationRate: 2.0 }
            }
        };
    }
}

export function ConfigRefresh(p: Params): void {

    p.location.currency=ConfigCurrency(p.location.country)
    if (p.location.country == "AUS") {
        p.location.state = PostcodeToState(p.location.postcode);
    }
    if (p.location.country == "JPN") {
        p.location.state = "TOKYO";        
    }
    console.log(`config: refresh ${p.location.country} /  ${p.location.currency}  / ${p.location.postcode} / ${p.location.state} `)
    
}

export async function ConfigLoad(p: Params, country: string, country_fixed: boolean, postcode?: string): Promise<void> {

    const ratesData = await loadRatesData();

    p.location.country=country;
    p.location.fixed=country_fixed;
    p.location.currency=ConfigCurrency(country)

    if (country == "AUS") {
        p.property.value =  480000; // https://www.sa.gov.au/topics/planning-and-property/buying-a-home-or-property/researching-a-property/median-house-sales-by-quarter
        p.location.postcode =postcode || "5000";
        //p.location.state = PostcodeToState(p.location.country, p.location.postcode);
        p.location.state = PostcodeToState(p.location.postcode);

        p.config.deposit = p.property.value*0.20; // 20%
        p.config.loan_term = 25;
        p.config.hold_term = 25;
        p.config.first_home = false;
        p.config.new_home = false;
        
        p.new_home.build_cost = 200000;
        p.new_home.establish_cost = 40000;

        p.purchasers.push(new Purchaser());
        p.purchasers.push(new Purchaser());
        p.purchasers[0].income = 82440; // ave male weekly total earn * 52, http://www.abs.gov.au/ausstats/abs@.nsf/Latestproducts/6302.0Main%20Features5Nov%202018?opendocument&tabname=Summary&prodno=6302.0&issue=Nov%202018&num=&view=
        //p.purchasers[2].income2 = 0;
        // Use cached mortgage rate from rates.json
        p.economy.loan_rate = ratesData.rates.AUS.mortgageRate;
        p.economy.save_rate = ratesData.rates.AUS.savingsRate;
        p.economy.appreciation_rate = ratesData.rates.AUS.appreciationRate;
    } 


    if (country == "JPN") {
        p.location.postcode = "100-0005";
        p.location.state = "TOKYO";

        p.property.value =  50000000;
        p.config.deposit = p.property.value*0.20; // 20%
        p.config.loan_term = 35;
        p.config.hold_term = 35;
        p.config.first_home = false;
        p.config.new_home = false;
        
        p.new_home.build_cost = 20000000;
        p.new_home.establish_cost = 4000000;

        p.purchasers.push(new Purchaser());
        p.purchasers.push(new Purchaser());
        p.purchasers[0].income = 6600000; // https://www.statista.com/statistics/1556933/japan-average-annual-income-working-households/
        //p.purchasers[2].income2 = 0;

        p.economy.loan_rate = ratesData.rates.JPN.mortgageRate;
        p.economy.save_rate = ratesData.rates.JPN.savingsRate;
        p.economy.appreciation_rate = ratesData.rates.JPN.appreciationRate; 
    } 

}
