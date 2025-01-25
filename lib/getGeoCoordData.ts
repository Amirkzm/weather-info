export const getGeoCoordData = async (city: string) => {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `${process.env.GEOCODE_URL}q=${city}&limit=1&appid=${apiKey}`;
    const rawGeoData = await fetch(url);
    const geoData = await rawGeoData.json();
    const lat = geoData[0].lat;
    const lon = geoData[0].lon;
    return { lat, lon };
  } catch (error) {
    console.error(
      "Error fetching forecast data",
      error instanceof Error ? error.message : error
    );
    return new Error("Error reteriving Geo coord data");
  }
};
