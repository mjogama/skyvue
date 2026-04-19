import { weather_api_key } from "@/constants/priv_key";

export const currentAPI = async (query: string) => {
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weather_api_key}&q=${encodeURIComponent(query)}&aqi=yes`);

    const data = await res.json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};
