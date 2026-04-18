export function ForecastPlaceholderRow({ id, dayKey }: { id: string; dayKey: string }) {
  return (
    <div
      id={id}
      className="forecast-row forecast-row--placeholder grid grid-cols-[64px_32px_1fr] grid-rows-[auto_auto] items-center gap-x-3 gap-y-2 border-b border-slate-900/8 px-4 py-3.5 opacity-65 last:border-b-0 min-[721px]:grid-cols-[minmax(72px,0.9fr)_40px_minmax(0,1.4fr)_minmax(140px,1fr)] min-[721px]:grid-rows-none dark:border-white/8">
      <div id={`forecast-day-${dayKey}`} className="forecast-day text-sm font-medium text-slate-400 dark:text-slate-500">
        —
      </div>
      <div id={`forecast-icon-${dayKey}`} className="forecast-icon text-center text-xl leading-none" aria-hidden="true">
        …
      </div>
      <div id={`forecast-desc-${dayKey}`} className="forecast-desc text-[13px] text-slate-600 dark:text-slate-400">
        Awaiting forecast API
      </div>
      <div id={`forecast-range-${dayKey}`} className="col-span-3 flex min-[721px]:col-span-1 min-[721px]:max-w-none min-[721px]:justify-end max-[720px]:w-full max-[720px]:justify-between">
        <span id={`forecast-lo-${dayKey}`} className="temp-lo min-w-[2.25em] text-right text-[13px] font-medium text-slate-400 dark:text-slate-500">
          —
        </span>
        <div
          id={`forecast-bar-${dayKey}`}
          className="temp-range-bar relative mx-2.5 h-1.5 min-w-[72px] flex-1 max-w-[120px] overflow-hidden rounded-sm bg-[#eef1f6] max-[720px]:max-w-none dark:bg-[#1e2433]">
          <div id={`forecast-bar-fill-${dayKey}`} className="temp-range-fill absolute left-0 h-full w-0 rounded-sm bg-linear-to-r from-blue-400 to-orange-500" />
        </div>
        <span id={`forecast-hi-${dayKey}`} className="temp-hi min-w-[2.25em] text-sm font-bold text-slate-900 dark:text-slate-100">
          —
        </span>
      </div>
    </div>
  );
}
