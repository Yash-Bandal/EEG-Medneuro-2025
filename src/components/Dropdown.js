// import React from "react";

// const Dropdown = ({ label, options, selected, setSelected }) => {
//   return (
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
//       <select
//         className="block w-full p-2 border rounded-md"
//         value={selected}
//         onChange={(e) => setSelected(e.target.value)}
//       >
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Dropdown;



import React from "react";

const Dropdown = ({ label, options, selected, setSelected }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className="mt-1 p-2 border rounded-md w-full"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
