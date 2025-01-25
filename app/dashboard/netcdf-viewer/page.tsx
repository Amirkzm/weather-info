"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { NetCDFReader } from "netcdfjs";

type VariableData = {
  name: string;
  values: number[];
};

const Page = () => {
  const [variables, setVariables] = useState<VariableData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setIsLoading(true);
      const file = event.target.files?.[0];
      if (file) {
        const extractedVariables = await extractVariablesFromFile(file);
        setVariables(extractedVariables);
      }
    } catch (error) {
      console.log("Error while extracting variables from file: ", error);
      throw new Error(
        "Error while extracting variables from file. please try later!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const extractVariablesFromFile = async (
    file: File
  ): Promise<VariableData[]> => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => {
        const arrayBuffer = event.target?.result as ArrayBuffer;
        const data = new Uint8Array(arrayBuffer);
        const ncReader = new NetCDFReader(data);

        const variables = ncReader.variables.slice(0, 10).map((variable) => ({
          name: variable.name,
          values: Array.from(ncReader.getDataVariable(variable.name))
            .slice(0, 500)
            .map(Number),
        }));

        resolve(variables);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  variables.forEach((element) => {
    console.log(
      "element.name: ",
      element.name,
      "element.values: ",
      element.values
    );
  });

  return (
    <div className="flex-col-center gap-4">
      <div className="mb-4 mt-24">
        <input
          type="file"
          onChange={handleFileUpload}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
        <h1>NETCDF file Viewer.</h1>
        <p>
          Here you can simply upload your NETCDF files to visualize line charts
          for the first 10 attributes of your file.{" "}
        </p>
      </div>

      {/* Render Charts */}
      <div className="flex-col-center gap-4 mt-12">
        {variables.map((variable) => (
          <div key={variable.name} className="mb-8">
            <h3 className="font-bold mb-2">{variable.name}</h3>
            <LineChart
              width={600}
              height={300}
              data={variable.values.map((value, index) => ({
                name: index,
                value,
              }))}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                label={{
                  value: "Index",
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />
              <YAxis
                label={{
                  value: variable.name,
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
