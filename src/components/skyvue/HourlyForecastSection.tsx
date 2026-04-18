import { HourSlot } from "./HourSlot";
import { InlineCode } from "./InlineCode";
import { SectionLabel } from "./SectionLabel";
import { SectionNote } from "./SectionNote";

export function HourlyForecastSection() {
  return (
    <>
      <SectionLabel id="hourly-section-label">Hourly forecast</SectionLabel>
      <SectionNote id="hourly-section-note">
        Current conditions only in this payload — hourly needs WeatherAPI <InlineCode>forecast</InlineCode> data.
      </SectionNote>
      <div
        id="hourly-forecast-scroll"
        role="list"
        className="flex gap-2 overflow-x-auto rounded-[20px] border border-slate-900/8 bg-white p-[clamp(14px,2vw,20px)] shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.06)] [scrollbar-width:thin] dark:border-white/8 dark:bg-[#141824] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
        <HourSlot idPrefix={0} time="Now" temp="9°" defaultChecked iconUrl="https://cdn.weatherapi.com/weather/64x64/day/113.png" />
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <HourSlot key={i} idPrefix={i} time="—" temp="—" placeholder />
        ))}
      </div>
    </>
  );
}
