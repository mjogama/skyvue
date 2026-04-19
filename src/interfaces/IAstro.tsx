import type { Astronomy } from "./global/IAstronomy";

type IAstro = Pick<Astronomy, "sunrise" | "sunset">;

export interface IAstroPayload {
  astro: IAstro;
}
