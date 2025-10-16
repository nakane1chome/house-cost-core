export function find_bracket(value: number, bracket_list: any) : number {
    for (let i=0; i< bracket_list.length;i++) {
        if (value < bracket_list[i][0]) {
            return bracket_list[i][1];
        }
    }
    return bracket_list[bracket_list.length-1][1];
}

export function find_upper_bound( value: number, bracket_list: any) : number {
    for (let i=0; i<bracket_list.length;i++) {
        if (value < bracket_list[i][0]) {
            return bracket_list[i][0]-1;
        }
    }
    return value;
}
