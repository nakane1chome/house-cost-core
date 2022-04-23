import { Expense } from "./expense";

export abstract class  ExpenseTerm extends Expense {

    // Return false if the expense will eventually be paid off
    perpetual() : boolean {return false;}
    
    // annual expense
    annual() : number {return this.monthly()*12;}
    
    // The totel expense amortized over the term
    monthly() : number {return this.total()/this.term();}
    
    // weekly expense
    weekly() : number {return this.annual()/52;}
    
}
