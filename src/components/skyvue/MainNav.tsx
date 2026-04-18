import { useEffect, useState, type SubmitEvent } from "react";
import { cn } from "./cn";

export function MainNav({
  locationQuery,
  onSearchSubmit,
  darkMode,
  onDarkModeChange,
}: {
  locationQuery: string;
  onSearchSubmit: (query: string) => void;
  darkMode: boolean;
  onDarkModeChange: (next: boolean) => void;
}) {
  const [draft, setDraft] = useState(locationQuery);

  useEffect(() => {
    setDraft(locationQuery);
  }, [locationQuery]);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSearchSubmit(draft.trim());
  };

  return (
    <nav id="nav-main" className="sticky top-0 z-50 border-b border-slate-900/8 bg-white/85 backdrop-blur-md transition-colors dark:border-white/8 dark:bg-[#141824]/88">
      <div className="mx-auto flex min-h-[60px] max-w-[min(1600px,100%)] flex-wrap items-center gap-2.5 px-[clamp(16px,4vw,40px)] py-2.5 sm:flex-nowrap sm:gap-[clamp(12px,2vw,24px)] sm:py-0">
        <div className="logo flex shrink-0 items-center gap-2 text-[17px] font-bold tracking-tight text-blue-600 dark:text-blue-400" id="nav-brand">
          <span className="text-[22px] leading-none" id="nav-logo-icon" aria-hidden="true">
            {"\u2601"}
          </span>
          <span id="nav-app-name">Skyvue</span>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div
            id="nav-search"
            className="order-3 flex min-h-[44px] w-full max-w-none flex-1 items-center gap-2.5 rounded-full border border-slate-900/8 bg-[#eef1f6] px-4 py-2 text-sm text-slate-600 transition-[box-shadow,border-color] focus-within:border-blue-600 focus-within:shadow-[0_0_0_3px_rgba(37,99,235,0.12)] sm:order-0 sm:max-w-[min(420px,45vw)] dark:border-white/8 dark:bg-[#1e2433] dark:text-slate-400 dark:focus-within:shadow-[0_0_0_3px_rgba(96,165,250,0.15)]">
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" className="shrink-0 text-slate-400 dark:text-slate-500" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              id="search-input"
              name="q"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              type="search"
              placeholder="Search country or city…"
              autoComplete="off"
              className="w-full border-0 bg-transparent font-sans text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
            <button type="submit">Check</button>
          </div>
        </form>

        <div className="nav-right ml-auto flex shrink-0 items-center gap-3 sm:ml-auto" id="nav-actions">
          <div id="unit-toggle" role="group" aria-label="Temperature unit" className="flex overflow-hidden rounded-full border border-slate-900/8 bg-[#eef1f6] dark:border-white/8 dark:bg-[#1e2433]">
            <input type="radio" name="unit" id="unit-celsius" className="peer/c peer sr-only" value="celsius" defaultChecked />
            <label
              htmlFor="unit-celsius"
              id="unit-celsius-label"
              className="flex cursor-pointer items-center justify-center px-3.5 py-1.5 text-[13px] font-medium text-slate-400 peer-checked/c:bg-blue-600 peer-checked/c:text-white dark:peer-checked/c:bg-blue-500">
              °C
            </label>
            <input type="radio" name="unit" id="unit-fahrenheit" className="peer/f peer sr-only" value="fahrenheit" />
            <label
              htmlFor="unit-fahrenheit"
              id="unit-fahrenheit-label"
              className="flex cursor-pointer items-center justify-center px-3.5 py-1.5 text-[13px] font-medium text-slate-400 peer-checked/f:bg-blue-600 peer-checked/f:text-white dark:peer-checked/f:bg-blue-500">
              °F
            </label>
          </div>

          <label
            htmlFor="theme-toggle"
            id="modeBtn"
            className="flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-900/8 bg-[#eef1f6] px-3.5 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:border-slate-400 hover:bg-white dark:border-white/8 dark:bg-[#1e2433] dark:text-slate-400 dark:hover:border-slate-500 dark:hover:bg-[#141824]">
            <input id="theme-toggle" type="checkbox" checked={darkMode} onChange={(e) => onDarkModeChange(e.target.checked)} className="sr-only" aria-label="Toggle dark mode" />
            <span className={cn("theme-label-light", darkMode && "hidden")}>{"\uD83C\uDF19"} Dark</span>
            <span className={cn("theme-label-dark", !darkMode && "hidden")}>{"\u2600\uFE0F"} Light</span>
          </label>
        </div>
      </div>
    </nav>
  );
}
