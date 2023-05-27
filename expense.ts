import {NodeInfo} from './node_info';

export class Expense  {

    static readonly ONE_YEAR=365.25;
    static readonly ONE_MONTH=Expense.ONE_YEAR/12.0;
    static readonly ONE_WEEK=Expense.ONE_YEAR/52.0;

    public is_known = false; // Is the amount known? True - the information to calculate it is known.  False - Unkown.
    public repeating_amount = 0;
    public upfront_amount = 0;
    readonly label: string;
    readonly desc: string;
    readonly repeat_period: number;
    public expenses : Array<[string, Expense]>;
    public node_info: NodeInfo | null = null;

    constructor(label: string, desc: string, repeat_period?: number) {
        this.expenses = new Array<[string, Expense]>();
        this.repeat_period = repeat_period ?? Expense.ONE_YEAR;
        this.label = label;
        this.desc = desc;
    }

    static describe_period(v: number) : string {
      switch(v) {
        case Expense.ONE_YEAR: return "year";
        case Expense.ONE_MONTH: return "month";
        case Expense.ONE_WEEK: return "week";
      } 
     return "??";
   }

    protected update_repeating(amount: number) : void {
        this.is_known = true;
        this.repeating_amount = amount; 
    }
    protected update_upfront(amount: number) : void {
        this.is_known = true;
        this.upfront_amount = amount; 
    }

    // annual expense
    one_off() : number {return this.upfront_amount;}
    annual() : number {return this.repeat_period ? Expense.ONE_YEAR*this.repeating_amount/this.repeat_period: 0;}
    monthly() : number {return this.repeat_period ? Expense.ONE_MONTH*this.repeating_amount/this.repeat_period: 0;}
    weekly() : number {return this.repeat_period ? Expense.ONE_WEEK*this.repeating_amount/this.repeat_period: 0;}

    add(e: Expense) : void {
        this.expenses.push(["+",e]);
        if (e.is_known) {
            this.is_known=true;
            this.upfront_amount += e.upfront_amount;
            if (e.repeat_period!=0) {
                this.repeating_amount += e.repeating_amount * (this.repeat_period/e.repeat_period);
            }
        }
    }
    sub(e: Expense) : void {
        this.expenses.push(["-",e]);
        if (e.is_known) {
            this.is_known=true;
            this.upfront_amount -= e.upfront_amount;
            if (e.repeat_period!=0) {
                this.repeating_amount -= e.repeating_amount * (this.repeat_period/e.repeat_period);
            }
        }
    }

} 

export class UpfrontExpense extends Expense {
    constructor(label: string, desc: string, upfront_amount: number) {
        super(label, desc);
        this.update_upfront(upfront_amount);
    }
    
}
