import { TripType } from "@/stores/InformationStore";

export type PricingTable = {
  area1: Record<string, any>;
  area2: Record<string, any>;
  area3: Record<string, any>;
};

export const AREA1_COUNTRIES = [
  "Brunei",
  "Cambodia",
  "Indonesia",
  "Laos",
  "Malaysia",
  "Myanmar",
  "Philippines",
  "Thailand",
  "Vietnam",
];
export const AREA2_COUNTRIES = [
  "australia",
  "bangladesh",
  "bhutan",
  "china",
  "india",
  "japan",
  "maldives",
  "mongolia",
  "nepal",
  "new zealand",
  "north korea",
  "singapore",
  "south korea",
  "sri lanka",
  "taiwan",
  "timor-leste",
];

export const INDIVIDUAL_PRICINGS: PricingTable = {
  area1: {
    plan: ["basic", "essential", "preferred"],
    1: [44.0, 57.0, 71.0],
    2: [44.0, 57.0, 71.0],
    3: [44.0, 57.0, 71.0],
    4: [46.0, 60.0, 76.0],
    5: [46.0, 60.0, 76.0],
    6: [46.0, 60.0, 76.0],
    7: [46.0, 60.0, 76.0],
    8: [69.0, 90.0, 113.0],
    9: [69.0, 90.0, 113.0],
    10: [69.0, 90.0, 113.0],
    11: [69.0, 90.0, 113.0],
    12: [92.0, 120.0, 151.0],
    13: [92.0, 120.0, 151.0],
    14: [92.0, 120.0, 151.0],
    15: [92.0, 120.0, 151.0],
    16: [115.0, 149.0, 188.0],
    17: [115.0, 149.0, 188.0],
    18: [115.0, 149.0, 188.0],
    19: [115.0, 149.0, 188.0],
    20: [138.0, 179.0, 226.0],
    21: [138.0, 179.0, 226.0],
    22: [138.0, 179.0, 226.0],
    23: [138.0, 179.0, 226.0],
    24: [160.0, 208.0, 263.0],
    25: [160.0, 208.0, 263.0],
    26: [160.0, 208.0, 263.0],
    27: [160.0, 208.0, 263.0],
    28: [183.0, 238.0, 300.0],
    29: [183.0, 238.0, 300.0],
    30: [183.0, 238.0, 300.0],
    31: [183.0, 238.0, 300.0],
    "each-week": [33.0, 43.0, 55.0],
    annual: [undefined, undefined, undefined],
  },
  area2: {
    plan: ["basic", "essential", "preferred"],
    1: [50.0, 65.0, 82.0],
    2: [50.0, 65.0, 82.0],
    3: [50.0, 65.0, 82.0],
    4: [59.0, 77.0, 97.0],
    5: [59.0, 77.0, 97.0],
    6: [59.0, 77.0, 97.0],
    7: [59.0, 77.0, 97.0],
    8: [90.0, 117.0, 147.0],
    9: [90.0, 117.0, 147.0],
    10: [90.0, 117.0, 147.0],
    11: [90.0, 117.0, 147.0],
    12: [120.0, 157.0, 198.0],
    13: [120.0, 157.0, 198.0],
    14: [120.0, 157.0, 198.0],
    15: [120.0, 157.0, 198.0],
    16: [151.0, 196.0, 248.0],
    17: [151.0, 196.0, 248.0],
    18: [151.0, 196.0, 248.0],
    19: [151.0, 196.0, 248.0],
    20: [182.0, 236.0, 298.0],
    21: [182.0, 236.0, 298.0],
    22: [182.0, 236.0, 298.0],
    23: [182.0, 236.0, 298.0],
    24: [212.0, 276.0, 348.0],
    25: [212.0, 276.0, 348.0],
    26: [212.0, 276.0, 348.0],
    27: [212.0, 276.0, 348.0],
    28: [243.0, 316.0, 398.0],
    29: [243.0, 316.0, 398.0],
    30: [243.0, 316.0, 398.0],
    31: [243.0, 316.0, 398.0],
    "each-week": [38.0, 50.0, 63.0],
    annual: [undefined, 503.0, 635.0],
  },
  area3: {
    plan: ["basic", "essential", "preferred"],
    1: [63.0, 82.0, 103.0],
    2: [63.0, 82.0, 103.0],
    3: [63.0, 82.0, 103.0],
    4: [75.0, 97.0, 123.0],
    5: [75.0, 97.0, 123.0],
    6: [75.0, 97.0, 123.0],
    7: [75.0, 97.0, 123.0],
    8: [113.0, 147.0, 186.0],
    9: [113.0, 147.0, 186.0],
    10: [113.0, 147.0, 186.0],
    11: [113.0, 147.0, 186.0],
    12: [152.0, 198.0, 249.0],
    13: [152.0, 198.0, 249.0],
    14: [152.0, 198.0, 249.0],
    15: [152.0, 198.0, 249.0],
    16: [190.0, 248.0, 312.0],
    17: [190.0, 248.0, 312.0],
    18: [190.0, 248.0, 312.0],
    19: [190.0, 248.0, 312.0],
    20: [229.0, 298.0, 376.0],
    21: [229.0, 298.0, 376.0],
    22: [229.0, 298.0, 376.0],
    23: [229.0, 298.0, 376.0],
    24: [268.0, 348.0, 439.0],
    25: [268.0, 348.0, 439.0],
    26: [268.0, 348.0, 439.0],
    27: [268.0, 348.0, 439.0],
    28: [306.0, 398.0, 502.0],
    29: [306.0, 398.0, 502.0],
    30: [306.0, 398.0, 502.0],
    31: [306.0, 398.0, 502.0],
    "each-week": [48.0, 63.0, 79.0],
    annual: [undefined, 658.0, 830.0],
  },
};
export const FAMILY_PRICING: PricingTable = {
  area1: {
    plan: ["basic", "essential", "preferred"],
    1: [117.0, 152.0, 192.0],
    2: [117.0, 152.0, 192.0],
    3: [117.0, 152.0, 192.0],
    4: [131.0, 170.0, 215.0],
    5: [131.0, 170.0, 215.0],
    6: [131.0, 170.0, 215.0],
    7: [131.0, 170.0, 215.0],
    8: [177.0, 230.0, 291.0],
    9: [177.0, 230.0, 291.0],
    10: [177.0, 230.0, 291.0],
    11: [177.0, 230.0, 291.0],
    12: [223.0, 290.0, 366.0],
    13: [223.0, 290.0, 366.0],
    14: [223.0, 290.0, 366.0],
    15: [223.0, 290.0, 366.0],
    16: [270.0, 351.0, 442.0],
    17: [270.0, 351.0, 442.0],
    18: [270.0, 351.0, 442.0],
    19: [270.0, 351.0, 442.0],
    20: [316.0, 411.0, 518.0],
    21: [316.0, 411.0, 518.0],
    22: [316.0, 411.0, 518.0],
    23: [316.0, 411.0, 518.0],
    24: [362.0, 471.0, 594.0],
    25: [362.0, 471.0, 594.0],
    26: [362.0, 471.0, 594.0],
    27: [362.0, 471.0, 594.0],
    28: [408.0, 531.0, 669.0],
    29: [408.0, 531.0, 669.0],
    30: [408.0, 531.0, 669.0],
    31: [408.0, 531.0, 669.0],
    "each-week": [58.0, 75.0, 95.0],
    annual: [undefined, undefined, undefined],
  },
  area2: {
    plan: ["basic", "essential", "preferred"],
    1: [135.0, 175.0, 221.0],
    2: [135.0, 175.0, 221.0],
    3: [135.0, 175.0, 221.0],
    4: [151.0, 196.0, 247.0],
    5: [151.0, 196.0, 247.0],
    6: [151.0, 196.0, 247.0],
    7: [151.0, 196.0, 247.0],
    8: [204.0, 265.0, 334.0],
    9: [204.0, 265.0, 334.0],
    10: [204.0, 265.0, 334.0],
    11: [204.0, 265.0, 334.0],
    12: [257.0, 334.0, 421.0],
    13: [257.0, 334.0, 421.0],
    14: [257.0, 334.0, 421.0],
    15: [257.0, 334.0, 421.0],
    16: [310.0, 403.0, 509.0],
    17: [310.0, 403.0, 509.0],
    18: [310.0, 403.0, 509.0],
    19: [310.0, 403.0, 509.0],
    20: [363.0, 472.0, 596.0],
    21: [363.0, 472.0, 596.0],
    22: [363.0, 472.0, 596.0],
    23: [363.0, 472.0, 596.0],
    24: [416.0, 541.0, 683.0],
    25: [416.0, 541.0, 683.0],
    26: [416.0, 541.0, 683.0],
    27: [416.0, 541.0, 683.0],
    28: [469.0, 610.0, 770.0],
    29: [469.0, 610.0, 770.0],
    30: [469.0, 610.0, 770.0],
    31: [469.0, 610.0, 770.0],
    "each-week": [66.0, 86.0, 109.0],
    annual: [undefined, 1108.0, 1398.0],
  },
  area3: {
    plan: ["basic", "essential", "preferred"],
    1: [170.0, 221.0, 278.0],
    2: [170.0, 221.0, 278.0],
    3: [170.0, 221.0, 278.0],
    4: [190.0, 247.0, 312.0],
    5: [190.0, 247.0, 312.0],
    6: [190.0, 247.0, 312.0],
    7: [190.0, 247.0, 312.0],
    8: [257.0, 334.0, 421.0],
    9: [257.0, 334.0, 421.0],
    10: [257.0, 334.0, 421.0],
    11: [257.0, 334.0, 421.0],
    12: [324.0, 421.0, 531.0],
    13: [324.0, 421.0, 531.0],
    14: [324.0, 421.0, 531.0],
    15: [324.0, 421.0, 531.0],
    16: [391.0, 508.0, 641.0],
    17: [391.0, 508.0, 641.0],
    18: [391.0, 508.0, 641.0],
    19: [391.0, 508.0, 641.0],
    20: [458.0, 595.0, 751.0],
    21: [458.0, 595.0, 751.0],
    22: [458.0, 595.0, 751.0],
    23: [458.0, 595.0, 751.0],
    24: [525.0, 682.0, 861.0],
    25: [525.0, 682.0, 861.0],
    26: [525.0, 682.0, 861.0],
    27: [525.0, 682.0, 861.0],
    28: [592.0, 770.0, 971.0],
    29: [592.0, 770.0, 971.0],
    30: [592.0, 770.0, 971.0],
    31: [592.0, 770.0, 971.0],
    "each-week": [84.0, 109.0, 137.0],
    annual: [undefined, 1448.0, 1826.0],
  },
};

export type PlanPringInput = {
  tripType: "single" | "annualMulti";
  insuredType: "individual" | "family";
  plan: "basic" | "essential" | "preferred";
  area: "area1" | "area2" | "area3";
  duration: number | string;
};

export function planPricingLookup({
  tripType,
  insuredType,
  plan,
  area,
  duration,
}: PlanPringInput) {
  if (typeof duration === "number" && duration > 31) return 0;
  const tableToLookup = (
    insuredType === "individual" ? INDIVIDUAL_PRICINGS : FAMILY_PRICING
  )?.[area];
  if (!tableToLookup) return 0;
  const colIndex = tableToLookup.plan.indexOf(plan);
  return tableToLookup[duration]?.[colIndex] ?? 0;
}

export function getPricingPlan({
  tripType,
  insuredType,
  plan,
  area,
  duration,
  numberOfInsureds,
}: PlanPringInput & { numberOfInsureds: number; duration: number }) {
  if (duration <= 0) return 0;
  const numberOfInsuredsShouldBeCount =
    insuredType === "family" ? 1 : numberOfInsureds;

  if (tripType === "annualMulti") {
    if (duration !== 365) return 0;
    const durationPrice = planPricingLookup({
      tripType,
      plan,
      area,
      duration: "annual",
      insuredType,
    });
    return durationPrice * numberOfInsuredsShouldBeCount;
  }

  if (duration <= 31) {
    const durationPrice = planPricingLookup({
      tripType,
      plan,
      area,
      duration,
      insuredType,
    });
    return durationPrice * numberOfInsuredsShouldBeCount;
  } else {
    const durationPrice = planPricingLookup({
      tripType,
      plan,
      area,
      duration: 31,
      insuredType,
    });
    const numberOfWeeks = Math.ceil((duration - 31) / 7);
    const durationAdditionalWeekPrice = planPricingLookup({
      tripType,
      plan,
      area,
      duration: "each-week",
      insuredType,
    });
    const pricePerMember =
      durationPrice + numberOfWeeks * durationAdditionalWeekPrice;
    return pricePerMember * numberOfInsuredsShouldBeCount;
  }
}

export function getAreaByCountry(
  countryName: string
): "area1" | "area2" | "area3" {
  if (AREA1_COUNTRIES.includes(countryName)) return "area1";
  if (AREA2_COUNTRIES.includes(countryName)) return "area1";
  return "area3";
}

export function getPlanPricings({
  tripType,
  insuredType,
  area,
  duration,
  numberOfInsureds,
  destinations,
}: Partial<PlanPringInput> & {
  numberOfInsureds: number;
  duration: number;
  destinations: string[];
}) {
  if (!(destinations.length || area) || !tripType || !insuredType) return;
  if (tripType === "annualMulti" && !area) return;

  let selectedArea = "area3";

  if (tripType === "single") {
    // array
    let max = 0;
    for (let index = 0; index < destinations.length; index++) {
      const country = destinations[index];

      const userArea =
        tripType === "single" ? getAreaByCountry(country) : area || "area3";

      const costPrice = getPricingPlan({
        tripType: tripType,
        area: userArea,
        plan: "basic",
        duration: duration,
        numberOfInsureds: numberOfInsureds,
        insuredType: insuredType,
      });

      if (costPrice > max) {
        max = costPrice;
        selectedArea = getAreaByCountry(country);
      }
    }
  } else {
    selectedArea = area || selectedArea;
  }

  return {
    basic: getPricingPlan({
      tripType: tripType,
      area: selectedArea,
      plan: "basic",
      duration: duration,
      insuredType: insuredType,
      numberOfInsureds: numberOfInsureds,
    }),
    essential: getPricingPlan({
      tripType: tripType,
      area: selectedArea,
      plan: "essential",
      duration: duration,
      insuredType: insuredType,
      numberOfInsureds: numberOfInsureds,
    }),
    preferred: getPricingPlan({
      tripType: tripType,
      area: selectedArea,
      plan: "preferred",
      duration: duration,
      insuredType: insuredType,
      numberOfInsureds: numberOfInsureds,
    }),
  };
}
