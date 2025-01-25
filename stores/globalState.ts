"use client";
import React, { createContext, useContext, useState } from "react";

export interface LocationType {
  city: string | null;
  lat: number | null;
  lon: number | null;
}

// Create the context with the correct type for the default value
export const LocationContext = createContext<{
  city: string | null;
  lat: number | null;
  lon: number | null;
  setCity: React.Dispatch<React.SetStateAction<string | null>>;
  setLat: React.Dispatch<React.SetStateAction<number | null>>;
  setLon: React.Dispatch<React.SetStateAction<number | null>>;
}>({
  city: null,
  lat: null,
  lon: null,
  setCity: () => {},
  setLat: () => {},
  setLon: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [city, setCity] = useState<string | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  return (
    <LocationContext.Provider
      value={{ city, lat, lon, setCity, setLat, setLon }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the LocationContext
export const useLocationContext = () => useContext(LocationContext);
