// @ts-nocheck
"use client";

import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WeatherMap = () => {
  const openWeatherApiKey = process.env.NEXT_PUBLIC_API_KEY; // Replace with your API key

  // Layers configuration
  const layers = [
    { id: "clouds_new", label: "Clouds" },
    { id: "precipitation_new", label: "Precipitation" },
    { id: "pressure_new", label: "Pressure" },
    { id: "wind_new", label: "Wind" },
    { id: "temp_new", label: "Temperature" },
  ];

  // State for the selected layer
  const [selectedLayer, setSelectedLayer] = useState("clouds_new");

  // Center and Zoom state
  const [mapCenter] = useState<[number, number]>([44.4048, 8.9444]); // Initial coordinates
  const [mapZoom] = useState<number>(10); // Initial zoom level

  // OpenWeatherMap Tile URL
  const getOpenWeatherTileLayer = (layer: string) =>
    `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${openWeatherApiKey}`;

  return (
    <div style={{ width: "100%" }}>
      {/* Button Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
          gap: "10px",
        }}
      >
        {layers.map((layer) => (
          <button
            key={layer.id}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              backgroundColor:
                selectedLayer === layer.id ? "#007BFF" : "#E0E0E0",
              color: selectedLayer === layer.id ? "#FFF" : "#000",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => setSelectedLayer(layer.id)}
          >
            {layer.label}
          </button>
        ))}
      </div>

      {/* Map Container */}
      <div className="map-container" style={{ height: "500px", width: "100%" }}>
        // @ts-ignore
        <MapContainer
          center={mapCenter} // Set initial center
          zoom={mapZoom} // Set initial zoom level
          style={{ height: "100%", width: "100%" }}
        >
          {/* OpenStreetMap Base Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Dynamic Weather Layer */}
          <TileLayer
            key={selectedLayer}
            url={getOpenWeatherTileLayer(selectedLayer)}
            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default WeatherMap;
