export class ParamSchema {
    
    readonly  name: string;
    readonly  default_value: any;
    constructor(name: string, default_value: any) {
        this.name = name;
        this.default_value = default_value;
    }
    
}

//declare class ParamTable {}

export class ParamRow {
    private _params: Map<string, any>;
    private _parent: ParamTable;
    constructor(parent: ParamTable);
    constructor(parent: ParamTable, clone_params: ParamRow);
    constructor(parent: ParamTable, clone_params?: ParamRow) {
        this._parent = parent;
        this._params =  new Map<string, any>();
        console.log("NEW ROW", clone_params);
        if (clone_params!=null) {
            clone_params._params.forEach((value: any, key: string) => {
                this._params.set(key,value);
            });
        }
    }
    set(name:string, value: any): void {
        if (this._parent.validate_param(name, value)) {
            this._params.set(name,value);
        }
    }
    is_known(name:string): boolean {
        return true;
        return this._params.get(name) != null;
            
    }
    get<Type>(name:string): Type {
        var v = this._params.get(name);
        return v;
    }
}


export class ParamTable {

    private _schema = new Map<string, ParamSchema>();
    private _data = new Array<ParamRow>();
    private _current: ParamRow;

    constructor() {
        this._current = new ParamRow(this);
    }

    register_client(c: ParamClient, name: string): string {
        if (!this._schema.has(name)) {
            throw new Error("Unknown parameter definition: " + name);            
        }
        return name;
    }
    add_param(schema:ParamSchema): void {
        if (this._schema.has(schema.name)) {
            throw new Error("Duplicate parameter definition");
        }
        this._schema.set(schema.name,schema);
        this._current.set(schema.name, schema.default_value);
    }
    get_schema(name: string):ParamSchema|undefined {
        if (!this._schema.has(name)) {
            throw new Error("Duplicate parameter definition");
        } else {
            return this._schema.get(name);
        }
    }
    validate_param(name: string, value: any) : boolean{
        return true;
    }
    set_param(name: string, value: any) {
        this._current.set(name, value);
    }



    snapshot(): ParamRow {
        var retval = this._current;
        this._current = new ParamRow(this, this._current);
        this._data.push(retval);
        return retval;
    }

    current(): ParamRow {
        return this._current;
    }

}

export class ParamClient {

    // Values are computed from paramters
    protected _param_table: ParamTable;
    public params: ParamRow;

    constructor(param_table: ParamTable) {
        this._param_table = param_table; 
        this.params = param_table.current();
    }

    // recaclulate after parameter change
    update(p: ParamRow): void {
        this.params = p;
    }

}

export class ParamView<Type> {
    private key : string;
    private client: ParamClient;
    constructor(c: ParamClient, t: ParamTable, name:string) {
        this.key = t.register_client(c, name);
        this.client = c;
    }
    get(): Type {
        return this.client.params.get<Type>(this.key);
    }
    is_known() : boolean {
        return this.client.params.is_known(this.key);
    }
}



/*
export class Param extends ComputedAmount {
    private _name : string;
    public update_cnt: number;

    constructor(name:string) {
        super()
        this._name = name;
        this.update_cnt = 0;
    }

    // recaclulate after parameter change
    update(): void {
        this.update_cnt += 1;
    }

    set(v: any): any  {
        Param._params.set(this._name, v);
        this.update_cnt += 1;
        return Param._params.get(this._name);
    }
    is_known() : boolean {
        return Param._params.get(this._name) != null;
    }
    is_known() : boolean {
        return Param._params.get(this._name) != null;
    }
    get():any {
        return Param._params.get(this._name);
    }
}

export function ParamSet(name: string, value: any): void {
    const p = new Param(name);
    p.set(value);
}
function constructor(parent: Window, ParamTable: typeof ParamTable) {
    throw new Error("Function not implemented.");
}

*/