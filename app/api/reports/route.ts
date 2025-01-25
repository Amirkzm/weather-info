export const dynamic = "force-dynamic";
import { getGeoCoordData } from "@/lib/getGeoCoordData";
import { getHistoricalData } from "@/lib/getHistoricalData";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const GET = async (req: NextRequest) => {
  try {
    console.log("start getting data ");
    const searchParams = req.nextUrl.searchParams;
    const fromDate = searchParams.get("startDate");
    const toDate = searchParams.get("endDate");
    const city = searchParams.get("city");
    console.log("start setting openai key");
    const openai = new OpenAI({
      apiKey: process.env.CHATGPT_API_KEY,
    });
    console.log("city", city);

    console.log("start getting coorde date");
    const coordData = await getGeoCoordData(city as string);
    if (coordData instanceof Error) {
      throw coordData;
    }
    const { lat, lon } = coordData;

    console.log("lat and lon", lat, lon);
    if (!fromDate || !toDate) {
      return NextResponse.json(
        { error: "Please provide both fromDate and toDate" },
        { status: 400 }
      );
    }
    const params = {
      latitude: lat,
      longitude: lon,
      start_date: fromDate,
      end_date: toDate,
      daily: ["temperature_2m_mean", "sunshine_duration", "precipitation_sum"],
      timezone: "Europe/Berlin",
    };

    console.log("params", params);
    const weatherData = await getHistoricalData(params);
    console.log("weather data", weatherData);
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      store: true,
      messages: [
        {
          role: "user",
          content: `here i provide a historical data for temperature_mean, sunshine_duration and precipitation_sum for ${city} from ${fromDate} to ${toDate}. give me the analytics reports on this data. what do you understand? generate a report in 3 paragraph. use any historical data u can get for this city and compare this data with the last yaer data and give me the response. data: ${weatherData}`,
        },
      ],
    });
    console.log("completion", completion);
    // Extract the response text
    const chatGptResponse = completion.choices[0]?.message?.content;

    if (!chatGptResponse) {
      return NextResponse.json(
        { error: "No response received from ChatGPT" },
        { status: 500 }
      );
    }

    console.log("ChatGPT response:", chatGptResponse);
  } catch (error) {
    console.log("error fetching data", error);
    return new Response("Error in getting daily data ", { status: 500 });
  }
};
