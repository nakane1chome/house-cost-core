/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — selling costs at exit
*/

import { Params } from "./param";
import { Expense } from "./expense";
import { japanBrokerageFee } from "./japan_brokerage";

/** Sale price at hold-end, on the same basis as AssetAppreciation (compound over the hold). */
export function salePrice(params: Params): number {
    return params.property.value * Math.pow(1 + params.economy.appreciation_rate / 100, params.config.hold_term);
}

/**
 * Costs of selling at the end of the hold: JP 仲介手数料 on the sale price (when the sale
 * is brokered); AU agent commission as config.sale_agent_percent of the sale price
 * (incl. GST). Paid once, at the sale, so the same in both views.
 */
export class SaleCosts extends Expense {
    constructor(params: Params) {
        const price = salePrice(params);
        const jp = params.location.country === "JPN";
        super("Sale Costs",
              jp ? `Broker's fee (仲介手数料) on selling for ${Math.round(price)} at the end of the hold.`
                 : `Agent commission (${params.config.sale_agent_percent}% incl. GST) on selling for ${Math.round(price)} at the end of the hold.`);
        const amount = jp
            ? (params.purchase_costs.brokered ? japanBrokerageFee(price) : 0)
            : price * params.config.sale_agent_percent / 100;
        this.update_upfront(amount, 0);
    }
}

/**
 * The capital gain for tax: appreciation less selling costs (AU capital proceeds are net
 * of selling costs; JP 譲渡費用 are deductible). Not modelled: purchase costs added to the
 * cost base.
 */
export class NetCapitalGain extends Expense {
    constructor(appreciation: Expense, sale_costs: Expense) {
        super("Capital Gain (net of sale costs)",
              "Appreciation over the hold less the costs of selling; the gain that capital gains tax is charged on.");
        this.add(appreciation);
        this.sub(sale_costs);
    }
}
