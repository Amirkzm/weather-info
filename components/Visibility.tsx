import { EyeIcon } from "lucide-react";
import React from "react";

type VisibilityProps = {
  visibility: number;
};

const Visibility: React.FC<VisibilityProps> = ({ visibility }) => {
  const visibilityInKm = visibility / 1000;

  return (
    <div className="border rounded-lg p-2  flex-col-center w-fit gap-3">
      <div className="flex-center gap-4 self-start">
        <EyeIcon size={30} />
        <h1>Visibility</h1>
      </div>
      <p className="text-xl font-bold">{visibilityInKm} km</p>
    </div>
  );
};

export default Visibility;
