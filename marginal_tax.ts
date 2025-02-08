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
        for (let i=0; i< TaxBracket._TAX_BRACKETS.length;i++) {
            if (income < TaxBracket._TAX_BRACKETS[i][0]) {
                return TaxBracket._TAX_BRACKETS[i][1]  + medicare_levy;
            }
        }
        return TaxBracket._TAX_BRACKETS[TaxBracket._TAX_BRACKETS.length-1][1]  + medicare_levy;
    }
    
    /** Return the next bracket boundary, the top income in this  bracket */
    static UpperBound( income: number) : number {
        for (let i=0; i<TaxBracket._TAX_BRACKETS.length;i++) {
            if (income < TaxBracket._TAX_BRACKETS[i][0]) {
                return TaxBracket._TAX_BRACKETS[i][0]-1;
            }
        }
        return income;
    }

    /** Return the marginal tax for a given amount on top of a base income */
    static MarginalTax( base_income : number,  additional_income: number) : number {
        const r0 = TaxBracket.GetPercent(base_income);
        const r1 = TaxBracket.GetPercent(base_income+additional_income);

        if (r0==r1) {
            console.log("MARGINAL DONE TAX!",r0, additional_income)
            return r0*additional_income;
        } 
        
        const upper_bound = TaxBracket.UpperBound(base_income);
        const income_for_next_bracket = ((base_income + additional_income) - upper_bound) - base_income;
        const income_in_this_bracket = additional_income - income_for_next_bracket;
        console.log("MARGINAL TAX!",r0,r1, upper_bound, income_in_this_bracket, income_for_next_bracket);
        return income_in_this_bracket*r0 + TaxBracket.MarginalTax(base_income+income_in_this_bracket, income_for_next_bracket);

    }

}
