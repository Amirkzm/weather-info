"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";

const SettingsPage = () => {
  const { user } = useUser();
  const [city, setCity] = useState<string>(
    (user?.publicMetadata?.city as string) || ""
  );
  const [lat, setLat] = useState<string>(
    (user?.publicMetadata?.lat as string) || ""
  );
  const [lon, setLon] = useState<string>(
    (user?.publicMetadata?.lon as string) || ""
  );

  const handleSave = async () => {
    const res = await fetch(
      `/api/save-user-data?city=${city}&lat=${lat}&lon=${lon}`
    );
    console.log("response", res);
    if (res.status === 200) {
      alert("Location saved successfully");
    } else {
      alert("Error saving location");
    }
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="flex flex-col">
        <label className="text-start">City: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-start">Latitude: </label>
        <input
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          className="border p-2"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-start">Longitude: </label>
        <input
          type="text"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          className="border p-2"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default SettingsPage;
