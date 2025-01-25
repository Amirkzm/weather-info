import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const searchParams = req.nextUrl.searchParams;

    const city = searchParams.get("city");
    const url = `${process.env.GEOCODE_URL}q=${city}&limit=1&appid=${apiKey}`;
    const rawGeoData = await fetch(url);
    const geoData = await rawGeoData.json();
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    return NextResponse.json({ lat, lon }, { status: 200 });
  } catch (error) {
    console.error("Error fetching forecast data", error);
    return new Response("Error fetching forecast data", { status: 500 });
  }
};
