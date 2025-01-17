import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-white bg-bannerImg bg-repeat bg-cover bg-bottom w-full h-screen flex items-center text-white">
      <div className=" space-y-4 max-w-[600px]  glass-bg ml-8 p-4 rounded-xl">
        <h1 className="text-6xl font-bold">
          Discover Coastal Insights Like Never Before!
        </h1>
        <p className="text-lg font-semibold">
          AquaLens brings you cutting-edge ocean data and visualizations to
          empower decisions for a sustainable future.
        </p>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant={"secondary"}>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
