/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/


// https://www.ato.gov.au/rates/individual-income-tax-rates/

// Resident tax rates 2022–23
// Taxable income
// 
// Tax on this income
// 
// 0 – $18,200
// 
// Nil
// 
// $18,201 – $45,000
// 
// 19 cents for each $1 over $18,200
// 
// $45,001 – $120,000
// 
// $5,092 plus 32.5 cents for each $1 over $45,000
// 
// $120,001 – $180,000
// 
// $29,467 plus 37 cents for each $1 over $120,000
// 
// $180,001 and over
// 
// $51,667 plus 45 cents for each $1 over $180,000
// 
// The above rates do not include the Medicare levy of 2%.

import {find_bracket, find_upper_bound} from "./utils"

export class TaxBracket {

    private static _TAX_BRACKETS = [
        [18201,0],
        [45001,0.19],
        [120001,0.325],
        [180001,0.37],
        [0, 0.45]
    ];
    private static _MEDICARE_LEVY = 0.02;

    /** Return the taxable percentage for a given income */
    static GetPercent( income: number) : number {
        console.log("GET PERCENT TAX!",income);
        const medicare_levy = income < 23365 ? 0 : TaxBracket._MEDICARE_LEVY;
        return find_bracket(income, TaxBracket._TAX_BRACKETS) + medicare_levy;
    }

    /** Return the marginal tax for a given amount on top of a base income */
    static MarginalTax( base_income : number,  additional_income: number) : number {
        console.log("BASE INCOME!", base_income)
        console.log("ADDITIONAL INCOME", additional_income)
        
        const r0 = TaxBracket.GetPercent(base_income);
        const r1 = TaxBracket.GetPercent(base_income + additional_income);

        if (r0 == r1) {
            console.log("MARGINAL DONE LOWER!",r0, additional_income, r0*additional_income)
            return r0*additional_income;
        } 
        
        const upper_bound = find_upper_bound(base_income, TaxBracket._TAX_BRACKETS);
        if ((base_income + additional_income) > upper_bound) {
            const income_for_next_bracket = ((base_income + additional_income) - upper_bound);
            const income_in_this_bracket = additional_income - income_for_next_bracket;
            if (income_in_this_bracket == 0)  {
                console.log("MARGINAL DONE UPPER!",r1, income_for_next_bracket, r1*income_for_next_bracket)
                return r1*additional_income;
            } else {
                console.log("UPPER BOUND!", upper_bound, "This Bracket", income_in_this_bracket, "Next Bracket", income_for_next_bracket)
                console.log("MARGINAL TAX!",r0,r1, upper_bound, income_in_this_bracket, income_for_next_bracket);
                return income_in_this_bracket*r0 + TaxBracket.MarginalTax(base_income+income_in_this_bracket, income_for_next_bracket);
            }
        } else {
            console.log("MARGINAL DONE UPPER!",r1, additional_income, r1*additional_income)
            return r1*additional_income;
        }

    }

}
