/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — Body corporate / strata levy fees

   Recurring annual cost for any strata property (community_title=true). Applies to:
   - AU strata commercial / residential — body corporate quarterly levies + sinking fund
   - JP 区分マンション — 管理費 + 修繕積立金 (use the sum as the annual figure)

   Consumed only when community_title=true AND body_corp_fees_annual > 0; otherwise
   the cost line is zero and not added to the cost_expenses aggregator.
*/

import { Expense } from "./expense";
import { Params } from "./param";

export class BodyCorporateFees extends Expense {
    constructor(params: Params) {
        super("Body Corporate Fees",
              "Annual body corporate / strata levy contribution. " +
              "Covers common-area maintenance, sinking fund, and shared services.");

        if (!params.property.community_title || params.property.body_corp_fees_annual <= 0) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        this.is_known = true;
        this.update_repeating(params.property.body_corp_fees_annual);
    }
}
