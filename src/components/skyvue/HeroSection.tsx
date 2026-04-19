import { type IHeroPayload } from "@/interfaces/IHeroSection";

export function HeroSection({ tempUnit, data }: { tempUnit: string; data: IHeroPayload }) {
  const {
    location: { region, country, name, tz_id },
    current: {
      last_updated,
      temp_c,
      temp_f,
      humidity,
      cloud,
      wind_dir,
      wind_kph,
      condition: { text, icon },
    },
  } = data;

  const tempCondition = (unitType: string) => {
    if (unitType === "celsius") {
      return temp_c;
    } else {
      return temp_f;
    }
  };

  return (
    <div className="hero-bleed mb-5 w-screen bg-[radial-gradient(ellipse_120%_80%_at_15%_20%,#bfdbfe,transparent_55%),radial-gradient(ellipse_90%_70%_at_85%_60%,#e0e7ff,transparent_50%),linear-gradient(165deg,#f0f9ff_0%,#ffffff_72%)] ml-[calc(50%-50vw)] border-b border-slate-900/8 py-[clamp(28px,5vw,52px)] pl-[clamp(16px,4vw,40px)] pr-[clamp(16px,4vw,40px)] shadow-[inset_0_-1px_0_rgba(255,255,255,0.4)] dark:bg-[radial-gradient(ellipse_120%_80%_at_15%_20%,#1e3a5f,transparent_55%),radial-gradient(ellipse_90%_70%_at_85%_60%,#312e81,transparent_50%),linear-gradient(165deg,#0f172a_0%,#141824_72%)] dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]">
      <div id="hero-section" className="mx-auto grid max-w-[min(1600px,100%)] grid-cols-1 items-end gap-4 sm:gap-[clamp(16px,4vw,40px)] md:grid-cols-[minmax(0,1.15fr)_minmax(160px,0.85fr)]">
        <div id="hero-primary" className="text-left md:text-left">
          <div id="hero-region" className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-slate-600 dark:text-slate-400">
            {"\uD83D\uDCCD"} {region ?? ""}
          </div>
          <div id="hero-country" className="mb-1 text-[clamp(28px,4.5vw,42px)] font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
            {name}, {country}
          </div>
          <div id="hero-datetime" className="mb-4 text-[13px] text-slate-400 sm:mb-7 dark:text-slate-500">
            {last_updated} · {tz_id}
          </div>
          <div id="current-temp" className="text-[clamp(56px,12vw,104px)] font-light leading-[0.95] tracking-tighter text-slate-900 dark:text-slate-100">
            {tempCondition(tempUnit)}°
          </div>
          <div id="weather-description" className="mt-2.5 text-[clamp(16px,2vw,20px)] font-medium text-slate-600 dark:text-slate-400">
            {text}
          </div>
          <div id="hero-tags" className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            <span id="tag-humidity" className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-[#1e3a5f] dark:text-blue-300">
              Humidity {humidity}%
            </span>
            <span id="tag-heat-alert" className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-[#451a03] dark:text-amber-300">
              Cloud {cloud}%
            </span>
            <span id="tag-wind-summary" className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-[#1e3a5f] dark:text-blue-300">
              {wind_dir} wind {wind_kph} km/h
            </span>
          </div>
        </div>
        <div id="hero-secondary" className="flex justify-start md:justify-end md:text-right">
          <img
            id="weather-icon-main"
            src={`${icon}`}
            width={120}
            height={120}
            alt=""
            decoding="async"
            className="aspect-square w-[clamp(72px,14vw,120px)] object-contain drop-shadow-[0_8px_24px_rgba(37,99,235,0.15)] dark:drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:order-0 order-first"
          />
        </div>
      </div>
    </div>
  );
}
