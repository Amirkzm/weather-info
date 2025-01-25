/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type CustomLineChartProps = {
  title: string;
  inputData: any;
  dataKey: string;
};

const CustomLineChart: React.FC<CustomLineChartProps> = ({
  title,
  inputData,
  dataKey,
}) => {
  console.log("inputData", inputData);
  console.log("dataKey", dataKey);
  console.log("inputdata.daily[dataKey]", inputData[dataKey]);
  console.log("inputdata", inputData);
  const data = Object.keys(inputData)
    .map((key) => ({
      name: key,
      value: inputData[key],
    }))
    .filter((item) => item.value !== null); // Filter out null values

  console.log("data", data);

  return (
    <div>
      <h1 className="text-2xl">{title}</h1>
      <LineChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          label={{ value: "Day", position: "insideBottomRight", offset: -2 }}
        />
        <YAxis label={{ value: dataKey, angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default CustomLineChart;
