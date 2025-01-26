"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const HeroActions = () => {
  const router = useRouter();

  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStartedClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex gap-4">
      <Button onClick={handleGetStartedClick}>Get Started</Button>
      <Button variant={"secondary"} onClick={handleScrollToFeatures}>
        Explore Features
      </Button>
    </div>
  );
};

export default HeroActions;
