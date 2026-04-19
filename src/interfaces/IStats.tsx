import type { current } from "./global/ICurrent";

type ICurrent = Pick<current, "humidity" | "wind_kph" | "wind_dir" | "vis_km" | "vis_miles" | "pressure_mb" | "pressure_in">;
export interface IStats {
  current: ICurrent;
}
