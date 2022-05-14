export const STATE_LIST=[
    {value : "ACT",text : "ACT"},
    {value : "NT", text : "NT"},
    {value : "NSW",text : "NSW"},
    {value : "VIC",text : "VIC"},
    {value : "QLD",text : "QLD"},
    {value : "SA", text : "SA"},
    {value : "WA", text : "WA"},
    {value : "TAS",text : "TAS"}
];

export function PostcodeToState(postcode: number): string {
    // http://en.wikipedia.org/wiki/Postcodes_in_Australia#Australia_States_and_territories
    if (postcode < 300)  return "ACT";
    if (postcode < 1000) return "NT";
    if (postcode < 2600) return "NSW";
    if (postcode < 2618) return "ACT";
    if (postcode < 2900) return "NSW";
    if (postcode < 3000) return "ACT";
    if (postcode < 4000) return "VIC";
    if (postcode < 5000) return "QLD";
    if (postcode < 6000) return "SA";
    if (postcode < 7000) return "WA";
    if (postcode < 8000) return "TAS";
    return "NONE";
}
