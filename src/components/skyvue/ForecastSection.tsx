import { ForecastPlaceholderRow } from "./ForecastPlaceholderRow";
import { InlineCode } from "./InlineCode";
import { SectionLabel } from "./SectionLabel";
import { SectionNote } from "./SectionNote";

export function ForecastSection() {
  return (
    <>
      <SectionLabel id="forecast-section-label">7-day forecast</SectionLabel>
      <SectionNote id="forecast-section-note">
        Multi-day rows need <InlineCode>forecast.forecastday[]</InlineCode> — only “today” reflects <InlineCode>current</InlineCode> below.
      </SectionNote>
      <div
        id="forecast-seven-day"
        className="mb-4 overflow-hidden rounded-[20px] border border-slate-900/8 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.06)] dark:border-white/8 dark:bg-[#141824] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
        <div
          id="forecast-row-today"
          className="grid grid-cols-[64px_32px_1fr] grid-rows-[auto_auto] items-center gap-x-3 gap-y-2 border-b border-slate-900/8 px-[clamp(16px,2vw,22px)] py-3.5 last:border-b-0 min-[721px]:grid-cols-[minmax(72px,0.9fr)_40px_minmax(0,1.4fr)_minmax(140px,1fr)] min-[721px]:grid-rows-none dark:border-white/8">
          <div id="forecast-day-today" className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Today
          </div>
          <div id="forecast-icon-today" className="flex items-center justify-center" aria-hidden="true">
            <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" width={28} height={28} alt="" decoding="async" />
          </div>
          <div id="forecast-desc-today" className="justify-self-start text-[13px] text-slate-600 dark:text-slate-400">
            Sunny · current observation
          </div>
          <div id="forecast-range-today" className="col-span-3 flex min-[721px]:col-span-1 min-[721px]:max-w-none min-[721px]:justify-end max-[720px]:w-full max-[720px]:justify-between">
            <span id="forecast-lo-today" className="temp-lo min-w-[2.25em] text-right text-[13px] font-medium text-slate-400 dark:text-slate-500">
              7°
            </span>
            <div id="forecast-bar-today" className="relative mx-2.5 h-1.5 min-w-[72px] flex-1 max-w-[120px] overflow-hidden rounded-sm bg-[#eef1f6] max-[720px]:max-w-none dark:bg-[#1e2433]">
              <div id="forecast-bar-fill-today" className="absolute left-0 h-full w-full rounded-sm bg-linear-to-r from-blue-400 to-orange-500" />
            </div>
            <span id="forecast-hi-today" className="temp-hi min-w-[2.25em] text-sm font-bold text-slate-900 dark:text-slate-100">
              9°
            </span>
          </div>
        </div>
        <ForecastPlaceholderRow id="forecast-row-wed" dayKey="wed" />
        <ForecastPlaceholderRow id="forecast-row-thu" dayKey="thu" />
        <ForecastPlaceholderRow id="forecast-row-fri" dayKey="fri" />
        <ForecastPlaceholderRow id="forecast-row-sat" dayKey="sat" />
        <ForecastPlaceholderRow id="forecast-row-sun" dayKey="sun" />
        <ForecastPlaceholderRow id="forecast-row-mon" dayKey="mon" />
      </div>
    </>
  );
}
