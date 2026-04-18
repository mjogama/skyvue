import { InlineCode } from "./InlineCode";
import { SectionLabel } from "./SectionLabel";

export function Sidebar() {
  const featureCard =
    "rounded-[14px] border border-slate-900/[0.08] bg-white p-[clamp(16px,2vw,22px)] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.06)] dark:border-white/[0.08] dark:bg-[#141824] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]";
  const featureTitle = "mb-3.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500";

  return (
    <aside
      className="page-layout__aside flex min-w-0 flex-col gap-0 max-[1100px]:static max-[1100px]:grid max-[1100px]:grid-cols-2 max-[1100px]:gap-x-6 max-[720px]:grid-cols-1 lg:sticky lg:top-[76px] lg:self-start"
      aria-label="Conditions and alerts">
      <SectionLabel id="alerts-section-label" classNameOverride="max-[1100px]:col-span-full">
        Active alerts
      </SectionLabel>
      <div
        id="active-alert-card"
        className="mb-3 rounded-[14px] border border-slate-900/8 border-l-4 border-l-blue-600 bg-white p-[clamp(16px,2vw,20px)] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.06)] max-[1100px]:col-span-full dark:border-white/8 dark:border-l-blue-400 dark:bg-[#141824] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
        <div id="alert-header" className="mb-2 flex flex-wrap items-start gap-2.5">
          <span id="alert-icon" className="text-sm" aria-hidden="true">
            {"\u2713"}
          </span>
          <span id="alert-title" className="min-w-0 flex-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
            No alerts in current response
          </span>
          <span id="alert-until" className="whitespace-nowrap text-xs font-semibold text-slate-400 dark:text-slate-500">
            —
          </span>
        </div>
        <p id="alert-body" className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400" />
      </div>

      <SectionLabel id="conditions-section-label" classNameOverride="max-[1100px]:col-span-full max-[1100px]:mt-6">
        Conditions
      </SectionLabel>

      <div id="conditions-grid-row-1" className="mb-3 grid grid-cols-1 gap-3 max-[1100px]:col-start-1">
        <div id="aqi-card" className={featureCard}>
          <div id="aqi-title" className={featureTitle}>
            Dew point &amp; precipitation
          </div>
          <div id="aqi-main" className="mb-1.5 text-[clamp(24px,3vw,32px)] font-semibold tracking-tight text-blue-600 dark:text-blue-400">
            <span id="aqi-value">3°C</span>{" "}
            <span id="aqi-category" className="text-sm font-normal text-slate-600 dark:text-slate-400">
              Dew point
            </span>
          </div>
          <div id="aqi-scale" className="mt-3 flex gap-1">
            <div id="aqi-seg-1" className="h-1.5 flex-1 rounded bg-blue-600/35 dark:bg-blue-400/35" />
            <div id="aqi-seg-2" className="h-1.5 flex-1 rounded bg-blue-600/28 dark:bg-blue-400/28" />
            <div id="aqi-seg-3" className="h-1.5 flex-1 rounded bg-blue-600/20 dark:bg-blue-400/20" />
            <div id="aqi-seg-4" className="h-1.5 flex-1 rounded bg-blue-600/12 dark:bg-blue-400/12" />
            <div id="aqi-seg-5" className="h-1.5 flex-1 rounded bg-blue-600/6 dark:bg-blue-400/6" />
          </div>
          <div id="aqi-pm-detail" className="mt-1.5 text-[13px] leading-snug text-slate-600 dark:text-slate-400">
            Precip 0 mm · Cloud 0% · Air quality not in <InlineCode>current</InlineCode>
          </div>
        </div>
        <div id="uv-card" className={featureCard}>
          <div id="uv-title" className={featureTitle}>
            UV index
          </div>
          <div id="uv-main" className="mb-1.5 text-[clamp(24px,3vw,32px)] font-semibold tracking-tight text-green-500">
            <span id="uv-value">0.4</span>{" "}
            <span id="uv-category" className="text-sm font-normal text-slate-600 dark:text-slate-400">
              Low
            </span>
          </div>
          <div id="uv-bar" className="mt-2.5 h-1.5 overflow-hidden rounded-sm bg-[#eef1f6] dark:bg-[#1e2433]">
            <div id="uv-bar-fill" className="h-full w-[4%] rounded-sm bg-green-500" />
          </div>
          <div id="uv-advice" className="mt-2 text-[13px] leading-snug text-slate-600 dark:text-slate-400">
            Minimal UV · <InlineCode>current.uv</InlineCode> — still use protection if you burn easily
          </div>
        </div>
      </div>

      <div id="conditions-grid-row-2" className="grid grid-cols-1 gap-3 max-[1100px]:col-start-2 max-[720px]:col-start-1">
        <div id="wind-detail-card" className={featureCard}>
          <div id="wind-detail-title" className={featureTitle}>
            Wind detail
          </div>
          <div id="wind-detail-body" className="flex items-center gap-[18px]">
            <div id="wind-compass" className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-slate-900/8 bg-[#eef1f6] dark:border-white/8 dark:bg-[#1e2433]">
              <span id="wind-compass-arrow" className="inline-block origin-center text-[26px] text-blue-600 dark:text-blue-400" style={{ transform: "rotate(102deg)" }} aria-hidden="true">
                ↑
              </span>
            </div>
            <div id="wind-detail-text">
              <div id="wind-speed-display" className="text-[clamp(24px,3vw,32px)] font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                12 km/h
              </div>
              <div id="wind-direction-detail" className="text-[13px] leading-snug text-slate-600 dark:text-slate-400">
                From ESE · 102° · Gusts 19 km/h · 7.6 mph / 11.8 mph gust
              </div>
            </div>
          </div>
        </div>
        <div id="sun-card" className={featureCard}>
          <div id="sun-card-title" className={featureTitle}>
            Sunrise & sunset
          </div>
          <svg id="sun-arc-svg" className="mb-2 mt-1 block h-auto max-h-[88px] w-full" viewBox="0 0 200 75" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M 20 65 Q 100 10 180 65" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-900/10 dark:text-white/10" />
            <path d="M 20 65 Q 100 10 140 45" fill="none" stroke="#f97316" strokeWidth="2.5" />
            <circle cx="140" cy="45" r="7" fill="#fbbf24" />
            <text x="16" y="72" fontSize="10" fill="currentColor" className="text-slate-400 dark:text-slate-500" id="sunrise-label">
              —
            </text>
            <text x="158" y="72" fontSize="10" fill="currentColor" className="text-slate-400 dark:text-slate-500" id="sunset-label">
              —
            </text>
          </svg>
          <div id="sun-daylight-text" className="text-[13px] leading-snug text-slate-600 dark:text-slate-400">
            Astronomy (<InlineCode>sunrise</InlineCode> / <InlineCode>sunset</InlineCode>) lives under <InlineCode>forecast</InlineCode> or <InlineCode>astronomy</InlineCode> API — not in this{" "}
            <InlineCode>current</InlineCode> object.
          </div>
        </div>
      </div>
    </aside>
  );
}
