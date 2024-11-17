import React, { useState } from 'react';
import BaseNode from '../components/BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  // Define options for the output type
  const options = ['Text', 'Image'];

  // Define the left handle
  const handleLeft = [
    { id: `${id}-value`, position: 50 }, // Single input handle at the center
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      label="Output"
      options={options}
      handleLeft={handleLeft}
      handleRight={[]} // No right handles for OutputNode
    >
      {/* Custom children content */}
      <div className="flex flex-col space-y-2">
        {/* Name Input */}
        <label className="flex flex-col text-xs">
          <span className="text-gray-400">Name:</span>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="mt-1 p-1 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </label>

        {/* Type Select */}
        <label className="flex flex-col text-xs">
          <span className="text-gray-400">Type:</span>
          <select
            value={outputType}
            onChange={handleTypeChange}
            className="mt-1 p-1 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          >
            {options.map((option) => (
              <option key={option} value={option} className="text-gray-800">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
