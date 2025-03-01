import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from "recharts";

const ScatterPlot = ({ data }) => {
  // Extract Accuracy & Reaction Time
  const scatterData = data.map((row) => ({
    accuracy: parseFloat(row["Accuracy"]), // Adjust key name if needed
    reactionTime: parseFloat(row["Mean Correct RT"]), // Adjust key name if needed
  }));

  // Calculate Regression Line (Basic Linear Approximation)
  const minAccuracy = Math.min(...scatterData.map((d) => d.accuracy));
  const maxAccuracy = Math.max(...scatterData.map((d) => d.accuracy));
  const avgReactionTime = scatterData.reduce((sum, d) => sum + d.reactionTime, 0) / scatterData.length;

  const regressionLine = [
    { accuracy: minAccuracy, reactionTime: avgReactionTime },
    { accuracy: maxAccuracy, reactionTime: avgReactionTime },
  ];

  return (
    <div className="p-4 bg-white shadow rounded text-center">
      <h2 className="text-lg font-bold mb-2">Accuracy vs. Reaction Time</h2>

      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="accuracy" name="Accuracy (%)" type="number" />
          <YAxis dataKey="reactionTime" name="Reaction Time (s)" type="number" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          {/* Scatter Points */}
          <Scatter name="Data Points" data={scatterData} fill="royalblue" />

          {/* Regression Line */}
          <Line
            type="monotone"
            data={regressionLine}
            dataKey="reactionTime"
            stroke="red"
            strokeWidth={2}
            dot={false}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

// // export default ScatterPlot;
// import React from "react";
// import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from "recharts";
// import { regressionLinear } from "d3-regression";

// const EEGScatterPlot = ({ data }) => {
//   // Compute Linear Regression
//   const sortedData = [...data].sort((a, b) => a.x - b.x);
//   const regression = regressionLinear().x(d => d.x).y(d => d.y)(sortedData);
//   const trendLine = regression.map(([x, y]) => ({ x, y }));

//   return (
//     <div className="p-4 bg-white rounded-2xl shadow-md">
//       <h2 className="text-xl font-bold">EEG Scatter Plot with Trend Line</h2>
//       <ResponsiveContainer width="100%" height={400}>
//         <ScatterChart>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="x" type="number" name="Accuracy" />
//           <YAxis dataKey="y" type="number" name="Reaction Time" />
//           <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//           <Scatter name="EEG Data" data={data} fill="#3182CE" />

//           {/* Trend Line */}
//           <Scatter name="Trend Line" data={trendLine} fill="none">
//             <Line type="monotone" dataKey="y" stroke="red" strokeWidth={2} dot={false} />
//           </Scatter>
//         </ScatterChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default EEGScatterPlot;
