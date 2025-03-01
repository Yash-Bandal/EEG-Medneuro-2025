// // import React, { useState } from "react";
// // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// // import Papa from "papaparse";

// // const csvFiles = {
// //   "Active 2-Back": "/A2B_performance_metrics.csv",
// //   "Active 3-Back": "/A3B_performance_metrics.csv",
// //   "Sham 2-Back": "/S2B_performance_metrics.csv",
// //   "Sham 3-Back": "/S3B_performance_metrics.csv",
// // };

// // function App() {
// //   const [selectedFile, setSelectedFile] = useState("Active 2-Back");
// //   const [data, setData] = useState([]);

// //   const handleFileChange = (event) => {
// //     const selected = event.target.value;
// //     setSelectedFile(selected);
// //     loadCSV(csvFiles[selected]);
// //   };

// //   const loadCSV = (filePath) => {
// //     fetch(filePath)
// //       .then((response) => response.text())
// //       .then((csvText) => {
// //         Papa.parse(csvText, {
// //           header: true,
// //           dynamicTyping: true,
// //           complete: (result) => setData(result.data),
// //         });
// //       });
// //   };

// //   // Load the default CSV file initially
// //   React.useEffect(() => {
// //     loadCSV(csvFiles[selectedFile]);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
// //         <h1 className="text-2xl font-bold mb-4">EEG Dashboard</h1>

// //         <select
// //           className="p-2 border rounded mb-4"
// //           value={selectedFile}
// //           onChange={handleFileChange}
// //         >
// //           {Object.keys(csvFiles).map((key) => (
// //             <option key={key} value={key}>{key}</option>
// //           ))}
// //         </select>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {/* Accuracy Chart */}
// //           <div className="bg-white p-4 rounded-lg shadow">
// //             <h2 className="text-lg font-semibold">Accuracy Over Time</h2>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <LineChart data={data}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="Time" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Line type="monotone" dataKey="Accuracy" stroke="#4CAF50" strokeWidth={2} />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </div>

// //           {/* Reaction Time Chart */}
// //           <div className="bg-white p-4 rounded-lg shadow">
// //             <h2 className="text-lg font-semibold">Reaction Time Over Time</h2>
// //             <ResponsiveContainer width="100%" height={300}>
// //               <LineChart data={data}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="Time" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Line type="monotone" dataKey="Mean Correct RT" stroke="#FF9800" strokeWidth={2} />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";
// import Papa from "papaparse";

// const csvFiles = {
//   "Active 2-Back": "/A2B_performance_metrics.csv",
//   "Active 3-Back": "/A3B_performance_metrics.csv",
//   "Sham 2-Back": "/S2B_performance_metrics.csv",
//   "Sham 3-Back": "/S3B_performance_metrics.csv",
// };

// function App() {
//   const [selectedFile, setSelectedFile] = useState("Active 2-Back");
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     const selected = event.target.value;
//     setSelectedFile(selected);
//     loadCSV(csvFiles[selected]);
//   };

//   const loadCSV = (filePath) => {
//     setLoading(true);
//     setError(null);
//     fetch(filePath)
//       .then((response) => response.text())
//       .then((csvText) => {
//         Papa.parse(csvText, {
//           header: true,
//           dynamicTyping: true,
//           complete: (result) => {
//             setData(result.data);
//             setLoading(false);
//           },
//           error: (err) => {
//             setError("Error parsing CSV file");
//             setLoading(false);
//           }
//         });
//       })
//       .catch(() => {
//         setError("Error loading file");
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     loadCSV(csvFiles[selectedFile]);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-4">EEG Dashboard</h1>
        
//         <select
//           className="p-2 border rounded mb-4"
//           value={selectedFile}
//           onChange={handleFileChange}
//         >
//           {Object.keys(csvFiles).map((key) => (
//             <option key={key} value={key}>{key}</option>
//           ))}
//         </select>

//         {loading && <p>Loading data...</p>}
//         {error && <p className="text-red-500">{error}</p>}

//         <div className="bg-white p-4 rounded-lg shadow">
//           <h2 className="text-lg font-semibold">Accuracy & Reaction Time Over Time</h2>
//           <ResponsiveContainer width="100%" height={400}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="Time" />
//               <YAxis yAxisId="left" label={{ value: "Accuracy (%)", angle: -90, position: "insideLeft" }} />
//               <YAxis yAxisId="right" orientation="right" label={{ value: "Reaction Time (s)", angle: -90, position: "insideRight" }} />
//               <Tooltip />
//               <Legend />
//               <Line yAxisId="left" type="monotone" dataKey="Accuracy" stroke="#4CAF50" strokeWidth={2} />
//               <Line yAxisId="right" type="monotone" dataKey="Mean Correct RT" stroke="#FF9800" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


//diff
import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import CombinedTrendChart from "./components/CombinedTrendChart";
import Papa from "papaparse";

const csvFiles = {
  Active: {
    "Active 2-Back": "/A2B_performance_metrics.csv",
    "Active 3-Back": "/A3B_performance_metrics.csv",
  },
  Sham: {
    "Sham 2-Back": "/S2B_performance_metrics.csv",
    "Sham 3-Back": "/S3B_performance_metrics.csv",
  },
};

const participantLists = {
  Active: [
    "Participant1",
    "Participant2",
    "Participant3",
    "Participant4",
    "Participant5",
    "Participant6",
    "Participant7",
  ],
  Sham: [
    "Participant8",
    "Participant9",
    "Participant10",
    "Participant11",
    "Participant12",
    "Participant13",
    "Participant14",
  ],
};

const timeMapping = {
  "beforeitbs": 0,
  "after10minitbs": 10,
  "after30minitbs": 30,
};

const App = () => {
  const [group, setGroup] = useState("Active");
  const [task, setTask] = useState("Active 2-Back");
  const [participant, setParticipant] = useState(participantLists["Active"][0]);
  const [participantData, setParticipantData] = useState([]);

  useEffect(() => {
    setParticipant(participantLists[group][0]);
  }, [group]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvFiles[group][task]);
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        dynamicTyping: true,
        complete: (parsedData) => {
          const allData = parsedData.data;
          const filtered = allData.filter((row) => row.Participant === participant);
          // Sort rows by our custom timeMapping
          const sorted = filtered.sort((a, b) => {
            const tA = timeMapping[a["Time Point"].toLowerCase()] ?? 0;
            const tB = timeMapping[b["Time Point"].toLowerCase()] ?? 0;
            return tA - tB;
          });
          setParticipantData(sorted);
        },
      });
    };
    fetchData();
  }, [group, task, participant]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">EEG Dashboard</h1>

      <Dropdown
        label="Select Group"
        options={Object.keys(csvFiles)}
        selected={group}
        setSelected={(value) => {
          setGroup(value);
          const firstTask = Object.keys(csvFiles[value])[0];
          setTask(firstTask);
        }}
      />

      <Dropdown
        label="Select Task"
        options={Object.keys(csvFiles[group])}
        selected={task}
        setSelected={setTask}
      />

      <Dropdown
        label="Select Participant"
        options={participantLists[group]}
        selected={participant}
        setSelected={setParticipant}
      />

      <CombinedTrendChart data={participantData} />
    </div>
  );
};

export default App;
