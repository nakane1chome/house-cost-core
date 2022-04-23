export class NodeInfo {

    private _name: string;
    private _desc: string;
    private _link: string ; // URL
    private _date: Date;
    private _children: Array<NodeInfo>;

    constructor(name: string, date: Date, desc: string) {
        this._name = name;
        this._desc = desc;
        this._link = "";
        this._date = date;
        this._children = [];

    }

    get_name(): string   {return this._name;}
    get_desc(): string   {return this._desc;}
    get_link(): string  {return this._link;}
    have_link(): boolean {return this._link != null;}
    get_children(): Array<NodeInfo> {return this._children;}

    set_link(link: string): void {
        this._link = link;
    }
    
    add(child: NodeInfo): void  {
        this._children.push(child);
    }

}
