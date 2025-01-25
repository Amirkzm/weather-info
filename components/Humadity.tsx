import { DropletIcon } from "lucide-react";
import React from "react";

type HumadityProps = {
  humidity: number;
};

const Humadity: React.FC<HumadityProps> = ({ humidity }) => {
  return (
    <div className="border rounded-lg p-2  flex-col-center w-fit">
      <div className="flex-center gap-4 self-start">
        <DropletIcon size={30} />
        <h1>Humadity</h1>
      </div>
      <p className="text-2xl font-bold"> {humidity}%</p>
    </div>
  );
};

export default Humadity;
