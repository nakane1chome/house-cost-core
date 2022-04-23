import { Expense } from "./expense";

export abstract class ExpenseAnnual extends Expense {

    term(): number {return 20*12;}

    // Return false if the expense will eventually be paid off
    perpetual() : boolean {return true;}
    
    // total cost if perpetual, estimate over loan term if peretual
    total() : number {return this.term() * this.annual();}
    
    // annual expense
    monthly() : number {return this.annual()/12;}
    
    // annual expense
    weekly() : number {return this.annual()/52;}

}
