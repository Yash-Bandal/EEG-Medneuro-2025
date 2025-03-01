import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CombinedTrendChart = ({ data }) => {
  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">Accuracy & Reaction Time Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time Point" />
          {/* Left Y-axis for Accuracy */}
          <YAxis 
            yAxisId="left" 
            label={{ value: "Accuracy", angle: -90, position: "insideLeft" }} 
          />
          {/* Right Y-axis for Reaction Time */}
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            label={{ value: "Reaction Time (ms)", angle: -90, position: "insideRight" }} 
          />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="Accuracy" 
            stroke="#8884d8" 
            strokeWidth={2} 
            yAxisId="left"
            name="Accuracy"
          />
          <Line 
            type="monotone" 
            dataKey="Mean Correct RT" 
            stroke="#82ca9d" 
            strokeWidth={2} 
            yAxisId="right"
            name="Reaction Time"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CombinedTrendChart;
