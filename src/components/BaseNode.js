// baseNode.js
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, data, label, options, handleLeft, handleRight }) => {
  const [currName, setCurrName] = useState(data?.name || id.replace('custom-', ''));
  const [currType, setCurrType] = useState(data?.type || options[0]);

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setCurrType(e.target.value);

  return (
    <div style={{ width: 200, height: 100, border: '1px solid black' }}>
      {handleLeft && (
        <Handle
          type="target"
          position={Position.Left}
          id={`${id}-left`}
        />
      )}
      <div>
        <span>{label}</span>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Type:
          <select value={currType} onChange={handleTypeChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      {handleRight && (
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-right`}
        />
      )}
    </div>
  );
};

export default BaseNode;
