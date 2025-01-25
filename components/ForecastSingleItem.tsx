import {
  extractTime,
  formatUnixTimestamp,
  getWeatherIcon,
  removeSecondsFromFormattedTime,
} from "@/lib/utils";
import { currentWeatherResponse } from "@/types/openWeathermap";
import Image from "next/image";
import React from "react";

type ForecastSingleItemProps = {
  forecastData: currentWeatherResponse;
};

const forecastSingleItem: React.FC<ForecastSingleItemProps> = ({
  forecastData,
}) => {
  const date = formatUnixTimestamp(forecastData.dt);
  const time = extractTime(date);
  const timeWithoutSeconds = removeSecondsFromFormattedTime(time as string);
  const icon = forecastData.weather[0].icon;
  const iconSrc = getWeatherIcon(icon);
  const temperatureInC = Math.round(forecastData.main.temp - 273.15);

  return (
    <div className="flex-col-center">
      <p className="text-sm">{timeWithoutSeconds}</p>
      <Image src={iconSrc} alt="weather icon" width={50} height={50} />
      <p className="text-md font-semibold">{temperatureInC}°C</p>
    </div>
  );
};

export default forecastSingleItem;
