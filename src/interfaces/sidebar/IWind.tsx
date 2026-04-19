import type { current } from "../global/ICurrent";

type ICurrent = Pick<current, "wind_dir" | "wind_degree" | "wind_kph" | "gust_kph" | "gust_mph" | "uv">;

export interface IWindPayload {
  current: ICurrent;
}
