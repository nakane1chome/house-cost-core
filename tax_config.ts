/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model - Tax Configuration
*/

/**
 * Tax bracket configuration for different countries
 *
 * Tax brackets are stored as [threshold, rate] pairs where:
 * - threshold: Income level where this rate begins to apply
 * - rate: Marginal tax rate (as decimal, e.g., 0.16 = 16%)
 *
 * The final entry [0, rate] represents the highest bracket with no upper limit
 */

export interface TaxConfig {
    year: string;
    taxFreeThreshold: number;
    brackets: Array<[number, number]>;
    medicareLevy: number;
    medicareLevyThreshold: number;
}

/**
 * Australian Tax Configuration for 2025-26
 *
 * Sources:
 * - Income tax rates: https://www.ato.gov.au/tax-rates-and-codes/tax-rates-australian-residents
 * - Medicare levy: https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy
 *
 * Last updated: 2025-12-16
 */
export const AUSTRALIA_TAX: TaxConfig = {
    year: "2025-26",
    taxFreeThreshold: 18200,
    brackets: [
        [18201, 0.16],   // $18,201 – $45,000 at 16%
        [45001, 0.30],   // $45,001 – $135,000 at 30%
        [135001, 0.37],  // $135,001 – $190,000 at 37%
        [190001, 0.45],  // $190,001 and above at 45%
        [0, 0.45]        // Highest bracket (no upper limit)
    ],
    medicareLevy: 0.02,           // 2%
    medicareLevyThreshold: 27222  // Singles threshold for 2025-26
};

/**
 * Japanese Tax Configuration for 2025
 *
 * National income tax only (does not include ~10% local inhabitant tax)
 *
 * Last updated: 2025-12-16
 */
export const JAPAN_TAX: TaxConfig = {
    year: "2025",
    taxFreeThreshold: 0,
    brackets: [
        [1950000, 0.05],    // Up to ¥1.95M at 5%
        [3300000, 0.10],    // ¥1.95M - ¥3.3M at 10%
        [6950000, 0.20],    // ¥3.3M - ¥6.95M at 20%
        [9000000, 0.23],    // ¥6.95M - ¥9M at 23%
        [18000000, 0.33],   // ¥9M - ¥18M at 33%
        [40000000, 0.40],   // ¥18M - ¥40M at 40%
        [0, 0.45]           // Over ¥40M at 45%
    ],
    medicareLevy: 0,  // No Medicare levy in Japan
    medicareLevyThreshold: 0
};

/**
 * Get tax configuration for a specific country
 */
export function getTaxConfig(country: string): TaxConfig {
    switch (country) {
        case "AUS":
            return AUSTRALIA_TAX;
        case "JPN":
            return JAPAN_TAX;
        default:
            throw new Error(`No tax configuration found for country: ${country}`);
    }
}
