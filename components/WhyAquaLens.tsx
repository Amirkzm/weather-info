"use client";
import React, { useState } from "react";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const WhyAquaLens = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Images for each step in the gallery
  const galleryImages = [
    "/data-collection.png",
    "/integeration.png",
    "/analysis.svg",
    "/actionable-insight.svg",
    "/decision.svg",
  ];

  const steps = [
    {
      id: 1,
      title: "Data Collection",
      description:
        "Access ocean and atmospheric data from satellites, sensors, and repositories.",
    },
    {
      id: 2,
      title: "Seamless Integration",
      description: "Aggregate multiple data formats into a unified system.",
    },
    {
      id: 3,
      title: "Powerful Analysis",
      description: "Analyze trends and visualize complex climate data.",
    },
    {
      id: 4,
      title: "Actionable Insights",
      description: "Leverage insights to inform sustainable practices.",
    },
    {
      id: 5,
      title: "Impactful Decisions",
      description: "Empower stakeholders to create lasting change.",
    },
  ];

  return (
    <section className="relative bg-gray-100 py-16">
      {/* Gallery Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${galleryImages[activeStep - 1]})`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why AquaLens?
        </h2>
        <div className="relative flex space-x-6 justify-center">
          {steps.map((step) => (
            <div
              key={step.id}
              className={clsx(
                "flex-1 text-center transform transition-transform duration-300 cursor-pointer",
                {
                  "scale-110": activeStep === step.id,
                  "hover:scale-105": activeStep !== step.id,
                }
              )}
              onClick={() => setActiveStep(step.id)}
            >
              <div
                className={clsx(
                  "w-12 h-12 rounded-full flex items-center justify-center mx-auto transition-all",
                  activeStep === step.id
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                )}
              >
                {step.id}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          active: true,
        }}
        className=" max-w-sm  mx-auto mt-12 h-96 flex-col-center"
        setApi={(api) => api?.scrollTo(activeStep - 2)}
      >
        <CarouselContent className="flex space-x-4 !w-[800px] ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/2">
              <div className="p-1">
                <Image
                  src={galleryImages[index]}
                  alt={`Step ${index + 1}`}
                  width={400}
                  height={200}
                  onClick={() => setActiveStep(index + 1)}
                  className="cursor-pointer"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default WhyAquaLens;
