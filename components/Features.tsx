import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
              <Image src={"/charts.svg"} alt="chart" width={80} height={80} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Advanced Data Visualizations
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Explore dynamic graphs and charts to understand oceanic and
              atmospheric patterns.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
              <Image
                src={"/real-time.svg"}
                alt="chart"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Real-Time Monitoring
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Track ocean data in real-time, enabling immediate decision-making.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mb-4">
              <Image
                src={"/multi-format.svg"}
                alt="chart"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Multi-Format Support
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Seamlessly handle and visualize NetCDF, GeoJSON, and other
              formats.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mb-4">
              <Image src={"/layer.svg"} alt="chart" width={80} height={80} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Custom Layers
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Add and visualize custom map layers for specific insights.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-4">
              <Image
                src={"/interface.svg"}
                alt="chart"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              User-Friendly Interface
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Navigate through intuitive dashboards designed for ease of use.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center mb-4">
              <Image src={"/tools.svg"} alt="chart" width={80} height={80} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Collaborative Tools
            </h3>
            <p className="text-sm text-gray-600 text-center">
              Share visualizations and collaborate on insights with your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
