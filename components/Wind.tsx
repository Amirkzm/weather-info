import { WindIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type WindProps = {
  windSpeed: number;
  windDir: number;
};

const Wind: React.FC<WindProps> = ({ windDir, windSpeed }) => {
  return (
    <div
      className="pt-6 pb-5 px-4 h-[12rem] flex 
    flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none w-fit"
    >
      <div className="flex-center gap-4 self-start ">
        <WindIcon size={30} />
        <h2 className="flex items-center gap-2 font-medium"> Wind</h2>
      </div>

      <div className="compass relative flex items-center justify-center">
        <div className="image relative">
          <Image
            src="/compass_body.svg"
            alt="compass"
            width={110}
            height={110}
          />
          <Image
            src="/compass_arrow.svg"
            alt="compass"
            className="absolute top-0 left-[50%] transition-all duration-500 ease-in-out dark:invert"
            style={{
              transform: `rotate(${windDir}deg) translateX(-50%)`,
              height: "100%",
            }}
            width={11}
            height={11}
          />
        </div>
        <p
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xs
            dark:text-white font-medium"
        >
          {Math.round(windSpeed)} m/s
        </p>
      </div>
    </div>
  );
};

export default Wind;
