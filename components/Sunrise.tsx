import React from "react";
import { extractTime, formatUnixTimestamp } from "@/lib/utils";
import { SunriseIcon } from "lucide-react";

type SunriseProps = {
  sunrise: number;
};

const Sunrise: React.FC<SunriseProps> = ({ sunrise }) => {
  return (
    <div className="border rounded-lg p-2  flex-col-center w-fit gap-3">
      <div className="flex-center gap-4 self-start">
        <SunriseIcon size={30} />
        <h1>Sunrise</h1>
      </div>
      <p className="text-xl font-bold">
        {extractTime(formatUnixTimestamp(sunrise))}
      </p>
    </div>
  );
};

export default Sunrise;
