import { currentWeatherResponse } from "@/types/openWeathermap";
import React from "react";
import Humadity from "./Humadity";
import Wind from "./Wind";
import Sunset from "./Sunset";
import MainIndexes from "./MainIndexes";
import Sunrise from "./Sunrise";
import Visibility from "./Visibility";
import ForecastSingleItem from "./ForecastSingleItem";

type mainWeatherProps = {
  weatherData: currentWeatherResponse;
  forecastData: currentWeatherResponse[];
};

const MainWeather: React.FC<mainWeatherProps> = ({
  weatherData,
  forecastData,
}) => {
  const city = weatherData.name;
  const { description, icon } = weatherData.weather[0];
  const temperature = Math.round(weatherData.main.temp - 273.15);
  const tempHigh = Math.round(weatherData.main.temp_max - 273.15);
  const tempLow = Math.round(weatherData.main.temp_min - 273.15);
  const { humidity } = weatherData.main;
  const windSpeed = weatherData.wind.speed;
  const windDeg = weatherData.wind.deg;
  const visibility = weatherData.visibility;
  const { sunrise, sunset } = weatherData.sys;
  const date = weatherData.dt;

  return (
    <div className="mt-16">
      <div className="flex gap-4 border rounded-lg p-4">
        <MainIndexes
          city={city}
          date={date}
          description={description}
          highestTemp={tempHigh}
          lowestTemp={tempLow}
          icon={icon}
          temperature={temperature}
        />
        <div className="flex-col-center gap-4">
          <h2 className="text-lg text-center">Today Forecast</h2>
          <div className="flex-center gap-2">
            {forecastData.map((forecast, index) => (
              <ForecastSingleItem key={index} forecastData={forecast} />
            ))}
          </div>
          <Wind windSpeed={windSpeed} windDir={windDeg} />
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <Humadity humidity={humidity} />
        <Sunset sunset={sunset} />
        <Sunrise sunrise={sunrise} />
        <Visibility visibility={visibility} />
      </div>
    </div>
  );
};

export default MainWeather;
