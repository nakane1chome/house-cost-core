export function Postcode2Lga(postcode: number) : string {
// [200, 200, 'act.unincorporated-act']
// [804, 820, 'nt.darwin']
// [821, 821, 'nt.east-arnhem']
// [828, 828, 'nt.darwin']
// [829, 835, 'nt.palmerston']
// [836, 837, 'nt.litchfield']
// [839, 839, 'nt.palmerston']
// [847, 850, 'nt.katherine']
// [851, 854, 'nt.roper-gulf']
// [860, 862, 'nt.barkly']
// [870, 870, 'nt.alice-springs']
// [872, 872, 'sa.coober-pedy']
// [873, 874, 'nt.alice-springs']
// [880, 906, 'nt.east-arnhem']
// [1001, 1031, 'nsw.mosman']
// [1032, 1032, 'nsw.blacktown']
// [1033, 1115, 'nsw.mosman']
// [1116, 1117, 'nsw.blacktown']
// [1118, 1131, 'nsw.mosman']
// [1132, 1132, 'nsw.blacktown']
// [1133, 1191, 'nsw.mosman']
// [1192, 1192, 'nsw.junee']
// [1193, 1207, 'nsw.mosman']
// [1208, 1208, 'nsw.glen-innes-severn']
// [1209, 1215, 'nsw.inner-west']
// [1216, 1220, 'nsw.parramatta']
// [1221, 1230, 'nsw.sydney']
// [1231, 1235, 'nsw.parramatta']
// [1236, 1240, 'nsw.glen-innes-severn']
// [1291, 1299, 'nsw.mosman']
// [1300, 1300, 'nsw.sydney']
// [1314, 1314, 'nsw.randwick']
// [1335, 1335, 'nsw.ryde']
// [1340, 1340, 'nsw.snowy-valleys']
// [1350, 1350, 'nsw.woollahra']
// [1355, 1355, 'nsw.waverley']
// [1360, 1360, 'nsw.woollahra']
// [1401, 1401, 'nsw.sydney']
// [1405, 1405, 'nsw.yass-valley']
// [1419, 1419, 'nsw.sutherland-shire']
// [1420, 1429, 'nsw.blacktown']
// [1430, 1430, 'nsw.sydney']
// [1435, 1435, 'nsw.ku-ring-gai']
// [1440, 1441, 'nsw.canterbury-bankstown']
// [1445, 1445, 'nsw.sutherland-shire']
// [1450, 1450, 'nsw.coffs-harbour']
// [1455, 1455, 'nsw.bayside']
// [1460, 1460, 'nsw.randwick']
// [1465, 1465, 'nsw.inner-west']
// [1466, 1466, 'nsw.sydney']
// [1470, 1470, 'nsw.hunters-hill']
// [1475, 1476, 'nsw.inner-west']
// [1480, 1484, 'nsw.georges-river']
// [1485, 1485, 'nsw.bayside']
// [1490, 1490, 'nsw.sutherland-shire']
// [1493, 1493, 'nsw.georges-river']
// [1495, 1495, 'nsw.sutherland-shire']
// [1499, 1499, 'nsw.georges-river']
// [1515, 1515, 'nsw.north-sydney']
// [1560, 1560, 'nsw.willoughby']
// [1565, 1565, 'nsw.sydney']
// [1570, 1570, 'nsw.willoughby']
// [1585, 1585, 'nsw.north-sydney']
// [1590, 1590, 'nsw.central-coast']
// [1595, 1597, 'nsw.willoughby']
// [1602, 1602, 'nsw.lane-cove']
// [1630, 1635, 'nsw.ku-ring-gai']
// [1639, 1640, 'nsw.mosman']
// [1655, 1655, 'nsw.central-coast']
// [1658, 1660, 'nsw.northern-beaches']
// [1670, 1670, 'nsw.ryde']
// [1675, 1675, 'nsw.hunters-hill']
// [1680, 1680, 'nsw.ku-ring-gai']
// [1685, 1685, 'nsw.ryde']
// [1700, 1700, 'nsw.randwick']
// [1710, 1710, 'nsw.ryde']
// [1715, 1730, 'nsw.parramatta']
// [1740, 1741, 'nsw.inner-west']
// [1750, 1750, 'nsw.cumberland']
// [1755, 1771, 'nsw.parramatta']
// [1781, 1781, 'nsw.blacktown']
// [1790, 1790, 'nsw.north-sydney']
// [1800, 1805, 'nsw.burwood']
// [1811, 1811, 'nsw.parramatta']
// [1819, 1819, 'nsw.burwood']
// [1825, 1825, 'nsw.strathfield']
// [1830, 1831, 'nsw.cumberland']
// [1835, 1835, 'nsw.canterbury-bankstown']
// [1851, 1851, 'nsw.fairfield']
// [1860, 1860, 'nsw.cumberland']
// [1871, 1871, 'nsw.burwood']
// [1874, 1875, 'nsw.liverpool']
// [1885, 1888, 'nsw.canterbury-bankstown']
// [1890, 1890, 'nsw.liverpool']
// [1891, 1891, 'nsw.canterbury-bankstown']
// [2000, 2000, 'nsw.woollahra']
// [2001, 2001, 'nsw.mosman']
// [2002, 2002, 'nsw.sydney']
// [2004, 2004, 'nsw.randwick']
// [2006, 2011, 'nsw.sydney']
// [2012, 2013, 'nsw.blacktown']
// [2015, 2018, 'nsw.sydney']
// [2019, 2019, 'nsw.randwick']
// [2020, 2020, 'nsw.bayside']
// [2021, 2021, 'nsw.sydney']
// [2022, 2024, 'nsw.waverley']
// [2025, 2029, 'nsw.woollahra']
// [2031, 2032, 'nsw.randwick']
// [2033, 2033, 'nsw.sydney']
// [2034, 2035, 'nsw.randwick']
// [2037, 2037, 'nsw.sydney']
// [2038, 2040, 'nsw.inner-west']
// [2041, 2041, 'nsw.sydney']
// [2042, 2042, 'nsw.inner-west']
// [2043, 2043, 'nsw.sydney']
// [2044, 2044, 'nsw.bayside']
// [2045, 2045, 'nsw.inner-west']
// [2046, 2046, 'nsw.canada-bay']
// [2047, 2047, 'nsw.hunters-hill']
// [2048, 2050, 'nsw.inner-west']
// [2052, 2052, 'nsw.sydney']
// [2055, 2055, 'nsw.ryde']
// [2057, 2057, 'nsw.willoughby']
// [2058, 2058, 'nsw.bogan']
// [2059, 2059, 'nsw.ryde']
// [2060, 2062, 'nsw.north-sydney']
// [2063, 2063, 'nsw.willoughby']
// [2064, 2064, 'nsw.lane-cove']
// [2065, 2065, 'nsw.north-sydney']
// [2067, 2070, 'nsw.willoughby']
// [2071, 2080, 'nsw.ku-ring-gai']
// [2081, 2083, 'nsw.hornsby']
// [2084, 2085, 'nsw.northern-beaches']
// [2086, 2087, 'nsw.willoughby']
// [2088, 2088, 'nsw.mosman']
// [2089, 2089, 'nsw.north-sydney']
// [2091, 2095, 'nsw.mosman']
// [2097, 2108, 'nsw.northern-beaches']
// [2109, 2109, 'nsw.ryde']
// [2110, 2110, 'nsw.hunters-hill']
// [2112, 2114, 'nsw.ryde']
// [2115, 2119, 'nsw.parramatta']
// [2120, 2120, 'nsw.ku-ring-gai']
// [2121, 2122, 'nsw.ryde']
// [2123, 2123, 'nsw.cumberland']
// [2124, 2124, 'nsw.inner-west']
// [2125, 2126, 'nsw.parramatta']
// [2127, 2127, 'nsw.canada-bay']
// [2128, 2128, 'nsw.parramatta']
// [2129, 2129, 'nsw.strathfield']
// [2130, 2130, 'nsw.inner-west']
// [2131, 2134, 'nsw.burwood']
// [2135, 2136, 'nsw.strathfield']
// [2137, 2139, 'nsw.canada-bay']
// [2142, 2142, 'nsw.cumberland']
// [2143, 2143, 'nsw.canterbury-bankstown']
// [2144, 2146, 'nsw.cumberland']
// [2147, 2148, 'nsw.blacktown']
// [2150, 2153, 'nsw.parramatta']
// [2155, 2155, 'nsw.blacktown']
// [2156, 2158, 'nsw.the-hills-shire']
// [2159, 2159, 'nsw.hornsby']
// [2160, 2162, 'nsw.cumberland']
// [2164, 2166, 'nsw.fairfield']
// [2167, 2168, 'nsw.liverpool']
// [2170, 2170, 'nsw.fairfield']
// [2171, 2172, 'nsw.liverpool']
// [2173, 2173, 'nsw.campbelltown']
// [2174, 2174, 'nsw.liverpool']
// [2175, 2178, 'nsw.fairfield']
// [2179, 2179, 'nsw.liverpool']
// [2190, 2190, 'nsw.canterbury-bankstown']
// [2191, 2193, 'nsw.burwood']
// [2195, 2200, 'nsw.canterbury-bankstown']
// [2203, 2204, 'nsw.inner-west']
// [2205, 2205, 'nsw.bayside']
// [2207, 2210, 'nsw.georges-river']
// [2211, 2213, 'nsw.canterbury-bankstown']
// [2216, 2217, 'nsw.bayside']
// [2218, 2225, 'nsw.georges-river']
// [2227, 2229, 'nsw.sutherland-shire']
// [2230, 2231, 'nsw.bayside']
// [2232, 2234, 'nsw.sutherland-shire']
// [2250, 2256, 'nsw.central-coast']
// [2257, 2257, 'nsw.northern-beaches']
// [2258, 2258, 'nsw.central-coast']
// [2259, 2259, 'nsw.lake-macquarie']
// [2260, 2261, 'nsw.central-coast']
// [2262, 2262, 'nsw.lake-macquarie']
// [2263, 2263, 'nsw.central-coast']
// [2264, 2267, 'nsw.lake-macquarie']
// [2278, 2278, 'nsw.newcastle']
// [2280, 2281, 'nsw.lake-macquarie']
// [2282, 2282, 'nsw.newcastle']
// [2283, 2283, 'nsw.lake-macquarie']
// [2284, 2303, 'nsw.newcastle']
// [2304, 2304, 'nsw.queanbeyan-palerang-regional']
// [2305, 2308, 'nsw.newcastle']
// [2309, 2309, 'nsw.narrabri']
// [2310, 2311, 'nsw.dungog']
// [2312, 2312, 'nsw.mid-coast']
// [2314, 2319, 'nsw.port-stephens']
// [2320, 2323, 'nsw.maitland']
// [2324, 2324, 'nsw.port-stephens']
// [2325, 2325, 'nsw.hawkesbury']
// [2326, 2327, 'nsw.maitland']
// [2328, 2328, 'nsw.muswellbrook']
// [2329, 2329, 'nsw.upper-hunter-shire']
// [2330, 2330, 'nsw.dungog']
// [2334, 2335, 'nsw.maitland']
// [2336, 2338, 'nsw.upper-hunter-shire']
// [2339, 2340, 'nsw.liverpool-plains']
// [2340, 2340, 'nsw.walcha']
// [2341, 2341, 'nsw.liverpool-plains']
// [2342, 2342, 'nsw.gunnedah']
// [2344, 2345, 'nsw.tamworth-regional']
// [2346, 2346, 'nsw.uralla']
// [2347, 2347, 'nsw.gwydir']
// [2348, 2348, 'nsw.bogan']
// [2350, 2351, 'nsw.armidale-regional']
// [2352, 2353, 'nsw.tamworth-regional']
// [2356, 2356, 'nsw.narrabri']
// [2357, 2357, 'nsw.warrumbungle-shire']
// [2358, 2359, 'nsw.uralla']
// [2360, 2361, 'nsw.inverell']
// [2370, 2370, 'nsw.glen-innes-severn']
// [2372, 2372, 'nsw.tenterfield']
// [2379, 2379, 'nsw.warrumbungle-shire']
// [2380, 2381, 'nsw.gunnedah']
// [2386, 2386, 'nsw.narrabri']
// [2387, 2387, 'nsw.walgett']
// [2388, 2388, 'nsw.narrabri']
// [2390, 2390, 'nsw.gwydir']
// [2395, 2395, 'nsw.warrumbungle-shire']
// [2396, 2396, 'nsw.coonamble']
// [2398, 2398, 'nsw.moree-plains']
// [2399, 2399, 'nsw.gwydir']
// [2400, 2400, 'nsw.moree-plains']
// [2401, 2402, 'nsw.gwydir']
// [2403, 2403, 'nsw.inverell']
// [2404, 2404, 'nsw.gwydir']
// [2405, 2405, 'nsw.moree-plains']
// [2406, 2406, 'qld.balonne']
// [2408, 2408, 'nsw.gwydir']
// [2409, 2410, 'nsw.inverell']
// [2415, 2421, 'nsw.dungog']
// [2422, 2422, 'nsw.mid-coast']
// [2423, 2423, 'nsw.port-stephens']
// [2424, 2427, 'nsw.port-macquarie-hastings']
// [2428, 2429, 'nsw.mid-coast']
// [2430, 2430, 'nsw.gilgandra']
// [2431, 2431, 'nsw.nambucca-valley']
// [2439, 2439, 'nsw.port-macquarie-hastings']
// [2440, 2440, 'nsw.coffs-harbour']
// [2440, 2441, 'nsw.kempsey']
// [2441, 2441, 'nsw.nambucca-valley']
// [2442, 2445, 'nsw.port-macquarie-hastings']
// [2447, 2449, 'nsw.nambucca-valley']
// [2449, 2450, 'nsw.bellingen']
// [2450, 2452, 'nsw.coffs-harbour']
// [2453, 2453, 'nsw.bellingen']
// [2456, 2456, 'nsw.coffs-harbour']
// [2460, 2460, 'nsw.clarence-valley']
// [2462, 2462, 'nsw.coffs-harbour']
// [2463, 2463, 'nsw.clarence-valley']
// [2464, 2469, 'nsw.richmond-valley']
// [2469, 2470, 'nsw.kyogle']
// [2470, 2470, 'nsw.lismore']
// [2471, 2471, 'nsw.ballina']
// [2472, 2472, 'nsw.richmond-valley']
// [2473, 2473, 'nsw.ballina']
// [2474, 2474, 'nsw.tweed']
// [2475, 2475, 'nsw.kyogle']
// [2477, 2477, 'nsw.ballina']
// [2479, 2479, 'nsw.byron']
// [2480, 2480, 'nsw.tweed']
// [2481, 2482, 'nsw.byron']
// [2484, 2489, 'nsw.tweed']
// [2500, 2500, 'nsw.wollongong']
// [2502, 2502, 'nsw.shellharbour']
// [2505, 2505, 'nsw.wollongong']
// [2506, 2506, 'nsw.shellharbour']
// [2508, 2508, 'nsw.campbelltown']
// [2515, 2526, 'nsw.wollongong']
// [2527, 2530, 'nsw.shellharbour']
// [2533, 2535, 'nsw.kiama']
// [2536, 2537, 'nsw.eurobodalla']
// [2538, 2539, 'nsw.shoalhaven']
// [2539, 2539, 'nsw.eurobodalla']
// [2540, 2541, 'nsw.shoalhaven']
// [2545, 2545, 'nsw.eurobodalla']
// [2546, 2551, 'nsw.bega-valley']
// [2555, 2555, 'nsw.liverpool']
// [2556, 2557, 'nsw.camden']
// [2558, 2559, 'nsw.campbelltown']
// [2560, 2560, 'nsw.wollongong']
// [2563, 2563, 'nsw.campbelltown']
// [2564, 2564, 'nsw.liverpool']
// [2566, 2566, 'nsw.campbelltown']
// [2567, 2567, 'nsw.camden']
// [2568, 2568, 'nsw.campbelltown']
// [2570, 2575, 'nsw.wollondilly']
// [2575, 2578, 'nsw.wingecarribee']
// [2580, 2580, 'nsw.oberon']
// [2580, 2581, 'nsw.upper-lachlan-shire']
// [2582, 2582, 'nsw.yass-valley']
// [2584, 2587, 'nsw.hilltops']
// [2587, 2590, 'nsw.cootamundra-gundagai-regional']
// [2594, 2594, 'nsw.hilltops']
// [2600, 2610, 'act.unincorporated-act']
// [2611, 2611, 'nsw.yass-valley']
// [2612, 2617, 'act.unincorporated-act']
// [2618, 2618, 'nsw.yass-valley']
// [2619, 2622, 'nsw.queanbeyan-palerang-regional']
// [2624, 2633, 'nsw.snowy-monaro-regional']
// [2640, 2641, 'nsw.albury']
// [2642, 2642, 'nsw.lockhart']
// [2643, 2643, 'nsw.albury']
// [2644, 2644, 'nsw.greater-hume-shire']
// [2645, 2645, 'nsw.lockhart']
// [2646, 2646, 'nsw.albury']
// [2647, 2647, 'nsw.berrigan']
// [2648, 2648, 'nsw.balranald']
// [2649, 2649, 'nsw.snowy-valleys']
// [2650, 2650, 'nsw.lockhart']
// [2650, 2651, 'nsw.wagga-wagga']
// [2652, 2652, 'nsw.narrandera']
// [2653, 2653, 'nsw.snowy-valleys']
// [2655, 2658, 'nsw.lockhart']
// [2661, 2661, 'nsw.wagga-wagga']
// [2665, 2665, 'nsw.narrandera']
// [2665, 2668, 'nsw.temora']
// [2669, 2669, 'nsw.bland']
// [2672, 2672, 'nsw.lachlan']
// [2675, 2675, 'nsw.carrathool']
// [2680, 2681, 'nsw.griffith']
// [2700, 2700, 'nsw.leeton']
// [2701, 2701, 'nsw.coolamon']
// [2703, 2703, 'nsw.leeton']
// [2707, 2707, 'nsw.murrumbidgee']
// [2708, 2708, 'nsw.murray-river']
// [2710, 2710, 'nsw.berrigan']
// [2711, 2711, 'nsw.murray-river']
// [2712, 2714, 'nsw.berrigan']
// [2715, 2715, 'nsw.murray-river']
// [2716, 2716, 'nsw.berrigan']
// [2717, 2717, 'nsw.wentworth']
// [2720, 2720, 'nsw.snowy-valleys']
// [2721, 2721, 'nsw.weddin']
// [2722, 2727, 'nsw.cootamundra-gundagai-regional']
// [2731, 2736, 'nsw.murray-river']
// [2738, 2739, 'nsw.wentworth']
// [2745, 2753, 'nsw.penrith']
// [2754, 2754, 'nsw.the-hills-shire']
// [2756, 2756, 'nsw.hawkesbury']
// [2757, 2757, 'nsw.penrith']
// [2758, 2758, 'nsw.blue-mountains']
// [2759, 2760, 'nsw.penrith']
// [2761, 2769, 'nsw.blacktown']
// [2773, 2774, 'nsw.penrith']
// [2776, 2786, 'nsw.blue-mountains']
// [2787, 2787, 'nsw.oberon']
// [2790, 2790, 'nsw.lithgow']
// [2791, 2793, 'nsw.blayney']
// [2793, 2794, 'nsw.cowra']
// [2795, 2798, 'nsw.blayney']
// [2800, 2800, 'nsw.cabonne']
// [2804, 2805, 'nsw.cowra']
// [2806, 2806, 'nsw.cabonne']
// [2807, 2808, 'nsw.cowra']
// [2817, 2817, 'nsw.gilgandra']
// [2818, 2820, 'nsw.dubbo-regional']
// [2821, 2821, 'nsw.narromine']
// [2822, 2822, 'nsw.gilgandra']
// [2823, 2823, 'nsw.narromine']
// [2825, 2825, 'nsw.bogan']
// [2826, 2826, 'nsw.narromine']
// [2827, 2828, 'nsw.gilgandra']
// [2829, 2829, 'nsw.coonamble']
// [2830, 2830, 'nsw.dubbo-regional']
// [2831, 2831, 'nsw.bogan']
// [2832, 2833, 'nsw.walgett']
// [2835, 2835, 'nsw.cobar']
// [2836, 2836, 'nsw.central-darling']
// [2842, 2843, 'nsw.warrumbungle-shire']
// [2845, 2846, 'nsw.lithgow']
// [2848, 2852, 'nsw.mid-western-regional']
// [2864, 2866, 'nsw.cabonne']
// [2869, 2870, 'nsw.parkes']
// [2871, 2871, 'nsw.forbes']
// [2873, 2873, 'nsw.lachlan']
// [2874, 2874, 'nsw.parkes']
// [2875, 2875, 'nsw.forbes']
// [2899, 2899, 'nsw.albury']
// [2900, 2913, 'act.unincorporated-act']
// [3000, 3001, 'vic.melbourne']
// [3002, 3002, 'vic.yarra']
// [3003, 3003, 'vic.melbourne']
// [3004, 3004, 'vic.port-phillip']
// [3005, 3010, 'vic.melbourne']
// [3011, 3015, 'vic.maribyrnong']
// [3016, 3018, 'vic.hobsons-bay']
// [3019, 3019, 'vic.maribyrnong']
// [3020, 3023, 'vic.brimbank']
// [3024, 3024, 'vic.wyndham']
// [3025, 3025, 'vic.hobsons-bay']
// [3026, 3026, 'vic.wyndham']
// [3027, 3027, 'vic.hobsons-bay']
// [3029, 3030, 'vic.wyndham']
// [3031, 3031, 'vic.melbourne']
// [3032, 3034, 'vic.moonee-valley']
// [3036, 3038, 'vic.brimbank']
// [3039, 3042, 'vic.moonee-valley']
// [3044, 3049, 'vic.moreland']
// [3050, 3053, 'vic.melbourne']
// [3054, 3054, 'vic.yarra']
// [3055, 3056, 'vic.moreland']
// [3057, 3057, 'vic.yarra']
// [3058, 3058, 'vic.moreland']
// [3059, 3059, 'vic.hume']
// [3060, 3061, 'vic.moreland']
// [3062, 3064, 'vic.hume']
// [3065, 3070, 'vic.yarra']
// [3071, 3076, 'vic.darebin']
// [3078, 3078, 'vic.yarra']
// [3079, 3081, 'vic.darebin']
// [3082, 3085, 'vic.banyule']
// [3086, 3086, 'vic.darebin']
// [3087, 3090, 'vic.banyule']
// [3091, 3091, 'vic.nillumbik']
// [3093, 3094, 'vic.banyule']
// [3095, 3095, 'vic.manningham']
// [3096, 3096, 'vic.nillumbik']
// [3097, 3097, 'vic.manningham']
// [3099, 3099, 'vic.nillumbik']
// [3101, 3104, 'vic.boroondara']
// [3105, 3105, 'vic.banyule']
// [3106, 3106, 'vic.manningham']
// [3108, 3108, 'vic.whitehorse']
// [3109, 3114, 'vic.manningham']
// [3116, 3116, 'vic.maroondah']
// [3121, 3121, 'vic.yarra']
// [3122, 3126, 'vic.boroondara']
// [3128, 3133, 'vic.whitehorse']
// [3134, 3138, 'vic.maroondah']
// [3139, 3139, 'vic.yarra-ranges']
// [3140, 3140, 'vic.maroondah']
// [3141, 3141, 'vic.port-phillip']
// [3142, 3147, 'vic.stonnington']
// [3148, 3148, 'vic.glen-eira']
// [3148, 3150, 'vic.monash']
// [3151, 3151, 'vic.whitehorse']
// [3152, 3152, 'vic.knox']
// [3153, 3153, 'vic.maroondah']
// [3154, 3160, 'vic.knox']
// [3161, 3161, 'vic.stonnington']
// [3162, 3163, 'vic.glen-eira']
// [3164, 3164, 'vic.greater-dandenong']
// [3165, 3167, 'vic.glen-eira']
// [3168, 3168, 'vic.monash']
// [3169, 3169, 'vic.kingston']
// [3170, 3171, 'vic.monash']
// [3172, 3172, 'vic.kingston']
// [3173, 3175, 'vic.greater-dandenong']
// [3176, 3176, 'vic.knox']
// [3177, 3177, 'vic.greater-dandenong']
// [3178, 3180, 'vic.knox']
// [3181, 3184, 'vic.port-phillip']
// [3185, 3185, 'vic.glen-eira']
// [3186, 3191, 'vic.bayside']
// [3192, 3196, 'vic.kingston']
// [3197, 3201, 'vic.frankston']
// [3205, 3206, 'vic.port-phillip']
// [3207, 3207, 'vic.melbourne']
// [3211, 3211, 'vic.wyndham']
// [3212, 3216, 'vic.greater-geelong']
// [3217, 3217, 'vic.surf-coast']
// [3218, 3221, 'vic.greater-geelong']
// [3222, 3223, 'vic.queenscliffe']
// [3224, 3224, 'vic.greater-geelong']
// [3225, 3227, 'vic.queenscliffe']
// [3228, 3232, 'vic.surf-coast']
// [3233, 3234, 'vic.colac-otway']
// [3235, 3235, 'vic.surf-coast']
// [3236, 3239, 'vic.colac-otway']
// [3240, 3241, 'vic.surf-coast']
// [3242, 3254, 'vic.colac-otway']
// [3260, 3267, 'vic.corangamite']
// [3268, 3270, 'vic.warrnambool']
// [3271, 3271, 'vic.corangamite']
// [3272, 3274, 'vic.moyne']
// [3275, 3275, 'vic.warrnambool']
// [3276, 3276, 'vic.moyne']
// [3277, 3278, 'vic.warrnambool']
// [3279, 3279, 'vic.moyne']
// [3280, 3284, 'vic.warrnambool']
// [3286, 3286, 'vic.glenelg']
// [3287, 3289, 'vic.moyne']
// [3292, 3292, 'vic.glenelg']
// [3293, 3293, 'vic.ararat']
// [3294, 3300, 'vic.southern-grampians']
// [3301, 3301, 'vic.moyne']
// [3302, 3312, 'vic.glenelg']
// [3314, 3315, 'vic.southern-grampians']
// [3317, 3319, 'vic.west-wimmera']
// [3321, 3323, 'vic.golden-plains']
// [3324, 3324, 'vic.corangamite']
// [3328, 3333, 'vic.golden-plains']
// [3334, 3334, 'vic.moorabool']
// [3335, 3338, 'vic.melton']
// [3340, 3345, 'vic.moorabool']
// [3350, 3350, 'vic.ballarat']
// [3351, 3351, 'vic.golden-plains']
// [3352, 3358, 'vic.ballarat']
// [3360, 3360, 'vic.golden-plains']
// [3363, 3363, 'vic.ballarat']
// [3363, 3364, 'vic.hepburn']
// [3364, 3364, 'vic.mount-alexander']
// [3370, 3370, 'vic.hepburn']
// [3371, 3371, 'vic.central-goldfields']
// [3373, 3373, 'vic.pyrenees']
// [3374, 3374, 'vic.ararat']
// [3375, 3375, 'vic.pyrenees']
// [3377, 3377, 'vic.northern-grampians']
// [3378, 3379, 'vic.ararat']
// [3380, 3384, 'vic.northern-grampians']
// [3385, 3385, 'vic.horsham']
// [3387, 3388, 'vic.northern-grampians']
// [3390, 3390, 'vic.horsham']
// [3391, 3392, 'vic.yarriambiack']
// [3392, 3392, 'vic.northern-grampians']
// [3393, 3396, 'vic.yarriambiack']
// [3399, 3401, 'vic.horsham']
// [3409, 3413, 'vic.west-wimmera']
// [3414, 3414, 'vic.hindmarsh']
// [3415, 3415, 'vic.west-wimmera']
// [3418, 3418, 'vic.hindmarsh']
// [3419, 3419, 'vic.west-wimmera']
// [3423, 3424, 'vic.hindmarsh']
// [3428, 3430, 'vic.hume']
// [3431, 3442, 'vic.macedon-ranges']
// [3446, 3453, 'vic.mount-alexander']
// [3460, 3460, 'vic.hepburn']
// [3462, 3463, 'vic.mount-alexander']
// [3464, 3465, 'vic.central-goldfields']
// [3467, 3469, 'vic.pyrenees']
// [3472, 3475, 'vic.central-goldfields']
// [3477, 3477, 'vic.northern-grampians']
// [3480, 3485, 'vic.buloke']
// [3487, 3488, 'vic.yarriambiack']
// [3489, 3490, 'vic.swan-hill']
// [3490, 3501, 'vic.mildura']
// [3502, 3502, 'vic.greater-dandenong']
// [3505, 3512, 'vic.mildura']
// [3515, 3515, 'vic.greater-bendigo']
// [3516, 3520, 'vic.loddon']
// [3521, 3522, 'vic.mitchell']
// [3523, 3523, 'vic.greater-bendigo']
// [3525, 3525, 'vic.loddon']
// [3527, 3531, 'vic.buloke']
// [3533, 3533, 'vic.swan-hill']
// [3537, 3537, 'vic.loddon']
// [3540, 3542, 'vic.gannawarra']
// [3544, 3549, 'vic.swan-hill']
// [3550, 3551, 'vic.greater-bendigo']
// [3552, 3552, 'vic.yarra']
// [3554, 3557, 'vic.greater-bendigo']
// [3558, 3566, 'vic.campaspe']
// [3567, 3568, 'vic.gannawarra']
// [3571, 3572, 'vic.loddon']
// [3573, 3573, 'vic.campaspe']
// [3575, 3575, 'vic.loddon']
// [3579, 3583, 'vic.gannawarra']
// [3585, 3597, 'vic.swan-hill']
// [3607, 3608, 'vic.strathbogie']
// [3610, 3620, 'vic.greater-shepparton']
// [3621, 3623, 'vic.campaspe']
// [3629, 3634, 'vic.greater-shepparton']
// [3635, 3646, 'vic.moira']
// [3647, 3647, 'vic.greater-shepparton']
// [3649, 3649, 'vic.moira']
// [3658, 3658, 'vic.whittlesea']
// [3659, 3660, 'vic.mitchell']
// [3661, 3661, 'vic.latrobe']
// [3662, 3663, 'vic.mitchell']
// [3664, 3666, 'vic.strathbogie']
// [3669, 3670, 'vic.benalla']
// [3671, 3671, 'vic.greater-shepparton']
// [3672, 3673, 'vic.benalla']
// [3675, 3678, 'vic.wangaratta']
// [3682, 3688, 'vic.indigo']
// [3690, 3691, 'vic.wodonga']
// [3691, 3691, 'vic.towong']
// [3694, 3695, 'vic.wodonga']
// [3697, 3699, 'vic.alpine']
// [3700, 3709, 'vic.towong']
// [3711, 3718, 'vic.murrindindi']
// [3720, 3724, 'vic.mansfield']
// [3725, 3726, 'vic.benalla']
// [3728, 3728, 'vic.moira']
// [3732, 3736, 'vic.wangaratta']
// [3737, 3744, 'vic.alpine']
// [3746, 3747, 'vic.indigo']
// [3750, 3757, 'vic.whittlesea']
// [3759, 3761, 'vic.nillumbik']
// [3762, 3762, 'vic.mitchell']
// [3763, 3763, 'vic.nillumbik']
// [3765, 3770, 'vic.maroondah']
// [3777, 3779, 'vic.yarra-ranges']
// [3781, 3781, 'vic.cardinia']
// [3782, 3782, 'vic.knox']
// [3783, 3783, 'vic.cardinia']
// [3785, 3787, 'vic.knox']
// [3788, 3788, 'vic.maroondah']
// [3789, 3793, 'vic.knox']
// [3795, 3795, 'vic.maroondah']
// [3797, 3797, 'vic.unincorporated-vic']
// [3802, 3803, 'vic.greater-dandenong']
// [3805, 3809, 'vic.casey']
// [3810, 3815, 'vic.cardinia']
// [3816, 3818, 'vic.unincorporated-vic']
// [3820, 3820, 'vic.baw-baw']
// [3821, 3821, 'vic.unincorporated-vic']
// [3822, 3823, 'vic.baw-baw']
// [3824, 3824, 'vic.latrobe']
// [3825, 3825, 'vic.wellington']
// [3831, 3831, 'vic.baw-baw']
// [3832, 3832, 'vic.unincorporated-vic']
// [3833, 3833, 'vic.baw-baw']
// [3835, 3840, 'vic.latrobe']
// [3841, 3841, 'vic.wellington']
// [3842, 3847, 'vic.latrobe']
// [3850, 3852, 'vic.wellington']
// [3854, 3854, 'vic.latrobe']
// [3856, 3865, 'vic.wellington']
// [3869, 3870, 'vic.latrobe']
// [3871, 3871, 'vic.south-gippsland']
// [3873, 3874, 'vic.latrobe']
// [3875, 3875, 'vic.east-gippsland']
// [3878, 3878, 'vic.wellington']
// [3882, 3904, 'vic.east-gippsland']
// [3910, 3913, 'vic.frankston']
// [3915, 3920, 'vic.mornington-peninsula']
// [3921, 3921, 'vic.bass-coast']
// [3922, 3922, 'vic.mornington-peninsula']
// [3923, 3925, 'vic.bass-coast']
// [3926, 3929, 'vic.mornington-peninsula']
// [3930, 3930, 'vic.frankston']
// [3931, 3940, 'vic.mornington-peninsula']
// [3942, 3944, 'vic.queenscliffe']
// [3945, 3951, 'vic.bass-coast']
// [3953, 3971, 'vic.south-gippsland']
// [3975, 3975, 'vic.greater-dandenong']
// [3976, 3978, 'vic.casey']
// [3979, 3995, 'vic.bass-coast']
// [4000, 4000, 'qld.brisbane']
// [4001, 4001, 'qld.ipswich']
// [4002, 4002, 'qld.brisbane']
// [4003, 4003, 'qld.bundaberg']
// [4004, 4004, 'qld.woorabinda']
// [4005, 4019, 'qld.brisbane']
// [4020, 4022, 'qld.moreton-bay']
// [4025, 4025, 'qld.redland']
// [4029, 4070, 'qld.brisbane']
// [4072, 4072, 'qld.lockyer-valley']
// [4073, 4076, 'qld.brisbane']
// [4077, 4078, 'qld.logan']
// [4101, 4107, 'qld.brisbane']
// [4108, 4108, 'qld.charters-towers']
// [4109, 4109, 'qld.brisbane']
// [4110, 4110, 'qld.charters-towers']
// [4111, 4111, 'qld.brisbane']
// [4112, 4112, 'qld.logan']
// [4113, 4113, 'qld.brisbane']
// [4114, 4119, 'qld.logan']
// [4120, 4123, 'qld.brisbane']
// [4124, 4129, 'qld.logan']
// [4130, 4130, 'qld.redland']
// [4131, 4133, 'qld.logan']
// [4151, 4156, 'qld.brisbane']
// [4157, 4157, 'qld.redland']
// [4158, 4158, 'qld.brisbane']
// [4159, 4165, 'qld.redland']
// [4169, 4179, 'qld.brisbane']
// [4183, 4183, 'qld.redland']
// [4205, 4208, 'qld.logan']
// [4209, 4221, 'qld.gold-coast']
// [4222, 4222, 'qld.brisbane']
// [4223, 4230, 'qld.gold-coast']
// [4270, 4270, 'qld.logan']
// [4271, 4275, 'qld.gold-coast']
// [4280, 4280, 'qld.logan']
// [4285, 4287, 'qld.scenic-rim']
// [4301, 4307, 'qld.ipswich']
// [4309, 4310, 'qld.scenic-rim']
// [4311, 4311, 'qld.lockyer-valley']
// [4312, 4313, 'qld.somerset']
// [4314, 4314, 'qld.cherbourg']
// [4340, 4340, 'qld.ipswich']
// [4341, 4345, 'qld.lockyer-valley']
// [4346, 4346, 'qld.ipswich']
// [4347, 4347, 'qld.lockyer-valley']
// [4350, 4350, 'qld.toowoomba']
// [4352, 4352, 'qld.lockyer-valley']
// [4353, 4354, 'qld.toowoomba']
// [4355, 4355, 'qld.somerset']
// [4356, 4358, 'qld.toowoomba']
// [4359, 4361, 'qld.lockyer-valley']
// [4362, 4362, 'qld.southern-downs']
// [4363, 4365, 'qld.toowoomba']
// [4370, 4385, 'qld.southern-downs']
// [4387, 4390, 'qld.goondiwindi']
// [4400, 4401, 'qld.toowoomba']
// [4402, 4402, 'qld.somerset']
// [4403, 4404, 'qld.toowoomba']
// [4405, 4405, 'qld.south-burnett']
// [4406, 4406, 'qld.goondiwindi']
// [4408, 4410, 'qld.south-burnett']
// [4411, 4416, 'qld.western-downs']
// [4417, 4417, 'qld.maranoa']
// [4418, 4419, 'qld.western-downs']
// [4419, 4420, 'qld.banana']
// [4421, 4426, 'qld.western-downs']
// [4428, 4428, 'qld.maranoa']
// [4454, 4454, 'qld.central-highlands']
// [4455, 4465, 'qld.maranoa']
// [4467, 4470, 'qld.murweh']
// [4471, 4471, 'qld.paroo']
// [4472, 4472, 'qld.blackall-tambo']
// [4474, 4475, 'qld.quilpie']
// [4477, 4477, 'qld.murweh']
// [4478, 4478, 'qld.blackall-tambo']
// [4481, 4481, 'qld.barcoo']
// [4486, 4488, 'qld.balonne']
// [4489, 4491, 'qld.paroo']
// [4494, 4496, 'qld.goondiwindi']
// [4500, 4500, 'qld.brisbane']
// [4501, 4509, 'qld.moreton-bay']
// [4510, 4510, 'qld.charters-towers']
// [4511, 4512, 'qld.moreton-bay']
// [4514, 4514, 'qld.sunshine-coast']
// [4515, 4515, 'qld.gympie']
// [4516, 4517, 'qld.moreton-bay']
// [4518, 4519, 'qld.sunshine-coast']
// [4520, 4520, 'qld.moreton-bay']
// [4550, 4562, 'qld.sunshine-coast']
// [4563, 4563, 'qld.noosa']
// [4564, 4564, 'qld.sunshine-coast']
// [4565, 4569, 'qld.noosa']
// [4570, 4570, 'qld.gympie']
// [4571, 4571, 'qld.noosa']
// [4572, 4572, 'qld.sunshine-coast']
// [4573, 4573, 'qld.noosa']
// [4574, 4574, 'qld.sunshine-coast']
// [4580, 4580, 'qld.fraser-coast']
// [4601, 4606, 'qld.cherbourg']
// [4608, 4610, 'qld.south-burnett']
// [4611, 4611, 'qld.cherbourg']
// [4612, 4612, 'qld.south-burnett']
// [4620, 4620, 'qld.fraser-coast']
// [4621, 4625, 'qld.bundaberg']
// [4625, 4627, 'qld.north-burnett']
// [4650, 4659, 'qld.fraser-coast']
// [4660, 4676, 'qld.bundaberg']
// [4677, 4695, 'qld.gladstone']
// [4697, 4702, 'qld.rockhampton']
// [4703, 4703, 'qld.livingstone']
// [4704, 4704, 'qld.rockhampton']
// [4705, 4706, 'qld.livingstone']
// [4709, 4709, 'qld.isaac']
// [4710, 4711, 'qld.rockhampton']
// [4712, 4712, 'qld.woorabinda']
// [4715, 4715, 'qld.banana']
// [4717, 4717, 'qld.central-highlands']
// [4718, 4718, 'qld.banana']
// [4720, 4720, 'qld.central-highlands']
// [4721, 4721, 'qld.barcaldine']
// [4722, 4722, 'qld.central-highlands']
// [4723, 4723, 'qld.isaac']
// [4724, 4724, 'qld.barcaldine']
// [4725, 4725, 'qld.longreach']
// [4726, 4726, 'qld.barcaldine']
// [4727, 4727, 'qld.longreach']
// [4728, 4728, 'qld.barcaldine']
// [4730, 4730, 'qld.longreach']
// [4733, 4733, 'qld.flinders']
// [4737, 4742, 'qld.mackay']
// [4743, 4743, 'qld.whitsunday']
// [4744, 4745, 'qld.isaac']
// [4750, 4799, 'qld.mackay']
// [4800, 4800, 'qld.whitsunday']
// [4801, 4802, 'qld.mackay']
// [4804, 4804, 'qld.whitsunday']
// [4806, 4808, 'qld.burdekin']
// [4810, 4815, 'qld.townsville']
// [4816, 4816, 'qld.hinchinbrook']
// [4817, 4818, 'qld.townsville']
// [4820, 4820, 'qld.charters-towers']
// [4825, 4825, 'qld.mount-isa']
// [4849, 4859, 'qld.cassowary-coast']
// [4860, 4861, 'qld.cairns']
// [4865, 4868, 'qld.yarrabah']
// [4869, 4869, 'qld.cairns']
// [4870, 4870, 'qld.yarrabah']
// [4871, 4871, 'qld.douglas']
// [4871, 4872, 'qld.tablelands']
// [4873, 4873, 'qld.douglas']
// [4874, 4874, 'qld.northern-peninsula-area']
// [4878, 4879, 'qld.yarrabah']
// [4880, 4880, 'qld.cairns']
// [4881, 4881, 'qld.tablelands']
// [4882, 4886, 'qld.cairns']
// [4887, 4887, 'qld.tablelands']
// [5000, 5000, 'sa.adelaide']
// [5001, 5001, 'sa.murray-bridge']
// [5005, 5005, 'sa.adelaide']
// [5007, 5007, 'sa.prospect']
// [5008, 5009, 'sa.charles-sturt']
// [5010, 5010, 'sa.port-adelaide-enfield']
// [5011, 5011, 'sa.charles-sturt']
// [5012, 5013, 'sa.port-adelaide-enfield']
// [5014, 5014, 'sa.charles-sturt']
// [5015, 5018, 'sa.port-adelaide-enfield']
// [5019, 5023, 'sa.charles-sturt']
// [5024, 5033, 'sa.west-torrens']
// [5034, 5035, 'sa.unley']
// [5037, 5038, 'sa.west-torrens']
// [5039, 5039, 'sa.unley']
// [5040, 5040, 'sa.west-torrens']
// [5041, 5041, 'sa.mitcham']
// [5042, 5042, 'sa.marion']
// [5043, 5046, 'sa.holdfast-bay']
// [5047, 5049, 'sa.marion']
// [5050, 5052, 'sa.mitcham']
// [5061, 5061, 'sa.unley']
// [5062, 5062, 'sa.mitcham']
// [5064, 5066, 'sa.burnside']
// [5067, 5067, 'sa.norwood-payneham-and-st-peters']
// [5068, 5068, 'sa.burnside']
// [5069, 5070, 'sa.norwood-payneham-and-st-peters']
// [5072, 5076, 'sa.campbelltown']
// [5081, 5081, 'sa.walkerville']
// [5082, 5084, 'sa.prospect']
// [5085, 5085, 'sa.walkerville']
// [5086, 5088, 'sa.campbelltown']
// [5089, 5092, 'sa.tea-tree-gully']
// [5093, 5093, 'sa.campbelltown']
// [5094, 5096, 'sa.salisbury']
// [5097, 5097, 'sa.tea-tree-gully']
// [5098, 5109, 'sa.salisbury']
// [5111, 5115, 'sa.playford']
// [5116, 5116, 'sa.gawler']
// [5117, 5117, 'sa.playford']
// [5118, 5118, 'sa.gawler']
// [5120, 5121, 'sa.playford']
// [5125, 5133, 'sa.tea-tree-gully']
// [5134, 5134, 'sa.adelaide-hills']
// [5137, 5137, 'sa.burnside']
// [5138, 5139, 'sa.adelaide-hills']
// [5140, 5142, 'sa.burnside']
// [5144, 5144, 'sa.adelaide-hills']
// [5150, 5152, 'sa.mitcham']
// [5153, 5153, 'sa.mount-barker']
// [5154, 5156, 'sa.mitcham']
// [5157, 5157, 'sa.onkaparinga']
// [5158, 5161, 'sa.marion']
// [5162, 5174, 'sa.onkaparinga']
// [5202, 5202, 'sa.victor-harbor']
// [5203, 5204, 'sa.yankalilla']
// [5210, 5212, 'sa.victor-harbor']
// [5214, 5214, 'sa.alexandrina']
// [5220, 5223, 'sa.kangaroo-island']
// [5231, 5234, 'sa.adelaide-hills']
// [5235, 5235, 'sa.barossa']
// [5236, 5236, 'sa.adelaide-hills']
// [5237, 5237, 'sa.barossa']
// [5238, 5238, 'sa.karoonda-east-murray']
// [5240, 5241, 'sa.adelaide-hills']
// [5242, 5242, 'sa.mount-barker']
// [5243, 5243, 'sa.adelaide-hills']
// [5245, 5252, 'sa.mount-barker']
// [5253, 5254, 'sa.murray-bridge']
// [5255, 5256, 'sa.alexandrina']
// [5259, 5259, 'sa.coorong']
// [5260, 5260, 'sa.murray-bridge']
// [5261, 5261, 'sa.coorong']
// [5262, 5262, 'sa.naracoorte-lucindale']
// [5263, 5263, 'sa.wattle-range']
// [5264, 5266, 'sa.coorong']
// [5267, 5269, 'sa.tatiara']
// [5271, 5272, 'sa.naracoorte-lucindale']
// [5277, 5279, 'sa.wattle-range']
// [5280, 5280, 'sa.grant']
// [5302, 5303, 'sa.southern-mallee']
// [5306, 5307, 'sa.karoonda-east-murray']
// [5308, 5310, 'sa.loxton-waikerie']
// [5311, 5311, 'sa.renmark-paringa']
// [5320, 5320, 'sa.berri-barmera']
// [5321, 5321, 'sa.mid-murray']
// [5322, 5333, 'sa.berri-barmera']
// [5340, 5341, 'sa.renmark-paringa']
// [5342, 5346, 'sa.berri-barmera']
// [5350, 5350, 'sa.gawler']
// [5351, 5352, 'sa.barossa']
// [5353, 5354, 'sa.mid-murray']
// [5355, 5355, 'sa.light']
// [5356, 5356, 'sa.mid-murray']
// [5360, 5374, 'sa.light']
// [5381, 5381, 'sa.clare-and-gilbert-valleys']
// [5400, 5410, 'sa.light']
// [5412, 5416, 'sa.clare-and-gilbert-valleys']
// [5417, 5417, 'sa.peterborough']
// [5418, 5418, 'sa.goyder']
// [5420, 5420, 'sa.northern-areas']
// [5421, 5422, 'sa.peterborough']
// [5431, 5432, 'sa.orroroo-carrieton']
// [5432, 5433, 'sa.flinders-ranges']
// [5433, 5433, 'sa.port-augusta']
// [5434, 5440, 'sa.flinders-ranges']
// [5451, 5453, 'sa.clare-and-gilbert-valleys']
// [5454, 5454, 'sa.northern-areas']
// [5460, 5460, 'sa.adelaide-plains']
// [5461, 5464, 'sa.wakefield']
// [5470, 5480, 'sa.northern-areas']
// [5481, 5485, 'sa.mount-remarkable']
// [5490, 5490, 'sa.northern-areas']
// [5495, 5495, 'sa.port-pirie']
// [5510, 5510, 'sa.wakefield']
// [5520, 5520, 'sa.barunga-west']
// [5521, 5540, 'sa.port-pirie']
// [5550, 5550, 'sa.wakefield']
// [5552, 5554, 'sa.copper-coast']
// [5555, 5555, 'sa.barunga-west']
// [5556, 5570, 'sa.copper-coast']
// [5571, 5582, 'sa.yorke-peninsula']
// [5600, 5601, 'sa.whyalla']
// [5601, 5601, 'sa.port-augusta']
// [5602, 5602, 'sa.franklin-harbour']
// [5603, 5603, 'sa.cleve']
// [5604, 5605, 'sa.tumby-bay']
// [5607, 5607, 'sa.lower-eyre-peninsula']
// [5608, 5609, 'sa.whyalla']
// [5611, 5611, 'sa.kimba']
// [5630, 5631, 'sa.lower-eyre-peninsula']
// [5633, 5633, 'sa.elliston']
// [5640, 5640, 'sa.cleve']
// [5641, 5650, 'sa.kimba']
// [5651, 5654, 'sa.wudinna']
// [5655, 5680, 'sa.streaky-bay']
// [5690, 5690, 'sa.ceduna']
// [5700, 5701, 'sa.port-augusta']
// [5710, 5710, 'sa.coober-pedy']
// [5713, 5719, 'sa.roxby-downs']
// [5720, 5720, 'sa.unincorporated-sa']
// [5722, 5722, 'sa.roxby-downs']
// [5723, 5723, 'sa.unincorporated-sa']
// [5724, 5724, 'sa.coober-pedy']
// [5725, 5730, 'sa.roxby-downs']
// [5731, 5733, 'sa.unincorporated-sa']
// [5800, 5800, 'sa.murray-bridge']
// [5801, 5801, 'sa.west-torrens']
// [5810, 5810, 'sa.murray-bridge']
// [6000, 6000, 'wa.perth']
// [6001, 6001, 'wa.cottesloe']
// [6003, 6003, 'wa.vincent']
// [6004, 6005, 'wa.perth']
// [6006, 6007, 'wa.vincent']
// [6008, 6008, 'wa.subiaco']
// [6009, 6009, 'wa.nedlands']
// [6010, 6010, 'wa.claremont']
// [6011, 6011, 'wa.cottesloe']
// [6012, 6012, 'wa.mosman-park']
// [6014, 6014, 'wa.subiaco']
// [6015, 6015, 'wa.cambridge']
// [6016, 6016, 'wa.vincent']
// [6017, 6022, 'wa.stirling']
// [6023, 6023, 'wa.joondalup']
// [6024, 6024, 'wa.stirling']
// [6025, 6028, 'wa.joondalup']
// [6029, 6029, 'wa.stirling']
// [6030, 6037, 'wa.wanneroo']
// [6038, 6038, 'wa.rockingham']
// [6041, 6044, 'wa.gingin']
// [6050, 6050, 'wa.vincent']
// [6051, 6053, 'wa.bayswater']
// [6054, 6055, 'wa.bassendean']
// [6055, 6055, 'wa.belmont']
// [6056, 6056, 'wa.bassendean']
// [6057, 6058, 'wa.belmont']
// [6059, 6061, 'wa.stirling']
// [6062, 6062, 'wa.bayswater']
// [6063, 6063, 'wa.bassendean']
// [6064, 6064, 'wa.stirling']
// [6065, 6065, 'wa.wanneroo']
// [6066, 6067, 'wa.bayswater']
// [6068, 6068, 'wa.bassendean']
// [6069, 6069, 'wa.swan']
// [6072, 6074, 'wa.mundaring']
// [6076, 6076, 'wa.armadale']
// [6077, 6079, 'wa.wanneroo']
// [6081, 6083, 'wa.mundaring']
// [6090, 6090, 'wa.bayswater']
// [6100, 6103, 'wa.victoria-park']
// [6104, 6106, 'wa.belmont']
// [6107, 6107, 'wa.canning']
// [6108, 6110, 'wa.gosnells']
// [6111, 6111, 'wa.armadale']
// [6112, 6112, 'wa.gosnells']
// [6121, 6121, 'wa.kwinana']
// [6122, 6122, 'wa.armadale']
// [6123, 6124, 'wa.serpentine-jarrahdale']
// [6125, 6125, 'wa.rockingham']
// [6147, 6148, 'wa.canning']
// [6149, 6150, 'wa.melville']
// [6151, 6152, 'wa.south-perth']
// [6153, 6154, 'wa.melville']
// [6155, 6155, 'wa.canning']
// [6156, 6156, 'wa.melville']
// [6157, 6159, 'wa.east-fremantle']
// [6160, 6160, 'wa.fremantle']
// [6161, 6161, 'wa.cottesloe']
// [6162, 6162, 'wa.fremantle']
// [6163, 6164, 'wa.cockburn']
// [6165, 6165, 'wa.kwinana']
// [6166, 6166, 'wa.cockburn']
// [6167, 6167, 'wa.kwinana']
// [6168, 6169, 'wa.rockingham']
// [6170, 6170, 'wa.kwinana']
// [6171, 6176, 'wa.rockingham']
// [6180, 6181, 'wa.mandurah']
// [6182, 6182, 'wa.rockingham']
// [6207, 6208, 'wa.murray']
// [6209, 6211, 'wa.mandurah']
// [6214, 6215, 'wa.waroona']
// [6219, 6223, 'wa.harvey']
// [6226, 6227, 'wa.dardanup']
// [6228, 6232, 'wa.bunbury']
// [6237, 6237, 'wa.capel']
// [6239, 6243, 'wa.donnybrook-balingup']
// [6244, 6244, 'wa.west-arthur']
// [6251, 6252, 'wa.donnybrook-balingup']
// [6254, 6255, 'wa.bridgetown-greenbushes']
// [6258, 6258, 'wa.manjimup']
// [6260, 6260, 'wa.nannup']
// [6262, 6262, 'wa.manjimup']
// [6271, 6271, 'wa.capel']
// [6280, 6282, 'wa.busselton']
// [6284, 6288, 'wa.augusta-margaret-river']
// [6309, 6309, 'wa.cuballing']
// [6318, 6318, 'wa.broomehill-tambellup']
// [6321, 6321, 'wa.cranbrook']
// [6322, 6326, 'wa.plantagenet']
// [6328, 6331, 'wa.albany']
// [6332, 6332, 'wa.gosnells']
// [6335, 6336, 'wa.gnowangerup']
// [6341, 6341, 'wa.kent']
// [6346, 6346, 'wa.ravensthorpe']
// [6350, 6351, 'wa.dumbleyung']
// [6353, 6358, 'wa.kulin']
// [6361, 6363, 'wa.wickepin']
// [6365, 6365, 'wa.kulin']
// [6368, 6369, 'wa.narembeen']
// [6370, 6370, 'wa.wickepin']
// [6373, 6373, 'wa.corrigin']
// [6385, 6386, 'wa.bruce-rock']
// [6392, 6393, 'wa.west-arthur']
// [6396, 6396, 'wa.cranbrook']
// [6401, 6403, 'wa.northam']
// [6405, 6405, 'wa.cunderdin']
// [6410, 6412, 'wa.kellerberrin']
// [6414, 6415, 'wa.merredin']
// [6418, 6419, 'wa.bruce-rock']
// [6421, 6421, 'wa.merredin']
// [6425, 6427, 'wa.yilgarn']
// [6429, 6430, 'wa.coolgardie']
// [6431, 6431, 'wa.menzies']
// [6432, 6433, 'wa.coolgardie']
// [6435, 6438, 'wa.leonora']
// [6445, 6450, 'wa.esperance']
// [6460, 6460, 'wa.goomalling']
// [6461, 6462, 'wa.dowerin']
// [6465, 6466, 'wa.wongan-ballidu']
// [6467, 6467, 'wa.koorda']
// [6468, 6468, 'wa.dalwallinu']
// [6470, 6470, 'wa.koorda']
// [6472, 6472, 'wa.mount-marshall']
// [6473, 6473, 'wa.mukinbudin']
// [6475, 6475, 'wa.koorda']
// [6477, 6477, 'wa.mukinbudin']
// [6480, 6480, 'wa.nungarin']
// [6487, 6488, 'wa.trayning']
// [6501, 6501, 'wa.wanneroo']
// [6502, 6504, 'wa.chittering']
// [6506, 6506, 'wa.victoria-plains']
// [6507, 6507, 'wa.dandaragan']
// [6509, 6509, 'wa.victoria-plains']
// [6510, 6510, 'wa.moora']
// [6511, 6511, 'wa.dandaragan']
// [6512, 6513, 'wa.moora']
// [6514, 6514, 'wa.carnamah']
// [6516, 6516, 'wa.dandaragan']
// [6517, 6517, 'wa.carnamah']
// [6522, 6522, 'wa.mingenew']
// [6525, 6525, 'wa.irwin']
// [6530, 6531, 'wa.chapman-valley']
// [6531, 6531, 'wa.rockingham']
// [6532, 6532, 'wa.chapman-valley']
// [6556, 6560, 'wa.mundaring']
// [6562, 6562, 'wa.northam']
// [6569, 6571, 'wa.victoria-plains']
// [6574, 6574, 'wa.moora']
// [6603, 6606, 'wa.wongan-ballidu']
// [6609, 6613, 'wa.dalwallinu']
// [6616, 6616, 'wa.perenjori']
// [6623, 6627, 'wa.morawa']
// [6642, 6642, 'wa.meekatharra']
// [6646, 6646, 'wa.wiluna']
// [6701, 6701, 'wa.carnarvon']
// [6707, 6707, 'wa.exmouth']
// [6710, 6710, 'wa.ashburton']
// [6711, 6711, 'wa.exmouth']
// [6712, 6718, 'wa.karratha']
// [6721, 6723, 'wa.port-hedland']
// [6728, 6733, 'wa.derby-west-kimberley']
// [6740, 6743, 'wa.wyndham-east-kimberley']
// [6751, 6751, 'wa.ashburton']
// [6758, 6758, 'wa.port-hedland']
// [6760, 6760, 'wa.east-pilbara']
// [6765, 6765, 'wa.halls-creek']
// [6798, 6798, 'wa.exmouth']
// [6800, 6800, 'wa.cottesloe']
// [6803, 6803, 'wa.vincent']
// [6809, 6830, 'wa.cottesloe']
// [6831, 6832, 'wa.perth']
// [6837, 6848, 'wa.cottesloe']
// [6849, 6850, 'wa.perth']
// [6865, 6872, 'wa.vincent']
// [6892, 6892, 'wa.joondalup']
// [6900, 6903, 'wa.vincent']
// [6904, 6904, 'wa.subiaco']
// [6907, 6907, 'wa.nedlands']
// [6911, 6911, 'wa.rockingham']
// [6914, 6914, 'wa.stirling']
// [6915, 6915, 'wa.perth']
// [6916, 6918, 'wa.stirling']
// [6919, 6919, 'wa.joondalup']
// [6920, 6922, 'wa.stirling']
// [6925, 6925, 'wa.armadale']
// [6926, 6926, 'wa.belmont']
// [6929, 6929, 'wa.perth']
// [6931, 6935, 'wa.bayswater']
// [6936, 6936, 'wa.bassendean']
// [6937, 6941, 'wa.stirling']
// [6943, 6944, 'wa.bayswater']
// [6946, 6946, 'wa.wanneroo']
// [6951, 6954, 'wa.melville']
// [6955, 6955, 'wa.canning']
// [6956, 6956, 'wa.south-perth']
// [6957, 6957, 'wa.east-fremantle']
// [6959, 6959, 'wa.gosnells']
// [6965, 6966, 'wa.cockburn']
// [6970, 6970, 'wa.canning']
// [6979, 6979, 'wa.victoria-park']
// [6980, 6980, 'wa.canning']
// [6983, 6983, 'wa.victoria-park']
// [6984, 6984, 'wa.belmont']
// [6988, 6989, 'wa.gosnells']
// [6991, 6991, 'wa.armadale']
// [7000, 7000, 'tas.hobart']
// [7001, 7001, 'tas.huon-valley']
// [7002, 7002, 'tas.clarence']
// [7004, 7008, 'tas.hobart']
// [7009, 7011, 'tas.glenorchy']
// [7015, 7016, 'tas.clarence']
// [7017, 7017, 'tas.brighton']
// [7018, 7021, 'tas.clarence']
// [7022, 7022, 'tas.kingborough']
// [7023, 7023, 'tas.hobart']
// [7024, 7025, 'tas.clarence']
// [7026, 7026, 'tas.brighton']
// [7027, 7027, 'tas.southern-midlands']
// [7050, 7054, 'tas.hobart']
// [7112, 7117, 'tas.kingborough']
// [7119, 7119, 'tas.southern-midlands']
// [7150, 7150, 'tas.tasman']
// [7151, 7151, 'tas.meander-valley']
// [7155, 7162, 'tas.kingborough']
// [7170, 7170, 'tas.clarence']
// [7172, 7176, 'tas.sorell']
// [7177, 7186, 'tas.tasman']
// [7209, 7211, 'tas.northern-midlands']
// [7212, 7212, 'tas.launceston']
// [7213, 7213, 'tas.northern-midlands']
// [7214, 7216, 'tas.break-oday']
// [7248, 7250, 'tas.launceston']
// [7252, 7253, 'tas.george-town']
// [7255, 7255, 'tas.flinders']
// [7258, 7259, 'tas.launceston']
// [7260, 7264, 'tas.dorset']
// [7267, 7267, 'tas.west-tamar']
// [7268, 7268, 'tas.launceston']
// [7270, 7277, 'tas.west-tamar']
// [7290, 7290, 'tas.launceston']
// [7291, 7291, 'tas.west-tamar']
// [7300, 7300, 'tas.launceston']
// [7303, 7303, 'tas.meander-valley']
// [7305, 7305, 'tas.latrobe']
// [7320, 7320, 'tas.burnie']
// [7321, 7321, 'tas.waratah-wynyard']
// [7322, 7322, 'tas.burnie']
// [7466, 7468, 'tas.west-coast']
// [8003, 8007, 'vic.melbourne']
// [8008, 8008, 'vic.port-phillip']
// [8009, 8012, 'vic.melbourne']
// [8045, 8120, 'vic.port-phillip']
// [8438, 8438, 'vic.south-gippsland']
// [9000, 9013, 'qld.ipswich']
    if (/*> 200*/ postcode < 3777){
      if (/*> 200*/ postcode < 2580){
        if (/*> 200*/ postcode < 2135){
          if (/*> 200*/ postcode < 1715){
            if (/*> 200*/ postcode < 1405){
              if (/*> 200*/ postcode < 1132){
                if (/*> 200*/ postcode < 860){
                  if (/*> 200*/ postcode < 829){
                    if (/*> 200*/ postcode < 821){
                      if (/*> 200*/ postcode < 804){
                        return 'act.unincorporated-act';
                      } else /* >= 804 < 821 */ {
                        return 'nt.darwin';
                      }
                    } else /* >= 821 < 829 */ {
                      if (/*> 821*/ postcode < 828){
                        return 'nt.east-arnhem';
                      } else /* >= 828 < 829 */ {
                        return 'nt.darwin';
                      }
                    }
                  } else /* >= 829 < 860 */ {
                    if (/*> 829*/ postcode < 839){
                      if (/*> 829*/ postcode < 836){
                        return 'nt.palmerston';
                      } else /* >= 836 < 839 */ {
                        return 'nt.litchfield';
                      }
                    } else /* >= 839 < 860 */ {
                      if (/*> 839*/ postcode < 847){
                        return 'nt.palmerston';
                      } else /* >= 847 < 860 */ {
                        if (/*> 847*/ postcode < 851){
                          return 'nt.katherine';
                        } else /* >= 851 < 860 */ {
                          return 'nt.roper-gulf';
                        }
                      }
                    }
                  }
                } else /* >= 860 < 1132 */ {
                  if (/*> 860*/ postcode < 1001){
                    if (/*> 860*/ postcode < 872){
                      if (/*> 860*/ postcode < 870){
                        return 'nt.barkly';
                      } else /* >= 870 < 872 */ {
                        return 'nt.alice-springs';
                      }
                    } else /* >= 872 < 1001 */ {
                      if (/*> 872*/ postcode < 873){
                        return 'sa.coober-pedy';
                      } else /* >= 873 < 1001 */ {
                        if (/*> 873*/ postcode < 880){
                          return 'nt.alice-springs';
                        } else /* >= 880 < 1001 */ {
                          return 'nt.east-arnhem';
                        }
                      }
                    }
                  } else /* >= 1001 < 1132 */ {
                    if (/*> 1001*/ postcode < 1033){
                      if (/*> 1001*/ postcode < 1032){
                        return 'nsw.mosman';
                      } else /* >= 1032 < 1033 */ {
                        return 'nsw.blacktown';
                      }
                    } else /* >= 1033 < 1132 */ {
                      if (/*> 1033*/ postcode < 1116){
                        return 'nsw.mosman';
                      } else /* >= 1116 < 1132 */ {
                        if (/*> 1116*/ postcode < 1118){
                          return 'nsw.blacktown';
                        } else /* >= 1118 < 1132 */ {
                          return 'nsw.mosman';
                        }
                      }
                    }
                  }
                }
              } else /* >= 1132 < 1405 */ {
                if (/*> 1132*/ postcode < 1236){
                  if (/*> 1132*/ postcode < 1208){
                    if (/*> 1132*/ postcode < 1192){
                      if (/*> 1132*/ postcode < 1133){
                        return 'nsw.blacktown';
                      } else /* >= 1133 < 1192 */ {
                        return 'nsw.mosman';
                      }
                    } else /* >= 1192 < 1208 */ {
                      if (/*> 1192*/ postcode < 1193){
                        return 'nsw.junee';
                      } else /* >= 1193 < 1208 */ {
                        return 'nsw.mosman';
                      }
                    }
                  } else /* >= 1208 < 1236 */ {
                    if (/*> 1208*/ postcode < 1216){
                      if (/*> 1208*/ postcode < 1209){
                        return 'nsw.glen-innes-severn';
                      } else /* >= 1209 < 1216 */ {
                        return 'nsw.inner-west';
                      }
                    } else /* >= 1216 < 1236 */ {
                      if (/*> 1216*/ postcode < 1221){
                        return 'nsw.parramatta';
                      } else /* >= 1221 < 1236 */ {
                        if (/*> 1221*/ postcode < 1231){
                          return 'nsw.sydney';
                        } else /* >= 1231 < 1236 */ {
                          return 'nsw.parramatta';
                        }
                      }
                    }
                  }
                } else /* >= 1236 < 1405 */ {
                  if (/*> 1236*/ postcode < 1340){
                    if (/*> 1236*/ postcode < 1300){
                      if (/*> 1236*/ postcode < 1291){
                        return 'nsw.glen-innes-severn';
                      } else /* >= 1291 < 1300 */ {
                        return 'nsw.mosman';
                      }
                    } else /* >= 1300 < 1340 */ {
                      if (/*> 1300*/ postcode < 1314){
                        return 'nsw.sydney';
                      } else /* >= 1314 < 1340 */ {
                        if (/*> 1314*/ postcode < 1335){
                          return 'nsw.randwick';
                        } else /* >= 1335 < 1340 */ {
                          return 'nsw.ryde';
                        }
                      }
                    }
                  } else /* >= 1340 < 1405 */ {
                    if (/*> 1340*/ postcode < 1355){
                      if (/*> 1340*/ postcode < 1350){
                        return 'nsw.snowy-valleys';
                      } else /* >= 1350 < 1355 */ {
                        return 'nsw.woollahra';
                      }
                    } else /* >= 1355 < 1405 */ {
                      if (/*> 1355*/ postcode < 1360){
                        return 'nsw.waverley';
                      } else /* >= 1360 < 1405 */ {
                        if (/*> 1360*/ postcode < 1401){
                          return 'nsw.woollahra';
                        } else /* >= 1401 < 1405 */ {
                          return 'nsw.sydney';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 1405 < 1715 */ {
              if (/*> 1405*/ postcode < 1499){
                if (/*> 1405*/ postcode < 1460){
                  if (/*> 1405*/ postcode < 1435){
                    if (/*> 1405*/ postcode < 1420){
                      if (/*> 1405*/ postcode < 1419){
                        return 'nsw.yass-valley';
                      } else /* >= 1419 < 1420 */ {
                        return 'nsw.sutherland-shire';
                      }
                    } else /* >= 1420 < 1435 */ {
                      if (/*> 1420*/ postcode < 1430){
                        return 'nsw.blacktown';
                      } else /* >= 1430 < 1435 */ {
                        return 'nsw.sydney';
                      }
                    }
                  } else /* >= 1435 < 1460 */ {
                    if (/*> 1435*/ postcode < 1445){
                      if (/*> 1435*/ postcode < 1440){
                        return 'nsw.ku-ring-gai';
                      } else /* >= 1440 < 1445 */ {
                        return 'nsw.canterbury-bankstown';
                      }
                    } else /* >= 1445 < 1460 */ {
                      if (/*> 1445*/ postcode < 1450){
                        return 'nsw.sutherland-shire';
                      } else /* >= 1450 < 1460 */ {
                        if (/*> 1450*/ postcode < 1455){
                          return 'nsw.coffs-harbour';
                        } else /* >= 1455 < 1460 */ {
                          return 'nsw.bayside';
                        }
                      }
                    }
                  }
                } else /* >= 1460 < 1499 */ {
                  if (/*> 1460*/ postcode < 1480){
                    if (/*> 1460*/ postcode < 1466){
                      if (/*> 1460*/ postcode < 1465){
                        return 'nsw.randwick';
                      } else /* >= 1465 < 1466 */ {
                        return 'nsw.inner-west';
                      }
                    } else /* >= 1466 < 1480 */ {
                      if (/*> 1466*/ postcode < 1470){
                        return 'nsw.sydney';
                      } else /* >= 1470 < 1480 */ {
                        if (/*> 1470*/ postcode < 1475){
                          return 'nsw.hunters-hill';
                        } else /* >= 1475 < 1480 */ {
                          return 'nsw.inner-west';
                        }
                      }
                    }
                  } else /* >= 1480 < 1499 */ {
                    if (/*> 1480*/ postcode < 1490){
                      if (/*> 1480*/ postcode < 1485){
                        return 'nsw.georges-river';
                      } else /* >= 1485 < 1490 */ {
                        return 'nsw.bayside';
                      }
                    } else /* >= 1490 < 1499 */ {
                      if (/*> 1490*/ postcode < 1493){
                        return 'nsw.sutherland-shire';
                      } else /* >= 1493 < 1499 */ {
                        if (/*> 1493*/ postcode < 1495){
                          return 'nsw.georges-river';
                        } else /* >= 1495 < 1499 */ {
                          return 'nsw.sutherland-shire';
                        }
                      }
                    }
                  }
                }
              } else /* >= 1499 < 1715 */ {
                if (/*> 1499*/ postcode < 1630){
                  if (/*> 1499*/ postcode < 1570){
                    if (/*> 1499*/ postcode < 1560){
                      if (/*> 1499*/ postcode < 1515){
                        return 'nsw.georges-river';
                      } else /* >= 1515 < 1560 */ {
                        return 'nsw.north-sydney';
                      }
                    } else /* >= 1560 < 1570 */ {
                      if (/*> 1560*/ postcode < 1565){
                        return 'nsw.willoughby';
                      } else /* >= 1565 < 1570 */ {
                        return 'nsw.sydney';
                      }
                    }
                  } else /* >= 1570 < 1630 */ {
                    if (/*> 1570*/ postcode < 1590){
                      if (/*> 1570*/ postcode < 1585){
                        return 'nsw.willoughby';
                      } else /* >= 1585 < 1590 */ {
                        return 'nsw.north-sydney';
                      }
                    } else /* >= 1590 < 1630 */ {
                      if (/*> 1590*/ postcode < 1595){
                        return 'nsw.central-coast';
                      } else /* >= 1595 < 1630 */ {
                        if (/*> 1595*/ postcode < 1602){
                          return 'nsw.willoughby';
                        } else /* >= 1602 < 1630 */ {
                          return 'nsw.lane-cove';
                        }
                      }
                    }
                  }
                } else /* >= 1630 < 1715 */ {
                  if (/*> 1630*/ postcode < 1675){
                    if (/*> 1630*/ postcode < 1655){
                      if (/*> 1630*/ postcode < 1639){
                        return 'nsw.ku-ring-gai';
                      } else /* >= 1639 < 1655 */ {
                        return 'nsw.mosman';
                      }
                    } else /* >= 1655 < 1675 */ {
                      if (/*> 1655*/ postcode < 1658){
                        return 'nsw.central-coast';
                      } else /* >= 1658 < 1675 */ {
                        if (/*> 1658*/ postcode < 1670){
                          return 'nsw.northern-beaches';
                        } else /* >= 1670 < 1675 */ {
                          return 'nsw.ryde';
                        }
                      }
                    }
                  } else /* >= 1675 < 1715 */ {
                    if (/*> 1675*/ postcode < 1685){
                      if (/*> 1675*/ postcode < 1680){
                        return 'nsw.hunters-hill';
                      } else /* >= 1680 < 1685 */ {
                        return 'nsw.ku-ring-gai';
                      }
                    } else /* >= 1685 < 1715 */ {
                      if (/*> 1685*/ postcode < 1700){
                        return 'nsw.ryde';
                      } else /* >= 1700 < 1715 */ {
                        if (/*> 1700*/ postcode < 1710){
                          return 'nsw.randwick';
                        } else /* >= 1710 < 1715 */ {
                          return 'nsw.ryde';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else /* >= 1715 < 2135 */ {
            if (/*> 1715*/ postcode < 2043){
              if (/*> 1715*/ postcode < 2000){
                if (/*> 1715*/ postcode < 1825){
                  if (/*> 1715*/ postcode < 1781){
                    if (/*> 1715*/ postcode < 1750){
                      if (/*> 1715*/ postcode < 1740){
                        return 'nsw.parramatta';
                      } else /* >= 1740 < 1750 */ {
                        return 'nsw.inner-west';
                      }
                    } else /* >= 1750 < 1781 */ {
                      if (/*> 1750*/ postcode < 1755){
                        return 'nsw.cumberland';
                      } else /* >= 1755 < 1781 */ {
                        return 'nsw.parramatta';
                      }
                    }
                  } else /* >= 1781 < 1825 */ {
                    if (/*> 1781*/ postcode < 1800){
                      if (/*> 1781*/ postcode < 1790){
                        return 'nsw.blacktown';
                      } else /* >= 1790 < 1800 */ {
                        return 'nsw.north-sydney';
                      }
                    } else /* >= 1800 < 1825 */ {
                      if (/*> 1800*/ postcode < 1811){
                        return 'nsw.burwood';
                      } else /* >= 1811 < 1825 */ {
                        if (/*> 1811*/ postcode < 1819){
                          return 'nsw.parramatta';
                        } else /* >= 1819 < 1825 */ {
                          return 'nsw.burwood';
                        }
                      }
                    }
                  }
                } else /* >= 1825 < 2000 */ {
                  if (/*> 1825*/ postcode < 1871){
                    if (/*> 1825*/ postcode < 1835){
                      if (/*> 1825*/ postcode < 1830){
                        return 'nsw.strathfield';
                      } else /* >= 1830 < 1835 */ {
                        return 'nsw.cumberland';
                      }
                    } else /* >= 1835 < 1871 */ {
                      if (/*> 1835*/ postcode < 1851){
                        return 'nsw.canterbury-bankstown';
                      } else /* >= 1851 < 1871 */ {
                        if (/*> 1851*/ postcode < 1860){
                          return 'nsw.fairfield';
                        } else /* >= 1860 < 1871 */ {
                          return 'nsw.cumberland';
                        }
                      }
                    }
                  } else /* >= 1871 < 2000 */ {
                    if (/*> 1871*/ postcode < 1885){
                      if (/*> 1871*/ postcode < 1874){
                        return 'nsw.burwood';
                      } else /* >= 1874 < 1885 */ {
                        return 'nsw.liverpool';
                      }
                    } else /* >= 1885 < 2000 */ {
                      if (/*> 1885*/ postcode < 1890){
                        return 'nsw.canterbury-bankstown';
                      } else /* >= 1890 < 2000 */ {
                        if (/*> 1890*/ postcode < 1891){
                          return 'nsw.liverpool';
                        } else /* >= 1891 < 2000 */ {
                          return 'nsw.canterbury-bankstown';
                        }
                      }
                    }
                  }
                }
              } else /* >= 2000 < 2043 */ {
                if (/*> 2000*/ postcode < 2021){
                  if (/*> 2000*/ postcode < 2006){
                    if (/*> 2000*/ postcode < 2002){
                      if (/*> 2000*/ postcode < 2001){
                        return 'nsw.woollahra';
                      } else /* >= 2001 < 2002 */ {
                        return 'nsw.mosman';
                      }
                    } else /* >= 2002 < 2006 */ {
                      if (/*> 2002*/ postcode < 2004){
                        return 'nsw.sydney';
                      } else /* >= 2004 < 2006 */ {
                        return 'nsw.randwick';
                      }
                    }
                  } else /* >= 2006 < 2021 */ {
                    if (/*> 2006*/ postcode < 2015){
                      if (/*> 2006*/ postcode < 2012){
                        return 'nsw.sydney';
                      } else /* >= 2012 < 2015 */ {
                        return 'nsw.blacktown';
                      }
                    } else /* >= 2015 < 2021 */ {
                      if (/*> 2015*/ postcode < 2019){
                        return 'nsw.sydney';
                      } else /* >= 2019 < 2021 */ {
                        if (/*> 2019*/ postcode < 2020){
                          return 'nsw.randwick';
                        } else /* >= 2020 < 2021 */ {
                          return 'nsw.bayside';
                        }
                      }
                    }
                  }
                } else /* >= 2021 < 2043 */ {
                  if (/*> 2021*/ postcode < 2034){
                    if (/*> 2021*/ postcode < 2025){
                      if (/*> 2021*/ postcode < 2022){
                        return 'nsw.sydney';
                      } else /* >= 2022 < 2025 */ {
                        return 'nsw.waverley';
                      }
                    } else /* >= 2025 < 2034 */ {
                      if (/*> 2025*/ postcode < 2031){
                        return 'nsw.woollahra';
                      } else /* >= 2031 < 2034 */ {
                        if (/*> 2031*/ postcode < 2033){
                          return 'nsw.randwick';
                        } else /* >= 2033 < 2034 */ {
                          return 'nsw.sydney';
                        }
                      }
                    }
                  } else /* >= 2034 < 2043 */ {
                    if (/*> 2034*/ postcode < 2038){
                      if (/*> 2034*/ postcode < 2037){
                        return 'nsw.randwick';
                      } else /* >= 2037 < 2038 */ {
                        return 'nsw.sydney';
                      }
                    } else /* >= 2038 < 2043 */ {
                      if (/*> 2038*/ postcode < 2041){
                        return 'nsw.inner-west';
                      } else /* >= 2041 < 2043 */ {
                        if (/*> 2041*/ postcode < 2042){
                          return 'nsw.sydney';
                        } else /* >= 2042 < 2043 */ {
                          return 'nsw.inner-west';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 2043 < 2135 */ {
              if (/*> 2043*/ postcode < 2086){
                if (/*> 2043*/ postcode < 2058){
                  if (/*> 2043*/ postcode < 2047){
                    if (/*> 2043*/ postcode < 2045){
                      if (/*> 2043*/ postcode < 2044){
                        return 'nsw.sydney';
                      } else /* >= 2044 < 2045 */ {
                        return 'nsw.bayside';
                      }
                    } else /* >= 2045 < 2047 */ {
                      if (/*> 2045*/ postcode < 2046){
                        return 'nsw.inner-west';
                      } else /* >= 2046 < 2047 */ {
                        return 'nsw.canada-bay';
                      }
                    }
                  } else /* >= 2047 < 2058 */ {
                    if (/*> 2047*/ postcode < 2052){
                      if (/*> 2047*/ postcode < 2048){
                        return 'nsw.hunters-hill';
                      } else /* >= 2048 < 2052 */ {
                        return 'nsw.inner-west';
                      }
                    } else /* >= 2052 < 2058 */ {
                      if (/*> 2052*/ postcode < 2055){
                        return 'nsw.sydney';
                      } else /* >= 2055 < 2058 */ {
                        if (/*> 2055*/ postcode < 2057){
                          return 'nsw.ryde';
                        } else /* >= 2057 < 2058 */ {
                          return 'nsw.willoughby';
                        }
                      }
                    }
                  }
                } else /* >= 2058 < 2086 */ {
                  if (/*> 2058*/ postcode < 2065){
                    if (/*> 2058*/ postcode < 2060){
                      if (/*> 2058*/ postcode < 2059){
                        return 'nsw.bogan';
                      } else /* >= 2059 < 2060 */ {
                        return 'nsw.ryde';
                      }
                    } else /* >= 2060 < 2065 */ {
                      if (/*> 2060*/ postcode < 2063){
                        return 'nsw.north-sydney';
                      } else /* >= 2063 < 2065 */ {
                        if (/*> 2063*/ postcode < 2064){
                          return 'nsw.willoughby';
                        } else /* >= 2064 < 2065 */ {
                          return 'nsw.lane-cove';
                        }
                      }
                    }
                  } else /* >= 2065 < 2086 */ {
                    if (/*> 2065*/ postcode < 2071){
                      if (/*> 2065*/ postcode < 2067){
                        return 'nsw.north-sydney';
                      } else /* >= 2067 < 2071 */ {
                        return 'nsw.willoughby';
                      }
                    } else /* >= 2071 < 2086 */ {
                      if (/*> 2071*/ postcode < 2081){
                        return 'nsw.ku-ring-gai';
                      } else /* >= 2081 < 2086 */ {
                        if (/*> 2081*/ postcode < 2084){
                          return 'nsw.hornsby';
                        } else /* >= 2084 < 2086 */ {
                          return 'nsw.northern-beaches';
                        }
                      }
                    }
                  }
                }
              } else /* >= 2086 < 2135 */ {
                if (/*> 2086*/ postcode < 2120){
                  if (/*> 2086*/ postcode < 2097){
                    if (/*> 2086*/ postcode < 2089){
                      if (/*> 2086*/ postcode < 2088){
                        return 'nsw.willoughby';
                      } else /* >= 2088 < 2089 */ {
                        return 'nsw.mosman';
                      }
                    } else /* >= 2089 < 2097 */ {
                      if (/*> 2089*/ postcode < 2091){
                        return 'nsw.north-sydney';
                      } else /* >= 2091 < 2097 */ {
                        return 'nsw.mosman';
                      }
                    }
                  } else /* >= 2097 < 2120 */ {
                    if (/*> 2097*/ postcode < 2110){
                      if (/*> 2097*/ postcode < 2109){
                        return 'nsw.northern-beaches';
                      } else /* >= 2109 < 2110 */ {
                        return 'nsw.ryde';
                      }
                    } else /* >= 2110 < 2120 */ {
                      if (/*> 2110*/ postcode < 2112){
                        return 'nsw.hunters-hill';
                      } else /* >= 2112 < 2120 */ {
                        if (/*> 2112*/ postcode < 2115){
                          return 'nsw.ryde';
                        } else /* >= 2115 < 2120 */ {
                          return 'nsw.parramatta';
                        }
                      }
                    }
                  }
                } else /* >= 2120 < 2135 */ {
                  if (/*> 2120*/ postcode < 2127){
                    if (/*> 2120*/ postcode < 2123){
                      if (/*> 2120*/ postcode < 2121){
                        return 'nsw.ku-ring-gai';
                      } else /* >= 2121 < 2123 */ {
                        return 'nsw.ryde';
                      }
                    } else /* >= 2123 < 2127 */ {
                      if (/*> 2123*/ postcode < 2124){
                        return 'nsw.cumberland';
                      } else /* >= 2124 < 2127 */ {
                        if (/*> 2124*/ postcode < 2125){
                          return 'nsw.inner-west';
                        } else /* >= 2125 < 2127 */ {
                          return 'nsw.parramatta';
                        }
                      }
                    }
                  } else /* >= 2127 < 2135 */ {
                    if (/*> 2127*/ postcode < 2129){
                      if (/*> 2127*/ postcode < 2128){
                        return 'nsw.canada-bay';
                      } else /* >= 2128 < 2129 */ {
                        return 'nsw.parramatta';
                      }
                    } else /* >= 2129 < 2135 */ {
                      if (/*> 2129*/ postcode < 2130){
                        return 'nsw.strathfield';
                      } else /* >= 2130 < 2135 */ {
                        if (/*> 2130*/ postcode < 2131){
                          return 'nsw.inner-west';
                        } else /* >= 2131 < 2135 */ {
                          return 'nsw.burwood';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else /* >= 2135 < 2580 */ {
          if (/*> 2135*/ postcode < 2380){
            if (/*> 2135*/ postcode < 2264){
              if (/*> 2135*/ postcode < 2190){
                if (/*> 2135*/ postcode < 2159){
                  if (/*> 2135*/ postcode < 2144){
                    if (/*> 2135*/ postcode < 2142){
                      if (/*> 2135*/ postcode < 2137){
                        return 'nsw.strathfield';
                      } else /* >= 2137 < 2142 */ {
                        return 'nsw.canada-bay';
                      }
                    } else /* >= 2142 < 2144 */ {
                      if (/*> 2142*/ postcode < 2143){
                        return 'nsw.cumberland';
                      } else /* >= 2143 < 2144 */ {
                        return 'nsw.canterbury-bankstown';
                      }
                    }
                  } else /* >= 2144 < 2159 */ {
                    if (/*> 2144*/ postcode < 2150){
                      if (/*> 2144*/ postcode < 2147){
                        return 'nsw.cumberland';
                      } else /* >= 2147 < 2150 */ {
                        return 'nsw.blacktown';
                      }
                    } else /* >= 2150 < 2159 */ {
                      if (/*> 2150*/ postcode < 2155){
                        return 'nsw.parramatta';
                      } else /* >= 2155 < 2159 */ {
                        if (/*> 2155*/ postcode < 2156){
                          return 'nsw.blacktown';
                        } else /* >= 2156 < 2159 */ {
                          return 'nsw.the-hills-shire';
                        }
                      }
                    }
                  }
                } else /* >= 2159 < 2190 */ {
                  if (/*> 2159*/ postcode < 2171){
                    if (/*> 2159*/ postcode < 2164){
                      if (/*> 2159*/ postcode < 2160){
                        return 'nsw.hornsby';
                      } else /* >= 2160 < 2164 */ {
                        return 'nsw.cumberland';
                      }
                    } else /* >= 2164 < 2171 */ {
                      if (/*> 2164*/ postcode < 2167){
                        return 'nsw.fairfield';
                      } else /* >= 2167 < 2171 */ {
                        if (/*> 2167*/ postcode < 2170){
                          return 'nsw.liverpool';
                        } else /* >= 2170 < 2171 */ {
                          return 'nsw.fairfield';
                        }
                      }
                    }
                  } else /* >= 2171 < 2190 */ {
                    if (/*> 2171*/ postcode < 2174){
                      if (/*> 2171*/ postcode < 2173){
                        return 'nsw.liverpool';
                      } else /* >= 2173 < 2174 */ {
                        return 'nsw.campbelltown';
                      }
                    } else /* >= 2174 < 2190 */ {
                      if (/*> 2174*/ postcode < 2175){
                        return 'nsw.liverpool';
                      } else /* >= 2175 < 2190 */ {
                        if (/*> 2175*/ postcode < 2179){
                          return 'nsw.fairfield';
                        } else /* >= 2179 < 2190 */ {
                          return 'nsw.liverpool';
                        }
                      }
                    }
                  }
                }
              } else /* >= 2190 < 2264 */ {
                if (/*> 2190*/ postcode < 2227){
                  if (/*> 2190*/ postcode < 2205){
                    if (/*> 2190*/ postcode < 2195){
                      if (/*> 2190*/ postcode < 2191){
                        return 'nsw.canterbury-bankstown';
                      } else /* >= 2191 < 2195 */ {
                        return 'nsw.burwood';
                      }
                    } else /* >= 2195 < 2205 */ {
                      if (/*> 2195*/ postcode < 2203){
                        return 'nsw.canterbury-bankstown';
                      } else /* >= 2203 < 2205 */ {
                        return 'nsw.inner-west';
                      }
                    }
                  } else /* >= 2205 < 2227 */ {
                    if (/*> 2205*/ postcode < 2211){
                      if (/*> 2205*/ postcode < 2207){
                        return 'nsw.bayside';
                      } else /* >= 2207 < 2211 */ {
                        return 'nsw.georges-river';
                      }
                    } else /* >= 2211 < 2227 */ {
                      if (/*> 2211*/ postcode < 2216){
                        return 'nsw.canterbury-bankstown';
                      } else /* >= 2216 < 2227 */ {
                        if (/*> 2216*/ postcode < 2218){
                          return 'nsw.bayside';
                        } else /* >= 2218 < 2227 */ {
                          return 'nsw.georges-river';
                        }
                      }
                    }
                  }
                } else /* >= 2227 < 2264 */ {
                  if (/*> 2227*/ postcode < 2258){
                    if (/*> 2227*/ postcode < 2232){
                      if (/*> 2227*/ postcode < 2230){
                        return 'nsw.sutherland-shire';
                      } else /* >= 2230 < 2232 */ {
                        return 'nsw.bayside';
                      }
                    } else /* >= 2232 < 2258 */ {
                      if (/*> 2232*/ postcode < 2250){
                        return 'nsw.sutherland-shire';
                      } else /* >= 2250 < 2258 */ {
                        if (/*> 2250*/ postcode < 2257){
                          return 'nsw.central-coast';
                        } else /* >= 2257 < 2258 */ {
                          return 'nsw.northern-beaches';
                        }
                      }
                    }
                  } else /* >= 2258 < 2264 */ {
                    if (/*> 2258*/ postcode < 2260){
                      if (/*> 2258*/ postcode < 2259){
                        return 'nsw.central-coast';
                      } else /* >= 2259 < 2260 */ {
                        return 'nsw.lake-macquarie';
                      }
                    } else /* >= 2260 < 2264 */ {
                      if (/*> 2260*/ postcode < 2262){
                        return 'nsw.central-coast';
                      } else /* >= 2262 < 2264 */ {
                        if (/*> 2262*/ postcode < 2263){
                          return 'nsw.lake-macquarie';
                        } else /* >= 2263 < 2264 */ {
                          return 'nsw.central-coast';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 2264 < 2380 */ {
              if (/*> 2264*/ postcode < 2334){
                if (/*> 2264*/ postcode < 2310){
                  if (/*> 2264*/ postcode < 2283){
                    if (/*> 2264*/ postcode < 2280){
                      if (/*> 2264*/ postcode < 2278){
                        return 'nsw.lake-macquarie';
                      } else /* >= 2278 < 2280 */ {
                        return 'nsw.newcastle';
                      }
                    } else /* >= 2280 < 2283 */ {
                      if (/*> 2280*/ postcode < 2282){
                        return 'nsw.lake-macquarie';
                      } else /* >= 2282 < 2283 */ {
                        return 'nsw.newcastle';
                      }
                    }
                  } else /* >= 2283 < 2310 */ {
                    if (/*> 2283*/ postcode < 2304){
                      if (/*> 2283*/ postcode < 2284){
                        return 'nsw.lake-macquarie';
                      } else /* >= 2284 < 2304 */ {
                        return 'nsw.newcastle';
                      }
                    } else /* >= 2304 < 2310 */ {
                      if (/*> 2304*/ postcode < 2305){
                        return 'nsw.queanbeyan-palerang-regional';
                      } else /* >= 2305 < 2310 */ {
                        if (/*> 2305*/ postcode < 2309){
                          return 'nsw.newcastle';
                        } else /* >= 2309 < 2310 */ {
                          return 'nsw.narrabri';
                        }
                      }
                    }
                  }
                } else /* >= 2310 < 2334 */ {
                  if (/*> 2310*/ postcode < 2325){
                    if (/*> 2310*/ postcode < 2314){
                      if (/*> 2310*/ postcode < 2312){
                        return 'nsw.dungog';
                      } else /* >= 2312 < 2314 */ {
                        return 'nsw.mid-coast';
                      }
                    } else /* >= 2314 < 2325 */ {
                      if (/*> 2314*/ postcode < 2320){
                        return 'nsw.port-stephens';
                      } else /* >= 2320 < 2325 */ {
                        if (/*> 2320*/ postcode < 2324){
                          return 'nsw.maitland';
                        } else /* >= 2324 < 2325 */ {
                          return 'nsw.port-stephens';
                        }
                      }
                    }
                  } else /* >= 2325 < 2334 */ {
                    if (/*> 2325*/ postcode < 2328){
                      if (/*> 2325*/ postcode < 2326){
                        return 'nsw.hawkesbury';
                      } else /* >= 2326 < 2328 */ {
                        return 'nsw.maitland';
                      }
                    } else /* >= 2328 < 2334 */ {
                      if (/*> 2328*/ postcode < 2329){
                        return 'nsw.muswellbrook';
                      } else /* >= 2329 < 2334 */ {
                        if (/*> 2329*/ postcode < 2330){
                          return 'nsw.upper-hunter-shire';
                        } else /* >= 2330 < 2334 */ {
                          return 'nsw.dungog';
                        }
                      }
                    }
                  }
                }
              } else /* >= 2334 < 2380 */ {
                if (/*> 2334*/ postcode < 2348){
                  if (/*> 2334*/ postcode < 2341){
                    if (/*> 2334*/ postcode < 2339){
                      if (/*> 2334*/ postcode < 2336){
                        return 'nsw.maitland';
                      } else /* >= 2336 < 2339 */ {
                        return 'nsw.upper-hunter-shire';
                      }
                    } else /* >= 2339 < 2341 */ {
                      if (/*> 2339*/ postcode < 2340){
                        return 'nsw.liverpool-plains';
                      } else /* >= 2340 < 2341 */ {
                        return 'nsw.walcha';
                      }
                    }
                  } else /* >= 2341 < 2348 */ {
                    if (/*> 2341*/ postcode < 2344){
                      if (/*> 2341*/ postcode < 2342){
                        return 'nsw.liverpool-plains';
                      } else /* >= 2342 < 2344 */ {
                        return 'nsw.gunnedah';
                      }
                    } else /* >= 2344 < 2348 */ {
                      if (/*> 2344*/ postcode < 2346){
                        return 'nsw.tamworth-regional';
                      } else /* >= 2346 < 2348 */ {
                        if (/*> 2346*/ postcode < 2347){
                          return 'nsw.uralla';
                        } else /* >= 2347 < 2348 */ {
                          return 'nsw.gwydir';
                        }
                      }
                    }
                  }
                } else /* >= 2348 < 2380 */ {
                  if (/*> 2348*/ postcode < 2358){
                    if (/*> 2348*/ postcode < 2352){
                      if (/*> 2348*/ postcode < 2350){
                        return 'nsw.bogan';
                      } else /* >= 2350 < 2352 */ {
                        return 'nsw.armidale-regional';
                      }
                    } else /* >= 2352 < 2358 */ {
                      if (/*> 2352*/ postcode < 2356){
                        return 'nsw.tamworth-regional';
                      } else /* >= 2356 < 2358 */ {
                        if (/*> 2356*/ postcode < 2357){
                          return 'nsw.narrabri';
                        } else /* >= 2357 < 2358 */ {
                          return 'nsw.warrumbungle-shire';
                        }
                      }
                    }
                  } else /* >= 2358 < 2380 */ {
                    if (/*> 2358*/ postcode < 2370){
                      if (/*> 2358*/ postcode < 2360){
                        return 'nsw.uralla';
                      } else /* >= 2360 < 2370 */ {
                        return 'nsw.inverell';
                      }
                    } else /* >= 2370 < 2380 */ {
                      if (/*> 2370*/ postcode < 2372){
                        return 'nsw.glen-innes-severn';
                      } else /* >= 2372 < 2380 */ {
                        if (/*> 2372*/ postcode < 2379){
                          return 'nsw.tenterfield';
                        } else /* >= 2379 < 2380 */ {
                          return 'nsw.warrumbungle-shire';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else /* >= 2380 < 2580 */ {
            if (/*> 2380*/ postcode < 2469){
              if (/*> 2380*/ postcode < 2423){
                if (/*> 2380*/ postcode < 2400){
                  if (/*> 2380*/ postcode < 2390){
                    if (/*> 2380*/ postcode < 2387){
                      if (/*> 2380*/ postcode < 2386){
                        return 'nsw.gunnedah';
                      } else /* >= 2386 < 2387 */ {
                        return 'nsw.narrabri';
                      }
                    } else /* >= 2387 < 2390 */ {
                      if (/*> 2387*/ postcode < 2388){
                        return 'nsw.walgett';
                      } else /* >= 2388 < 2390 */ {
                        return 'nsw.narrabri';
                      }
                    }
                  } else /* >= 2390 < 2400 */ {
                    if (/*> 2390*/ postcode < 2396){
                      if (/*> 2390*/ postcode < 2395){
                        return 'nsw.gwydir';
                      } else /* >= 2395 < 2396 */ {
                        return 'nsw.warrumbungle-shire';
                      }
                    } else /* >= 2396 < 2400 */ {
                      if (/*> 2396*/ postcode < 2398){
                        return 'nsw.coonamble';
                      } else /* >= 2398 < 2400 */ {
                        if (/*> 2398*/ postcode < 2399){
                          return 'nsw.moree-plains';
                        } else /* >= 2399 < 2400 */ {
                          return 'nsw.gwydir';
                        }
                      }
                    }
                  }
                } else /* >= 2400 < 2423 */ {
                  if (/*> 2400*/ postcode < 2406){
                    if (/*> 2400*/ postcode < 2403){
                      if (/*> 2400*/ postcode < 2401){
                        return 'nsw.moree-plains';
                      } else /* >= 2401 < 2403 */ {
                        return 'nsw.gwydir';
                      }
                    } else /* >= 2403 < 2406 */ {
                      if (/*> 2403*/ postcode < 2404){
                        return 'nsw.inverell';
                      } else /* >= 2404 < 2406 */ {
                        if (/*> 2404*/ postcode < 2405){
                          return 'nsw.gwydir';
                        } else /* >= 2405 < 2406 */ {
                          return 'nsw.moree-plains';
                        }
                      }
                    }
                  } else /* >= 2406 < 2423 */ {
                    if (/*> 2406*/ postcode < 2409){
                      if (/*> 2406*/ postcode < 2408){
                        return 'qld.balonne';
                      } else /* >= 2408 < 2409 */ {
                        return 'nsw.gwydir';
                      }
                    } else /* >= 2409 < 2423 */ {
                      if (/*> 2409*/ postcode < 2415){
                        return 'nsw.inverell';
                      } else /* >= 2415 < 2423 */ {
                        if (/*> 2415*/ postcode < 2422){
                          return 'nsw.dungog';
                        } else /* >= 2422 < 2423 */ {
                          return 'nsw.mid-coast';
                        }
                      }
                    }
                  }
                }
              } else /* >= 2423 < 2469 */ {
                if (/*> 2423*/ postcode < 2442){
                  if (/*> 2423*/ postcode < 2431){
                    if (/*> 2423*/ postcode < 2428){
                      if (/*> 2423*/ postcode < 2424){
                        return 'nsw.port-stephens';
                      } else /* >= 2424 < 2428 */ {
                        return 'nsw.port-macquarie-hastings';
                      }
                    } else /* >= 2428 < 2431 */ {
                      if (/*> 2428*/ postcode < 2430){
                        return 'nsw.mid-coast';
                      } else /* >= 2430 < 2431 */ {
                        return 'nsw.gilgandra';
                      }
                    }
                  } else /* >= 2431 < 2442 */ {
                    if (/*> 2431*/ postcode < 2440){
                      if (/*> 2431*/ postcode < 2439){
                        return 'nsw.nambucca-valley';
                      } else /* >= 2439 < 2440 */ {
                        return 'nsw.port-macquarie-hastings';
                      }
                    } else /* >= 2440 < 2442 */ {
                      if (/*> 2440*/ postcode < 2440){
                        return 'nsw.coffs-harbour';
                      } else /* >= 2440 < 2442 */ {
                        if (/*> 2440*/ postcode < 2441){
                          return 'nsw.kempsey';
                        } else /* >= 2441 < 2442 */ {
                          return 'nsw.nambucca-valley';
                        }
                      }
                    }
                  }
                } else /* >= 2442 < 2469 */ {
                  if (/*> 2442*/ postcode < 2456){
                    if (/*> 2442*/ postcode < 2449){
                      if (/*> 2442*/ postcode < 2447){
                        return 'nsw.port-macquarie-hastings';
                      } else /* >= 2447 < 2449 */ {
                        return 'nsw.nambucca-valley';
                      }
                    } else /* >= 2449 < 2456 */ {
                      if (/*> 2449*/ postcode < 2450){
                        return 'nsw.bellingen';
                      } else /* >= 2450 < 2456 */ {
                        if (/*> 2450*/ postcode < 2453){
                          return 'nsw.coffs-harbour';
                        } else /* >= 2453 < 2456 */ {
                          return 'nsw.bellingen';
                        }
                      }
                    }
                  } else /* >= 2456 < 2469 */ {
                    if (/*> 2456*/ postcode < 2462){
                      if (/*> 2456*/ postcode < 2460){
                        return 'nsw.coffs-harbour';
                      } else /* >= 2460 < 2462 */ {
                        return 'nsw.clarence-valley';
                      }
                    } else /* >= 2462 < 2469 */ {
                      if (/*> 2462*/ postcode < 2463){
                        return 'nsw.coffs-harbour';
                      } else /* >= 2463 < 2469 */ {
                        if (/*> 2463*/ postcode < 2464){
                          return 'nsw.clarence-valley';
                        } else /* >= 2464 < 2469 */ {
                          return 'nsw.richmond-valley';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 2469 < 2580 */ {
              if (/*> 2469*/ postcode < 2533){
                if (/*> 2469*/ postcode < 2480){
                  if (/*> 2469*/ postcode < 2473){
                    if (/*> 2469*/ postcode < 2471){
                      if (/*> 2469*/ postcode < 2470){
                        return 'nsw.kyogle';
                      } else /* >= 2470 < 2471 */ {
                        return 'nsw.lismore';
                      }
                    } else /* >= 2471 < 2473 */ {
                      if (/*> 2471*/ postcode < 2472){
                        return 'nsw.ballina';
                      } else /* >= 2472 < 2473 */ {
                        return 'nsw.richmond-valley';
                      }
                    }
                  } else /* >= 2473 < 2480 */ {
                    if (/*> 2473*/ postcode < 2475){
                      if (/*> 2473*/ postcode < 2474){
                        return 'nsw.ballina';
                      } else /* >= 2474 < 2475 */ {
                        return 'nsw.tweed';
                      }
                    } else /* >= 2475 < 2480 */ {
                      if (/*> 2475*/ postcode < 2477){
                        return 'nsw.kyogle';
                      } else /* >= 2477 < 2480 */ {
                        if (/*> 2477*/ postcode < 2479){
                          return 'nsw.ballina';
                        } else /* >= 2479 < 2480 */ {
                          return 'nsw.byron';
                        }
                      }
                    }
                  }
                } else /* >= 2480 < 2533 */ {
                  if (/*> 2480*/ postcode < 2505){
                    if (/*> 2480*/ postcode < 2484){
                      if (/*> 2480*/ postcode < 2481){
                        return 'nsw.tweed';
                      } else /* >= 2481 < 2484 */ {
                        return 'nsw.byron';
                      }
                    } else /* >= 2484 < 2505 */ {
                      if (/*> 2484*/ postcode < 2500){
                        return 'nsw.tweed';
                      } else /* >= 2500 < 2505 */ {
                        if (/*> 2500*/ postcode < 2502){
                          return 'nsw.wollongong';
                        } else /* >= 2502 < 2505 */ {
                          return 'nsw.shellharbour';
                        }
                      }
                    }
                  } else /* >= 2505 < 2533 */ {
                    if (/*> 2505*/ postcode < 2508){
                      if (/*> 2505*/ postcode < 2506){
                        return 'nsw.wollongong';
                      } else /* >= 2506 < 2508 */ {
                        return 'nsw.shellharbour';
                      }
                    } else /* >= 2508 < 2533 */ {
                      if (/*> 2508*/ postcode < 2515){
                        return 'nsw.campbelltown';
                      } else /* >= 2515 < 2533 */ {
                        if (/*> 2515*/ postcode < 2527){
                          return 'nsw.wollongong';
                        } else /* >= 2527 < 2533 */ {
                          return 'nsw.shellharbour';
                        }
                      }
                    }
                  }
                }
              } else /* >= 2533 < 2580 */ {
                if (/*> 2533*/ postcode < 2558){
                  if (/*> 2533*/ postcode < 2540){
                    if (/*> 2533*/ postcode < 2538){
                      if (/*> 2533*/ postcode < 2536){
                        return 'nsw.kiama';
                      } else /* >= 2536 < 2538 */ {
                        return 'nsw.eurobodalla';
                      }
                    } else /* >= 2538 < 2540 */ {
                      if (/*> 2538*/ postcode < 2539){
                        return 'nsw.shoalhaven';
                      } else /* >= 2539 < 2540 */ {
                        return 'nsw.eurobodalla';
                      }
                    }
                  } else /* >= 2540 < 2558 */ {
                    if (/*> 2540*/ postcode < 2546){
                      if (/*> 2540*/ postcode < 2545){
                        return 'nsw.shoalhaven';
                      } else /* >= 2545 < 2546 */ {
                        return 'nsw.eurobodalla';
                      }
                    } else /* >= 2546 < 2558 */ {
                      if (/*> 2546*/ postcode < 2555){
                        return 'nsw.bega-valley';
                      } else /* >= 2555 < 2558 */ {
                        if (/*> 2555*/ postcode < 2556){
                          return 'nsw.liverpool';
                        } else /* >= 2556 < 2558 */ {
                          return 'nsw.camden';
                        }
                      }
                    }
                  }
                } else /* >= 2558 < 2580 */ {
                  if (/*> 2558*/ postcode < 2567){
                    if (/*> 2558*/ postcode < 2563){
                      if (/*> 2558*/ postcode < 2560){
                        return 'nsw.campbelltown';
                      } else /* >= 2560 < 2563 */ {
                        return 'nsw.wollongong';
                      }
                    } else /* >= 2563 < 2567 */ {
                      if (/*> 2563*/ postcode < 2564){
                        return 'nsw.campbelltown';
                      } else /* >= 2564 < 2567 */ {
                        if (/*> 2564*/ postcode < 2566){
                          return 'nsw.liverpool';
                        } else /* >= 2566 < 2567 */ {
                          return 'nsw.campbelltown';
                        }
                      }
                    }
                  } else /* >= 2567 < 2580 */ {
                    if (/*> 2567*/ postcode < 2570){
                      if (/*> 2567*/ postcode < 2568){
                        return 'nsw.camden';
                      } else /* >= 2568 < 2570 */ {
                        return 'nsw.campbelltown';
                      }
                    } else /* >= 2570 < 2580 */ {
                      if (/*> 2570*/ postcode < 2575){
                        return 'nsw.wollondilly';
                      } else /* >= 2575 < 2580 */ {
                        if (/*> 2575*/ postcode < 2580){
                          return 'nsw.wingecarribee';
                        } else /* >= 2580 < 2580 */ {
                          return 'nsw.oberon';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else /* >= 2580 < 3777 */ {
        if (/*> 2580*/ postcode < 3162){
          if (/*> 2580*/ postcode < 2831){
            if (/*> 2580*/ postcode < 2711){
              if (/*> 2580*/ postcode < 2649){
                if (/*> 2580*/ postcode < 2619){
                  if (/*> 2580*/ postcode < 2594){
                    if (/*> 2580*/ postcode < 2584){
                      if (/*> 2580*/ postcode < 2582){
                        return 'nsw.upper-lachlan-shire';
                      } else /* >= 2582 < 2584 */ {
                        return 'nsw.yass-valley';
                      }
                    } else /* >= 2584 < 2594 */ {
                      if (/*> 2584*/ postcode < 2587){
                        return 'nsw.hilltops';
                      } else /* >= 2587 < 2594 */ {
                        return 'nsw.cootamundra-gundagai-regional';
                      }
                    }
                  } else /* >= 2594 < 2619 */ {
                    if (/*> 2594*/ postcode < 2611){
                      if (/*> 2594*/ postcode < 2600){
                        return 'nsw.hilltops';
                      } else /* >= 2600 < 2611 */ {
                        return 'act.unincorporated-act';
                      }
                    } else /* >= 2611 < 2619 */ {
                      if (/*> 2611*/ postcode < 2612){
                        return 'nsw.yass-valley';
                      } else /* >= 2612 < 2619 */ {
                        if (/*> 2612*/ postcode < 2618){
                          return 'act.unincorporated-act';
                        } else /* >= 2618 < 2619 */ {
                          return 'nsw.yass-valley';
                        }
                      }
                    }
                  }
                } else /* >= 2619 < 2649 */ {
                  if (/*> 2619*/ postcode < 2644){
                    if (/*> 2619*/ postcode < 2640){
                      if (/*> 2619*/ postcode < 2624){
                        return 'nsw.queanbeyan-palerang-regional';
                      } else /* >= 2624 < 2640 */ {
                        return 'nsw.snowy-monaro-regional';
                      }
                    } else /* >= 2640 < 2644 */ {
                      if (/*> 2640*/ postcode < 2642){
                        return 'nsw.albury';
                      } else /* >= 2642 < 2644 */ {
                        if (/*> 2642*/ postcode < 2643){
                          return 'nsw.lockhart';
                        } else /* >= 2643 < 2644 */ {
                          return 'nsw.albury';
                        }
                      }
                    }
                  } else /* >= 2644 < 2649 */ {
                    if (/*> 2644*/ postcode < 2646){
                      if (/*> 2644*/ postcode < 2645){
                        return 'nsw.greater-hume-shire';
                      } else /* >= 2645 < 2646 */ {
                        return 'nsw.lockhart';
                      }
                    } else /* >= 2646 < 2649 */ {
                      if (/*> 2646*/ postcode < 2647){
                        return 'nsw.albury';
                      } else /* >= 2647 < 2649 */ {
                        if (/*> 2647*/ postcode < 2648){
                          return 'nsw.berrigan';
                        } else /* >= 2648 < 2649 */ {
                          return 'nsw.balranald';
                        }
                      }
                    }
                  }
                }
              } else /* >= 2649 < 2711 */ {
                if (/*> 2649*/ postcode < 2669){
                  if (/*> 2649*/ postcode < 2653){
                    if (/*> 2649*/ postcode < 2650){
                      if (/*> 2649*/ postcode < 2650){
                        return 'nsw.snowy-valleys';
                      } else /* >= 2650 < 2650 */ {
                        return 'nsw.lockhart';
                      }
                    } else /* >= 2650 < 2653 */ {
                      if (/*> 2650*/ postcode < 2652){
                        return 'nsw.wagga-wagga';
                      } else /* >= 2652 < 2653 */ {
                        return 'nsw.narrandera';
                      }
                    }
                  } else /* >= 2653 < 2669 */ {
                    if (/*> 2653*/ postcode < 2661){
                      if (/*> 2653*/ postcode < 2655){
                        return 'nsw.snowy-valleys';
                      } else /* >= 2655 < 2661 */ {
                        return 'nsw.lockhart';
                      }
                    } else /* >= 2661 < 2669 */ {
                      if (/*> 2661*/ postcode < 2665){
                        return 'nsw.wagga-wagga';
                      } else /* >= 2665 < 2669 */ {
                        if (/*> 2665*/ postcode < 2665){
                          return 'nsw.narrandera';
                        } else /* >= 2665 < 2669 */ {
                          return 'nsw.temora';
                        }
                      }
                    }
                  }
                } else /* >= 2669 < 2711 */ {
                  if (/*> 2669*/ postcode < 2701){
                    if (/*> 2669*/ postcode < 2675){
                      if (/*> 2669*/ postcode < 2672){
                        return 'nsw.bland';
                      } else /* >= 2672 < 2675 */ {
                        return 'nsw.lachlan';
                      }
                    } else /* >= 2675 < 2701 */ {
                      if (/*> 2675*/ postcode < 2680){
                        return 'nsw.carrathool';
                      } else /* >= 2680 < 2701 */ {
                        if (/*> 2680*/ postcode < 2700){
                          return 'nsw.griffith';
                        } else /* >= 2700 < 2701 */ {
                          return 'nsw.leeton';
                        }
                      }
                    }
                  } else /* >= 2701 < 2711 */ {
                    if (/*> 2701*/ postcode < 2707){
                      if (/*> 2701*/ postcode < 2703){
                        return 'nsw.coolamon';
                      } else /* >= 2703 < 2707 */ {
                        return 'nsw.leeton';
                      }
                    } else /* >= 2707 < 2711 */ {
                      if (/*> 2707*/ postcode < 2708){
                        return 'nsw.murrumbidgee';
                      } else /* >= 2708 < 2711 */ {
                        if (/*> 2708*/ postcode < 2710){
                          return 'nsw.murray-river';
                        } else /* >= 2710 < 2711 */ {
                          return 'nsw.berrigan';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 2711 < 2831 */ {
              if (/*> 2711*/ postcode < 2787){
                if (/*> 2711*/ postcode < 2738){
                  if (/*> 2711*/ postcode < 2717){
                    if (/*> 2711*/ postcode < 2715){
                      if (/*> 2711*/ postcode < 2712){
                        return 'nsw.murray-river';
                      } else /* >= 2712 < 2715 */ {
                        return 'nsw.berrigan';
                      }
                    } else /* >= 2715 < 2717 */ {
                      if (/*> 2715*/ postcode < 2716){
                        return 'nsw.murray-river';
                      } else /* >= 2716 < 2717 */ {
                        return 'nsw.berrigan';
                      }
                    }
                  } else /* >= 2717 < 2738 */ {
                    if (/*> 2717*/ postcode < 2721){
                      if (/*> 2717*/ postcode < 2720){
                        return 'nsw.wentworth';
                      } else /* >= 2720 < 2721 */ {
                        return 'nsw.snowy-valleys';
                      }
                    } else /* >= 2721 < 2738 */ {
                      if (/*> 2721*/ postcode < 2722){
                        return 'nsw.weddin';
                      } else /* >= 2722 < 2738 */ {
                        if (/*> 2722*/ postcode < 2731){
                          return 'nsw.cootamundra-gundagai-regional';
                        } else /* >= 2731 < 2738 */ {
                          return 'nsw.murray-river';
                        }
                      }
                    }
                  }
                } else /* >= 2738 < 2787 */ {
                  if (/*> 2738*/ postcode < 2758){
                    if (/*> 2738*/ postcode < 2754){
                      if (/*> 2738*/ postcode < 2745){
                        return 'nsw.wentworth';
                      } else /* >= 2745 < 2754 */ {
                        return 'nsw.penrith';
                      }
                    } else /* >= 2754 < 2758 */ {
                      if (/*> 2754*/ postcode < 2756){
                        return 'nsw.the-hills-shire';
                      } else /* >= 2756 < 2758 */ {
                        if (/*> 2756*/ postcode < 2757){
                          return 'nsw.hawkesbury';
                        } else /* >= 2757 < 2758 */ {
                          return 'nsw.penrith';
                        }
                      }
                    }
                  } else /* >= 2758 < 2787 */ {
                    if (/*> 2758*/ postcode < 2761){
                      if (/*> 2758*/ postcode < 2759){
                        return 'nsw.blue-mountains';
                      } else /* >= 2759 < 2761 */ {
                        return 'nsw.penrith';
                      }
                    } else /* >= 2761 < 2787 */ {
                      if (/*> 2761*/ postcode < 2773){
                        return 'nsw.blacktown';
                      } else /* >= 2773 < 2787 */ {
                        if (/*> 2773*/ postcode < 2776){
                          return 'nsw.penrith';
                        } else /* >= 2776 < 2787 */ {
                          return 'nsw.blue-mountains';
                        }
                      }
                    }
                  }
                }
              } else /* >= 2787 < 2831 */ {
                if (/*> 2787*/ postcode < 2817){
                  if (/*> 2787*/ postcode < 2795){
                    if (/*> 2787*/ postcode < 2791){
                      if (/*> 2787*/ postcode < 2790){
                        return 'nsw.oberon';
                      } else /* >= 2790 < 2791 */ {
                        return 'nsw.lithgow';
                      }
                    } else /* >= 2791 < 2795 */ {
                      if (/*> 2791*/ postcode < 2793){
                        return 'nsw.blayney';
                      } else /* >= 2793 < 2795 */ {
                        return 'nsw.cowra';
                      }
                    }
                  } else /* >= 2795 < 2817 */ {
                    if (/*> 2795*/ postcode < 2804){
                      if (/*> 2795*/ postcode < 2800){
                        return 'nsw.blayney';
                      } else /* >= 2800 < 2804 */ {
                        return 'nsw.cabonne';
                      }
                    } else /* >= 2804 < 2817 */ {
                      if (/*> 2804*/ postcode < 2806){
                        return 'nsw.cowra';
                      } else /* >= 2806 < 2817 */ {
                        if (/*> 2806*/ postcode < 2807){
                          return 'nsw.cabonne';
                        } else /* >= 2807 < 2817 */ {
                          return 'nsw.cowra';
                        }
                      }
                    }
                  }
                } else /* >= 2817 < 2831 */ {
                  if (/*> 2817*/ postcode < 2825){
                    if (/*> 2817*/ postcode < 2821){
                      if (/*> 2817*/ postcode < 2818){
                        return 'nsw.gilgandra';
                      } else /* >= 2818 < 2821 */ {
                        return 'nsw.dubbo-regional';
                      }
                    } else /* >= 2821 < 2825 */ {
                      if (/*> 2821*/ postcode < 2822){
                        return 'nsw.narromine';
                      } else /* >= 2822 < 2825 */ {
                        if (/*> 2822*/ postcode < 2823){
                          return 'nsw.gilgandra';
                        } else /* >= 2823 < 2825 */ {
                          return 'nsw.narromine';
                        }
                      }
                    }
                  } else /* >= 2825 < 2831 */ {
                    if (/*> 2825*/ postcode < 2827){
                      if (/*> 2825*/ postcode < 2826){
                        return 'nsw.bogan';
                      } else /* >= 2826 < 2827 */ {
                        return 'nsw.narromine';
                      }
                    } else /* >= 2827 < 2831 */ {
                      if (/*> 2827*/ postcode < 2829){
                        return 'nsw.gilgandra';
                      } else /* >= 2829 < 2831 */ {
                        if (/*> 2829*/ postcode < 2830){
                          return 'nsw.coonamble';
                        } else /* >= 2830 < 2831 */ {
                          return 'nsw.dubbo-regional';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else /* >= 2831 < 3162 */ {
            if (/*> 2831*/ postcode < 3058){
              if (/*> 2831*/ postcode < 3005){
                if (/*> 2831*/ postcode < 2871){
                  if (/*> 2831*/ postcode < 2842){
                    if (/*> 2831*/ postcode < 2835){
                      if (/*> 2831*/ postcode < 2832){
                        return 'nsw.bogan';
                      } else /* >= 2832 < 2835 */ {
                        return 'nsw.walgett';
                      }
                    } else /* >= 2835 < 2842 */ {
                      if (/*> 2835*/ postcode < 2836){
                        return 'nsw.cobar';
                      } else /* >= 2836 < 2842 */ {
                        return 'nsw.central-darling';
                      }
                    }
                  } else /* >= 2842 < 2871 */ {
                    if (/*> 2842*/ postcode < 2848){
                      if (/*> 2842*/ postcode < 2845){
                        return 'nsw.warrumbungle-shire';
                      } else /* >= 2845 < 2848 */ {
                        return 'nsw.lithgow';
                      }
                    } else /* >= 2848 < 2871 */ {
                      if (/*> 2848*/ postcode < 2864){
                        return 'nsw.mid-western-regional';
                      } else /* >= 2864 < 2871 */ {
                        if (/*> 2864*/ postcode < 2869){
                          return 'nsw.cabonne';
                        } else /* >= 2869 < 2871 */ {
                          return 'nsw.parkes';
                        }
                      }
                    }
                  }
                } else /* >= 2871 < 3005 */ {
                  if (/*> 2871*/ postcode < 2900){
                    if (/*> 2871*/ postcode < 2874){
                      if (/*> 2871*/ postcode < 2873){
                        return 'nsw.forbes';
                      } else /* >= 2873 < 2874 */ {
                        return 'nsw.lachlan';
                      }
                    } else /* >= 2874 < 2900 */ {
                      if (/*> 2874*/ postcode < 2875){
                        return 'nsw.parkes';
                      } else /* >= 2875 < 2900 */ {
                        if (/*> 2875*/ postcode < 2899){
                          return 'nsw.forbes';
                        } else /* >= 2899 < 2900 */ {
                          return 'nsw.albury';
                        }
                      }
                    }
                  } else /* >= 2900 < 3005 */ {
                    if (/*> 2900*/ postcode < 3002){
                      if (/*> 2900*/ postcode < 3000){
                        return 'act.unincorporated-act';
                      } else /* >= 3000 < 3002 */ {
                        return 'vic.melbourne';
                      }
                    } else /* >= 3002 < 3005 */ {
                      if (/*> 3002*/ postcode < 3003){
                        return 'vic.yarra';
                      } else /* >= 3003 < 3005 */ {
                        if (/*> 3003*/ postcode < 3004){
                          return 'vic.melbourne';
                        } else /* >= 3004 < 3005 */ {
                          return 'vic.port-phillip';
                        }
                      }
                    }
                  }
                }
              } else /* >= 3005 < 3058 */ {
                if (/*> 3005*/ postcode < 3029){
                  if (/*> 3005*/ postcode < 3020){
                    if (/*> 3005*/ postcode < 3016){
                      if (/*> 3005*/ postcode < 3011){
                        return 'vic.melbourne';
                      } else /* >= 3011 < 3016 */ {
                        return 'vic.maribyrnong';
                      }
                    } else /* >= 3016 < 3020 */ {
                      if (/*> 3016*/ postcode < 3019){
                        return 'vic.hobsons-bay';
                      } else /* >= 3019 < 3020 */ {
                        return 'vic.maribyrnong';
                      }
                    }
                  } else /* >= 3020 < 3029 */ {
                    if (/*> 3020*/ postcode < 3025){
                      if (/*> 3020*/ postcode < 3024){
                        return 'vic.brimbank';
                      } else /* >= 3024 < 3025 */ {
                        return 'vic.wyndham';
                      }
                    } else /* >= 3025 < 3029 */ {
                      if (/*> 3025*/ postcode < 3026){
                        return 'vic.hobsons-bay';
                      } else /* >= 3026 < 3029 */ {
                        if (/*> 3026*/ postcode < 3027){
                          return 'vic.wyndham';
                        } else /* >= 3027 < 3029 */ {
                          return 'vic.hobsons-bay';
                        }
                      }
                    }
                  }
                } else /* >= 3029 < 3058 */ {
                  if (/*> 3029*/ postcode < 3044){
                    if (/*> 3029*/ postcode < 3032){
                      if (/*> 3029*/ postcode < 3031){
                        return 'vic.wyndham';
                      } else /* >= 3031 < 3032 */ {
                        return 'vic.melbourne';
                      }
                    } else /* >= 3032 < 3044 */ {
                      if (/*> 3032*/ postcode < 3036){
                        return 'vic.moonee-valley';
                      } else /* >= 3036 < 3044 */ {
                        if (/*> 3036*/ postcode < 3039){
                          return 'vic.brimbank';
                        } else /* >= 3039 < 3044 */ {
                          return 'vic.moonee-valley';
                        }
                      }
                    }
                  } else /* >= 3044 < 3058 */ {
                    if (/*> 3044*/ postcode < 3054){
                      if (/*> 3044*/ postcode < 3050){
                        return 'vic.moreland';
                      } else /* >= 3050 < 3054 */ {
                        return 'vic.melbourne';
                      }
                    } else /* >= 3054 < 3058 */ {
                      if (/*> 3054*/ postcode < 3055){
                        return 'vic.yarra';
                      } else /* >= 3055 < 3058 */ {
                        if (/*> 3055*/ postcode < 3057){
                          return 'vic.moreland';
                        } else /* >= 3057 < 3058 */ {
                          return 'vic.yarra';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 3058 < 3162 */ {
              if (/*> 3058*/ postcode < 3106){
                if (/*> 3058*/ postcode < 3086){
                  if (/*> 3058*/ postcode < 3065){
                    if (/*> 3058*/ postcode < 3060){
                      if (/*> 3058*/ postcode < 3059){
                        return 'vic.moreland';
                      } else /* >= 3059 < 3060 */ {
                        return 'vic.hume';
                      }
                    } else /* >= 3060 < 3065 */ {
                      if (/*> 3060*/ postcode < 3062){
                        return 'vic.moreland';
                      } else /* >= 3062 < 3065 */ {
                        return 'vic.hume';
                      }
                    }
                  } else /* >= 3065 < 3086 */ {
                    if (/*> 3065*/ postcode < 3078){
                      if (/*> 3065*/ postcode < 3071){
                        return 'vic.yarra';
                      } else /* >= 3071 < 3078 */ {
                        return 'vic.darebin';
                      }
                    } else /* >= 3078 < 3086 */ {
                      if (/*> 3078*/ postcode < 3079){
                        return 'vic.yarra';
                      } else /* >= 3079 < 3086 */ {
                        if (/*> 3079*/ postcode < 3082){
                          return 'vic.darebin';
                        } else /* >= 3082 < 3086 */ {
                          return 'vic.banyule';
                        }
                      }
                    }
                  }
                } else /* >= 3086 < 3106 */ {
                  if (/*> 3086*/ postcode < 3096){
                    if (/*> 3086*/ postcode < 3091){
                      if (/*> 3086*/ postcode < 3087){
                        return 'vic.darebin';
                      } else /* >= 3087 < 3091 */ {
                        return 'vic.banyule';
                      }
                    } else /* >= 3091 < 3096 */ {
                      if (/*> 3091*/ postcode < 3093){
                        return 'vic.nillumbik';
                      } else /* >= 3093 < 3096 */ {
                        if (/*> 3093*/ postcode < 3095){
                          return 'vic.banyule';
                        } else /* >= 3095 < 3096 */ {
                          return 'vic.manningham';
                        }
                      }
                    }
                  } else /* >= 3096 < 3106 */ {
                    if (/*> 3096*/ postcode < 3099){
                      if (/*> 3096*/ postcode < 3097){
                        return 'vic.nillumbik';
                      } else /* >= 3097 < 3099 */ {
                        return 'vic.manningham';
                      }
                    } else /* >= 3099 < 3106 */ {
                      if (/*> 3099*/ postcode < 3101){
                        return 'vic.nillumbik';
                      } else /* >= 3101 < 3106 */ {
                        if (/*> 3101*/ postcode < 3105){
                          return 'vic.boroondara';
                        } else /* >= 3105 < 3106 */ {
                          return 'vic.banyule';
                        }
                      }
                    }
                  }
                }
              } else /* >= 3106 < 3162 */ {
                if (/*> 3106*/ postcode < 3140){
                  if (/*> 3106*/ postcode < 3121){
                    if (/*> 3106*/ postcode < 3109){
                      if (/*> 3106*/ postcode < 3108){
                        return 'vic.manningham';
                      } else /* >= 3108 < 3109 */ {
                        return 'vic.whitehorse';
                      }
                    } else /* >= 3109 < 3121 */ {
                      if (/*> 3109*/ postcode < 3116){
                        return 'vic.manningham';
                      } else /* >= 3116 < 3121 */ {
                        return 'vic.maroondah';
                      }
                    }
                  } else /* >= 3121 < 3140 */ {
                    if (/*> 3121*/ postcode < 3128){
                      if (/*> 3121*/ postcode < 3122){
                        return 'vic.yarra';
                      } else /* >= 3122 < 3128 */ {
                        return 'vic.boroondara';
                      }
                    } else /* >= 3128 < 3140 */ {
                      if (/*> 3128*/ postcode < 3134){
                        return 'vic.whitehorse';
                      } else /* >= 3134 < 3140 */ {
                        if (/*> 3134*/ postcode < 3139){
                          return 'vic.maroondah';
                        } else /* >= 3139 < 3140 */ {
                          return 'vic.yarra-ranges';
                        }
                      }
                    }
                  }
                } else /* >= 3140 < 3162 */ {
                  if (/*> 3140*/ postcode < 3151){
                    if (/*> 3140*/ postcode < 3142){
                      if (/*> 3140*/ postcode < 3141){
                        return 'vic.maroondah';
                      } else /* >= 3141 < 3142 */ {
                        return 'vic.port-phillip';
                      }
                    } else /* >= 3142 < 3151 */ {
                      if (/*> 3142*/ postcode < 3148){
                        return 'vic.stonnington';
                      } else /* >= 3148 < 3151 */ {
                        if (/*> 3148*/ postcode < 3148){
                          return 'vic.glen-eira';
                        } else /* >= 3148 < 3151 */ {
                          return 'vic.monash';
                        }
                      }
                    }
                  } else /* >= 3151 < 3162 */ {
                    if (/*> 3151*/ postcode < 3153){
                      if (/*> 3151*/ postcode < 3152){
                        return 'vic.whitehorse';
                      } else /* >= 3152 < 3153 */ {
                        return 'vic.knox';
                      }
                    } else /* >= 3153 < 3162 */ {
                      if (/*> 3153*/ postcode < 3154){
                        return 'vic.maroondah';
                      } else /* >= 3154 < 3162 */ {
                        if (/*> 3154*/ postcode < 3161){
                          return 'vic.knox';
                        } else /* >= 3161 < 3162 */ {
                          return 'vic.stonnington';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else /* >= 3162 < 3777 */ {
          if (/*> 3162*/ postcode < 3399){
            if (/*> 3162*/ postcode < 3279){
              if (/*> 3162*/ postcode < 3212){
                if (/*> 3162*/ postcode < 3177){
                  if (/*> 3162*/ postcode < 3169){
                    if (/*> 3162*/ postcode < 3165){
                      if (/*> 3162*/ postcode < 3164){
                        return 'vic.glen-eira';
                      } else /* >= 3164 < 3165 */ {
                        return 'vic.greater-dandenong';
                      }
                    } else /* >= 3165 < 3169 */ {
                      if (/*> 3165*/ postcode < 3168){
                        return 'vic.glen-eira';
                      } else /* >= 3168 < 3169 */ {
                        return 'vic.monash';
                      }
                    }
                  } else /* >= 3169 < 3177 */ {
                    if (/*> 3169*/ postcode < 3172){
                      if (/*> 3169*/ postcode < 3170){
                        return 'vic.kingston';
                      } else /* >= 3170 < 3172 */ {
                        return 'vic.monash';
                      }
                    } else /* >= 3172 < 3177 */ {
                      if (/*> 3172*/ postcode < 3173){
                        return 'vic.kingston';
                      } else /* >= 3173 < 3177 */ {
                        if (/*> 3173*/ postcode < 3176){
                          return 'vic.greater-dandenong';
                        } else /* >= 3176 < 3177 */ {
                          return 'vic.knox';
                        }
                      }
                    }
                  }
                } else /* >= 3177 < 3212 */ {
                  if (/*> 3177*/ postcode < 3192){
                    if (/*> 3177*/ postcode < 3181){
                      if (/*> 3177*/ postcode < 3178){
                        return 'vic.greater-dandenong';
                      } else /* >= 3178 < 3181 */ {
                        return 'vic.knox';
                      }
                    } else /* >= 3181 < 3192 */ {
                      if (/*> 3181*/ postcode < 3185){
                        return 'vic.port-phillip';
                      } else /* >= 3185 < 3192 */ {
                        if (/*> 3185*/ postcode < 3186){
                          return 'vic.glen-eira';
                        } else /* >= 3186 < 3192 */ {
                          return 'vic.bayside';
                        }
                      }
                    }
                  } else /* >= 3192 < 3212 */ {
                    if (/*> 3192*/ postcode < 3205){
                      if (/*> 3192*/ postcode < 3197){
                        return 'vic.kingston';
                      } else /* >= 3197 < 3205 */ {
                        return 'vic.frankston';
                      }
                    } else /* >= 3205 < 3212 */ {
                      if (/*> 3205*/ postcode < 3207){
                        return 'vic.port-phillip';
                      } else /* >= 3207 < 3212 */ {
                        if (/*> 3207*/ postcode < 3211){
                          return 'vic.melbourne';
                        } else /* >= 3211 < 3212 */ {
                          return 'vic.wyndham';
                        }
                      }
                    }
                  }
                }
              } else /* >= 3212 < 3279 */ {
                if (/*> 3212*/ postcode < 3236){
                  if (/*> 3212*/ postcode < 3224){
                    if (/*> 3212*/ postcode < 3218){
                      if (/*> 3212*/ postcode < 3217){
                        return 'vic.greater-geelong';
                      } else /* >= 3217 < 3218 */ {
                        return 'vic.surf-coast';
                      }
                    } else /* >= 3218 < 3224 */ {
                      if (/*> 3218*/ postcode < 3222){
                        return 'vic.greater-geelong';
                      } else /* >= 3222 < 3224 */ {
                        return 'vic.queenscliffe';
                      }
                    }
                  } else /* >= 3224 < 3236 */ {
                    if (/*> 3224*/ postcode < 3228){
                      if (/*> 3224*/ postcode < 3225){
                        return 'vic.greater-geelong';
                      } else /* >= 3225 < 3228 */ {
                        return 'vic.queenscliffe';
                      }
                    } else /* >= 3228 < 3236 */ {
                      if (/*> 3228*/ postcode < 3233){
                        return 'vic.surf-coast';
                      } else /* >= 3233 < 3236 */ {
                        if (/*> 3233*/ postcode < 3235){
                          return 'vic.colac-otway';
                        } else /* >= 3235 < 3236 */ {
                          return 'vic.surf-coast';
                        }
                      }
                    }
                  }
                } else /* >= 3236 < 3279 */ {
                  if (/*> 3236*/ postcode < 3271){
                    if (/*> 3236*/ postcode < 3242){
                      if (/*> 3236*/ postcode < 3240){
                        return 'vic.colac-otway';
                      } else /* >= 3240 < 3242 */ {
                        return 'vic.surf-coast';
                      }
                    } else /* >= 3242 < 3271 */ {
                      if (/*> 3242*/ postcode < 3260){
                        return 'vic.colac-otway';
                      } else /* >= 3260 < 3271 */ {
                        if (/*> 3260*/ postcode < 3268){
                          return 'vic.corangamite';
                        } else /* >= 3268 < 3271 */ {
                          return 'vic.warrnambool';
                        }
                      }
                    }
                  } else /* >= 3271 < 3279 */ {
                    if (/*> 3271*/ postcode < 3275){
                      if (/*> 3271*/ postcode < 3272){
                        return 'vic.corangamite';
                      } else /* >= 3272 < 3275 */ {
                        return 'vic.moyne';
                      }
                    } else /* >= 3275 < 3279 */ {
                      if (/*> 3275*/ postcode < 3276){
                        return 'vic.warrnambool';
                      } else /* >= 3276 < 3279 */ {
                        if (/*> 3276*/ postcode < 3277){
                          return 'vic.moyne';
                        } else /* >= 3277 < 3279 */ {
                          return 'vic.warrnambool';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 3279 < 3399 */ {
              if (/*> 3279*/ postcode < 3352){
                if (/*> 3279*/ postcode < 3314){
                  if (/*> 3279*/ postcode < 3292){
                    if (/*> 3279*/ postcode < 3286){
                      if (/*> 3279*/ postcode < 3280){
                        return 'vic.moyne';
                      } else /* >= 3280 < 3286 */ {
                        return 'vic.warrnambool';
                      }
                    } else /* >= 3286 < 3292 */ {
                      if (/*> 3286*/ postcode < 3287){
                        return 'vic.glenelg';
                      } else /* >= 3287 < 3292 */ {
                        return 'vic.moyne';
                      }
                    }
                  } else /* >= 3292 < 3314 */ {
                    if (/*> 3292*/ postcode < 3294){
                      if (/*> 3292*/ postcode < 3293){
                        return 'vic.glenelg';
                      } else /* >= 3293 < 3294 */ {
                        return 'vic.ararat';
                      }
                    } else /* >= 3294 < 3314 */ {
                      if (/*> 3294*/ postcode < 3301){
                        return 'vic.southern-grampians';
                      } else /* >= 3301 < 3314 */ {
                        if (/*> 3301*/ postcode < 3302){
                          return 'vic.moyne';
                        } else /* >= 3302 < 3314 */ {
                          return 'vic.glenelg';
                        }
                      }
                    }
                  }
                } else /* >= 3314 < 3352 */ {
                  if (/*> 3314*/ postcode < 3334){
                    if (/*> 3314*/ postcode < 3321){
                      if (/*> 3314*/ postcode < 3317){
                        return 'vic.southern-grampians';
                      } else /* >= 3317 < 3321 */ {
                        return 'vic.west-wimmera';
                      }
                    } else /* >= 3321 < 3334 */ {
                      if (/*> 3321*/ postcode < 3324){
                        return 'vic.golden-plains';
                      } else /* >= 3324 < 3334 */ {
                        if (/*> 3324*/ postcode < 3328){
                          return 'vic.corangamite';
                        } else /* >= 3328 < 3334 */ {
                          return 'vic.golden-plains';
                        }
                      }
                    }
                  } else /* >= 3334 < 3352 */ {
                    if (/*> 3334*/ postcode < 3340){
                      if (/*> 3334*/ postcode < 3335){
                        return 'vic.moorabool';
                      } else /* >= 3335 < 3340 */ {
                        return 'vic.melton';
                      }
                    } else /* >= 3340 < 3352 */ {
                      if (/*> 3340*/ postcode < 3350){
                        return 'vic.moorabool';
                      } else /* >= 3350 < 3352 */ {
                        if (/*> 3350*/ postcode < 3351){
                          return 'vic.ballarat';
                        } else /* >= 3351 < 3352 */ {
                          return 'vic.golden-plains';
                        }
                      }
                    }
                  }
                }
              } else /* >= 3352 < 3399 */ {
                if (/*> 3352*/ postcode < 3375){
                  if (/*> 3352*/ postcode < 3364){
                    if (/*> 3352*/ postcode < 3363){
                      if (/*> 3352*/ postcode < 3360){
                        return 'vic.ballarat';
                      } else /* >= 3360 < 3363 */ {
                        return 'vic.golden-plains';
                      }
                    } else /* >= 3363 < 3364 */ {
                      if (/*> 3363*/ postcode < 3363){
                        return 'vic.ballarat';
                      } else /* >= 3363 < 3364 */ {
                        return 'vic.hepburn';
                      }
                    }
                  } else /* >= 3364 < 3375 */ {
                    if (/*> 3364*/ postcode < 3371){
                      if (/*> 3364*/ postcode < 3370){
                        return 'vic.mount-alexander';
                      } else /* >= 3370 < 3371 */ {
                        return 'vic.hepburn';
                      }
                    } else /* >= 3371 < 3375 */ {
                      if (/*> 3371*/ postcode < 3373){
                        return 'vic.central-goldfields';
                      } else /* >= 3373 < 3375 */ {
                        if (/*> 3373*/ postcode < 3374){
                          return 'vic.pyrenees';
                        } else /* >= 3374 < 3375 */ {
                          return 'vic.ararat';
                        }
                      }
                    }
                  }
                } else /* >= 3375 < 3399 */ {
                  if (/*> 3375*/ postcode < 3387){
                    if (/*> 3375*/ postcode < 3378){
                      if (/*> 3375*/ postcode < 3377){
                        return 'vic.pyrenees';
                      } else /* >= 3377 < 3378 */ {
                        return 'vic.northern-grampians';
                      }
                    } else /* >= 3378 < 3387 */ {
                      if (/*> 3378*/ postcode < 3380){
                        return 'vic.ararat';
                      } else /* >= 3380 < 3387 */ {
                        if (/*> 3380*/ postcode < 3385){
                          return 'vic.northern-grampians';
                        } else /* >= 3385 < 3387 */ {
                          return 'vic.horsham';
                        }
                      }
                    }
                  } else /* >= 3387 < 3399 */ {
                    if (/*> 3387*/ postcode < 3391){
                      if (/*> 3387*/ postcode < 3390){
                        return 'vic.northern-grampians';
                      } else /* >= 3390 < 3391 */ {
                        return 'vic.horsham';
                      }
                    } else /* >= 3391 < 3399 */ {
                      if (/*> 3391*/ postcode < 3392){
                        return 'vic.yarriambiack';
                      } else /* >= 3392 < 3399 */ {
                        if (/*> 3392*/ postcode < 3393){
                          return 'vic.northern-grampians';
                        } else /* >= 3393 < 3399 */ {
                          return 'vic.yarriambiack';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else /* >= 3399 < 3777 */ {
            if (/*> 3399*/ postcode < 3573){
              if (/*> 3399*/ postcode < 3490){
                if (/*> 3399*/ postcode < 3446){
                  if (/*> 3399*/ postcode < 3418){
                    if (/*> 3399*/ postcode < 3414){
                      if (/*> 3399*/ postcode < 3409){
                        return 'vic.horsham';
                      } else /* >= 3409 < 3414 */ {
                        return 'vic.west-wimmera';
                      }
                    } else /* >= 3414 < 3418 */ {
                      if (/*> 3414*/ postcode < 3415){
                        return 'vic.hindmarsh';
                      } else /* >= 3415 < 3418 */ {
                        return 'vic.west-wimmera';
                      }
                    }
                  } else /* >= 3418 < 3446 */ {
                    if (/*> 3418*/ postcode < 3423){
                      if (/*> 3418*/ postcode < 3419){
                        return 'vic.hindmarsh';
                      } else /* >= 3419 < 3423 */ {
                        return 'vic.west-wimmera';
                      }
                    } else /* >= 3423 < 3446 */ {
                      if (/*> 3423*/ postcode < 3428){
                        return 'vic.hindmarsh';
                      } else /* >= 3428 < 3446 */ {
                        if (/*> 3428*/ postcode < 3431){
                          return 'vic.hume';
                        } else /* >= 3431 < 3446 */ {
                          return 'vic.macedon-ranges';
                        }
                      }
                    }
                  }
                } else /* >= 3446 < 3490 */ {
                  if (/*> 3446*/ postcode < 3472){
                    if (/*> 3446*/ postcode < 3462){
                      if (/*> 3446*/ postcode < 3460){
                        return 'vic.mount-alexander';
                      } else /* >= 3460 < 3462 */ {
                        return 'vic.hepburn';
                      }
                    } else /* >= 3462 < 3472 */ {
                      if (/*> 3462*/ postcode < 3464){
                        return 'vic.mount-alexander';
                      } else /* >= 3464 < 3472 */ {
                        if (/*> 3464*/ postcode < 3467){
                          return 'vic.central-goldfields';
                        } else /* >= 3467 < 3472 */ {
                          return 'vic.pyrenees';
                        }
                      }
                    }
                  } else /* >= 3472 < 3490 */ {
                    if (/*> 3472*/ postcode < 3480){
                      if (/*> 3472*/ postcode < 3477){
                        return 'vic.central-goldfields';
                      } else /* >= 3477 < 3480 */ {
                        return 'vic.northern-grampians';
                      }
                    } else /* >= 3480 < 3490 */ {
                      if (/*> 3480*/ postcode < 3487){
                        return 'vic.buloke';
                      } else /* >= 3487 < 3490 */ {
                        if (/*> 3487*/ postcode < 3489){
                          return 'vic.yarriambiack';
                        } else /* >= 3489 < 3490 */ {
                          return 'vic.swan-hill';
                        }
                      }
                    }
                  }
                }
              } else /* >= 3490 < 3573 */ {
                if (/*> 3490*/ postcode < 3533){
                  if (/*> 3490*/ postcode < 3516){
                    if (/*> 3490*/ postcode < 3505){
                      if (/*> 3490*/ postcode < 3502){
                        return 'vic.mildura';
                      } else /* >= 3502 < 3505 */ {
                        return 'vic.greater-dandenong';
                      }
                    } else /* >= 3505 < 3516 */ {
                      if (/*> 3505*/ postcode < 3515){
                        return 'vic.mildura';
                      } else /* >= 3515 < 3516 */ {
                        return 'vic.greater-bendigo';
                      }
                    }
                  } else /* >= 3516 < 3533 */ {
                    if (/*> 3516*/ postcode < 3523){
                      if (/*> 3516*/ postcode < 3521){
                        return 'vic.loddon';
                      } else /* >= 3521 < 3523 */ {
                        return 'vic.mitchell';
                      }
                    } else /* >= 3523 < 3533 */ {
                      if (/*> 3523*/ postcode < 3525){
                        return 'vic.greater-bendigo';
                      } else /* >= 3525 < 3533 */ {
                        if (/*> 3525*/ postcode < 3527){
                          return 'vic.loddon';
                        } else /* >= 3527 < 3533 */ {
                          return 'vic.buloke';
                        }
                      }
                    }
                  }
                } else /* >= 3533 < 3573 */ {
                  if (/*> 3533*/ postcode < 3552){
                    if (/*> 3533*/ postcode < 3540){
                      if (/*> 3533*/ postcode < 3537){
                        return 'vic.swan-hill';
                      } else /* >= 3537 < 3540 */ {
                        return 'vic.loddon';
                      }
                    } else /* >= 3540 < 3552 */ {
                      if (/*> 3540*/ postcode < 3544){
                        return 'vic.gannawarra';
                      } else /* >= 3544 < 3552 */ {
                        if (/*> 3544*/ postcode < 3550){
                          return 'vic.swan-hill';
                        } else /* >= 3550 < 3552 */ {
                          return 'vic.greater-bendigo';
                        }
                      }
                    }
                  } else /* >= 3552 < 3573 */ {
                    if (/*> 3552*/ postcode < 3558){
                      if (/*> 3552*/ postcode < 3554){
                        return 'vic.yarra';
                      } else /* >= 3554 < 3558 */ {
                        return 'vic.greater-bendigo';
                      }
                    } else /* >= 3558 < 3573 */ {
                      if (/*> 3558*/ postcode < 3567){
                        return 'vic.campaspe';
                      } else /* >= 3567 < 3573 */ {
                        if (/*> 3567*/ postcode < 3571){
                          return 'vic.gannawarra';
                        } else /* >= 3571 < 3573 */ {
                          return 'vic.loddon';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 3573 < 3777 */ {
              if (/*> 3573*/ postcode < 3675){
                if (/*> 3573*/ postcode < 3647){
                  if (/*> 3573*/ postcode < 3607){
                    if (/*> 3573*/ postcode < 3579){
                      if (/*> 3573*/ postcode < 3575){
                        return 'vic.campaspe';
                      } else /* >= 3575 < 3579 */ {
                        return 'vic.loddon';
                      }
                    } else /* >= 3579 < 3607 */ {
                      if (/*> 3579*/ postcode < 3585){
                        return 'vic.gannawarra';
                      } else /* >= 3585 < 3607 */ {
                        return 'vic.swan-hill';
                      }
                    }
                  } else /* >= 3607 < 3647 */ {
                    if (/*> 3607*/ postcode < 3621){
                      if (/*> 3607*/ postcode < 3610){
                        return 'vic.strathbogie';
                      } else /* >= 3610 < 3621 */ {
                        return 'vic.greater-shepparton';
                      }
                    } else /* >= 3621 < 3647 */ {
                      if (/*> 3621*/ postcode < 3629){
                        return 'vic.campaspe';
                      } else /* >= 3629 < 3647 */ {
                        if (/*> 3629*/ postcode < 3635){
                          return 'vic.greater-shepparton';
                        } else /* >= 3635 < 3647 */ {
                          return 'vic.moira';
                        }
                      }
                    }
                  }
                } else /* >= 3647 < 3675 */ {
                  if (/*> 3647*/ postcode < 3662){
                    if (/*> 3647*/ postcode < 3658){
                      if (/*> 3647*/ postcode < 3649){
                        return 'vic.greater-shepparton';
                      } else /* >= 3649 < 3658 */ {
                        return 'vic.moira';
                      }
                    } else /* >= 3658 < 3662 */ {
                      if (/*> 3658*/ postcode < 3659){
                        return 'vic.whittlesea';
                      } else /* >= 3659 < 3662 */ {
                        if (/*> 3659*/ postcode < 3661){
                          return 'vic.mitchell';
                        } else /* >= 3661 < 3662 */ {
                          return 'vic.latrobe';
                        }
                      }
                    }
                  } else /* >= 3662 < 3675 */ {
                    if (/*> 3662*/ postcode < 3669){
                      if (/*> 3662*/ postcode < 3664){
                        return 'vic.mitchell';
                      } else /* >= 3664 < 3669 */ {
                        return 'vic.strathbogie';
                      }
                    } else /* >= 3669 < 3675 */ {
                      if (/*> 3669*/ postcode < 3671){
                        return 'vic.benalla';
                      } else /* >= 3671 < 3675 */ {
                        if (/*> 3671*/ postcode < 3672){
                          return 'vic.greater-shepparton';
                        } else /* >= 3672 < 3675 */ {
                          return 'vic.benalla';
                        }
                      }
                    }
                  }
                }
              } else /* >= 3675 < 3777 */ {
                if (/*> 3675*/ postcode < 3725){
                  if (/*> 3675*/ postcode < 3694){
                    if (/*> 3675*/ postcode < 3690){
                      if (/*> 3675*/ postcode < 3682){
                        return 'vic.wangaratta';
                      } else /* >= 3682 < 3690 */ {
                        return 'vic.indigo';
                      }
                    } else /* >= 3690 < 3694 */ {
                      if (/*> 3690*/ postcode < 3691){
                        return 'vic.wodonga';
                      } else /* >= 3691 < 3694 */ {
                        return 'vic.towong';
                      }
                    }
                  } else /* >= 3694 < 3725 */ {
                    if (/*> 3694*/ postcode < 3700){
                      if (/*> 3694*/ postcode < 3697){
                        return 'vic.wodonga';
                      } else /* >= 3697 < 3700 */ {
                        return 'vic.alpine';
                      }
                    } else /* >= 3700 < 3725 */ {
                      if (/*> 3700*/ postcode < 3711){
                        return 'vic.towong';
                      } else /* >= 3711 < 3725 */ {
                        if (/*> 3711*/ postcode < 3720){
                          return 'vic.murrindindi';
                        } else /* >= 3720 < 3725 */ {
                          return 'vic.mansfield';
                        }
                      }
                    }
                  }
                } else /* >= 3725 < 3777 */ {
                  if (/*> 3725*/ postcode < 3750){
                    if (/*> 3725*/ postcode < 3732){
                      if (/*> 3725*/ postcode < 3728){
                        return 'vic.benalla';
                      } else /* >= 3728 < 3732 */ {
                        return 'vic.moira';
                      }
                    } else /* >= 3732 < 3750 */ {
                      if (/*> 3732*/ postcode < 3737){
                        return 'vic.wangaratta';
                      } else /* >= 3737 < 3750 */ {
                        if (/*> 3737*/ postcode < 3746){
                          return 'vic.alpine';
                        } else /* >= 3746 < 3750 */ {
                          return 'vic.indigo';
                        }
                      }
                    }
                  } else /* >= 3750 < 3777 */ {
                    if (/*> 3750*/ postcode < 3762){
                      if (/*> 3750*/ postcode < 3759){
                        return 'vic.whittlesea';
                      } else /* >= 3759 < 3762 */ {
                        return 'vic.nillumbik';
                      }
                    } else /* >= 3762 < 3777 */ {
                      if (/*> 3762*/ postcode < 3763){
                        return 'vic.mitchell';
                      } else /* >= 3763 < 3777 */ {
                        if (/*> 3763*/ postcode < 3765){
                          return 'vic.nillumbik';
                        } else /* >= 3765 < 3777 */ {
                          return 'vic.maroondah';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else /* >= 3777 < 9013 */ {
      if (/*> 3777*/ postcode < 5418){
        if (/*> 3777*/ postcode < 4621){
          if (/*> 3777*/ postcode < 4183){
            if (/*> 3777*/ postcode < 3926){
              if (/*> 3777*/ postcode < 3832){
                if (/*> 3777*/ postcode < 3802){
                  if (/*> 3777*/ postcode < 3785){
                    if (/*> 3777*/ postcode < 3782){
                      if (/*> 3777*/ postcode < 3781){
                        return 'vic.yarra-ranges';
                      } else /* >= 3781 < 3782 */ {
                        return 'vic.cardinia';
                      }
                    } else /* >= 3782 < 3785 */ {
                      if (/*> 3782*/ postcode < 3783){
                        return 'vic.knox';
                      } else /* >= 3783 < 3785 */ {
                        return 'vic.cardinia';
                      }
                    }
                  } else /* >= 3785 < 3802 */ {
                    if (/*> 3785*/ postcode < 3789){
                      if (/*> 3785*/ postcode < 3788){
                        return 'vic.knox';
                      } else /* >= 3788 < 3789 */ {
                        return 'vic.maroondah';
                      }
                    } else /* >= 3789 < 3802 */ {
                      if (/*> 3789*/ postcode < 3795){
                        return 'vic.knox';
                      } else /* >= 3795 < 3802 */ {
                        if (/*> 3795*/ postcode < 3797){
                          return 'vic.maroondah';
                        } else /* >= 3797 < 3802 */ {
                          return 'vic.unincorporated-vic';
                        }
                      }
                    }
                  }
                } else /* >= 3802 < 3832 */ {
                  if (/*> 3802*/ postcode < 3821){
                    if (/*> 3802*/ postcode < 3810){
                      if (/*> 3802*/ postcode < 3805){
                        return 'vic.greater-dandenong';
                      } else /* >= 3805 < 3810 */ {
                        return 'vic.casey';
                      }
                    } else /* >= 3810 < 3821 */ {
                      if (/*> 3810*/ postcode < 3816){
                        return 'vic.cardinia';
                      } else /* >= 3816 < 3821 */ {
                        if (/*> 3816*/ postcode < 3820){
                          return 'vic.unincorporated-vic';
                        } else /* >= 3820 < 3821 */ {
                          return 'vic.baw-baw';
                        }
                      }
                    }
                  } else /* >= 3821 < 3832 */ {
                    if (/*> 3821*/ postcode < 3824){
                      if (/*> 3821*/ postcode < 3822){
                        return 'vic.unincorporated-vic';
                      } else /* >= 3822 < 3824 */ {
                        return 'vic.baw-baw';
                      }
                    } else /* >= 3824 < 3832 */ {
                      if (/*> 3824*/ postcode < 3825){
                        return 'vic.latrobe';
                      } else /* >= 3825 < 3832 */ {
                        if (/*> 3825*/ postcode < 3831){
                          return 'vic.wellington';
                        } else /* >= 3831 < 3832 */ {
                          return 'vic.baw-baw';
                        }
                      }
                    }
                  }
                }
              } else /* >= 3832 < 3926 */ {
                if (/*> 3832*/ postcode < 3871){
                  if (/*> 3832*/ postcode < 3842){
                    if (/*> 3832*/ postcode < 3835){
                      if (/*> 3832*/ postcode < 3833){
                        return 'vic.unincorporated-vic';
                      } else /* >= 3833 < 3835 */ {
                        return 'vic.baw-baw';
                      }
                    } else /* >= 3835 < 3842 */ {
                      if (/*> 3835*/ postcode < 3841){
                        return 'vic.latrobe';
                      } else /* >= 3841 < 3842 */ {
                        return 'vic.wellington';
                      }
                    }
                  } else /* >= 3842 < 3871 */ {
                    if (/*> 3842*/ postcode < 3854){
                      if (/*> 3842*/ postcode < 3850){
                        return 'vic.latrobe';
                      } else /* >= 3850 < 3854 */ {
                        return 'vic.wellington';
                      }
                    } else /* >= 3854 < 3871 */ {
                      if (/*> 3854*/ postcode < 3856){
                        return 'vic.latrobe';
                      } else /* >= 3856 < 3871 */ {
                        if (/*> 3856*/ postcode < 3869){
                          return 'vic.wellington';
                        } else /* >= 3869 < 3871 */ {
                          return 'vic.latrobe';
                        }
                      }
                    }
                  }
                } else /* >= 3871 < 3926 */ {
                  if (/*> 3871*/ postcode < 3910){
                    if (/*> 3871*/ postcode < 3875){
                      if (/*> 3871*/ postcode < 3873){
                        return 'vic.south-gippsland';
                      } else /* >= 3873 < 3875 */ {
                        return 'vic.latrobe';
                      }
                    } else /* >= 3875 < 3910 */ {
                      if (/*> 3875*/ postcode < 3878){
                        return 'vic.east-gippsland';
                      } else /* >= 3878 < 3910 */ {
                        if (/*> 3878*/ postcode < 3882){
                          return 'vic.wellington';
                        } else /* >= 3882 < 3910 */ {
                          return 'vic.east-gippsland';
                        }
                      }
                    }
                  } else /* >= 3910 < 3926 */ {
                    if (/*> 3910*/ postcode < 3921){
                      if (/*> 3910*/ postcode < 3915){
                        return 'vic.frankston';
                      } else /* >= 3915 < 3921 */ {
                        return 'vic.mornington-peninsula';
                      }
                    } else /* >= 3921 < 3926 */ {
                      if (/*> 3921*/ postcode < 3922){
                        return 'vic.bass-coast';
                      } else /* >= 3922 < 3926 */ {
                        if (/*> 3922*/ postcode < 3923){
                          return 'vic.mornington-peninsula';
                        } else /* >= 3923 < 3926 */ {
                          return 'vic.bass-coast';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 3926 < 4183 */ {
              if (/*> 3926*/ postcode < 4073){
                if (/*> 3926*/ postcode < 4000){
                  if (/*> 3926*/ postcode < 3945){
                    if (/*> 3926*/ postcode < 3931){
                      if (/*> 3926*/ postcode < 3930){
                        return 'vic.mornington-peninsula';
                      } else /* >= 3930 < 3931 */ {
                        return 'vic.frankston';
                      }
                    } else /* >= 3931 < 3945 */ {
                      if (/*> 3931*/ postcode < 3942){
                        return 'vic.mornington-peninsula';
                      } else /* >= 3942 < 3945 */ {
                        return 'vic.queenscliffe';
                      }
                    }
                  } else /* >= 3945 < 4000 */ {
                    if (/*> 3945*/ postcode < 3975){
                      if (/*> 3945*/ postcode < 3953){
                        return 'vic.bass-coast';
                      } else /* >= 3953 < 3975 */ {
                        return 'vic.south-gippsland';
                      }
                    } else /* >= 3975 < 4000 */ {
                      if (/*> 3975*/ postcode < 3976){
                        return 'vic.greater-dandenong';
                      } else /* >= 3976 < 4000 */ {
                        if (/*> 3976*/ postcode < 3979){
                          return 'vic.casey';
                        } else /* >= 3979 < 4000 */ {
                          return 'vic.bass-coast';
                        }
                      }
                    }
                  }
                } else /* >= 4000 < 4073 */ {
                  if (/*> 4000*/ postcode < 4005){
                    if (/*> 4000*/ postcode < 4002){
                      if (/*> 4000*/ postcode < 4001){
                        return 'qld.brisbane';
                      } else /* >= 4001 < 4002 */ {
                        return 'qld.ipswich';
                      }
                    } else /* >= 4002 < 4005 */ {
                      if (/*> 4002*/ postcode < 4003){
                        return 'qld.brisbane';
                      } else /* >= 4003 < 4005 */ {
                        if (/*> 4003*/ postcode < 4004){
                          return 'qld.bundaberg';
                        } else /* >= 4004 < 4005 */ {
                          return 'qld.woorabinda';
                        }
                      }
                    }
                  } else /* >= 4005 < 4073 */ {
                    if (/*> 4005*/ postcode < 4025){
                      if (/*> 4005*/ postcode < 4020){
                        return 'qld.brisbane';
                      } else /* >= 4020 < 4025 */ {
                        return 'qld.moreton-bay';
                      }
                    } else /* >= 4025 < 4073 */ {
                      if (/*> 4025*/ postcode < 4029){
                        return 'qld.redland';
                      } else /* >= 4029 < 4073 */ {
                        if (/*> 4029*/ postcode < 4072){
                          return 'qld.brisbane';
                        } else /* >= 4072 < 4073 */ {
                          return 'qld.lockyer-valley';
                        }
                      }
                    }
                  }
                }
              } else /* >= 4073 < 4183 */ {
                if (/*> 4073*/ postcode < 4114){
                  if (/*> 4073*/ postcode < 4109){
                    if (/*> 4073*/ postcode < 4101){
                      if (/*> 4073*/ postcode < 4077){
                        return 'qld.brisbane';
                      } else /* >= 4077 < 4101 */ {
                        return 'qld.logan';
                      }
                    } else /* >= 4101 < 4109 */ {
                      if (/*> 4101*/ postcode < 4108){
                        return 'qld.brisbane';
                      } else /* >= 4108 < 4109 */ {
                        return 'qld.charters-towers';
                      }
                    }
                  } else /* >= 4109 < 4114 */ {
                    if (/*> 4109*/ postcode < 4111){
                      if (/*> 4109*/ postcode < 4110){
                        return 'qld.brisbane';
                      } else /* >= 4110 < 4111 */ {
                        return 'qld.charters-towers';
                      }
                    } else /* >= 4111 < 4114 */ {
                      if (/*> 4111*/ postcode < 4112){
                        return 'qld.brisbane';
                      } else /* >= 4112 < 4114 */ {
                        if (/*> 4112*/ postcode < 4113){
                          return 'qld.logan';
                        } else /* >= 4113 < 4114 */ {
                          return 'qld.brisbane';
                        }
                      }
                    }
                  }
                } else /* >= 4114 < 4183 */ {
                  if (/*> 4114*/ postcode < 4151){
                    if (/*> 4114*/ postcode < 4124){
                      if (/*> 4114*/ postcode < 4120){
                        return 'qld.logan';
                      } else /* >= 4120 < 4124 */ {
                        return 'qld.brisbane';
                      }
                    } else /* >= 4124 < 4151 */ {
                      if (/*> 4124*/ postcode < 4130){
                        return 'qld.logan';
                      } else /* >= 4130 < 4151 */ {
                        if (/*> 4130*/ postcode < 4131){
                          return 'qld.redland';
                        } else /* >= 4131 < 4151 */ {
                          return 'qld.logan';
                        }
                      }
                    }
                  } else /* >= 4151 < 4183 */ {
                    if (/*> 4151*/ postcode < 4158){
                      if (/*> 4151*/ postcode < 4157){
                        return 'qld.brisbane';
                      } else /* >= 4157 < 4158 */ {
                        return 'qld.redland';
                      }
                    } else /* >= 4158 < 4183 */ {
                      if (/*> 4158*/ postcode < 4159){
                        return 'qld.brisbane';
                      } else /* >= 4159 < 4183 */ {
                        if (/*> 4159*/ postcode < 4169){
                          return 'qld.redland';
                        } else /* >= 4169 < 4183 */ {
                          return 'qld.brisbane';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else /* >= 4183 < 4621 */ {
            if (/*> 4183*/ postcode < 4421){
              if (/*> 4183*/ postcode < 4352){
                if (/*> 4183*/ postcode < 4301){
                  if (/*> 4183*/ postcode < 4223){
                    if (/*> 4183*/ postcode < 4209){
                      if (/*> 4183*/ postcode < 4205){
                        return 'qld.redland';
                      } else /* >= 4205 < 4209 */ {
                        return 'qld.logan';
                      }
                    } else /* >= 4209 < 4223 */ {
                      if (/*> 4209*/ postcode < 4222){
                        return 'qld.gold-coast';
                      } else /* >= 4222 < 4223 */ {
                        return 'qld.brisbane';
                      }
                    }
                  } else /* >= 4223 < 4301 */ {
                    if (/*> 4223*/ postcode < 4271){
                      if (/*> 4223*/ postcode < 4270){
                        return 'qld.gold-coast';
                      } else /* >= 4270 < 4271 */ {
                        return 'qld.logan';
                      }
                    } else /* >= 4271 < 4301 */ {
                      if (/*> 4271*/ postcode < 4280){
                        return 'qld.gold-coast';
                      } else /* >= 4280 < 4301 */ {
                        if (/*> 4280*/ postcode < 4285){
                          return 'qld.logan';
                        } else /* >= 4285 < 4301 */ {
                          return 'qld.scenic-rim';
                        }
                      }
                    }
                  }
                } else /* >= 4301 < 4352 */ {
                  if (/*> 4301*/ postcode < 4340){
                    if (/*> 4301*/ postcode < 4311){
                      if (/*> 4301*/ postcode < 4309){
                        return 'qld.ipswich';
                      } else /* >= 4309 < 4311 */ {
                        return 'qld.scenic-rim';
                      }
                    } else /* >= 4311 < 4340 */ {
                      if (/*> 4311*/ postcode < 4312){
                        return 'qld.lockyer-valley';
                      } else /* >= 4312 < 4340 */ {
                        if (/*> 4312*/ postcode < 4314){
                          return 'qld.somerset';
                        } else /* >= 4314 < 4340 */ {
                          return 'qld.cherbourg';
                        }
                      }
                    }
                  } else /* >= 4340 < 4352 */ {
                    if (/*> 4340*/ postcode < 4346){
                      if (/*> 4340*/ postcode < 4341){
                        return 'qld.ipswich';
                      } else /* >= 4341 < 4346 */ {
                        return 'qld.lockyer-valley';
                      }
                    } else /* >= 4346 < 4352 */ {
                      if (/*> 4346*/ postcode < 4347){
                        return 'qld.ipswich';
                      } else /* >= 4347 < 4352 */ {
                        if (/*> 4347*/ postcode < 4350){
                          return 'qld.lockyer-valley';
                        } else /* >= 4350 < 4352 */ {
                          return 'qld.toowoomba';
                        }
                      }
                    }
                  }
                }
              } else /* >= 4352 < 4421 */ {
                if (/*> 4352*/ postcode < 4400){
                  if (/*> 4352*/ postcode < 4359){
                    if (/*> 4352*/ postcode < 4355){
                      if (/*> 4352*/ postcode < 4353){
                        return 'qld.lockyer-valley';
                      } else /* >= 4353 < 4355 */ {
                        return 'qld.toowoomba';
                      }
                    } else /* >= 4355 < 4359 */ {
                      if (/*> 4355*/ postcode < 4356){
                        return 'qld.somerset';
                      } else /* >= 4356 < 4359 */ {
                        return 'qld.toowoomba';
                      }
                    }
                  } else /* >= 4359 < 4400 */ {
                    if (/*> 4359*/ postcode < 4363){
                      if (/*> 4359*/ postcode < 4362){
                        return 'qld.lockyer-valley';
                      } else /* >= 4362 < 4363 */ {
                        return 'qld.southern-downs';
                      }
                    } else /* >= 4363 < 4400 */ {
                      if (/*> 4363*/ postcode < 4370){
                        return 'qld.toowoomba';
                      } else /* >= 4370 < 4400 */ {
                        if (/*> 4370*/ postcode < 4387){
                          return 'qld.southern-downs';
                        } else /* >= 4387 < 4400 */ {
                          return 'qld.goondiwindi';
                        }
                      }
                    }
                  }
                } else /* >= 4400 < 4421 */ {
                  if (/*> 4400*/ postcode < 4408){
                    if (/*> 4400*/ postcode < 4403){
                      if (/*> 4400*/ postcode < 4402){
                        return 'qld.toowoomba';
                      } else /* >= 4402 < 4403 */ {
                        return 'qld.somerset';
                      }
                    } else /* >= 4403 < 4408 */ {
                      if (/*> 4403*/ postcode < 4405){
                        return 'qld.toowoomba';
                      } else /* >= 4405 < 4408 */ {
                        if (/*> 4405*/ postcode < 4406){
                          return 'qld.south-burnett';
                        } else /* >= 4406 < 4408 */ {
                          return 'qld.goondiwindi';
                        }
                      }
                    }
                  } else /* >= 4408 < 4421 */ {
                    if (/*> 4408*/ postcode < 4417){
                      if (/*> 4408*/ postcode < 4411){
                        return 'qld.south-burnett';
                      } else /* >= 4411 < 4417 */ {
                        return 'qld.western-downs';
                      }
                    } else /* >= 4417 < 4421 */ {
                      if (/*> 4417*/ postcode < 4418){
                        return 'qld.maranoa';
                      } else /* >= 4418 < 4421 */ {
                        if (/*> 4418*/ postcode < 4419){
                          return 'qld.western-downs';
                        } else /* >= 4419 < 4421 */ {
                          return 'qld.banana';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 4421 < 4621 */ {
              if (/*> 4421*/ postcode < 4515){
                if (/*> 4421*/ postcode < 4478){
                  if (/*> 4421*/ postcode < 4467){
                    if (/*> 4421*/ postcode < 4454){
                      if (/*> 4421*/ postcode < 4428){
                        return 'qld.western-downs';
                      } else /* >= 4428 < 4454 */ {
                        return 'qld.maranoa';
                      }
                    } else /* >= 4454 < 4467 */ {
                      if (/*> 4454*/ postcode < 4455){
                        return 'qld.central-highlands';
                      } else /* >= 4455 < 4467 */ {
                        return 'qld.maranoa';
                      }
                    }
                  } else /* >= 4467 < 4478 */ {
                    if (/*> 4467*/ postcode < 4472){
                      if (/*> 4467*/ postcode < 4471){
                        return 'qld.murweh';
                      } else /* >= 4471 < 4472 */ {
                        return 'qld.paroo';
                      }
                    } else /* >= 4472 < 4478 */ {
                      if (/*> 4472*/ postcode < 4474){
                        return 'qld.blackall-tambo';
                      } else /* >= 4474 < 4478 */ {
                        if (/*> 4474*/ postcode < 4477){
                          return 'qld.quilpie';
                        } else /* >= 4477 < 4478 */ {
                          return 'qld.murweh';
                        }
                      }
                    }
                  }
                } else /* >= 4478 < 4515 */ {
                  if (/*> 4478*/ postcode < 4500){
                    if (/*> 4478*/ postcode < 4486){
                      if (/*> 4478*/ postcode < 4481){
                        return 'qld.blackall-tambo';
                      } else /* >= 4481 < 4486 */ {
                        return 'qld.barcoo';
                      }
                    } else /* >= 4486 < 4500 */ {
                      if (/*> 4486*/ postcode < 4489){
                        return 'qld.balonne';
                      } else /* >= 4489 < 4500 */ {
                        if (/*> 4489*/ postcode < 4494){
                          return 'qld.paroo';
                        } else /* >= 4494 < 4500 */ {
                          return 'qld.goondiwindi';
                        }
                      }
                    }
                  } else /* >= 4500 < 4515 */ {
                    if (/*> 4500*/ postcode < 4510){
                      if (/*> 4500*/ postcode < 4501){
                        return 'qld.brisbane';
                      } else /* >= 4501 < 4510 */ {
                        return 'qld.moreton-bay';
                      }
                    } else /* >= 4510 < 4515 */ {
                      if (/*> 4510*/ postcode < 4511){
                        return 'qld.charters-towers';
                      } else /* >= 4511 < 4515 */ {
                        if (/*> 4511*/ postcode < 4514){
                          return 'qld.moreton-bay';
                        } else /* >= 4514 < 4515 */ {
                          return 'qld.sunshine-coast';
                        }
                      }
                    }
                  }
                }
              } else /* >= 4515 < 4621 */ {
                if (/*> 4515*/ postcode < 4571){
                  if (/*> 4515*/ postcode < 4550){
                    if (/*> 4515*/ postcode < 4518){
                      if (/*> 4515*/ postcode < 4516){
                        return 'qld.gympie';
                      } else /* >= 4516 < 4518 */ {
                        return 'qld.moreton-bay';
                      }
                    } else /* >= 4518 < 4550 */ {
                      if (/*> 4518*/ postcode < 4520){
                        return 'qld.sunshine-coast';
                      } else /* >= 4520 < 4550 */ {
                        return 'qld.moreton-bay';
                      }
                    }
                  } else /* >= 4550 < 4571 */ {
                    if (/*> 4550*/ postcode < 4564){
                      if (/*> 4550*/ postcode < 4563){
                        return 'qld.sunshine-coast';
                      } else /* >= 4563 < 4564 */ {
                        return 'qld.noosa';
                      }
                    } else /* >= 4564 < 4571 */ {
                      if (/*> 4564*/ postcode < 4565){
                        return 'qld.sunshine-coast';
                      } else /* >= 4565 < 4571 */ {
                        if (/*> 4565*/ postcode < 4570){
                          return 'qld.noosa';
                        } else /* >= 4570 < 4571 */ {
                          return 'qld.gympie';
                        }
                      }
                    }
                  }
                } else /* >= 4571 < 4621 */ {
                  if (/*> 4571*/ postcode < 4601){
                    if (/*> 4571*/ postcode < 4573){
                      if (/*> 4571*/ postcode < 4572){
                        return 'qld.noosa';
                      } else /* >= 4572 < 4573 */ {
                        return 'qld.sunshine-coast';
                      }
                    } else /* >= 4573 < 4601 */ {
                      if (/*> 4573*/ postcode < 4574){
                        return 'qld.noosa';
                      } else /* >= 4574 < 4601 */ {
                        if (/*> 4574*/ postcode < 4580){
                          return 'qld.sunshine-coast';
                        } else /* >= 4580 < 4601 */ {
                          return 'qld.fraser-coast';
                        }
                      }
                    }
                  } else /* >= 4601 < 4621 */ {
                    if (/*> 4601*/ postcode < 4611){
                      if (/*> 4601*/ postcode < 4608){
                        return 'qld.cherbourg';
                      } else /* >= 4608 < 4611 */ {
                        return 'qld.south-burnett';
                      }
                    } else /* >= 4611 < 4621 */ {
                      if (/*> 4611*/ postcode < 4612){
                        return 'qld.cherbourg';
                      } else /* >= 4612 < 4621 */ {
                        if (/*> 4612*/ postcode < 4620){
                          return 'qld.south-burnett';
                        } else /* >= 4620 < 4621 */ {
                          return 'qld.fraser-coast';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else /* >= 4621 < 5418 */ {
          if (/*> 4621*/ postcode < 5064){
            if (/*> 4621*/ postcode < 4825){
              if (/*> 4621*/ postcode < 4724){
                if (/*> 4621*/ postcode < 4709){
                  if (/*> 4621*/ postcode < 4677){
                    if (/*> 4621*/ postcode < 4650){
                      if (/*> 4621*/ postcode < 4625){
                        return 'qld.bundaberg';
                      } else /* >= 4625 < 4650 */ {
                        return 'qld.north-burnett';
                      }
                    } else /* >= 4650 < 4677 */ {
                      if (/*> 4650*/ postcode < 4660){
                        return 'qld.fraser-coast';
                      } else /* >= 4660 < 4677 */ {
                        return 'qld.bundaberg';
                      }
                    }
                  } else /* >= 4677 < 4709 */ {
                    if (/*> 4677*/ postcode < 4703){
                      if (/*> 4677*/ postcode < 4697){
                        return 'qld.gladstone';
                      } else /* >= 4697 < 4703 */ {
                        return 'qld.rockhampton';
                      }
                    } else /* >= 4703 < 4709 */ {
                      if (/*> 4703*/ postcode < 4704){
                        return 'qld.livingstone';
                      } else /* >= 4704 < 4709 */ {
                        if (/*> 4704*/ postcode < 4705){
                          return 'qld.rockhampton';
                        } else /* >= 4705 < 4709 */ {
                          return 'qld.livingstone';
                        }
                      }
                    }
                  }
                } else /* >= 4709 < 4724 */ {
                  if (/*> 4709*/ postcode < 4718){
                    if (/*> 4709*/ postcode < 4712){
                      if (/*> 4709*/ postcode < 4710){
                        return 'qld.isaac';
                      } else /* >= 4710 < 4712 */ {
                        return 'qld.rockhampton';
                      }
                    } else /* >= 4712 < 4718 */ {
                      if (/*> 4712*/ postcode < 4715){
                        return 'qld.woorabinda';
                      } else /* >= 4715 < 4718 */ {
                        if (/*> 4715*/ postcode < 4717){
                          return 'qld.banana';
                        } else /* >= 4717 < 4718 */ {
                          return 'qld.central-highlands';
                        }
                      }
                    }
                  } else /* >= 4718 < 4724 */ {
                    if (/*> 4718*/ postcode < 4721){
                      if (/*> 4718*/ postcode < 4720){
                        return 'qld.banana';
                      } else /* >= 4720 < 4721 */ {
                        return 'qld.central-highlands';
                      }
                    } else /* >= 4721 < 4724 */ {
                      if (/*> 4721*/ postcode < 4722){
                        return 'qld.barcaldine';
                      } else /* >= 4722 < 4724 */ {
                        if (/*> 4722*/ postcode < 4723){
                          return 'qld.central-highlands';
                        } else /* >= 4723 < 4724 */ {
                          return 'qld.isaac';
                        }
                      }
                    }
                  }
                }
              } else /* >= 4724 < 4825 */ {
                if (/*> 4724*/ postcode < 4744){
                  if (/*> 4724*/ postcode < 4728){
                    if (/*> 4724*/ postcode < 4726){
                      if (/*> 4724*/ postcode < 4725){
                        return 'qld.barcaldine';
                      } else /* >= 4725 < 4726 */ {
                        return 'qld.longreach';
                      }
                    } else /* >= 4726 < 4728 */ {
                      if (/*> 4726*/ postcode < 4727){
                        return 'qld.barcaldine';
                      } else /* >= 4727 < 4728 */ {
                        return 'qld.longreach';
                      }
                    }
                  } else /* >= 4728 < 4744 */ {
                    if (/*> 4728*/ postcode < 4733){
                      if (/*> 4728*/ postcode < 4730){
                        return 'qld.barcaldine';
                      } else /* >= 4730 < 4733 */ {
                        return 'qld.longreach';
                      }
                    } else /* >= 4733 < 4744 */ {
                      if (/*> 4733*/ postcode < 4737){
                        return 'qld.flinders';
                      } else /* >= 4737 < 4744 */ {
                        if (/*> 4737*/ postcode < 4743){
                          return 'qld.mackay';
                        } else /* >= 4743 < 4744 */ {
                          return 'qld.whitsunday';
                        }
                      }
                    }
                  }
                } else /* >= 4744 < 4825 */ {
                  if (/*> 4744*/ postcode < 4806){
                    if (/*> 4744*/ postcode < 4800){
                      if (/*> 4744*/ postcode < 4750){
                        return 'qld.isaac';
                      } else /* >= 4750 < 4800 */ {
                        return 'qld.mackay';
                      }
                    } else /* >= 4800 < 4806 */ {
                      if (/*> 4800*/ postcode < 4801){
                        return 'qld.whitsunday';
                      } else /* >= 4801 < 4806 */ {
                        if (/*> 4801*/ postcode < 4804){
                          return 'qld.mackay';
                        } else /* >= 4804 < 4806 */ {
                          return 'qld.whitsunday';
                        }
                      }
                    }
                  } else /* >= 4806 < 4825 */ {
                    if (/*> 4806*/ postcode < 4816){
                      if (/*> 4806*/ postcode < 4810){
                        return 'qld.burdekin';
                      } else /* >= 4810 < 4816 */ {
                        return 'qld.townsville';
                      }
                    } else /* >= 4816 < 4825 */ {
                      if (/*> 4816*/ postcode < 4817){
                        return 'qld.hinchinbrook';
                      } else /* >= 4817 < 4825 */ {
                        if (/*> 4817*/ postcode < 4820){
                          return 'qld.townsville';
                        } else /* >= 4820 < 4825 */ {
                          return 'qld.charters-towers';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 4825 < 5064 */ {
              if (/*> 4825*/ postcode < 5008){
                if (/*> 4825*/ postcode < 4874){
                  if (/*> 4825*/ postcode < 4869){
                    if (/*> 4825*/ postcode < 4860){
                      if (/*> 4825*/ postcode < 4849){
                        return 'qld.mount-isa';
                      } else /* >= 4849 < 4860 */ {
                        return 'qld.cassowary-coast';
                      }
                    } else /* >= 4860 < 4869 */ {
                      if (/*> 4860*/ postcode < 4865){
                        return 'qld.cairns';
                      } else /* >= 4865 < 4869 */ {
                        return 'qld.yarrabah';
                      }
                    }
                  } else /* >= 4869 < 4874 */ {
                    if (/*> 4869*/ postcode < 4871){
                      if (/*> 4869*/ postcode < 4870){
                        return 'qld.cairns';
                      } else /* >= 4870 < 4871 */ {
                        return 'qld.yarrabah';
                      }
                    } else /* >= 4871 < 4874 */ {
                      if (/*> 4871*/ postcode < 4871){
                        return 'qld.douglas';
                      } else /* >= 4871 < 4874 */ {
                        if (/*> 4871*/ postcode < 4873){
                          return 'qld.tablelands';
                        } else /* >= 4873 < 4874 */ {
                          return 'qld.douglas';
                        }
                      }
                    }
                  }
                } else /* >= 4874 < 5008 */ {
                  if (/*> 4874*/ postcode < 4887){
                    if (/*> 4874*/ postcode < 4880){
                      if (/*> 4874*/ postcode < 4878){
                        return 'qld.northern-peninsula-area';
                      } else /* >= 4878 < 4880 */ {
                        return 'qld.yarrabah';
                      }
                    } else /* >= 4880 < 4887 */ {
                      if (/*> 4880*/ postcode < 4881){
                        return 'qld.cairns';
                      } else /* >= 4881 < 4887 */ {
                        if (/*> 4881*/ postcode < 4882){
                          return 'qld.tablelands';
                        } else /* >= 4882 < 4887 */ {
                          return 'qld.cairns';
                        }
                      }
                    }
                  } else /* >= 4887 < 5008 */ {
                    if (/*> 4887*/ postcode < 5001){
                      if (/*> 4887*/ postcode < 5000){
                        return 'qld.tablelands';
                      } else /* >= 5000 < 5001 */ {
                        return 'sa.adelaide';
                      }
                    } else /* >= 5001 < 5008 */ {
                      if (/*> 5001*/ postcode < 5005){
                        return 'sa.murray-bridge';
                      } else /* >= 5005 < 5008 */ {
                        if (/*> 5005*/ postcode < 5007){
                          return 'sa.adelaide';
                        } else /* >= 5007 < 5008 */ {
                          return 'sa.prospect';
                        }
                      }
                    }
                  }
                }
              } else /* >= 5008 < 5064 */ {
                if (/*> 5008*/ postcode < 5037){
                  if (/*> 5008*/ postcode < 5014){
                    if (/*> 5008*/ postcode < 5011){
                      if (/*> 5008*/ postcode < 5010){
                        return 'sa.charles-sturt';
                      } else /* >= 5010 < 5011 */ {
                        return 'sa.port-adelaide-enfield';
                      }
                    } else /* >= 5011 < 5014 */ {
                      if (/*> 5011*/ postcode < 5012){
                        return 'sa.charles-sturt';
                      } else /* >= 5012 < 5014 */ {
                        return 'sa.port-adelaide-enfield';
                      }
                    }
                  } else /* >= 5014 < 5037 */ {
                    if (/*> 5014*/ postcode < 5019){
                      if (/*> 5014*/ postcode < 5015){
                        return 'sa.charles-sturt';
                      } else /* >= 5015 < 5019 */ {
                        return 'sa.port-adelaide-enfield';
                      }
                    } else /* >= 5019 < 5037 */ {
                      if (/*> 5019*/ postcode < 5024){
                        return 'sa.charles-sturt';
                      } else /* >= 5024 < 5037 */ {
                        if (/*> 5024*/ postcode < 5034){
                          return 'sa.west-torrens';
                        } else /* >= 5034 < 5037 */ {
                          return 'sa.unley';
                        }
                      }
                    }
                  }
                } else /* >= 5037 < 5064 */ {
                  if (/*> 5037*/ postcode < 5043){
                    if (/*> 5037*/ postcode < 5040){
                      if (/*> 5037*/ postcode < 5039){
                        return 'sa.west-torrens';
                      } else /* >= 5039 < 5040 */ {
                        return 'sa.unley';
                      }
                    } else /* >= 5040 < 5043 */ {
                      if (/*> 5040*/ postcode < 5041){
                        return 'sa.west-torrens';
                      } else /* >= 5041 < 5043 */ {
                        if (/*> 5041*/ postcode < 5042){
                          return 'sa.mitcham';
                        } else /* >= 5042 < 5043 */ {
                          return 'sa.marion';
                        }
                      }
                    }
                  } else /* >= 5043 < 5064 */ {
                    if (/*> 5043*/ postcode < 5050){
                      if (/*> 5043*/ postcode < 5047){
                        return 'sa.holdfast-bay';
                      } else /* >= 5047 < 5050 */ {
                        return 'sa.marion';
                      }
                    } else /* >= 5050 < 5064 */ {
                      if (/*> 5050*/ postcode < 5061){
                        return 'sa.mitcham';
                      } else /* >= 5061 < 5064 */ {
                        if (/*> 5061*/ postcode < 5062){
                          return 'sa.unley';
                        } else /* >= 5062 < 5064 */ {
                          return 'sa.mitcham';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else /* >= 5064 < 5418 */ {
            if (/*> 5064*/ postcode < 5236){
              if (/*> 5064*/ postcode < 5125){
                if (/*> 5064*/ postcode < 5089){
                  if (/*> 5064*/ postcode < 5072){
                    if (/*> 5064*/ postcode < 5068){
                      if (/*> 5064*/ postcode < 5067){
                        return 'sa.burnside';
                      } else /* >= 5067 < 5068 */ {
                        return 'sa.norwood-payneham-and-st-peters';
                      }
                    } else /* >= 5068 < 5072 */ {
                      if (/*> 5068*/ postcode < 5069){
                        return 'sa.burnside';
                      } else /* >= 5069 < 5072 */ {
                        return 'sa.norwood-payneham-and-st-peters';
                      }
                    }
                  } else /* >= 5072 < 5089 */ {
                    if (/*> 5072*/ postcode < 5082){
                      if (/*> 5072*/ postcode < 5081){
                        return 'sa.campbelltown';
                      } else /* >= 5081 < 5082 */ {
                        return 'sa.walkerville';
                      }
                    } else /* >= 5082 < 5089 */ {
                      if (/*> 5082*/ postcode < 5085){
                        return 'sa.prospect';
                      } else /* >= 5085 < 5089 */ {
                        if (/*> 5085*/ postcode < 5086){
                          return 'sa.walkerville';
                        } else /* >= 5086 < 5089 */ {
                          return 'sa.campbelltown';
                        }
                      }
                    }
                  }
                } else /* >= 5089 < 5125 */ {
                  if (/*> 5089*/ postcode < 5111){
                    if (/*> 5089*/ postcode < 5094){
                      if (/*> 5089*/ postcode < 5093){
                        return 'sa.tea-tree-gully';
                      } else /* >= 5093 < 5094 */ {
                        return 'sa.campbelltown';
                      }
                    } else /* >= 5094 < 5111 */ {
                      if (/*> 5094*/ postcode < 5097){
                        return 'sa.salisbury';
                      } else /* >= 5097 < 5111 */ {
                        if (/*> 5097*/ postcode < 5098){
                          return 'sa.tea-tree-gully';
                        } else /* >= 5098 < 5111 */ {
                          return 'sa.salisbury';
                        }
                      }
                    }
                  } else /* >= 5111 < 5125 */ {
                    if (/*> 5111*/ postcode < 5117){
                      if (/*> 5111*/ postcode < 5116){
                        return 'sa.playford';
                      } else /* >= 5116 < 5117 */ {
                        return 'sa.gawler';
                      }
                    } else /* >= 5117 < 5125 */ {
                      if (/*> 5117*/ postcode < 5118){
                        return 'sa.playford';
                      } else /* >= 5118 < 5125 */ {
                        if (/*> 5118*/ postcode < 5120){
                          return 'sa.gawler';
                        } else /* >= 5120 < 5125 */ {
                          return 'sa.playford';
                        }
                      }
                    }
                  }
                }
              } else /* >= 5125 < 5236 */ {
                if (/*> 5125*/ postcode < 5157){
                  if (/*> 5125*/ postcode < 5140){
                    if (/*> 5125*/ postcode < 5137){
                      if (/*> 5125*/ postcode < 5134){
                        return 'sa.tea-tree-gully';
                      } else /* >= 5134 < 5137 */ {
                        return 'sa.adelaide-hills';
                      }
                    } else /* >= 5137 < 5140 */ {
                      if (/*> 5137*/ postcode < 5138){
                        return 'sa.burnside';
                      } else /* >= 5138 < 5140 */ {
                        return 'sa.adelaide-hills';
                      }
                    }
                  } else /* >= 5140 < 5157 */ {
                    if (/*> 5140*/ postcode < 5150){
                      if (/*> 5140*/ postcode < 5144){
                        return 'sa.burnside';
                      } else /* >= 5144 < 5150 */ {
                        return 'sa.adelaide-hills';
                      }
                    } else /* >= 5150 < 5157 */ {
                      if (/*> 5150*/ postcode < 5153){
                        return 'sa.mitcham';
                      } else /* >= 5153 < 5157 */ {
                        if (/*> 5153*/ postcode < 5154){
                          return 'sa.mount-barker';
                        } else /* >= 5154 < 5157 */ {
                          return 'sa.mitcham';
                        }
                      }
                    }
                  }
                } else /* >= 5157 < 5236 */ {
                  if (/*> 5157*/ postcode < 5210){
                    if (/*> 5157*/ postcode < 5162){
                      if (/*> 5157*/ postcode < 5158){
                        return 'sa.onkaparinga';
                      } else /* >= 5158 < 5162 */ {
                        return 'sa.marion';
                      }
                    } else /* >= 5162 < 5210 */ {
                      if (/*> 5162*/ postcode < 5202){
                        return 'sa.onkaparinga';
                      } else /* >= 5202 < 5210 */ {
                        if (/*> 5202*/ postcode < 5203){
                          return 'sa.victor-harbor';
                        } else /* >= 5203 < 5210 */ {
                          return 'sa.yankalilla';
                        }
                      }
                    }
                  } else /* >= 5210 < 5236 */ {
                    if (/*> 5210*/ postcode < 5220){
                      if (/*> 5210*/ postcode < 5214){
                        return 'sa.victor-harbor';
                      } else /* >= 5214 < 5220 */ {
                        return 'sa.alexandrina';
                      }
                    } else /* >= 5220 < 5236 */ {
                      if (/*> 5220*/ postcode < 5231){
                        return 'sa.kangaroo-island';
                      } else /* >= 5231 < 5236 */ {
                        if (/*> 5231*/ postcode < 5235){
                          return 'sa.adelaide-hills';
                        } else /* >= 5235 < 5236 */ {
                          return 'sa.barossa';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 5236 < 5418 */ {
              if (/*> 5236*/ postcode < 5302){
                if (/*> 5236*/ postcode < 5259){
                  if (/*> 5236*/ postcode < 5242){
                    if (/*> 5236*/ postcode < 5238){
                      if (/*> 5236*/ postcode < 5237){
                        return 'sa.adelaide-hills';
                      } else /* >= 5237 < 5238 */ {
                        return 'sa.barossa';
                      }
                    } else /* >= 5238 < 5242 */ {
                      if (/*> 5238*/ postcode < 5240){
                        return 'sa.karoonda-east-murray';
                      } else /* >= 5240 < 5242 */ {
                        return 'sa.adelaide-hills';
                      }
                    }
                  } else /* >= 5242 < 5259 */ {
                    if (/*> 5242*/ postcode < 5245){
                      if (/*> 5242*/ postcode < 5243){
                        return 'sa.mount-barker';
                      } else /* >= 5243 < 5245 */ {
                        return 'sa.adelaide-hills';
                      }
                    } else /* >= 5245 < 5259 */ {
                      if (/*> 5245*/ postcode < 5253){
                        return 'sa.mount-barker';
                      } else /* >= 5253 < 5259 */ {
                        if (/*> 5253*/ postcode < 5255){
                          return 'sa.murray-bridge';
                        } else /* >= 5255 < 5259 */ {
                          return 'sa.alexandrina';
                        }
                      }
                    }
                  }
                } else /* >= 5259 < 5302 */ {
                  if (/*> 5259*/ postcode < 5264){
                    if (/*> 5259*/ postcode < 5261){
                      if (/*> 5259*/ postcode < 5260){
                        return 'sa.coorong';
                      } else /* >= 5260 < 5261 */ {
                        return 'sa.murray-bridge';
                      }
                    } else /* >= 5261 < 5264 */ {
                      if (/*> 5261*/ postcode < 5262){
                        return 'sa.coorong';
                      } else /* >= 5262 < 5264 */ {
                        if (/*> 5262*/ postcode < 5263){
                          return 'sa.naracoorte-lucindale';
                        } else /* >= 5263 < 5264 */ {
                          return 'sa.wattle-range';
                        }
                      }
                    }
                  } else /* >= 5264 < 5302 */ {
                    if (/*> 5264*/ postcode < 5271){
                      if (/*> 5264*/ postcode < 5267){
                        return 'sa.coorong';
                      } else /* >= 5267 < 5271 */ {
                        return 'sa.tatiara';
                      }
                    } else /* >= 5271 < 5302 */ {
                      if (/*> 5271*/ postcode < 5277){
                        return 'sa.naracoorte-lucindale';
                      } else /* >= 5277 < 5302 */ {
                        if (/*> 5277*/ postcode < 5280){
                          return 'sa.wattle-range';
                        } else /* >= 5280 < 5302 */ {
                          return 'sa.grant';
                        }
                      }
                    }
                  }
                }
              } else /* >= 5302 < 5418 */ {
                if (/*> 5302*/ postcode < 5350){
                  if (/*> 5302*/ postcode < 5320){
                    if (/*> 5302*/ postcode < 5308){
                      if (/*> 5302*/ postcode < 5306){
                        return 'sa.southern-mallee';
                      } else /* >= 5306 < 5308 */ {
                        return 'sa.karoonda-east-murray';
                      }
                    } else /* >= 5308 < 5320 */ {
                      if (/*> 5308*/ postcode < 5311){
                        return 'sa.loxton-waikerie';
                      } else /* >= 5311 < 5320 */ {
                        return 'sa.renmark-paringa';
                      }
                    }
                  } else /* >= 5320 < 5350 */ {
                    if (/*> 5320*/ postcode < 5322){
                      if (/*> 5320*/ postcode < 5321){
                        return 'sa.berri-barmera';
                      } else /* >= 5321 < 5322 */ {
                        return 'sa.mid-murray';
                      }
                    } else /* >= 5322 < 5350 */ {
                      if (/*> 5322*/ postcode < 5340){
                        return 'sa.berri-barmera';
                      } else /* >= 5340 < 5350 */ {
                        if (/*> 5340*/ postcode < 5342){
                          return 'sa.renmark-paringa';
                        } else /* >= 5342 < 5350 */ {
                          return 'sa.berri-barmera';
                        }
                      }
                    }
                  }
                } else /* >= 5350 < 5418 */ {
                  if (/*> 5350*/ postcode < 5360){
                    if (/*> 5350*/ postcode < 5353){
                      if (/*> 5350*/ postcode < 5351){
                        return 'sa.gawler';
                      } else /* >= 5351 < 5353 */ {
                        return 'sa.barossa';
                      }
                    } else /* >= 5353 < 5360 */ {
                      if (/*> 5353*/ postcode < 5355){
                        return 'sa.mid-murray';
                      } else /* >= 5355 < 5360 */ {
                        if (/*> 5355*/ postcode < 5356){
                          return 'sa.light';
                        } else /* >= 5356 < 5360 */ {
                          return 'sa.mid-murray';
                        }
                      }
                    }
                  } else /* >= 5360 < 5418 */ {
                    if (/*> 5360*/ postcode < 5400){
                      if (/*> 5360*/ postcode < 5381){
                        return 'sa.light';
                      } else /* >= 5381 < 5400 */ {
                        return 'sa.clare-and-gilbert-valleys';
                      }
                    } else /* >= 5400 < 5418 */ {
                      if (/*> 5400*/ postcode < 5412){
                        return 'sa.light';
                      } else /* >= 5412 < 5418 */ {
                        if (/*> 5412*/ postcode < 5417){
                          return 'sa.clare-and-gilbert-valleys';
                        } else /* >= 5417 < 5418 */ {
                          return 'sa.peterborough';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else /* >= 5418 < 9013 */ {
        if (/*> 5418*/ postcode < 6385){
          if (/*> 5418*/ postcode < 6057){
            if (/*> 5418*/ postcode < 5700){
              if (/*> 5418*/ postcode < 5552){
                if (/*> 5418*/ postcode < 5460){
                  if (/*> 5418*/ postcode < 5432){
                    if (/*> 5418*/ postcode < 5421){
                      if (/*> 5418*/ postcode < 5420){
                        return 'sa.goyder';
                      } else /* >= 5420 < 5421 */ {
                        return 'sa.northern-areas';
                      }
                    } else /* >= 5421 < 5432 */ {
                      if (/*> 5421*/ postcode < 5431){
                        return 'sa.peterborough';
                      } else /* >= 5431 < 5432 */ {
                        return 'sa.orroroo-carrieton';
                      }
                    }
                  } else /* >= 5432 < 5460 */ {
                    if (/*> 5432*/ postcode < 5434){
                      if (/*> 5432*/ postcode < 5433){
                        return 'sa.flinders-ranges';
                      } else /* >= 5433 < 5434 */ {
                        return 'sa.port-augusta';
                      }
                    } else /* >= 5434 < 5460 */ {
                      if (/*> 5434*/ postcode < 5451){
                        return 'sa.flinders-ranges';
                      } else /* >= 5451 < 5460 */ {
                        if (/*> 5451*/ postcode < 5454){
                          return 'sa.clare-and-gilbert-valleys';
                        } else /* >= 5454 < 5460 */ {
                          return 'sa.northern-areas';
                        }
                      }
                    }
                  }
                } else /* >= 5460 < 5552 */ {
                  if (/*> 5460*/ postcode < 5495){
                    if (/*> 5460*/ postcode < 5470){
                      if (/*> 5460*/ postcode < 5461){
                        return 'sa.adelaide-plains';
                      } else /* >= 5461 < 5470 */ {
                        return 'sa.wakefield';
                      }
                    } else /* >= 5470 < 5495 */ {
                      if (/*> 5470*/ postcode < 5481){
                        return 'sa.northern-areas';
                      } else /* >= 5481 < 5495 */ {
                        if (/*> 5481*/ postcode < 5490){
                          return 'sa.mount-remarkable';
                        } else /* >= 5490 < 5495 */ {
                          return 'sa.northern-areas';
                        }
                      }
                    }
                  } else /* >= 5495 < 5552 */ {
                    if (/*> 5495*/ postcode < 5520){
                      if (/*> 5495*/ postcode < 5510){
                        return 'sa.port-pirie';
                      } else /* >= 5510 < 5520 */ {
                        return 'sa.wakefield';
                      }
                    } else /* >= 5520 < 5552 */ {
                      if (/*> 5520*/ postcode < 5521){
                        return 'sa.barunga-west';
                      } else /* >= 5521 < 5552 */ {
                        if (/*> 5521*/ postcode < 5550){
                          return 'sa.port-pirie';
                        } else /* >= 5550 < 5552 */ {
                          return 'sa.wakefield';
                        }
                      }
                    }
                  }
                }
              } else /* >= 5552 < 5700 */ {
                if (/*> 5552*/ postcode < 5607){
                  if (/*> 5552*/ postcode < 5600){
                    if (/*> 5552*/ postcode < 5556){
                      if (/*> 5552*/ postcode < 5555){
                        return 'sa.copper-coast';
                      } else /* >= 5555 < 5556 */ {
                        return 'sa.barunga-west';
                      }
                    } else /* >= 5556 < 5600 */ {
                      if (/*> 5556*/ postcode < 5571){
                        return 'sa.copper-coast';
                      } else /* >= 5571 < 5600 */ {
                        return 'sa.yorke-peninsula';
                      }
                    }
                  } else /* >= 5600 < 5607 */ {
                    if (/*> 5600*/ postcode < 5602){
                      if (/*> 5600*/ postcode < 5601){
                        return 'sa.whyalla';
                      } else /* >= 5601 < 5602 */ {
                        return 'sa.port-augusta';
                      }
                    } else /* >= 5602 < 5607 */ {
                      if (/*> 5602*/ postcode < 5603){
                        return 'sa.franklin-harbour';
                      } else /* >= 5603 < 5607 */ {
                        if (/*> 5603*/ postcode < 5604){
                          return 'sa.cleve';
                        } else /* >= 5604 < 5607 */ {
                          return 'sa.tumby-bay';
                        }
                      }
                    }
                  }
                } else /* >= 5607 < 5700 */ {
                  if (/*> 5607*/ postcode < 5640){
                    if (/*> 5607*/ postcode < 5611){
                      if (/*> 5607*/ postcode < 5608){
                        return 'sa.lower-eyre-peninsula';
                      } else /* >= 5608 < 5611 */ {
                        return 'sa.whyalla';
                      }
                    } else /* >= 5611 < 5640 */ {
                      if (/*> 5611*/ postcode < 5630){
                        return 'sa.kimba';
                      } else /* >= 5630 < 5640 */ {
                        if (/*> 5630*/ postcode < 5633){
                          return 'sa.lower-eyre-peninsula';
                        } else /* >= 5633 < 5640 */ {
                          return 'sa.elliston';
                        }
                      }
                    }
                  } else /* >= 5640 < 5700 */ {
                    if (/*> 5640*/ postcode < 5651){
                      if (/*> 5640*/ postcode < 5641){
                        return 'sa.cleve';
                      } else /* >= 5641 < 5651 */ {
                        return 'sa.kimba';
                      }
                    } else /* >= 5651 < 5700 */ {
                      if (/*> 5651*/ postcode < 5655){
                        return 'sa.wudinna';
                      } else /* >= 5655 < 5700 */ {
                        if (/*> 5655*/ postcode < 5690){
                          return 'sa.streaky-bay';
                        } else /* >= 5690 < 5700 */ {
                          return 'sa.ceduna';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 5700 < 6057 */ {
              if (/*> 5700*/ postcode < 6010){
                if (/*> 5700*/ postcode < 5800){
                  if (/*> 5700*/ postcode < 5722){
                    if (/*> 5700*/ postcode < 5713){
                      if (/*> 5700*/ postcode < 5710){
                        return 'sa.port-augusta';
                      } else /* >= 5710 < 5713 */ {
                        return 'sa.coober-pedy';
                      }
                    } else /* >= 5713 < 5722 */ {
                      if (/*> 5713*/ postcode < 5720){
                        return 'sa.roxby-downs';
                      } else /* >= 5720 < 5722 */ {
                        return 'sa.unincorporated-sa';
                      }
                    }
                  } else /* >= 5722 < 5800 */ {
                    if (/*> 5722*/ postcode < 5724){
                      if (/*> 5722*/ postcode < 5723){
                        return 'sa.roxby-downs';
                      } else /* >= 5723 < 5724 */ {
                        return 'sa.unincorporated-sa';
                      }
                    } else /* >= 5724 < 5800 */ {
                      if (/*> 5724*/ postcode < 5725){
                        return 'sa.coober-pedy';
                      } else /* >= 5725 < 5800 */ {
                        if (/*> 5725*/ postcode < 5731){
                          return 'sa.roxby-downs';
                        } else /* >= 5731 < 5800 */ {
                          return 'sa.unincorporated-sa';
                        }
                      }
                    }
                  }
                } else /* >= 5800 < 6010 */ {
                  if (/*> 5800*/ postcode < 6003){
                    if (/*> 5800*/ postcode < 5810){
                      if (/*> 5800*/ postcode < 5801){
                        return 'sa.murray-bridge';
                      } else /* >= 5801 < 5810 */ {
                        return 'sa.west-torrens';
                      }
                    } else /* >= 5810 < 6003 */ {
                      if (/*> 5810*/ postcode < 6000){
                        return 'sa.murray-bridge';
                      } else /* >= 6000 < 6003 */ {
                        if (/*> 6000*/ postcode < 6001){
                          return 'wa.perth';
                        } else /* >= 6001 < 6003 */ {
                          return 'wa.cottesloe';
                        }
                      }
                    }
                  } else /* >= 6003 < 6010 */ {
                    if (/*> 6003*/ postcode < 6006){
                      if (/*> 6003*/ postcode < 6004){
                        return 'wa.vincent';
                      } else /* >= 6004 < 6006 */ {
                        return 'wa.perth';
                      }
                    } else /* >= 6006 < 6010 */ {
                      if (/*> 6006*/ postcode < 6008){
                        return 'wa.vincent';
                      } else /* >= 6008 < 6010 */ {
                        if (/*> 6008*/ postcode < 6009){
                          return 'wa.subiaco';
                        } else /* >= 6009 < 6010 */ {
                          return 'wa.nedlands';
                        }
                      }
                    }
                  }
                }
              } else /* >= 6010 < 6057 */ {
                if (/*> 6010*/ postcode < 6025){
                  if (/*> 6010*/ postcode < 6015){
                    if (/*> 6010*/ postcode < 6012){
                      if (/*> 6010*/ postcode < 6011){
                        return 'wa.claremont';
                      } else /* >= 6011 < 6012 */ {
                        return 'wa.cottesloe';
                      }
                    } else /* >= 6012 < 6015 */ {
                      if (/*> 6012*/ postcode < 6014){
                        return 'wa.mosman-park';
                      } else /* >= 6014 < 6015 */ {
                        return 'wa.subiaco';
                      }
                    }
                  } else /* >= 6015 < 6025 */ {
                    if (/*> 6015*/ postcode < 6017){
                      if (/*> 6015*/ postcode < 6016){
                        return 'wa.cambridge';
                      } else /* >= 6016 < 6017 */ {
                        return 'wa.vincent';
                      }
                    } else /* >= 6017 < 6025 */ {
                      if (/*> 6017*/ postcode < 6023){
                        return 'wa.stirling';
                      } else /* >= 6023 < 6025 */ {
                        if (/*> 6023*/ postcode < 6024){
                          return 'wa.joondalup';
                        } else /* >= 6024 < 6025 */ {
                          return 'wa.stirling';
                        }
                      }
                    }
                  }
                } else /* >= 6025 < 6057 */ {
                  if (/*> 6025*/ postcode < 6050){
                    if (/*> 6025*/ postcode < 6030){
                      if (/*> 6025*/ postcode < 6029){
                        return 'wa.joondalup';
                      } else /* >= 6029 < 6030 */ {
                        return 'wa.stirling';
                      }
                    } else /* >= 6030 < 6050 */ {
                      if (/*> 6030*/ postcode < 6038){
                        return 'wa.wanneroo';
                      } else /* >= 6038 < 6050 */ {
                        if (/*> 6038*/ postcode < 6041){
                          return 'wa.rockingham';
                        } else /* >= 6041 < 6050 */ {
                          return 'wa.gingin';
                        }
                      }
                    }
                  } else /* >= 6050 < 6057 */ {
                    if (/*> 6050*/ postcode < 6054){
                      if (/*> 6050*/ postcode < 6051){
                        return 'wa.vincent';
                      } else /* >= 6051 < 6054 */ {
                        return 'wa.bayswater';
                      }
                    } else /* >= 6054 < 6057 */ {
                      if (/*> 6054*/ postcode < 6055){
                        return 'wa.bassendean';
                      } else /* >= 6055 < 6057 */ {
                        if (/*> 6055*/ postcode < 6056){
                          return 'wa.belmont';
                        } else /* >= 6056 < 6057 */ {
                          return 'wa.bassendean';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else /* >= 6057 < 6385 */ {
            if (/*> 6057*/ postcode < 6168){
              if (/*> 6057*/ postcode < 6112){
                if (/*> 6057*/ postcode < 6072){
                  if (/*> 6057*/ postcode < 6064){
                    if (/*> 6057*/ postcode < 6062){
                      if (/*> 6057*/ postcode < 6059){
                        return 'wa.belmont';
                      } else /* >= 6059 < 6062 */ {
                        return 'wa.stirling';
                      }
                    } else /* >= 6062 < 6064 */ {
                      if (/*> 6062*/ postcode < 6063){
                        return 'wa.bayswater';
                      } else /* >= 6063 < 6064 */ {
                        return 'wa.bassendean';
                      }
                    }
                  } else /* >= 6064 < 6072 */ {
                    if (/*> 6064*/ postcode < 6066){
                      if (/*> 6064*/ postcode < 6065){
                        return 'wa.stirling';
                      } else /* >= 6065 < 6066 */ {
                        return 'wa.wanneroo';
                      }
                    } else /* >= 6066 < 6072 */ {
                      if (/*> 6066*/ postcode < 6068){
                        return 'wa.bayswater';
                      } else /* >= 6068 < 6072 */ {
                        if (/*> 6068*/ postcode < 6069){
                          return 'wa.bassendean';
                        } else /* >= 6069 < 6072 */ {
                          return 'wa.swan';
                        }
                      }
                    }
                  }
                } else /* >= 6072 < 6112 */ {
                  if (/*> 6072*/ postcode < 6100){
                    if (/*> 6072*/ postcode < 6077){
                      if (/*> 6072*/ postcode < 6076){
                        return 'wa.mundaring';
                      } else /* >= 6076 < 6077 */ {
                        return 'wa.armadale';
                      }
                    } else /* >= 6077 < 6100 */ {
                      if (/*> 6077*/ postcode < 6081){
                        return 'wa.wanneroo';
                      } else /* >= 6081 < 6100 */ {
                        if (/*> 6081*/ postcode < 6090){
                          return 'wa.mundaring';
                        } else /* >= 6090 < 6100 */ {
                          return 'wa.bayswater';
                        }
                      }
                    }
                  } else /* >= 6100 < 6112 */ {
                    if (/*> 6100*/ postcode < 6107){
                      if (/*> 6100*/ postcode < 6104){
                        return 'wa.victoria-park';
                      } else /* >= 6104 < 6107 */ {
                        return 'wa.belmont';
                      }
                    } else /* >= 6107 < 6112 */ {
                      if (/*> 6107*/ postcode < 6108){
                        return 'wa.canning';
                      } else /* >= 6108 < 6112 */ {
                        if (/*> 6108*/ postcode < 6111){
                          return 'wa.gosnells';
                        } else /* >= 6111 < 6112 */ {
                          return 'wa.armadale';
                        }
                      }
                    }
                  }
                }
              } else /* >= 6112 < 6168 */ {
                if (/*> 6112*/ postcode < 6155){
                  if (/*> 6112*/ postcode < 6125){
                    if (/*> 6112*/ postcode < 6122){
                      if (/*> 6112*/ postcode < 6121){
                        return 'wa.gosnells';
                      } else /* >= 6121 < 6122 */ {
                        return 'wa.kwinana';
                      }
                    } else /* >= 6122 < 6125 */ {
                      if (/*> 6122*/ postcode < 6123){
                        return 'wa.armadale';
                      } else /* >= 6123 < 6125 */ {
                        return 'wa.serpentine-jarrahdale';
                      }
                    }
                  } else /* >= 6125 < 6155 */ {
                    if (/*> 6125*/ postcode < 6149){
                      if (/*> 6125*/ postcode < 6147){
                        return 'wa.rockingham';
                      } else /* >= 6147 < 6149 */ {
                        return 'wa.canning';
                      }
                    } else /* >= 6149 < 6155 */ {
                      if (/*> 6149*/ postcode < 6151){
                        return 'wa.melville';
                      } else /* >= 6151 < 6155 */ {
                        if (/*> 6151*/ postcode < 6153){
                          return 'wa.south-perth';
                        } else /* >= 6153 < 6155 */ {
                          return 'wa.melville';
                        }
                      }
                    }
                  }
                } else /* >= 6155 < 6168 */ {
                  if (/*> 6155*/ postcode < 6162){
                    if (/*> 6155*/ postcode < 6157){
                      if (/*> 6155*/ postcode < 6156){
                        return 'wa.canning';
                      } else /* >= 6156 < 6157 */ {
                        return 'wa.melville';
                      }
                    } else /* >= 6157 < 6162 */ {
                      if (/*> 6157*/ postcode < 6160){
                        return 'wa.east-fremantle';
                      } else /* >= 6160 < 6162 */ {
                        if (/*> 6160*/ postcode < 6161){
                          return 'wa.fremantle';
                        } else /* >= 6161 < 6162 */ {
                          return 'wa.cottesloe';
                        }
                      }
                    }
                  } else /* >= 6162 < 6168 */ {
                    if (/*> 6162*/ postcode < 6165){
                      if (/*> 6162*/ postcode < 6163){
                        return 'wa.fremantle';
                      } else /* >= 6163 < 6165 */ {
                        return 'wa.cockburn';
                      }
                    } else /* >= 6165 < 6168 */ {
                      if (/*> 6165*/ postcode < 6166){
                        return 'wa.kwinana';
                      } else /* >= 6166 < 6168 */ {
                        if (/*> 6166*/ postcode < 6167){
                          return 'wa.cockburn';
                        } else /* >= 6167 < 6168 */ {
                          return 'wa.kwinana';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 6168 < 6385 */ {
              if (/*> 6168*/ postcode < 6271){
                if (/*> 6168*/ postcode < 6226){
                  if (/*> 6168*/ postcode < 6182){
                    if (/*> 6168*/ postcode < 6171){
                      if (/*> 6168*/ postcode < 6170){
                        return 'wa.rockingham';
                      } else /* >= 6170 < 6171 */ {
                        return 'wa.kwinana';
                      }
                    } else /* >= 6171 < 6182 */ {
                      if (/*> 6171*/ postcode < 6180){
                        return 'wa.rockingham';
                      } else /* >= 6180 < 6182 */ {
                        return 'wa.mandurah';
                      }
                    }
                  } else /* >= 6182 < 6226 */ {
                    if (/*> 6182*/ postcode < 6209){
                      if (/*> 6182*/ postcode < 6207){
                        return 'wa.rockingham';
                      } else /* >= 6207 < 6209 */ {
                        return 'wa.murray';
                      }
                    } else /* >= 6209 < 6226 */ {
                      if (/*> 6209*/ postcode < 6214){
                        return 'wa.mandurah';
                      } else /* >= 6214 < 6226 */ {
                        if (/*> 6214*/ postcode < 6219){
                          return 'wa.waroona';
                        } else /* >= 6219 < 6226 */ {
                          return 'wa.harvey';
                        }
                      }
                    }
                  }
                } else /* >= 6226 < 6271 */ {
                  if (/*> 6226*/ postcode < 6251){
                    if (/*> 6226*/ postcode < 6237){
                      if (/*> 6226*/ postcode < 6228){
                        return 'wa.dardanup';
                      } else /* >= 6228 < 6237 */ {
                        return 'wa.bunbury';
                      }
                    } else /* >= 6237 < 6251 */ {
                      if (/*> 6237*/ postcode < 6239){
                        return 'wa.capel';
                      } else /* >= 6239 < 6251 */ {
                        if (/*> 6239*/ postcode < 6244){
                          return 'wa.donnybrook-balingup';
                        } else /* >= 6244 < 6251 */ {
                          return 'wa.west-arthur';
                        }
                      }
                    }
                  } else /* >= 6251 < 6271 */ {
                    if (/*> 6251*/ postcode < 6258){
                      if (/*> 6251*/ postcode < 6254){
                        return 'wa.donnybrook-balingup';
                      } else /* >= 6254 < 6258 */ {
                        return 'wa.bridgetown-greenbushes';
                      }
                    } else /* >= 6258 < 6271 */ {
                      if (/*> 6258*/ postcode < 6260){
                        return 'wa.manjimup';
                      } else /* >= 6260 < 6271 */ {
                        if (/*> 6260*/ postcode < 6262){
                          return 'wa.nannup';
                        } else /* >= 6262 < 6271 */ {
                          return 'wa.manjimup';
                        }
                      }
                    }
                  }
                }
              } else /* >= 6271 < 6385 */ {
                if (/*> 6271*/ postcode < 6335){
                  if (/*> 6271*/ postcode < 6318){
                    if (/*> 6271*/ postcode < 6284){
                      if (/*> 6271*/ postcode < 6280){
                        return 'wa.capel';
                      } else /* >= 6280 < 6284 */ {
                        return 'wa.busselton';
                      }
                    } else /* >= 6284 < 6318 */ {
                      if (/*> 6284*/ postcode < 6309){
                        return 'wa.augusta-margaret-river';
                      } else /* >= 6309 < 6318 */ {
                        return 'wa.cuballing';
                      }
                    }
                  } else /* >= 6318 < 6335 */ {
                    if (/*> 6318*/ postcode < 6322){
                      if (/*> 6318*/ postcode < 6321){
                        return 'wa.broomehill-tambellup';
                      } else /* >= 6321 < 6322 */ {
                        return 'wa.cranbrook';
                      }
                    } else /* >= 6322 < 6335 */ {
                      if (/*> 6322*/ postcode < 6328){
                        return 'wa.plantagenet';
                      } else /* >= 6328 < 6335 */ {
                        if (/*> 6328*/ postcode < 6332){
                          return 'wa.albany';
                        } else /* >= 6332 < 6335 */ {
                          return 'wa.gosnells';
                        }
                      }
                    }
                  }
                } else /* >= 6335 < 6385 */ {
                  if (/*> 6335*/ postcode < 6361){
                    if (/*> 6335*/ postcode < 6346){
                      if (/*> 6335*/ postcode < 6341){
                        return 'wa.gnowangerup';
                      } else /* >= 6341 < 6346 */ {
                        return 'wa.kent';
                      }
                    } else /* >= 6346 < 6361 */ {
                      if (/*> 6346*/ postcode < 6350){
                        return 'wa.ravensthorpe';
                      } else /* >= 6350 < 6361 */ {
                        if (/*> 6350*/ postcode < 6353){
                          return 'wa.dumbleyung';
                        } else /* >= 6353 < 6361 */ {
                          return 'wa.kulin';
                        }
                      }
                    }
                  } else /* >= 6361 < 6385 */ {
                    if (/*> 6361*/ postcode < 6368){
                      if (/*> 6361*/ postcode < 6365){
                        return 'wa.wickepin';
                      } else /* >= 6365 < 6368 */ {
                        return 'wa.kulin';
                      }
                    } else /* >= 6368 < 6385 */ {
                      if (/*> 6368*/ postcode < 6370){
                        return 'wa.narembeen';
                      } else /* >= 6370 < 6385 */ {
                        if (/*> 6370*/ postcode < 6373){
                          return 'wa.wickepin';
                        } else /* >= 6373 < 6385 */ {
                          return 'wa.corrigin';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else /* >= 6385 < 9013 */ {
          if (/*> 6385*/ postcode < 6907){
            if (/*> 6385*/ postcode < 6522){
              if (/*> 6385*/ postcode < 6468){
                if (/*> 6385*/ postcode < 6425){
                  if (/*> 6385*/ postcode < 6405){
                    if (/*> 6385*/ postcode < 6396){
                      if (/*> 6385*/ postcode < 6392){
                        return 'wa.bruce-rock';
                      } else /* >= 6392 < 6396 */ {
                        return 'wa.west-arthur';
                      }
                    } else /* >= 6396 < 6405 */ {
                      if (/*> 6396*/ postcode < 6401){
                        return 'wa.cranbrook';
                      } else /* >= 6401 < 6405 */ {
                        return 'wa.northam';
                      }
                    }
                  } else /* >= 6405 < 6425 */ {
                    if (/*> 6405*/ postcode < 6414){
                      if (/*> 6405*/ postcode < 6410){
                        return 'wa.cunderdin';
                      } else /* >= 6410 < 6414 */ {
                        return 'wa.kellerberrin';
                      }
                    } else /* >= 6414 < 6425 */ {
                      if (/*> 6414*/ postcode < 6418){
                        return 'wa.merredin';
                      } else /* >= 6418 < 6425 */ {
                        if (/*> 6418*/ postcode < 6421){
                          return 'wa.bruce-rock';
                        } else /* >= 6421 < 6425 */ {
                          return 'wa.merredin';
                        }
                      }
                    }
                  }
                } else /* >= 6425 < 6468 */ {
                  if (/*> 6425*/ postcode < 6445){
                    if (/*> 6425*/ postcode < 6431){
                      if (/*> 6425*/ postcode < 6429){
                        return 'wa.yilgarn';
                      } else /* >= 6429 < 6431 */ {
                        return 'wa.coolgardie';
                      }
                    } else /* >= 6431 < 6445 */ {
                      if (/*> 6431*/ postcode < 6432){
                        return 'wa.menzies';
                      } else /* >= 6432 < 6445 */ {
                        if (/*> 6432*/ postcode < 6435){
                          return 'wa.coolgardie';
                        } else /* >= 6435 < 6445 */ {
                          return 'wa.leonora';
                        }
                      }
                    }
                  } else /* >= 6445 < 6468 */ {
                    if (/*> 6445*/ postcode < 6461){
                      if (/*> 6445*/ postcode < 6460){
                        return 'wa.esperance';
                      } else /* >= 6460 < 6461 */ {
                        return 'wa.goomalling';
                      }
                    } else /* >= 6461 < 6468 */ {
                      if (/*> 6461*/ postcode < 6465){
                        return 'wa.dowerin';
                      } else /* >= 6465 < 6468 */ {
                        if (/*> 6465*/ postcode < 6467){
                          return 'wa.wongan-ballidu';
                        } else /* >= 6467 < 6468 */ {
                          return 'wa.koorda';
                        }
                      }
                    }
                  }
                }
              } else /* >= 6468 < 6522 */ {
                if (/*> 6468*/ postcode < 6502){
                  if (/*> 6468*/ postcode < 6475){
                    if (/*> 6468*/ postcode < 6472){
                      if (/*> 6468*/ postcode < 6470){
                        return 'wa.dalwallinu';
                      } else /* >= 6470 < 6472 */ {
                        return 'wa.koorda';
                      }
                    } else /* >= 6472 < 6475 */ {
                      if (/*> 6472*/ postcode < 6473){
                        return 'wa.mount-marshall';
                      } else /* >= 6473 < 6475 */ {
                        return 'wa.mukinbudin';
                      }
                    }
                  } else /* >= 6475 < 6502 */ {
                    if (/*> 6475*/ postcode < 6480){
                      if (/*> 6475*/ postcode < 6477){
                        return 'wa.koorda';
                      } else /* >= 6477 < 6480 */ {
                        return 'wa.mukinbudin';
                      }
                    } else /* >= 6480 < 6502 */ {
                      if (/*> 6480*/ postcode < 6487){
                        return 'wa.nungarin';
                      } else /* >= 6487 < 6502 */ {
                        if (/*> 6487*/ postcode < 6501){
                          return 'wa.trayning';
                        } else /* >= 6501 < 6502 */ {
                          return 'wa.wanneroo';
                        }
                      }
                    }
                  }
                } else /* >= 6502 < 6522 */ {
                  if (/*> 6502*/ postcode < 6511){
                    if (/*> 6502*/ postcode < 6507){
                      if (/*> 6502*/ postcode < 6506){
                        return 'wa.chittering';
                      } else /* >= 6506 < 6507 */ {
                        return 'wa.victoria-plains';
                      }
                    } else /* >= 6507 < 6511 */ {
                      if (/*> 6507*/ postcode < 6509){
                        return 'wa.dandaragan';
                      } else /* >= 6509 < 6511 */ {
                        if (/*> 6509*/ postcode < 6510){
                          return 'wa.victoria-plains';
                        } else /* >= 6510 < 6511 */ {
                          return 'wa.moora';
                        }
                      }
                    }
                  } else /* >= 6511 < 6522 */ {
                    if (/*> 6511*/ postcode < 6514){
                      if (/*> 6511*/ postcode < 6512){
                        return 'wa.dandaragan';
                      } else /* >= 6512 < 6514 */ {
                        return 'wa.moora';
                      }
                    } else /* >= 6514 < 6522 */ {
                      if (/*> 6514*/ postcode < 6516){
                        return 'wa.carnamah';
                      } else /* >= 6516 < 6522 */ {
                        if (/*> 6516*/ postcode < 6517){
                          return 'wa.dandaragan';
                        } else /* >= 6517 < 6522 */ {
                          return 'wa.carnamah';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 6522 < 6907 */ {
              if (/*> 6522*/ postcode < 6712){
                if (/*> 6522*/ postcode < 6603){
                  if (/*> 6522*/ postcode < 6532){
                    if (/*> 6522*/ postcode < 6530){
                      if (/*> 6522*/ postcode < 6525){
                        return 'wa.mingenew';
                      } else /* >= 6525 < 6530 */ {
                        return 'wa.irwin';
                      }
                    } else /* >= 6530 < 6532 */ {
                      if (/*> 6530*/ postcode < 6531){
                        return 'wa.chapman-valley';
                      } else /* >= 6531 < 6532 */ {
                        return 'wa.rockingham';
                      }
                    }
                  } else /* >= 6532 < 6603 */ {
                    if (/*> 6532*/ postcode < 6562){
                      if (/*> 6532*/ postcode < 6556){
                        return 'wa.chapman-valley';
                      } else /* >= 6556 < 6562 */ {
                        return 'wa.mundaring';
                      }
                    } else /* >= 6562 < 6603 */ {
                      if (/*> 6562*/ postcode < 6569){
                        return 'wa.northam';
                      } else /* >= 6569 < 6603 */ {
                        if (/*> 6569*/ postcode < 6574){
                          return 'wa.victoria-plains';
                        } else /* >= 6574 < 6603 */ {
                          return 'wa.moora';
                        }
                      }
                    }
                  }
                } else /* >= 6603 < 6712 */ {
                  if (/*> 6603*/ postcode < 6646){
                    if (/*> 6603*/ postcode < 6616){
                      if (/*> 6603*/ postcode < 6609){
                        return 'wa.wongan-ballidu';
                      } else /* >= 6609 < 6616 */ {
                        return 'wa.dalwallinu';
                      }
                    } else /* >= 6616 < 6646 */ {
                      if (/*> 6616*/ postcode < 6623){
                        return 'wa.perenjori';
                      } else /* >= 6623 < 6646 */ {
                        if (/*> 6623*/ postcode < 6642){
                          return 'wa.morawa';
                        } else /* >= 6642 < 6646 */ {
                          return 'wa.meekatharra';
                        }
                      }
                    }
                  } else /* >= 6646 < 6712 */ {
                    if (/*> 6646*/ postcode < 6707){
                      if (/*> 6646*/ postcode < 6701){
                        return 'wa.wiluna';
                      } else /* >= 6701 < 6707 */ {
                        return 'wa.carnarvon';
                      }
                    } else /* >= 6707 < 6712 */ {
                      if (/*> 6707*/ postcode < 6710){
                        return 'wa.exmouth';
                      } else /* >= 6710 < 6712 */ {
                        if (/*> 6710*/ postcode < 6711){
                          return 'wa.ashburton';
                        } else /* >= 6711 < 6712 */ {
                          return 'wa.exmouth';
                        }
                      }
                    }
                  }
                }
              } else /* >= 6712 < 6907 */ {
                if (/*> 6712*/ postcode < 6800){
                  if (/*> 6712*/ postcode < 6751){
                    if (/*> 6712*/ postcode < 6728){
                      if (/*> 6712*/ postcode < 6721){
                        return 'wa.karratha';
                      } else /* >= 6721 < 6728 */ {
                        return 'wa.port-hedland';
                      }
                    } else /* >= 6728 < 6751 */ {
                      if (/*> 6728*/ postcode < 6740){
                        return 'wa.derby-west-kimberley';
                      } else /* >= 6740 < 6751 */ {
                        return 'wa.wyndham-east-kimberley';
                      }
                    }
                  } else /* >= 6751 < 6800 */ {
                    if (/*> 6751*/ postcode < 6760){
                      if (/*> 6751*/ postcode < 6758){
                        return 'wa.ashburton';
                      } else /* >= 6758 < 6760 */ {
                        return 'wa.port-hedland';
                      }
                    } else /* >= 6760 < 6800 */ {
                      if (/*> 6760*/ postcode < 6765){
                        return 'wa.east-pilbara';
                      } else /* >= 6765 < 6800 */ {
                        if (/*> 6765*/ postcode < 6798){
                          return 'wa.halls-creek';
                        } else /* >= 6798 < 6800 */ {
                          return 'wa.exmouth';
                        }
                      }
                    }
                  }
                } else /* >= 6800 < 6907 */ {
                  if (/*> 6800*/ postcode < 6849){
                    if (/*> 6800*/ postcode < 6809){
                      if (/*> 6800*/ postcode < 6803){
                        return 'wa.cottesloe';
                      } else /* >= 6803 < 6809 */ {
                        return 'wa.vincent';
                      }
                    } else /* >= 6809 < 6849 */ {
                      if (/*> 6809*/ postcode < 6831){
                        return 'wa.cottesloe';
                      } else /* >= 6831 < 6849 */ {
                        if (/*> 6831*/ postcode < 6837){
                          return 'wa.perth';
                        } else /* >= 6837 < 6849 */ {
                          return 'wa.cottesloe';
                        }
                      }
                    }
                  } else /* >= 6849 < 6907 */ {
                    if (/*> 6849*/ postcode < 6892){
                      if (/*> 6849*/ postcode < 6865){
                        return 'wa.perth';
                      } else /* >= 6865 < 6892 */ {
                        return 'wa.vincent';
                      }
                    } else /* >= 6892 < 6907 */ {
                      if (/*> 6892*/ postcode < 6900){
                        return 'wa.joondalup';
                      } else /* >= 6900 < 6907 */ {
                        if (/*> 6900*/ postcode < 6904){
                          return 'wa.vincent';
                        } else /* >= 6904 < 6907 */ {
                          return 'wa.subiaco';
                        }
                      }
                    }
                  }
                }
              }
            }
          } else /* >= 6907 < 9013 */ {
            if (/*> 6907*/ postcode < 7024){
              if (/*> 6907*/ postcode < 6959){
                if (/*> 6907*/ postcode < 6929){
                  if (/*> 6907*/ postcode < 6916){
                    if (/*> 6907*/ postcode < 6914){
                      if (/*> 6907*/ postcode < 6911){
                        return 'wa.nedlands';
                      } else /* >= 6911 < 6914 */ {
                        return 'wa.rockingham';
                      }
                    } else /* >= 6914 < 6916 */ {
                      if (/*> 6914*/ postcode < 6915){
                        return 'wa.stirling';
                      } else /* >= 6915 < 6916 */ {
                        return 'wa.perth';
                      }
                    }
                  } else /* >= 6916 < 6929 */ {
                    if (/*> 6916*/ postcode < 6920){
                      if (/*> 6916*/ postcode < 6919){
                        return 'wa.stirling';
                      } else /* >= 6919 < 6920 */ {
                        return 'wa.joondalup';
                      }
                    } else /* >= 6920 < 6929 */ {
                      if (/*> 6920*/ postcode < 6925){
                        return 'wa.stirling';
                      } else /* >= 6925 < 6929 */ {
                        if (/*> 6925*/ postcode < 6926){
                          return 'wa.armadale';
                        } else /* >= 6926 < 6929 */ {
                          return 'wa.belmont';
                        }
                      }
                    }
                  }
                } else /* >= 6929 < 6959 */ {
                  if (/*> 6929*/ postcode < 6946){
                    if (/*> 6929*/ postcode < 6936){
                      if (/*> 6929*/ postcode < 6931){
                        return 'wa.perth';
                      } else /* >= 6931 < 6936 */ {
                        return 'wa.bayswater';
                      }
                    } else /* >= 6936 < 6946 */ {
                      if (/*> 6936*/ postcode < 6937){
                        return 'wa.bassendean';
                      } else /* >= 6937 < 6946 */ {
                        if (/*> 6937*/ postcode < 6943){
                          return 'wa.stirling';
                        } else /* >= 6943 < 6946 */ {
                          return 'wa.bayswater';
                        }
                      }
                    }
                  } else /* >= 6946 < 6959 */ {
                    if (/*> 6946*/ postcode < 6955){
                      if (/*> 6946*/ postcode < 6951){
                        return 'wa.wanneroo';
                      } else /* >= 6951 < 6955 */ {
                        return 'wa.melville';
                      }
                    } else /* >= 6955 < 6959 */ {
                      if (/*> 6955*/ postcode < 6956){
                        return 'wa.canning';
                      } else /* >= 6956 < 6959 */ {
                        if (/*> 6956*/ postcode < 6957){
                          return 'wa.south-perth';
                        } else /* >= 6957 < 6959 */ {
                          return 'wa.east-fremantle';
                        }
                      }
                    }
                  }
                }
              } else /* >= 6959 < 7024 */ {
                if (/*> 6959*/ postcode < 7000){
                  if (/*> 6959*/ postcode < 6980){
                    if (/*> 6959*/ postcode < 6970){
                      if (/*> 6959*/ postcode < 6965){
                        return 'wa.gosnells';
                      } else /* >= 6965 < 6970 */ {
                        return 'wa.cockburn';
                      }
                    } else /* >= 6970 < 6980 */ {
                      if (/*> 6970*/ postcode < 6979){
                        return 'wa.canning';
                      } else /* >= 6979 < 6980 */ {
                        return 'wa.victoria-park';
                      }
                    }
                  } else /* >= 6980 < 7000 */ {
                    if (/*> 6980*/ postcode < 6984){
                      if (/*> 6980*/ postcode < 6983){
                        return 'wa.canning';
                      } else /* >= 6983 < 6984 */ {
                        return 'wa.victoria-park';
                      }
                    } else /* >= 6984 < 7000 */ {
                      if (/*> 6984*/ postcode < 6988){
                        return 'wa.belmont';
                      } else /* >= 6988 < 7000 */ {
                        if (/*> 6988*/ postcode < 6991){
                          return 'wa.gosnells';
                        } else /* >= 6991 < 7000 */ {
                          return 'wa.armadale';
                        }
                      }
                    }
                  }
                } else /* >= 7000 < 7024 */ {
                  if (/*> 7000*/ postcode < 7015){
                    if (/*> 7000*/ postcode < 7002){
                      if (/*> 7000*/ postcode < 7001){
                        return 'tas.hobart';
                      } else /* >= 7001 < 7002 */ {
                        return 'tas.huon-valley';
                      }
                    } else /* >= 7002 < 7015 */ {
                      if (/*> 7002*/ postcode < 7004){
                        return 'tas.clarence';
                      } else /* >= 7004 < 7015 */ {
                        if (/*> 7004*/ postcode < 7009){
                          return 'tas.hobart';
                        } else /* >= 7009 < 7015 */ {
                          return 'tas.glenorchy';
                        }
                      }
                    }
                  } else /* >= 7015 < 7024 */ {
                    if (/*> 7015*/ postcode < 7018){
                      if (/*> 7015*/ postcode < 7017){
                        return 'tas.clarence';
                      } else /* >= 7017 < 7018 */ {
                        return 'tas.brighton';
                      }
                    } else /* >= 7018 < 7024 */ {
                      if (/*> 7018*/ postcode < 7022){
                        return 'tas.clarence';
                      } else /* >= 7022 < 7024 */ {
                        if (/*> 7022*/ postcode < 7023){
                          return 'tas.kingborough';
                        } else /* >= 7023 < 7024 */ {
                          return 'tas.hobart';
                        }
                      }
                    }
                  }
                }
              }
            } else /* >= 7024 < 9013 */ {
              if (/*> 7024*/ postcode < 7258){
                if (/*> 7024*/ postcode < 7170){
                  if (/*> 7024*/ postcode < 7112){
                    if (/*> 7024*/ postcode < 7027){
                      if (/*> 7024*/ postcode < 7026){
                        return 'tas.clarence';
                      } else /* >= 7026 < 7027 */ {
                        return 'tas.brighton';
                      }
                    } else /* >= 7027 < 7112 */ {
                      if (/*> 7027*/ postcode < 7050){
                        return 'tas.southern-midlands';
                      } else /* >= 7050 < 7112 */ {
                        return 'tas.hobart';
                      }
                    }
                  } else /* >= 7112 < 7170 */ {
                    if (/*> 7112*/ postcode < 7150){
                      if (/*> 7112*/ postcode < 7119){
                        return 'tas.kingborough';
                      } else /* >= 7119 < 7150 */ {
                        return 'tas.southern-midlands';
                      }
                    } else /* >= 7150 < 7170 */ {
                      if (/*> 7150*/ postcode < 7151){
                        return 'tas.tasman';
                      } else /* >= 7151 < 7170 */ {
                        if (/*> 7151*/ postcode < 7155){
                          return 'tas.meander-valley';
                        } else /* >= 7155 < 7170 */ {
                          return 'tas.kingborough';
                        }
                      }
                    }
                  }
                } else /* >= 7170 < 7258 */ {
                  if (/*> 7170*/ postcode < 7213){
                    if (/*> 7170*/ postcode < 7177){
                      if (/*> 7170*/ postcode < 7172){
                        return 'tas.clarence';
                      } else /* >= 7172 < 7177 */ {
                        return 'tas.sorell';
                      }
                    } else /* >= 7177 < 7213 */ {
                      if (/*> 7177*/ postcode < 7209){
                        return 'tas.tasman';
                      } else /* >= 7209 < 7213 */ {
                        if (/*> 7209*/ postcode < 7212){
                          return 'tas.northern-midlands';
                        } else /* >= 7212 < 7213 */ {
                          return 'tas.launceston';
                        }
                      }
                    }
                  } else /* >= 7213 < 7258 */ {
                    if (/*> 7213*/ postcode < 7248){
                      if (/*> 7213*/ postcode < 7214){
                        return 'tas.northern-midlands';
                      } else /* >= 7214 < 7248 */ {
                        return 'tas.break-oday';
                      }
                    } else /* >= 7248 < 7258 */ {
                      if (/*> 7248*/ postcode < 7252){
                        return 'tas.launceston';
                      } else /* >= 7252 < 7258 */ {
                        if (/*> 7252*/ postcode < 7255){
                          return 'tas.george-town';
                        } else /* >= 7255 < 7258 */ {
                          return 'tas.flinders';
                        }
                      }
                    }
                  }
                }
              } else /* >= 7258 < 9013 */ {
                if (/*> 7258*/ postcode < 7320){
                  if (/*> 7258*/ postcode < 7290){
                    if (/*> 7258*/ postcode < 7267){
                      if (/*> 7258*/ postcode < 7260){
                        return 'tas.launceston';
                      } else /* >= 7260 < 7267 */ {
                        return 'tas.dorset';
                      }
                    } else /* >= 7267 < 7290 */ {
                      if (/*> 7267*/ postcode < 7268){
                        return 'tas.west-tamar';
                      } else /* >= 7268 < 7290 */ {
                        if (/*> 7268*/ postcode < 7270){
                          return 'tas.launceston';
                        } else /* >= 7270 < 7290 */ {
                          return 'tas.west-tamar';
                        }
                      }
                    }
                  } else /* >= 7290 < 7320 */ {
                    if (/*> 7290*/ postcode < 7300){
                      if (/*> 7290*/ postcode < 7291){
                        return 'tas.launceston';
                      } else /* >= 7291 < 7300 */ {
                        return 'tas.west-tamar';
                      }
                    } else /* >= 7300 < 7320 */ {
                      if (/*> 7300*/ postcode < 7303){
                        return 'tas.launceston';
                      } else /* >= 7303 < 7320 */ {
                        if (/*> 7303*/ postcode < 7305){
                          return 'tas.meander-valley';
                        } else /* >= 7305 < 7320 */ {
                          return 'tas.latrobe';
                        }
                      }
                    }
                  }
                } else /* >= 7320 < 9013 */ {
                  if (/*> 7320*/ postcode < 8008){
                    if (/*> 7320*/ postcode < 7322){
                      if (/*> 7320*/ postcode < 7321){
                        return 'tas.burnie';
                      } else /* >= 7321 < 7322 */ {
                        return 'tas.waratah-wynyard';
                      }
                    } else /* >= 7322 < 8008 */ {
                      if (/*> 7322*/ postcode < 7466){
                        return 'tas.burnie';
                      } else /* >= 7466 < 8008 */ {
                        if (/*> 7466*/ postcode < 8003){
                          return 'tas.west-coast';
                        } else /* >= 8003 < 8008 */ {
                          return 'vic.melbourne';
                        }
                      }
                    }
                  } else /* >= 8008 < 9013 */ {
                    if (/*> 8008*/ postcode < 8045){
                      if (/*> 8008*/ postcode < 8009){
                        return 'vic.port-phillip';
                      } else /* >= 8009 < 8045 */ {
                        return 'vic.melbourne';
                      }
                    } else /* >= 8045 < 9013 */ {
                      if (/*> 8045*/ postcode < 8438){
                        return 'vic.port-phillip';
                      } else /* >= 8438 < 9013 */ {
                        if (/*> 8438*/ postcode < 9000){
                          return 'vic.south-gippsland';
                        } else /* >= 9000 < 9013 */ {
                          return 'qld.ipswich';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return 'unknown';
}
