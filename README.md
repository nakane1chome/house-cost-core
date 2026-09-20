# House Cost Core Model

Detailed model for single house expenses.

See this info: https://www.shincbm.com/money/2023/05/17/house-cost.html

Intended to be integrated within a separate front end.

# To run postcodes2lga.py

https://www.matthewproctor.com/australian_postcodes

wget https://www.matthewproctor.com/Content/postcodes/australian_postcodes.csv

postcodes2lga.py

The output is postcodes2lga.ts

# Testing Interest Rate Updates

Test the rate update script with dry run:
```bash
# Backup current rates
cp rates.json rates.json.backup

# Run the script
npx ts-node scripts/update-rates.ts

# Check differences
git diff rates.json

# Restore if needed
mv rates.json.backup rates.json
```

# Depreciation conventions

The engine produces hold-aggregate figures (one flat annual amount over the
hold), not a year-by-year schedule.

- **AU**: Division 43 capital works at a flat 2.5% of `building_value`; fixtures
  as a flat share of `building_value`. Both are constant per year anyway.
- **JP**: `BuildingDepreciation` derives the 定額法 useful life from
  `construction` and `building_age` (used-building formula), then spreads
  `building_value` over `max(useful_life, hold_term)`. This keeps the total
  over the hold correct but *flattens* the shield when the useful life is
  shorter than the hold — a 4-year 木造 life spread over a 10-year hold
  understates years 1–4 by ~60% and overstates years 5–10. Read the annual
  figure as an average, not a year-1 number. `RenovationDepreciation` uses
  the same convention over `renovation_useful_life`.

