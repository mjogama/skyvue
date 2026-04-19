import type { current } from "./global/ICurrent";

type ICurrent = Pick<current, "last_updated"> & { condition: Pick<current["condition"], "code"> };

export interface IPageFooter {
  current: ICurrent;
}
