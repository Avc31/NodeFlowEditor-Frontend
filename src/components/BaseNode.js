import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, data, label, options, handleLeft, handleRight, children }) => {
  const [currName, setCurrName] = useState(data?.name || id.replace('custom-', ''));
  const [currType, setCurrType] = useState(data?.type || options[0]);

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setCurrType(e.target.value);

  const renderHandles = (handles, type, position) => {
    
    if (handles === true) {
      return (
        <Handle
          type={type}
          position={position}
          id={`${id}-${type}`}
          className="w-3 h-3 bg-blue-500 border-blue-300 hover:scale-110 transition-transform"
        />
      );
    }

    
    if (Array.isArray(handles)) {
      return handles.map((handle) => (
        <Handle
          key={handle.id}
          type={type}
          position={position}
          id={handle.id}
          style={{
            top: `${handle.position}%`,
            background: type === 'target' ? 'red' : 'green',
          }}
        />
      ));
    }

    return null;
  };

  return (
    <div className="bg-gray-800 text-gray-200 w-52 h-28 rounded-lg shadow-md border border-gray-700 flex flex-col justify-between p-3 relative">
      
      {renderHandles(handleLeft, 'target', Position.Left)}

      
      <div className="flex flex-col space-y-2">
        <span className="text-blue-400 text-sm font-semibold">{label}</span>
        {children || (
          <>
            <label className="flex flex-col text-xs">
              <span className="text-gray-400">Name:</span>
              <input
                type="text"
                value={currName}
                onChange={handleNameChange}
                className="mt-1 p-1 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
              />
            </label>
            <label className="flex flex-col text-xs">
              <span className="text-gray-400">Type:</span>
              <select
                value={currType}
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
          </>
        )}
      </div>

      
      {renderHandles(handleRight, 'source', Position.Right)}
    </div>
  );
};

export default BaseNode;
