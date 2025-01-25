// GeospatialMaps.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("@/components/WeatherMap"), { ssr: false });

export default function Page() {
  return (
    <div className="w-[600px] h-[600px]">
      <Map />
    </div>
  );
}
