import MainWeather from "@/components/MainWeather";
import { getCurrentWeatherData } from "@/lib/getCurrentWeatherData";
import { getForecastWeatherData } from "@/lib/getForecastWeatherData";

const Page = async ({ searchParams }: { searchParams: { city?: string } }) => {
  const city = searchParams.city ?? "Genoa";

  const weatherData = await getCurrentWeatherData(city);
  const forecastData = await getForecastWeatherData(city);

  if (weatherData instanceof Error || forecastData instanceof Error) {
    return <div>Error fetching weather data</div>;
  }

  return (
    <div className="p-8 space-y-8">
      <MainWeather weatherData={weatherData} forecastData={forecastData.list} />
    </div>
  );
};

export default Page;
