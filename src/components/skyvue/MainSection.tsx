import type { IStats } from "@/interfaces/IStats";
import { ForecastSection } from "./ForecastSection";
import { HourlyForecastSection } from "./HourlyForecastSection";
import { StatsSection } from "./StatsSection";
import { WeatherMapSection } from "./WeatherMapSection";

export function MainSection({ data }: { data: IStats }) {
  return (
    <div className="page-layout__main min-w-0">
      <StatsSection data={data} />
      <HourlyForecastSection />
      <ForecastSection />
      <WeatherMapSection />
    </div>
  );
}
