import { useEffect, useState } from "react";
import { weather_api_key } from "../../constants/priv_key";

interface IHeroPayload {
  location: {
    region: string;
    name: string;
    country: string;
    tz_id: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    humidity: number;
    cloud: number;
    wind_dir: string;
    wind_kph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}
export function HeroSection({ query }: { query: string }) {
  const [heroSectionAPI, setHeroSectionAPI] = useState<IHeroPayload | null>(null);

  const location = heroSectionAPI?.location;
  const current = heroSectionAPI?.current;

  useEffect(() => {
    const retrieveHeroSectionData = async () => {
      try {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=${encodeURIComponent(query)}&aqi=yes`);

        const { location, current }: IHeroPayload = await res.json();
        const payload: IHeroPayload = {
          location: {
            region: location.region,
            name: location.name,
            country: location.country,
            tz_id: location.tz_id,
          },
          current: {
            last_updated_epoch: current.last_updated_epoch,
            last_updated: current.last_updated,
            temp_c: current.temp_c,
            temp_f: current.temp_f,
            humidity: current.humidity,
            cloud: current.cloud,
            wind_dir: current.wind_dir,
            wind_kph: current.wind_kph,
            condition: {
              text: current.condition.text,
              icon: current.condition.icon,
            },
          },
        };

        setHeroSectionAPI(payload);
      } catch (err: unknown) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
      }
    };
    retrieveHeroSectionData();
  }, [query]);

  console.log(heroSectionAPI);
  return (
    <div className="hero-bleed mb-5 w-screen bg-[radial-gradient(ellipse_120%_80%_at_15%_20%,#bfdbfe,transparent_55%),radial-gradient(ellipse_90%_70%_at_85%_60%,#e0e7ff,transparent_50%),linear-gradient(165deg,#f0f9ff_0%,#ffffff_72%)] ml-[calc(50%-50vw)] border-b border-slate-900/8 py-[clamp(28px,5vw,52px)] pl-[clamp(16px,4vw,40px)] pr-[clamp(16px,4vw,40px)] shadow-[inset_0_-1px_0_rgba(255,255,255,0.4)] dark:bg-[radial-gradient(ellipse_120%_80%_at_15%_20%,#1e3a5f,transparent_55%),radial-gradient(ellipse_90%_70%_at_85%_60%,#312e81,transparent_50%),linear-gradient(165deg,#0f172a_0%,#141824_72%)] dark:shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]">
      <div id="hero-section" className="mx-auto grid max-w-[min(1600px,100%)] grid-cols-1 items-end gap-4 sm:gap-[clamp(16px,4vw,40px)] md:grid-cols-[minmax(0,1.15fr)_minmax(160px,0.85fr)]">
        <div id="hero-primary" className="text-left md:text-left">
          <div id="hero-region" className="mb-1.5 flex items-center gap-1.5 text-[13px] font-medium text-slate-600 dark:text-slate-400">
            {"\uD83D\uDCCD"} {location?.region ?? ""}
          </div>
          <div id="hero-country" className="mb-1 text-[clamp(28px,4.5vw,42px)] font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100">
            {location?.name}, {location?.country}
          </div>
          <div id="hero-datetime" className="mb-4 text-[13px] text-slate-400 sm:mb-7 dark:text-slate-500">
            {current?.last_updated} · {location?.tz_id}
          </div>
          <div id="current-temp" className="text-[clamp(56px,12vw,104px)] font-light leading-[0.95] tracking-tighter text-slate-900 dark:text-slate-100">
            {current?.temp_c}°
          </div>
          <div id="weather-description" className="mt-2.5 text-[clamp(16px,2vw,20px)] font-medium text-slate-600 dark:text-slate-400">
            {current?.condition.text}
          </div>
          <div id="hero-tags" className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            <span id="tag-humidity" className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-[#1e3a5f] dark:text-blue-300">
              Humidity {current?.humidity}%
            </span>
            <span id="tag-heat-alert" className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-[#451a03] dark:text-amber-300">
              Cloud {current?.cloud}%
            </span>
            <span id="tag-wind-summary" className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800 dark:bg-[#1e3a5f] dark:text-blue-300">
              {current?.wind_dir} wind {current?.wind_kph} km/h
            </span>
          </div>
        </div>
        <div id="hero-secondary" className="flex justify-start md:justify-end md:text-right">
          <img
            id="weather-icon-main"
            src={`${current?.condition.icon}`}
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
