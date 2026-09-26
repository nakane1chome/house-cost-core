/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import {NodeInfo} from './node_info';

export class Expense  {

    static readonly ONE_YEAR=365.25;
    static readonly ONE_MONTH=Expense.ONE_YEAR/12.0;
    static readonly ONE_WEEK=Expense.ONE_YEAR/52.0;

    public is_known = false; // Is the amount known? True - the information to calculate it is known.  False - Unknown.
    public repeating_amount = 0;
    public upfront_amount = 0;
    public exit_remainder_amount = 0;
    readonly label: string;
    readonly desc: string;
    readonly repeat_period: number;
    public expenses : Array<[string, Expense]>;
    public node_info: NodeInfo ;

    constructor(label: string, desc: string, repeat_period?: number) {
        this.expenses = new Array<[string, Expense]>();
        this.repeat_period = repeat_period ?? Expense.ONE_YEAR;
        this.label = label;
        this.desc = desc;
        this.node_info = new NodeInfo(label, desc);

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
    protected update_upfront(amount: number, exit_remainder_amount: number) : void {
        this.is_known = true;
        this.upfront_amount = amount;
        this.exit_remainder_amount = exit_remainder_amount;
    }

    // annual expense
    one_off() : number {return this.upfront_amount;}
    annual() : number {
        return this.repeat_period ? (Expense.ONE_YEAR*this.repeating_amount)/this.repeat_period: 0;
    }
    //monthly() : number {return this.repeat_period ? (Expense.ONE_MONTH*this.repeating_amount)/this.repeat_period: 0;}
    //weekly() : number {return this.repeat_period ? (Expense.ONE_WEEK*this.repeating_amount)/this.repeat_period: 0;}

    periodic(hold_term: number, view_period: number): number {
       const amortized_amount = ((this.upfront_amount - this.exit_remainder_amount) / (hold_term * Expense.ONE_YEAR)) * view_period ;
       const repeated_amount = (this.repeat_period == 0) ? 0 : ((this.repeating_amount / this.repeat_period ) * view_period);
       return amortized_amount + repeated_amount;
    }
    accumulated(hold_term: number): number {
        const total_fixed = this.upfront_amount - this.exit_remainder_amount;
        const total_repeating = this.annual() * hold_term;
        return total_repeating + total_fixed;
    }
    

    link(e: Expense) : void {
        this.expenses.push(["~",e]);
    }

    add(e: Expense) : void {
        this.expenses.push(["+",e]);
        if (e.is_known) {
            this.is_known=true;
            this.upfront_amount += e.upfront_amount;
            this.exit_remainder_amount += e.exit_remainder_amount;
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
            this.exit_remainder_amount -= e.exit_remainder_amount;
            if (e.repeat_period!=0) {
                this.repeating_amount -= e.repeating_amount * (this.repeat_period/e.repeat_period);
            }
        }
    }

} 

export class UpfrontExpense extends Expense {
    constructor(label: string, desc: string, upfront_amount: number, loan_term: number, hold_term: number) {
        super(label, desc);
        // Upfront expenses are amortized linearly in present dollars over the loan term.
        // This is a separation of concerns: ownership costs (equivalent rent, transaction costs, etc.)
        // are calculated in nominal present value terms as committed to the loan, while appreciation
        // and investment returns are calculated separately in the InvestmentReturn class.
        const remainder_ratio =  (hold_term >= loan_term) ? 0 : ((loan_term - hold_term) / loan_term);
        const exit_remainder_amount = upfront_amount * remainder_ratio;
        this.update_upfront(upfront_amount, exit_remainder_amount);
    }

}

export class SunkUpfrontExpense extends Expense {
    /**
     * A one-off cost paid at purchase that is NOT recoverable at exit.
     * Use for transaction costs (stamp duty, conveyancing, inspections, GST,
     * grants, transfer registration). Distinct from UpfrontExpense which
     * amortizes the cost linearly over the loan term and carries an
     * "exit remainder" representing the unamortized portion.
     */
    constructor(label: string, desc: string, upfront_amount: number) {
        super(label, desc);
        this.update_upfront(upfront_amount, 0);
    }
}
