import type { current } from "./global/ICurrent";

type ICurrent = Pick<current, "temp_c" | "temp_f">;

export interface IMainNavPayload {
  current: ICurrent;
}
