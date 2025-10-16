#!/usr/bin/env ts-node

import * as cheerio from 'cheerio';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface RateData {
  lastUpdated: string;
  rates: {
    AUS: {
      cashRate: number;
      mortgageRate: number;
      savingsRate: number;
      source: string;
      sourceUrl: string;
      lastChanged: string;
      margin: number;
    };
    JPN: {
      cashRate: number;
      mortgageRate: number;
      savingsRate: number;
      source: string;
      sourceUrl: string;
      lastChanged: string;
      margin: number;
    };
  };
  metadata: {
    version: string;
    fetchMethod: string;
    nextUpdate: string;
    fallbackRates: {
      AUS: { mortgageRate: number };
      JPN: { mortgageRate: number };
    };
  };
}

async function fetchRBACashRate(): Promise<{ rate: number; lastChanged: string }> {
  try {
    console.log('Fetching RBA cash rate...');
    const response = await axios.get('https://www.rba.gov.au/statistics/cash-rate/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const $ = cheerio.load(response.data);
    
    // Find the first row in the cash rate table
    const firstRow = $('table').first().find('tbody tr').first();
    const rateText = firstRow.find('td').eq(2).text().trim();
    const dateText = firstRow.find('td').first().text().trim();
    
    console.log(`RBA raw data - Date: ${dateText}, Rate: ${rateText}`);
    
    // Parse rate, handling percentage signs and potential formatting issues
    const rateMatch = rateText.match(/(\d+\.\d+)/);
    const rate = rateMatch ? parseFloat(rateMatch[1]) : 4.35;
    
    // Parse date (format: "13 Aug 2025") with better validation
    let lastChanged = new Date().toISOString(); // default fallback
    
    try {
      const dateParts = dateText.trim().split(' ');
      if (dateParts.length >= 3) {
        const day = parseInt(dateParts[0]);
        const monthMap: { [key: string]: number } = {
          'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
          'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };
        const month = monthMap[dateParts[1]];
        const year = parseInt(dateParts[2]);
        
        if (!isNaN(day) && month !== undefined && !isNaN(year)) {
          lastChanged = new Date(year, month, day, 14, 0, 0).toISOString();
        }
      }
    } catch (dateError) {
      console.warn('Could not parse RBA date, using current date');
    }
    
    console.log(`RBA parsed - Rate: ${rate}%, Date: ${lastChanged}`);
    return { rate, lastChanged };
  } catch (error) {
    console.error('Error fetching RBA rate:', error);
    return { rate: 4.35, lastChanged: new Date().toISOString() };
  }
}

async function fetchJapanFlat35Rate(): Promise<{ rate: number; lastChanged: string }> {
  try {
    console.log('Fetching Japan Flat35 rate...');
    const response = await axios.get('https://www.simulation.jhf.go.jp/flat35/kinri/index.php/rates/top', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const $ = cheerio.load(response.data);
    
    // Look for rate data in the table - try multiple selectors
    let rate = 1.87; // fallback
    
    // Try to find the lowest rate for 21-35 year loans
    $('table tr').each((i, row) => {
      const rowText = $(row).text();
      const rateMatch = rowText.match(/(\d+\.\d+)%/);
      if (rateMatch) {
        const foundRate = parseFloat(rateMatch[1]);
        if (foundRate > 1.0 && foundRate < 5.0) { // reasonable range
          rate = foundRate;
          console.log(`Japan found rate: ${rate}%`);
          return false; // break
        }
      }
    });
    
    console.log(`Japan parsed - Rate: ${rate}%`);
    return { rate, lastChanged: new Date().toISOString() };
  } catch (error) {
    console.error('Error fetching Japan rate:', error);
    return { rate: 1.87, lastChanged: new Date().toISOString() };
  }
}

async function main() {
  console.log('Starting interest rate update...');
  
  const [rbaData, jpnData] = await Promise.all([
    fetchRBACashRate(),
    fetchJapanFlat35Rate()
  ]);
  
  const ratesPath = path.join(__dirname, '..', 'rates.json');
  let currentRates: RateData;
  
  try {
    const content = fs.readFileSync(ratesPath, 'utf8');
    currentRates = JSON.parse(content);
    console.log('Loaded existing rates.json');
  } catch (error) {
    console.log('Could not read existing rates.json, creating new one');
    currentRates = {
      lastUpdated: new Date().toISOString(),
      rates: {
        AUS: {
          cashRate: 0,
          mortgageRate: 0,
          savingsRate: 0,
          source: "RBA",
          sourceUrl: "https://www.rba.gov.au/statistics/cash-rate/",
          lastChanged: new Date().toISOString(),
          margin: 2.0
        },
        JPN: {
          cashRate: -0.1,
          mortgageRate: 0,
          savingsRate: 0.1,
          source: "BOJ",
          sourceUrl: "https://www.simulation.jhf.go.jp/flat35/kinri/index.php/rates/top",
          lastChanged: new Date().toISOString(),
          margin: 2.0
        }
      },
      metadata: {
        version: "1.0",
        fetchMethod: "web-scraping",
        nextUpdate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        fallbackRates: {
          AUS: { mortgageRate: 6.0 },
          JPN: { mortgageRate: 1.9 }
        }
      }
    };
  }
  
  // Check if rates have changed
  const ausRateChanged = currentRates.rates.AUS.cashRate !== rbaData.rate;
  const jpnRateChanged = currentRates.rates.JPN.mortgageRate !== jpnData.rate;
  
  console.log(`Rate changes - AUS: ${ausRateChanged}, JPN: ${jpnRateChanged}`);
  
  const now = new Date().toISOString();
  currentRates.lastUpdated = now;
  
  // Update Australian rates
  currentRates.rates.AUS.cashRate = rbaData.rate;
  currentRates.rates.AUS.mortgageRate = rbaData.rate + currentRates.rates.AUS.margin;
  currentRates.rates.AUS.savingsRate = Math.max(0.1, rbaData.rate - 0.5);
  if (ausRateChanged) {
    currentRates.rates.AUS.lastChanged = rbaData.lastChanged;
  }
  
  // Update Japanese rates
  currentRates.rates.JPN.mortgageRate = jpnData.rate;
  if (jpnRateChanged) {
    currentRates.rates.JPN.lastChanged = jpnData.lastChanged;
  }
  
  // Update metadata
  currentRates.metadata.nextUpdate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  
  // Write updated rates
  fs.writeFileSync(ratesPath, JSON.stringify(currentRates, null, 2));
  
  console.log('✅ Rates updated successfully:');
  console.log(`   AUS Cash Rate: ${rbaData.rate}% -> Mortgage Rate: ${currentRates.rates.AUS.mortgageRate}%`);
  console.log(`   JPN Flat35 Rate: ${jpnData.rate}%`);
  
  // Set GitHub Actions outputs
  if (ausRateChanged || jpnRateChanged) {
    console.log('::notice::Interest rates have changed');
    process.exit(1); // Exit with code 1 to indicate changes
  } else {
    console.log('::notice::No rate changes detected');
    process.exit(0);
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Script failed:', error);
    process.exit(2);
  });
}