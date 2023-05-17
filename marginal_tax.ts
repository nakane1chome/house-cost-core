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
        [18201,0.19],
        [45001,0.325],
        [120001,0.37],
        [180001,0.45]
    ];
    private static _MEDICARE_LEVY = 0.02;

    /** Return the taxable percentage for a given income */
    static GetPercent( income: number) : number {
        if (income < TaxBracket._TAX_BRACKETS[0][0])  return 0.0;
        for (let i=0; i< TaxBracket._TAX_BRACKETS.length-1;i++) {
            if (income < TaxBracket._TAX_BRACKETS[i+1][0])    return TaxBracket._TAX_BRACKETS[i][1];
        }
        return TaxBracket._TAX_BRACKETS[TaxBracket._TAX_BRACKETS.length-1][1]  + TaxBracket._MEDICARE_LEVY;
    }
    
    /** Return the next bracket boundary, the top income in this  bracket */
    static UpperBound( income: number) : number {
        for (let i=0; i<TaxBracket._TAX_BRACKETS.length;i++) {
            if (income < TaxBracket._TAX_BRACKETS[i][0])  return TaxBracket._TAX_BRACKETS[i][0]-1;
        }
        return Infinity;
    }

    /** Return the marginal tax for a given amount on top of a base income */
    static MarginalTax( base_income : number,  additional_income: number) : number {
        const r0 = TaxBracket.GetPercent(base_income);
        const r1 = TaxBracket.GetPercent(base_income+additional_income);

        if (r0==r1) {
            return r0*additional_income;
        } 

        const upper_bound = TaxBracket.UpperBound(base_income);
        const upper_bracket = base_income + additional_income - upper_bound;
        return (additional_income-upper_bracket)*r0 + TaxBracket.MarginalTax(upper_bound+1, upper_bracket);

    }

}
