/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { NodeInfo } from "./node_info";
import { Expense } from "./expense";

// SA Water (2025-26)
const _SA_SEWER_MIN=376; // $94.00 per quarter = $376 per year
const _SA_WATER_MIN=329; // $329.20 per year

// NSW Water - Sydney Water (2024-25, pending IPART decision for 2025-30)
const _NSW_SEWER_MIN=800; // Estimated annual sewerage service charge
const _NSW_WATER_MIN=400; // Estimated annual water service charge

// VIC Water - Melbourne area (2025-26)
const _VIC_SEWER_MIN=600; // Estimated sewerage service charge
const _VIC_WATER_MIN=300; // Estimated water service charge
const _VIC_DRAINAGE_MIN=122; // Melbourne Water drainage charge

// QLD Water - Urban Utilities area (2025-26)
const _QLD_SEWER_MIN=783; // Based on Gold Coast rates as reference
const _QLD_WATER_MIN=307; // Based on Gold Coast rates as reference

// WA Water Corporation (2025-26)
const _WA_SEWER_MIN=400; // Estimated based on GRV calculations
const _WA_WATER_MIN=350; // Estimated service charge
const _WA_DRAINAGE_MIN=140; // Minimum drainage charge

// TAS TasWater (2025-26)
const _TAS_SEWER_MIN=755; // Fixed sewerage charge
const _TAS_WATER_MIN=394; // Fixed water charge

// NT Power Water (2025-26)
const _NT_SEWER_MIN=954; // $926.11 + 3% increase
const _NT_WATER_MIN=500; // Estimated water service charge

// ACT Icon Water (2025-26)
const _ACT_SEWER_MIN=600; // Estimated sewerage service charge
const _ACT_WATER_MIN=400; // Estimated water service charge

export class TaxesSaSewerRates extends Expense {

    constructor(params: Params) {
        super("Sewerage Service (SA)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "SA" ) {
            this.update_repeating( _SA_SEWER_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.sawater.com.au/my-account/water-and-sewerage-prices/sewerage-prices");
        }
    }
}


export class  TaxesSaWaterRates  extends Expense  {

    constructor(params: Params) {
        super("Water Supply (SA)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "SA" ) {
            const amount = _SA_WATER_MIN;
            this.update_repeating(amount);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.sawater.com.au/my-account/water-and-sewerage-prices/water-prices/residential-water-prices");
        }
    }

}

// NSW Water Classes
export class TaxesNswSewerRates extends Expense {
    constructor(params: Params) {
        super("Sewerage Service (NSW)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "NSW" ) {
            this.update_repeating( _NSW_SEWER_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.sydneywater.com.au/accounts-billing/paying-your-bill/our-prices.html");
        }
    }
}

export class TaxesNswWaterRates extends Expense {
    constructor(params: Params) {
        super("Water Supply (NSW)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "NSW" ) {
            const amount = _NSW_WATER_MIN;
            this.update_repeating(amount);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.sydneywater.com.au/accounts-billing/paying-your-bill/our-prices.html");
        }
    }
}

// VIC Water Classes
export class TaxesVicSewerRates extends Expense {
    constructor(params: Params) {
        super("Sewerage Service (VIC)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "VIC" ) {
            this.update_repeating( _VIC_SEWER_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.esc.vic.gov.au/water/water-prices-tariffs-and-special-drainage/average-household-water-bills-victoria");
        }
    }
}

export class TaxesVicWaterRates extends Expense {
    constructor(params: Params) {
        super("Water Supply (VIC)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "VIC" ) {
            const amount = _VIC_WATER_MIN;
            this.update_repeating(amount);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.esc.vic.gov.au/water/water-prices-tariffs-and-special-drainage/average-household-water-bills-victoria");
        }
    }
}

export class TaxesVicDrainageRates extends Expense {
    constructor(params: Params) {
        super("Drainage Charge (VIC)",
             "The drainage charge that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "VIC" ) {
            this.update_repeating( _VIC_DRAINAGE_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.melbournewater.com.au/services/prices-and-charges/waterways-and-drainage-charge");
        }
    }
}

// QLD Water Classes
export class TaxesQldSewerRates extends Expense {
    constructor(params: Params) {
        super("Sewerage Service (QLD)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "QLD" ) {
            this.update_repeating( _QLD_SEWER_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.urbanutilities.com.au/residential/accounts-and-billing/prices-and-charges-2025-2026");
        }
    }
}

export class TaxesQldWaterRates extends Expense {
    constructor(params: Params) {
        super("Water Supply (QLD)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "QLD" ) {
            const amount = _QLD_WATER_MIN;
            this.update_repeating(amount);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.urbanutilities.com.au/residential/accounts-and-billing/prices-and-charges-2025-2026");
        }
    }
}

// WA Water Classes
export class TaxesWaSewerRates extends Expense {
    constructor(params: Params) {
        super("Sewerage Service (WA)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "WA" ) {
            this.update_repeating( _WA_SEWER_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.watercorporation.com.au/Help-and-advice/Bill-and-account/Rates-and-charges/Understanding-your-water-service-charges");
        }
    }
}

export class TaxesWaWaterRates extends Expense {
    constructor(params: Params) {
        super("Water Supply (WA)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "WA" ) {
            const amount = _WA_WATER_MIN;
            this.update_repeating(amount);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.watercorporation.com.au/Help-and-advice/Bill-and-account/Rates-and-charges/Understanding-your-water-service-charges");
        }
    }
}

export class TaxesWaDrainageRates extends Expense {
    constructor(params: Params) {
        super("Drainage Charge (WA)",
             "The drainage charge that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "WA" ) {
            this.update_repeating( _WA_DRAINAGE_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.watercorporation.com.au/Help-and-advice/Bill-and-account/Rates-and-charges/Understanding-your-water-service-charges");
        }
    }
}

// TAS Water Classes
export class TaxesTasSewerRates extends Expense {
    constructor(params: Params) {
        super("Sewerage Service (TAS)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "TAS" ) {
            this.update_repeating( _TAS_SEWER_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.taswater.com.au/accounts-and-billing/fees-and-charges/water-and-sewerage-charges");
        }
    }
}

export class TaxesTasWaterRates extends Expense {
    constructor(params: Params) {
        super("Water Supply (TAS)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "TAS" ) {
            const amount = _TAS_WATER_MIN;
            this.update_repeating(amount);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.taswater.com.au/accounts-and-billing/fees-and-charges/water-and-sewerage-charges");
        }
    }
}

// NT Water Classes
export class TaxesNtSewerRates extends Expense {
    constructor(params: Params) {
        super("Sewerage Service (NT)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "NT" ) {
            this.update_repeating( _NT_SEWER_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.powerwater.com.au/pricing");
        }
    }
}

export class TaxesNtWaterRates extends Expense {
    constructor(params: Params) {
        super("Water Supply (NT)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "NT" ) {
            const amount = _NT_WATER_MIN;
            this.update_repeating(amount);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.powerwater.com.au/pricing");
        }
    }
}

// ACT Water Classes
export class TaxesActSewerRates extends Expense {
    constructor(params: Params) {
        super("Sewerage Service (ACT)",
             "The Sewerage Service cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if ( params.location.state == "ACT" ) {
            this.update_repeating( _ACT_SEWER_MIN);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.iconwater.com.au/about-us/our-pricing");
        }
    }
}

export class TaxesActWaterRates extends Expense {
    constructor(params: Params) {
        super("Water Supply (ACT)",
             "The water supply cost that must be paid by the property owner.",
             Expense.ONE_YEAR)
        if (params.location.state == "ACT" ) {
            const amount = _ACT_WATER_MIN;
            this.update_repeating(amount);
            this.node_info.date = new Date(2025,6,1);
            this.node_info.set_link("https://www.iconwater.com.au/about-us/our-pricing");
        }
    }
}

// Composite Water Classes for each state
export class NewWaterSa extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesSaWaterRates(params));
        this.add(new TaxesSaSewerRates(params));
    }
}

export class NewWaterNsw extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesNswWaterRates(params));
        this.add(new TaxesNswSewerRates(params));
    }
}

export class NewWaterVic extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesVicWaterRates(params));
        this.add(new TaxesVicSewerRates(params));
        this.add(new TaxesVicDrainageRates(params));
    }
}

export class NewWaterQld extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesQldWaterRates(params));
        this.add(new TaxesQldSewerRates(params));
    }
}

export class NewWaterWa extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesWaWaterRates(params));
        this.add(new TaxesWaSewerRates(params));
        this.add(new TaxesWaDrainageRates(params));
    }
}

export class NewWaterTas extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesTasWaterRates(params));
        this.add(new TaxesTasSewerRates(params));
    }
}

export class NewWaterNt extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesNtWaterRates(params));
        this.add(new TaxesNtSewerRates(params));
    }
}

export class NewWaterAct extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)
        this.add(new TaxesActWaterRates(params));
        this.add(new TaxesActSewerRates(params));
    }
}

// Universal Water Class - automatically selects correct state implementation
export class NewWater extends Expense {
    constructor(params: Params) {
        super("Water Rates",
              "Water costs that must be paid by the property owner.",
             Expense.ONE_YEAR)

        switch (params.location.state) {
            case "NSW":
                this.add(new TaxesNswWaterRates(params));
                this.add(new TaxesNswSewerRates(params));
                break;
            case "VIC":
                this.add(new TaxesVicWaterRates(params));
                this.add(new TaxesVicSewerRates(params));
                this.add(new TaxesVicDrainageRates(params));
                break;
            case "QLD":
                this.add(new TaxesQldWaterRates(params));
                this.add(new TaxesQldSewerRates(params));
                break;
            case "WA":
                this.add(new TaxesWaWaterRates(params));
                this.add(new TaxesWaSewerRates(params));
                this.add(new TaxesWaDrainageRates(params));
                break;
            case "TAS":
                this.add(new TaxesTasWaterRates(params));
                this.add(new TaxesTasSewerRates(params));
                break;
            case "NT":
                this.add(new TaxesNtWaterRates(params));
                this.add(new TaxesNtSewerRates(params));
                break;
            case "ACT":
                this.add(new TaxesActWaterRates(params));
                this.add(new TaxesActSewerRates(params));
                break;
            case "SA":
            default:
                this.add(new TaxesSaWaterRates(params));
                this.add(new TaxesSaSewerRates(params));
                break;
        }
    }
}
