export function StatsSection() {
  const card =
    "rounded-[14px] border border-slate-900/[0.08] bg-white p-[clamp(14px,2vw,20px)] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)] dark:border-white/[0.08] dark:bg-[#141824] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]";
  const label = "mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500";
  const val = "text-[clamp(20px,2.5vw,26px)] font-semibold tracking-tight text-slate-900 dark:text-slate-100";
  const sub = "mt-1 text-xs text-slate-400 dark:text-slate-500";

  return (
    <div id="stats-row" className="mb-4 grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      <div id="stat-card-humidity" className={card}>
        <div id="stat-humidity-label" className={label}>
          Humidity
        </div>
        <div id="stat-humidity-value" className={val}>
          81%
        </div>
        <div id="stat-humidity-bar" className="mt-2.5 h-1.5 overflow-hidden rounded-sm bg-[#eef1f6] dark:bg-[#1e2433]">
          <div id="stat-humidity-bar-fill" className="h-full w-[81%] rounded-sm bg-linear-to-r from-blue-600 to-sky-400" />
        </div>
      </div>
      <div id="stat-card-wind" className={card}>
        <div id="stat-wind-label" className={label}>
          Wind
        </div>
        <div id="stat-wind-value" className={val}>
          12
        </div>
        <div id="stat-wind-detail" className={sub}>
          km/h ESE
        </div>
      </div>
      <div id="stat-card-visibility" className={card}>
        <div id="stat-visibility-label" className={label}>
          Visibility
        </div>
        <div id="stat-visibility-value" className={val}>
          10
        </div>
        <div id="stat-visibility-detail" className={sub}>
          km (6 mi) — Good
        </div>
      </div>
      <div id="stat-card-pressure" className={card}>
        <div id="stat-pressure-label" className={label}>
          Pressure
        </div>
        <div id="stat-pressure-value" className={val}>
          1023
        </div>
        <div id="stat-pressure-detail" className={sub}>
          mb (30.21 in)
        </div>
      </div>
    </div>
  );
}
