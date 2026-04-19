import type { IStats } from "@/interfaces/IStats";
import { card, label, sub, val } from "@/styles/statsStyle";

export function StatsSection({ data }: { data: IStats }) {
  const { humidity, wind_kph, wind_dir, vis_km, vis_miles, pressure_mb, pressure_in } = data.current;

  const visibilityCondition = (visibilityKm: number) => {
    const labelClass = "font-medium";
    if (visibilityKm > 10) {
      return <span className={`${labelClass} text-emerald-600 dark:text-emerald-400`}>Excellent</span>;
    }
    if (visibilityKm >= 6) {
      return <span className={`${labelClass} text-teal-600 dark:text-teal-400`}>Good</span>;
    }
    if (visibilityKm >= 2) {
      return <span className={`${labelClass} text-amber-600 dark:text-amber-400`}>Moderate</span>;
    }
    if (visibilityKm >= 1) {
      return <span className={`${labelClass} text-orange-600 dark:text-orange-400`}>Poor</span>;
    }
    if (visibilityKm >= 0.2) {
      return <span className={`${labelClass} text-orange-700 dark:text-orange-500`}>Poor</span>;
    }
    if (visibilityKm > 0) {
      return <span className={`${labelClass} text-red-600 dark:text-red-400`}>Extremely Poor</span>;
    }
    return <span className={`${labelClass} text-slate-500 dark:text-slate-400`}>—</span>;
  };

  return (
    <div id="stats-row" className="mb-4 grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      <div id="stat-card-humidity" className={card}>
        <div id="stat-humidity-label" className={label}>
          Humidity
        </div>
        <div id="stat-humidity-value" className={val}>
          {humidity}%
        </div>
        <div id="stat-humidity-bar" className="mt-2.5 h-1.5 overflow-hidden rounded-sm bg-[#eef1f6] dark:bg-[#1e2433]">
          <div id="stat-humidity-bar-fill" className="h-full rounded-sm bg-linear-to-r from-blue-600 to-sky-400 transition-all duration-500 ease-in-out" style={{ width: `${humidity}%` }} />
        </div>
      </div>
      <div id="stat-card-wind" className={card}>
        <div id="stat-wind-label" className={label}>
          Wind
        </div>
        <div id="stat-wind-value" className={val}>
          {wind_kph}
        </div>
        <div id="stat-wind-detail" className={sub}>
          km/h {wind_dir}
        </div>
      </div>
      <div id="stat-card-visibility" className={card}>
        <div id="stat-visibility-label" className={label}>
          Visibility
        </div>
        <div id="stat-visibility-value" className={val}>
          {vis_miles}
        </div>
        <div id="stat-visibility-detail" className={sub}>
          km ({vis_km}) — {visibilityCondition(vis_km)}
        </div>
      </div>
      <div id="stat-card-pressure" className={card}>
        <div id="stat-pressure-label" className={label}>
          Pressure
        </div>
        <div id="stat-pressure-value" className={val}>
          {pressure_mb}
        </div>
        <div id="stat-pressure-detail" className={sub}>
          mb ({pressure_in} in)
        </div>
      </div>
    </div>
  );
}
