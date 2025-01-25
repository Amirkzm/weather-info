/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

type CustomBarChartsProps = {
  title: string;
  inputData: any;
  dataKey: string;
};

const CustomBarCharts: React.FC<CustomBarChartsProps> = ({
  title,
  inputData,
  dataKey,
}) => {
  const data = Object.keys(inputData)
    .map((key) => ({
      name: key,
      value: inputData[key],
    }))
    .filter((item) => item.value !== null); // Filter out null values

  return (
    <div>
      <h1 className="text-2xl">{title}</h1>
      <BarChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          label={{ value: "Day", position: "insideBottomRight", offset: -2 }}
        />
        <YAxis label={{ value: dataKey, angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default CustomBarCharts;
