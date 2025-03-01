import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Chart = ({ beforeData, afterData, title, dataKey }) => {
  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Trial Number" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" data={beforeData} dataKey={dataKey} stroke="#ff7300" strokeWidth={2} name="Before iTBS" />
          <Line type="monotone" data={afterData} dataKey={dataKey} stroke="#0088FE" strokeWidth={2} name="After iTBS" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
