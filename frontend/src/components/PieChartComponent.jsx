import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Full Time", value: 592 },
  { name: "Part Time", value: 267 },
];
const COLORS = ["#6366F1", "#CBD5E1"];

const PieChartComponent = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-1/3">
      <h3 className="text-md font-semibold">Working Type</h3>
      <PieChart width={200} height={200}>
        <Pie data={data} cx={100} cy={100} innerRadius={40} outerRadius={60} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
