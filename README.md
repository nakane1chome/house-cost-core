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
