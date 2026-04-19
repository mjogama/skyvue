import type { location, current } from "./global/ICurrent";

type ILocation = Pick<location, "region" | "name" | "country" | "tz_id">;

type ICurrent = Pick<current, "last_updated" | "temp_c" | "temp_f" | "humidity" | "cloud" | "wind_dir" | "wind_kph"> & {
  condition: Pick<current["condition"], "text" | "icon">;
};

export interface IHeroPayload {
  location: ILocation;
  current: ICurrent;
}
