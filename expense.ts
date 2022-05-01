export class BaseAmount  {

    public is_known = false;
    public amount = 0;

    protected update(amount: number) : void {
        this.is_known = true;
        this.amount = amount; 
    }
    protected increment(amount: number) : void {
        if (this.is_known && this.amount) {
            this.amount += amount;             
        } else {
            this.is_known = true;
            this.amount = amount; 
        }
    }
} 

export class ExpenseAnnual extends BaseAmount {

    constructor() {
        super();
    }

    annual() : number {
        return this.amount;
    }

    // Return false if the expense will eventually be paid off
    perpetual() : boolean {return true;}
    
    // annual expense
    monthly() : number {return this.annual()/12;}
    
    // annual expense
    weekly() : number {return this.annual()/52;}

}

export class  ExpenseTerm extends BaseAmount {

    private _term_months : number;

    constructor(term_months: number) {
        super();
        this._term_months = term_months;
    }

    term(): number {return this._term_months}

    // total cost the original amount
    total() : number {return this.amount ;}   

    // Return false if the expense will eventually be paid off
    perpetual() : boolean {return false;}
    
    // annual expense
    annual() : number {return this.monthly()*12;}
    
    // The totel expense amortized over the term
    monthly() : number {return this.total()/this.term();}
    
    // weekly expense
    weekly() : number {return this.annual()/52;}
    
}

export class ExpenseSet extends BaseAmount  {

    public expenses : Array<BaseAmount>;

    constructor() {
        super();
        this.expenses = new Array<BaseAmount>();
    }

    add(e: BaseAmount) : void {
        this.expenses.push(e);
        if (e.is_known) {
            this.increment(e.amount);
        }
    }

}
