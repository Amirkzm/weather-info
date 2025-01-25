import React from "react";
import { extractTime, formatUnixTimestamp } from "@/lib/utils";
import { SunsetIcon } from "lucide-react";

type SunsetProps = {
  sunset: number;
};

const Sunset: React.FC<SunsetProps> = ({ sunset }) => {
  return (
    <div className="border rounded-lg p-2  flex-col-center w-fit gap-3">
      <div className="flex-center gap-4 self-start">
        <SunsetIcon size={30} />
        <h1>Sunset</h1>
      </div>
      <p className="text-xl font-bold">
        {" "}
        {extractTime(formatUnixTimestamp(sunset))}
      </p>
    </div>
  );
};

export default Sunset;
