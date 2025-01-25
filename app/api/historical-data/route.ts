import { getGeoCoordData } from "@/lib/getGeoCoordData";
import { NextRequest, NextResponse } from "next/server";
import { fetchWeatherApi } from "openmeteo";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const city = searchParams.get("city");
    const startDate = searchParams.get("start_date");
    const endDate = searchParams.get("end_date");
    const coordData = await getGeoCoordData(city as string);
    if (coordData instanceof Error) {
      throw coordData;
    }
    const { lat, lon } = coordData;

    const params = {
      latitude: lat,
      longitude: lon,
      start_date: startDate,
      end_date: endDate,
      daily: ["temperature_2m_mean", "sunshine_duration", "precipitation_sum"],
      timezone: "Europe/Berlin",
    };

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

    return NextResponse.json(weatherData);
  } catch (error) {
    console.log("error fetching data", error);
    return new Response("Error in getting daily data ", { status: 500 });
  }
};
