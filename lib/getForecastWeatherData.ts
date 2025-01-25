import { forecastResponse } from "@/types/openWeathermap";
import { getGeoCoordData } from "./getGeoCoordData";

export const getForecastWeatherData = async (
  city: string
): Promise<forecastResponse | Error> => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const coordResponse = await getGeoCoordData(city);
    if (coordResponse instanceof Error) {
      throw coordResponse;
    }
    const { lat, lon } = coordResponse;
    const url = `${process.env.FORECAST_WEATHER}lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`;
    const rawForecastWeather = await fetch(url);
    const forecastWeatherData = await rawForecastWeather.json();
    console.log("forecastWeatherData", forecastWeatherData);
    return forecastWeatherData;
  } catch (error) {
    console.error(
      "Error fetching forecast data",
      error instanceof Error ? error.message : error
    );
    return new Error("Error fetching forecast data");
  }
};
