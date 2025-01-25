import { openMeteoParams } from "@/types/openWeathermap";
import { fetchWeatherApi } from "openmeteo";

export const getHistoricalData = async (params: openMeteoParams) => {
  try {
    const url = "https://archive-api.open-meteo.com/v1/archive";
    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();

    const daily = response.daily()!;

    const weatherData = {
      daily: {
        time: range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
        ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
        temperature2mMean: daily.variables(0)!.valuesArray()!,
        sunshineDuration: daily.variables(1)!.valuesArray()!,
        precipitationSum: daily.variables(2)!.valuesArray()!,
      },
    };
    return weatherData;
  } catch (error) {
    console.log(
      "Error fetching historical data",
      error instanceof Error ? error.message : error
    );
    return new Error("Error fetching historical data");
  }
};
