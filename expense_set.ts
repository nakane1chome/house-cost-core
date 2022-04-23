import { ParamRow, ParamTable } from "./param";
import { Expense } from "./expense";

export class ExpenseSet extends Expense  {
    private _expenses: Array<Expense>;

    constructor(t: ParamTable) {
        super(t);
        this._expenses = [];
    }

    is_known(): boolean {
        this._expenses.forEach(ee => {if (!ee.is_known()) return false;})
        return true;
    }

    add(e: Expense) : void {
        this._expenses.push(e);
    }

    update(p: ParamRow): void {
        super.update(p);
        this._expenses.forEach(ee => ee.update(p))
    }
    
    perpetual(): boolean {
        this._expenses.forEach(ee => {if (ee.perpetual()) return true;})
        return false;
    }

    total(): number {
        let ret = 0;
        this._expenses.forEach(ee => {ret += ee.total()})
        return ret;
    }

    term(): number {
        // first entry
        this._expenses.forEach(ee => {return  ee.term()})
        return 0;
    }

    annual():number {
        let ret = 0;
        this._expenses.forEach(ee => {ret += ee.annual()})
        return ret;
    }

    monthly(): number {
        let ret = 0;
        this._expenses.forEach(ee => {ret += ee.monthly()})
        return ret;
    }
    
    weekly(): number {
        let ret = 0;
        this._expenses.forEach(ee => {ret += ee.weekly()})
        return ret;
    }
}


  

