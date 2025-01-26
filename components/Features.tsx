"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Comprehensive Weather Insights",
      description:
        "Access detailed weather data for any city, including temperature, humidity, pressure, and forecasts, all in one place.",
    },
    {
      title: "Customizable Statistical Analysis",
      description:
        "Select specific date ranges and weather elements like mean temperature, precipitation, and sunshine duration to generate custom statistical charts.",
    },
    {
      title: "Interactive Map Layers",
      description:
        "Visualize weather data on an interactive map with layers for clouds, temperature, pressure, and more.",
    },
    {
      title: "Seamless NetCDF Integration",
      description:
        "Upload your NetCDF files and transform raw weather data into meaningful insights with dynamic charts.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Intuitive design ensures smooth navigation through weather insights, statistics, and map visualizations.",
    },
    {
      title: "Customizable Chart Types",
      description:
        "Generate and compare data using multiple chart options, including line and bar charts, for better analysis.",
    },
  ];

  return (
    <section className="bg-blue-50 py-16" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-white shadow-lg rounded-2xl p-6"
            >
              <div>
                <CheckCircle className="text-blue-600 w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
