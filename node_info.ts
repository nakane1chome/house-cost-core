/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

export class NodeInfo {

    readonly name: string;
    readonly desc: string;
    public date: Date | undefined;
    public link: string ; // URL
    //private _children: Array<NodeInfo>;

    constructor(name: string, desc: string) {
        this.name = name;
        this.desc = desc;
        this.link = "";
    }

    have_link(): boolean {return this.link != "";}
    //get_children(): Array<NodeInfo> {return this._children;}

    set_link(link: string): void {
        this.link = link;
    }
    
    //add(child: NodeInfo): void  {
    //    this._children.push(child);
    //}

}
