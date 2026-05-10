/* Copyright(c) 2014-2026 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model — Tenant Outgoings Recovery (commercial leases only)

   AU commercial leases come in three structures:
   - "gross"      : rent is all-in; landlord absorbs outgoings; recovery = 0
   - "net"        : tenant reimburses ALL outgoings (council rates, water,
                    insurance, body-corp); recovery = sum of all of those
   - "semi_gross" : tenant reimburses STATUTORY outgoings (council rates,
                    water) only; landlord absorbs insurance + body-corp

   Modelled as a recurring negative expense subtracted from
   CostOfOwnership.cost_expenses, mirroring how the actual outgoings line
   items add to it. The landlord still PAYS the outgoings to the
   council/insurer/etc.; the recovery represents the tenant's reimbursement.

   Residential properties: no recovery (residential leases are statutorily
   gross under most state Residential Tenancies Acts). Commercial only.
*/

import { Expense } from "./expense";
import { Params } from "./param";

export class TenantOutgoingsRecovery extends Expense {
    constructor(
        params: Params,
        water: Expense | null,
        council_rates: Expense | null,
        insurance: Expense,
        body_corp_fees: Expense
    ) {
        super("Tenant Outgoings Recovery",
              "Outgoings reimbursed by tenant under net or semi-gross commercial lease.",
              Expense.ONE_YEAR);

        if (!params.property.commercial) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        const lt = params.property.lease_type;
        if (lt !== "net" && lt !== "semi_gross") {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        let recovery = 0;
        // Statutory outgoings — recovered under both net and semi-gross
        if (water) recovery += water.annual();
        if (council_rates) recovery += council_rates.annual();
        // Operating outgoings — recovered under net only
        if (lt === "net") {
            recovery += insurance.annual();
            recovery += body_corp_fees.annual();
        }
        this.is_known = true;
        this.update_repeating(recovery);
    }
}
