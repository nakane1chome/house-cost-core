#!/bin/env python3

#  Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
#  SPDX-License-Identifier: MIT
#  Housing Cost Model
# 

import csv
from collections import defaultdict

def main():
    fin_name="australian_postcodes.csv"
    fout_name="postcode2lga.ts"

    lga_map = defaultdict(lambda: set())

    with open(fin_name, "r") as fin:
         csvin = csv.DictReader(fin)
         for row in csvin:
             try:
                 postcode = int(row['postcode'])
             except:
                 continue
             state_label = row['state'].lower()
             lga_label = row['lgaregion'].lower().replace(' ','-').replace("'",'')
             label = f"{state_label}.{lga_label}"
             lga_map[label].add(postcode)
            
    out_map = {}
    
    for label, lga_values in lga_map.items():
        svalues = sorted(lga_values)
        delta_idx = [i for i, x in enumerate(svalues)  if (i!=0) and ((x-svalues[min(0,i-1)])!=1)]
        prev_idx = 0
        for idx in delta_idx:
            minv = svalues[prev_idx]
            maxv = svalues[idx-1]
            out_map[(minv,maxv)] = label
            prev_idx=idx

    out_list = []
    prev_label = None    
    for (minv, maxv), label in sorted(out_map.items()):
        if prev_label == label:
            out_list[-1][1] = maxv
        else:
            out_list.append([minv, maxv, label])
            prev_label = label


    def print_map(fout, indent, sub_list):
        ll = len(sub_list)
        minv=sub_list[0][0]
        maxv=sub_list[-1][1]
        if ll == 1:
            label=sub_list[0][2]
            if minv==maxv:
                fout.write(f"{indent}return '{label}';\n")
            else:
                fout.write (f"{indent}return '{label}';\n")
        else:
            hl = int(ll/2)
            cutv=sub_list[hl][1]
            fout.write(f"{indent}if (/*> {minv}*/ postcode < {cutv})" + "{\n")
            print_map(fout, indent + "  ",sub_list[:hl])
            fout.write(f"{indent}" + "} else " + f"/* >= {cutv} < {maxv} */" + " {\n")
            print_map(fout, indent + "  ",sub_list[hl:])
            fout.write(f"{indent}" +"}\n")

    with open(fout_name, "w") as fout:
        fout.write("export function Postcode2Lga(postcode: number) : string {\n")
        for elem in out_list:
            fout.write("// " + str(elem) + "\n" )
        print_map(fout,"    ", out_list)
        fout.write("    return 'unknown';\n")
        fout.write("}\n")
                   

if __name__ == "__main__":
    main()
