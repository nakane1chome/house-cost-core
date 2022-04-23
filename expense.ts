import { ComputedAmount } from "./computed_amount";


export abstract class Expense extends ComputedAmount {
    
    // Return false if the expense will eventually be paid off
    abstract perpetual(): boolean;
    
    // total cost if perpetual, 
    abstract total(): number;

    // total cost if perpetual, 
    get(): number {
        return this.total();
    }
    
    // Term of the expense, in months
    abstract term(): number;
    
    // annual expense
    abstract annual(): number;
    
    // monthly expense
    abstract monthly(): number;
    
    // weekly expense
    abstract weekly(): number;

}
