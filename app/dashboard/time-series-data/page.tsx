/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import CustomBarCharts from "@/components/CustomBarCharts";
import CustomLineChart from "@/components/CustomLineChart";
import React, { useState } from "react";

const options = [
  { label: "Temperature", value: "temperature_2m_mean" },
  { label: "Precipitation Sum", value: "precipitation_sum" },
  { label: "Sunshine Duration", value: "sunshine_duration" },
];

const chartTypes = [
  { value: "line", label: "Line Chart" },
  { value: "bar", label: "Bar Chart" },
];

const Page = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [submittedOptions, setSubmittedOptions] = useState<string[]>([]);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [city, setCity] = useState<string>("Genoa");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedChartTypes, setSelectedChartTypes] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((opt) => opt !== option)
        : [...prev, option]
    );
  };

  const handleChartTypeChange = (value: string) => {
    setSelectedChartTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
  };

  const fetchWeatherData = async () => {
    if (!fromDate || !toDate || selectedOptions.length === 0) {
      alert("Please select all fields!");
      return;
    }

    setSubmittedOptions(selectedOptions);

    const params = {
      start_date: fromDate,
      end_date: toDate,
    };

    try {
      setIsLoading(true);
      const url = `/api/historical-data?city=${city}&start_date=${params.start_date}&end_date=${params.end_date}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Time-Series Data</h1>

      {/* Date Pickers */}
      <div className="flex items-center space-x-4">
        <div className="space-y-1">
          <label htmlFor="from-date" className="text-sm font-medium">
            From:
          </label>
          <input
            type="date"
            id="from-date"
            className="border border-gray-300 rounded-md p-2"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="to-date" className="text-sm font-medium">
            To:
          </label>
          <input
            type="date"
            id="to-date"
            className="border border-gray-300 rounded-md p-2"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>
      </div>

      {/* Checkbox Options */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Select Parameters:</h2>
        <div className="flex items-center space-x-4">
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={opt.value}
                checked={selectedOptions.includes(opt.value)}
                onChange={() => handleOptionChange(opt.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Checkbox Options */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">City</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Default is Genoa"
            />
          </label>
        </div>
      </div>

      <div className="space-y-2 mt-4">
        <h2 className="text-lg font-semibold">Select Chart Types:</h2>
        <div className="flex items-center space-x-4">
          {chartTypes.map((type) => (
            <label key={type.value} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type.value}
                checked={selectedChartTypes.includes(type.value)}
                onChange={() => handleChartTypeChange(type.value)}
              />
              <span>{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={fetchWeatherData}
      >
        Fetch Data
      </button>

      {submittedOptions.includes("temperature_2m_mean") && !isLoading && (
        <>
          {selectedChartTypes.includes("line") && (
            <CustomLineChart
              title="Temperature"
              inputData={weatherData.daily?.temperature2mMean || {}}
              dataKey="temperature_2m_mean"
            />
          )}
          {selectedChartTypes.includes("bar") && (
            <CustomBarCharts
              title="Temperature"
              inputData={weatherData.daily?.temperature2mMean || {}}
              dataKey="temperature_2m_mean"
            />
          )}
        </>
      )}

      {submittedOptions.includes("precipitation_sum") && !isLoading && (
        <>
          {selectedChartTypes.includes("line") && (
            <CustomLineChart
              title="Precipitation"
              inputData={weatherData.daily?.precipitationSum || {}}
              dataKey="precipitation_sum"
            />
          )}
          {selectedChartTypes.includes("bar") && (
            <CustomBarCharts
              title="Precipitation"
              inputData={weatherData.daily?.precipitationSum || {}}
              dataKey="precipitation_sum"
            />
          )}
        </>
      )}
      {submittedOptions.includes("sunshine_duration") && !isLoading && (
        <>
          {selectedChartTypes.includes("line") && (
            <CustomLineChart
              title="Sunshine Duration"
              inputData={weatherData.daily?.sunshineDuration || {}}
              dataKey="sunshine_duration"
            />
          )}
          {selectedChartTypes.includes("bar") && (
            <CustomBarCharts
              title="Sunshine Duration"
              inputData={weatherData.daily?.sunshineDuration || {}}
              dataKey="sunshine_duration"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Page;
