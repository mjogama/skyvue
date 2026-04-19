/** WeatherAPI astronomy times are 12h strings like "6:45 AM" or "05:30 PM". */
export function parseAstroTimeToMinutes(s: string): number | null {
  const m = s.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let h = Number(m[1]);
  const min = Number(m[2]);
  const ap = m[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  if (h < 0 || h > 23 || min < 0 || min > 59) return null;
  return h * 60 + min;
}

/** WeatherAPI `location.localtime` is like "2024-01-15 14:30". */
export function parseLocaltimeToMinutes(localtime: string): number | null {
  const m = localtime.trim().match(/\d{4}-\d{2}-\d{2}\s+(\d{1,2}):(\d{2})/);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h < 0 || h > 23 || min < 0 || min > 59) return null;
  return h * 60 + min;
}

/** Same quadratic Bezier as the SVG: M 20 65 Q 100 10 180 65 */
const P0: [number, number] = [20, 65];
const P1: [number, number] = [100, 10];
const P2: [number, number] = [180, 65];

export function sunPointOnArc(t: number): [number, number] {
  const u = Math.min(1, Math.max(0, t));
  const x = (1 - u) ** 2 * P0[0] + 2 * (1 - u) * u * P1[0] + u ** 2 * P2[0];
  const y = (1 - u) ** 2 * P0[1] + 2 * (1 - u) * u * P1[1] + u ** 2 * P2[1];
  return [x, y];
}

/**
 * Linear progress along daylight [sunrise, sunset] → [0, 1] for arc parameter.
 * Before sunrise → 0; after sunset → 1.
 */
export function daylightProgress(sunrise: string, sunset: string, localtime: string): number | null {
  const sr = parseAstroTimeToMinutes(sunrise);
  const ss = parseAstroTimeToMinutes(sunset);
  const now = parseLocaltimeToMinutes(localtime);
  if (sr === null || ss === null || now === null) return null;
  if (ss <= sr) return null;
  if (now <= sr) return 0;
  if (now >= ss) return 1;
  return (now - sr) / (ss - sr);
}

export function daylightDurationMinutes(sunrise: string, sunset: string): number | null {
  const sr = parseAstroTimeToMinutes(sunrise);
  const ss = parseAstroTimeToMinutes(sunset);
  if (sr === null || ss === null || ss <= sr) return null;
  return ss - sr;
}

export function formatDaylightDuration(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  return `${h}h ${m}m`;
}
