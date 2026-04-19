/** UV index scale (0–15) used for bar fill and category bands. */
const UV_INDEX_MAX = 15;

export const uvCategoryForScale = (uv: number): string => {
  const n = Math.min(Math.max(uv, 0), UV_INDEX_MAX);
  if (n <= 2) return "Low";
  if (n <= 5) return "Moderate";
  if (n <= 7) return "High";
  if (n <= 10) return "Very high";
  return "Extreme";
};

export const uvBarFillClass = (uv: number): string => {
  const n = Math.min(Math.max(uv, 0), UV_INDEX_MAX);
  if (n <= 2) return "bg-green-500";
  if (n <= 5) return "bg-yellow-500";
  if (n <= 7) return "bg-amber-500";
  if (n <= 10) return "bg-orange-500";
  return "bg-red-500";
};

export const uvAdviceLine = (uv: number): string => {
  const n = Math.min(Math.max(uv, 0), UV_INDEX_MAX);
  if (n <= 2) return "Minimal UV — still use protection if you burn easily";
  if (n <= 5) return "Moderate UV — cover up and use SPF during midday";
  if (n <= 7) return "High UV — limit midday sun; protective clothing and SPF";
  if (n <= 10) return "Very high UV — minimize exposure 10 a.m.–4 p.m.";
  return "Extreme UV — avoid sun during peak hours; full protection essential";
};
