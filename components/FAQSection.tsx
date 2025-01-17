import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions about AquaLens? We’ve got answers! Explore the FAQ
          below or contact us for more information.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Question 1 */}
          <AccordionItem value="q1">
            <AccordionTrigger className="text-lg font-semibold text-gray-800">
              What is AquaLens, and how does it work?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              AquaLens is a comprehensive platform for accessing and analyzing
              oceanic and atmospheric data. It collects data from satellites,
              sensors, and repositories, integrates it into a unified system,
              and provides tools for visualization and actionable insights.
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem value="q2">
            <AccordionTrigger className="text-lg font-semibold text-gray-800">
              Who can benefit from AquaLens?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              AquaLens is designed for researchers, environmentalists,
              businesses, and policymakers who need reliable data for making
              informed decisions about ocean sustainability and climate impact.
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="q3">
            <AccordionTrigger className="text-lg font-semibold text-gray-800">
              What kind of data does AquaLens provide?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              AquaLens provides oceanic and atmospheric data, including
              temperature, salinity, wind patterns, carbon emissions, and more,
              from global satellite and sensor networks.
            </AccordionContent>
          </AccordionItem>

          {/* Question 4 */}
          <AccordionItem value="q4">
            <AccordionTrigger className="text-lg font-semibold text-gray-800">
              Can I customize the data analysis and visualization?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Absolutely! AquaLens offers flexible tools to customize data
              filters, apply analytical models, and create tailored
              visualizations that meet your specific needs.
            </AccordionContent>
          </AccordionItem>

          {/* Question 5 */}
          <AccordionItem value="q5">
            <AccordionTrigger className="text-lg font-semibold text-gray-800">
              How can I get started with AquaLens?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Getting started is easy! Sign up for a free trial on our website,
              explore the features, and unlock the power of actionable insights
              for your organization.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
