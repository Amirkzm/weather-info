import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-white bg-bannerImg bg-repeat bg-cover bg-bottom w-full h-screen flex items-center text-white">
      <div className="space-y-4 max-w-[600px] glass-bg ml-8 p-4 rounded-xl">
        <h1 className="text-6xl font-bold">
          Explore Weather Insights at Your Fingertips!
        </h1>
        <p className="text-lg font-semibold">
          Transform how you understand and visualize weather data with powerful
          tools for analysis, mapping, and custom insights.
        </p>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant={"secondary"}>Explore Features</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
