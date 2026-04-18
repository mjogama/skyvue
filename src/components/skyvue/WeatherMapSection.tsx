import { InlineCode } from "./InlineCode";
import { SectionLabel } from "./SectionLabel";

export function WeatherMapSection() {
  const tagBase =
    "cursor-pointer rounded-full border-0 bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-[#1e3a5f] dark:text-blue-300 dark:focus-visible:outline-blue-400";
  const tagWarn =
    "cursor-pointer rounded-full border-0 bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 dark:bg-[#451a03] dark:text-amber-300";

  return (
    <>
      <SectionLabel id="map-section-label">Weather map</SectionLabel>
      <div
        id="weather-map-card"
        className="rounded-[14px] border border-slate-900/[0.08] bg-white p-[clamp(16px,2vw,22px)] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.06)] dark:border-white/[0.08] dark:bg-[#141824] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
      >
        <div id="weather-map-header" className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <div id="map-radar-title" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Radar overlay
          </div>
          <div id="map-layer-tags" role="group" aria-label="Map layers" className="flex flex-wrap justify-end gap-2">
            <span id="map-layer-rain" role="button" tabIndex={0} className={tagBase}>
              Rain
            </span>
            <span id="map-layer-temp" role="button" tabIndex={0} className={tagWarn}>
              Temp
            </span>
            <span id="map-layer-wind" role="button" tabIndex={0} className={tagBase}>
              Wind
            </span>
            <span id="map-layer-clouds" role="button" tabIndex={0} className={tagBase}>
              Clouds
            </span>
          </div>
        </div>
        <div
          id="map-placeholder"
          className="flex min-h-[clamp(200px,28vh,320px)] items-center rounded-[14px] border border-dashed border-slate-900/[0.08] bg-gradient-to-br from-[#eef1f6] to-[#f8fafc] p-[clamp(20px,3vw,32px)] text-left text-sm font-medium leading-relaxed text-slate-600 dark:border-white/[0.08] dark:from-[#1e2433] dark:to-[#1a1f2e] dark:text-slate-400"
        >
          Map layer · lat 51.52, lon −0.11 · Wire with WeatherAPI geo or your tile provider (no map in{" "}
          <InlineCode>current</InlineCode> JSON).
        </div>
      </div>
    </>
  );
}
