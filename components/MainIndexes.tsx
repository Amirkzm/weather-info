import {
  extractDay,
  extractTime,
  formatUnixTimestamp,
  getWeatherIcon,
} from "@/lib/utils";
import Image from "next/image";
import React from "react";

type MainIndexesProps = {
  date: number;
  temperature: number;
  city: string;
  description: string;
  lowestTemp: number;
  highestTemp: number;
  icon: string;
};

const MainIndexes: React.FC<MainIndexesProps> = ({
  date,
  temperature,
  city,
  description,
  lowestTemp,
  highestTemp,
  icon,
}) => {
  const iconSrc = getWeatherIcon(icon);
  const formattedDate = formatUnixTimestamp(date);
  const day = extractDay(formattedDate);
  const time = extractTime(formattedDate);

  return (
    <div className=" p-6  flex-col-center w-fit gap-3">
      <div className="flex justify-between items-center gap-4 w-full">
        <p className="text-sm font-bold">{day}</p>
        <p className="text-sm font-bold">{time}</p>
      </div>
      <h1 className="text-xl font-bold text-center">{city}</h1>
      <div className="flex-col-center ">
        <p className="text-xl font-bold">{temperature}°C</p>
        <Image src={iconSrc} alt={"icon"} width={150} height={150} />
        <p className="text-sm">{description}</p>
      </div>
      <div className=" text-sm flex flex-col self-satrt items-start w-full">
        <p className="">Low:{lowestTemp}°C</p>
        <p className="">High:{highestTemp}°C</p>
      </div>
    </div>
  );
};

export default MainIndexes;
