// Pricing matrix — source of truth, matches PricingSection.tsx
// Index 0 = 1 device, index 9 = 10 devices
export const devicePrices: Record<string, number[]> = {
  "1-month":   [9,  18,  27,  36,  45,  54,  63,  72,  81,  90],
  "3-months":  [29, 50,  75,  99,  120, 144, 168, 192, 216, 240],
  "6-months":  [39, 69,  105, 140, 175, 210, 245, 280, 315, 350],
  "12-months": [49, 89,  135, 180, 225, 270, 315, 360, 405, 450],
};
