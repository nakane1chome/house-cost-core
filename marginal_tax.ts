// http://www.ato.gov.au/Individuals/Income-and-deductions/How-much-income-tax-you-pay/Individual-income-tax-rates/
// 0 � $18,200
// Nil
// $18,201 � $37,000
// 19c for each $1 over $18,200
// $37,001 � $80,000
// $3,572 plus 32.5c for each $1 over $37,000
// $80,001 � $180,000
// $17,547 plus 37c for each $1 over $80,000
// $180,001 and over
// $54,547 plus 45c for each $1 over $180,000
// 

export class TaxBracket {

    private static  _tax_brackets = [
        [18201,0.19],
        [37001,0.325],
        [80001,0.37],
        [180001,0.45]
    ];

    /** Return the taxable percentage for a given income */
    static GetPercent( income: number) : number {
        if (income < TaxBracket._tax_brackets[0][0])  return 0.0;
        for (let i=0; i< TaxBracket._tax_brackets.length-1;i++) {
            if (income < TaxBracket._tax_brackets[i+1][0])    return TaxBracket._tax_brackets[i][1];
        }
        return TaxBracket._tax_brackets[TaxBracket._tax_brackets.length-1][1];
    }
    
    /** Return the next bracket boundary, the top income in this  bracket */
    static UpperBound( income: number) : number {
        for (let i=0; i<TaxBracket._tax_brackets.length;i++) {
            if (income < TaxBracket._tax_brackets[i][0])  return TaxBracket._tax_brackets[i][0]-1;
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