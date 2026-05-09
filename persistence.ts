/* Copyright(c) 2014-2023 Phil Mulholland (www.shincbm.com)
   SPDX-License-Identifier: MIT
   Housing Cost Model - Persistence Layer
*/

import { Params } from "./param";

/**
 * Validates params object structure
 */
export function validateParams(data: unknown): data is Params {
    if (!data || typeof data !== 'object') return false;

    const obj = data as Record<string, unknown>;

    // Check required top-level properties exist
    if (!obj.location || typeof obj.location !== 'object') return false;
    if (!obj.property || typeof obj.property !== 'object') return false;
    if (!obj.config || typeof obj.config !== 'object') return false;
    if (!obj.economy || typeof obj.economy !== 'object') return false;

    const location = obj.location as Record<string, unknown>;
    const property = obj.property as Record<string, unknown>;
    const config = obj.config as Record<string, unknown>;
    const economy = obj.economy as Record<string, unknown>;

    // Validate types of key properties
    if (typeof location.country !== 'string') return false;
    if (typeof property.value !== 'number') return false;
    if (typeof config.loan_term !== 'number') return false;
    if (typeof economy.loan_rate !== 'number') return false;

    return true;
}

/**
 * Save params to URL query string
 */
export function saveToURL(params: Params): string {
    const json = JSON.stringify(params);
    const encoded = encodeURIComponent(json);
    const url = new URL(window.location.href);
    url.searchParams.set('data', encoded);
    return url.toString();
}

/**
 * Load params from URL query string
 */
export function loadFromURL(targetParams: Params): boolean {
    const url = new URL(window.location.href);
    const data = url.searchParams.get('data');
    if (!data) {
        return false;
    }
    try {
        const decoded = decodeURIComponent(data);
        const parsed = JSON.parse(decoded);

        if (!validateParams(parsed)) {
            console.error("Invalid params data in URL");
            return false;
        }

        // Copy validated data to targetParams
        Object.assign(targetParams.location, parsed.location);
        Object.assign(targetParams.property, parsed.property);
        Object.assign(targetParams.config, parsed.config);
        Object.assign(targetParams.new_home, parsed.new_home);
        Object.assign(targetParams.economy, parsed.economy);
        if (parsed.purchasers) {
            targetParams.purchasers = parsed.purchasers;
        }

        return true;
    } catch (e) {
        console.error("Failed to load from URL:", e);
        return false;
    }
}

/**
 * Save params to cookie
 */
export function saveToCookie(params: Params, cookieName = 'house_cost_params'): void {
    const json = JSON.stringify(params);
    const encoded = encodeURIComponent(json);
    // Set cookie to expire in 365 days
    const expires = new Date();
    expires.setDate(expires.getDate() + 365);
    document.cookie = `${cookieName}=${encoded}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

/**
 * Load params from cookie
 */
export function loadFromCookie(targetParams: Params, cookieName = 'house_cost_params'): boolean {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(cookieName + '=')) {
            const encoded = cookie.substring(cookieName.length + 1);
            try {
                const decoded = decodeURIComponent(encoded);
                const parsed = JSON.parse(decoded);

                if (!validateParams(parsed)) {
                    console.error("Invalid params data in cookie");
                    return false;
                }

                // Copy validated data to targetParams
                Object.assign(targetParams.location, parsed.location);
                Object.assign(targetParams.property, parsed.property);
                Object.assign(targetParams.config, parsed.config);
                Object.assign(targetParams.new_home, parsed.new_home);
                Object.assign(targetParams.economy, parsed.economy);
                if (parsed.purchasers) {
                    targetParams.purchasers = parsed.purchasers;
                }

                return true;
            } catch (e) {
                console.error("Failed to load from cookie:", e);
                return false;
            }
        }
    }
    return false;
}

/**
 * Clear saved cookie
 */
export function clearCookie(cookieName = 'house_cost_params'): void {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
