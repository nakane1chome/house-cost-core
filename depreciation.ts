/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model
*/

import { Params } from "./param";
import { Expense } from "./expense";

/**
 * Represents building depreciation for tax purposes
 *
 * Australia: Building write-off at 2.5% per year for capital works (buildings constructed after 1987)
 * Japan: Building depreciation varies by structure type (typically 22-47 years useful life)
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
            // Japan: Depreciation depends on structure type
            // Concrete: 47 years (2.13% per year)
            // Steel frame: 34 years (2.94% per year)
            // Wood: 22 years (4.55% per year)
            // Default to concrete for conservative estimate
            const useful_life = 47; // years
            annual_depreciation = building_value / useful_life;
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
