/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

/**
 * Japan 法定耐用年数 (statutory useful life) by construction type.
 * 木造 22yr / 軽量鉄骨 27yr / 重量鉄骨 34yr / RC・SRC 47yr.
 */
function jpStatutoryLife(construction: string): number {
    switch (construction) {
        case "wood": return 22;
        case "light_steel": return 27;
        case "heavy_steel": return 34;
        case "rc": return 47;
        default: throw new Error(`Unknown construction: ${construction}. Valid: wood, light_steel, heavy_steel, rc.`);
    }
}

/**
 * Japan used-building remaining useful life (定額法).
 * - age < statutory_life:  (statutory - age) + age × 0.2
 * - age ≥ statutory_life:  statutory × 0.2
 * Rounded down, minimum 2 years.
 */
function jpUsefulLife(construction: string, age: number): number {
    const statutory = jpStatutoryLife(construction);
    let life: number;
    if (age < statutory) {
        life = Math.floor((statutory - age) + age * 0.2);
    } else {
        life = Math.floor(statutory * 0.2);
    }
    return life < 2 ? 2 : life;
}

/**
 * Represents building depreciation for tax purposes
 *
 * Australia: Building write-off at 2.5% per year for capital works (buildings constructed after 1987)
 * Japan: 定額法 over 法定耐用年数 with used-building reduction formula.
 *        Construction type from params.property.construction; age from params.property.building_age.
 *
 * Note: Only applies to investment properties, not owner-occupied
 */
export class BuildingDepreciation extends Expense {
    constructor(params: Params) {
        super("Building Depreciation",
              "Tax-deductible depreciation on building structure (investment properties only).");

        // Only calculate if this is an investment property
        if (params.config.owner_occupier) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        const building_value = params.property.building_value || 0;

        if (building_value === 0) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        let annual_depreciation = 0;

        if (params.location.country === "AUS") {
            // Australia: Capital works deduction at 2.5% per year (40 year write-off)
            // Applies to buildings constructed after 15 September 1987
            annual_depreciation = building_value * 0.025;
        } else if (params.location.country === "JPN") {
            // Japan: 定額法 over 法定耐用年数 with used-building formula.
            // Construction enum (params.property.construction) selects statutory life;
            // params.property.building_age applies the simplified used-building reduction.
            //
            // Library convention is a flat per-year deduction over the hold period.
            // Real JP tax front-loads the full deduction across `useful_life` years
            // then drops to zero — but the engine produces hold-aggregate figures, so
            // we cap at hold_term to prevent over-deducting when useful_life < hold.
            // Total deduction over hold ≈ building_value when hold ≥ useful_life.
            const useful_life = jpUsefulLife(params.property.construction, params.property.building_age);
            const effective_period = Math.max(useful_life, params.config.hold_term);
            annual_depreciation = building_value / effective_period;
        }

        this.is_known = true;
        this.update_repeating(annual_depreciation);
    }
}

/**
 * Represents depreciation on fixtures and fittings (chattels)
 *
 * Items like carpets, blinds, hot water systems, appliances
 * Typically depreciate faster than building structure
 */
export class FixturesDepreciation extends Expense {
    constructor(params: Params) {
        super("Fixtures & Fittings Depreciation",
              "Tax-deductible depreciation on removable fixtures and fittings (investment properties only).");

        // Only calculate if this is an investment property
        if (params.config.owner_occupier) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        // Estimate fixtures as percentage of building value
        const building_value = params.property.building_value || 0;
        const fixtures_value = building_value * 0.15; // Typically 10-20% of building value

        if (fixtures_value === 0) {
            this.is_known = true;
            this.update_repeating(0);
            return;
        }

        let annual_depreciation = 0;

        if (params.location.country === "AUS") {
            // Australia: Diminishing value method or prime cost
            // Average effective life of fixtures: 5-10 years
            // Using prime cost method with 7.5 year average
            annual_depreciation = fixtures_value / 7.5;
        } else if (params.location.country === "JPN") {
            // Japan: Fixtures typically 6-15 years
            // Using 10 year average
            annual_depreciation = fixtures_value / 10;
        }

        this.is_known = true;
        this.update_repeating(annual_depreciation);
    }
}

/**
 * Total depreciation available for tax deduction
 */
export class Depreciation extends Expense {
    public building: BuildingDepreciation;
    public fixtures: FixturesDepreciation;

    constructor(params: Params) {
        super("Depreciation",
              "Total tax-deductible depreciation on building and fixtures (investment properties only).");

        this.building = new BuildingDepreciation(params);
        this.fixtures = new FixturesDepreciation(params);

        this.add(this.building);
        this.add(this.fixtures);
    }
}
