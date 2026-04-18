import { ForecastSection } from "./ForecastSection";
import { HourlyForecastSection } from "./HourlyForecastSection";
import { StatsSection } from "./StatsSection";
import { WeatherMapSection } from "./WeatherMapSection";

export function MainSection() {
  return (
    <div className="page-layout__main min-w-0">
      <StatsSection />
      <HourlyForecastSection />
      <ForecastSection />
      <WeatherMapSection />
    </div>
  );
}
