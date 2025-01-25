import { currentWeatherResponse } from "@/types/openWeathermap";
import { getGeoCoordData } from "./getGeoCoordData";

export const getCurrentWeatherData = async (
  city: string
): Promise<currentWeatherResponse | Error> => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const coordResponse = await getGeoCoordData(city);
    if (coordResponse instanceof Error) {
      throw coordResponse;
    }
    const { lat, lon } = coordResponse;

    const weatherUrl = `${process.env.CURRENT_WEATHER}lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const rawCurrentWeather = await fetch(weatherUrl);
    const currentWeatherData = await rawCurrentWeather.json();
    console.log("currentWeatherData", currentWeatherData);

    return currentWeatherData;
  } catch (error) {
    console.log(
      "Error fetching forecast data",
      error instanceof Error ? error.message : error
    );
    return new Error("Error fetching forecast data");
  }
};
