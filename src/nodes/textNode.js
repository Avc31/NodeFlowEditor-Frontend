import React, { useState, useEffect } from 'react';
import BaseNode from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

  // Adjust the size of the node dynamically based on text length
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 80 });

  useEffect(() => {
    // Adjust the size dynamically based on text length
    const width = Math.max(200, currText.length * 8); // 8px per character
    const height = Math.max(80, Math.ceil(currText.length / 25) * 40); // Increase height every 25 characters
    setNodeSize({ width, height });

    // Extract variables within `{{ }}` and update handles
    const matches = [...currText.matchAll(/\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g)].map(
      (match) => match[1]
    );
    setVariables(matches);
  }, [currText]);

  const handleTextChange = (e) => setCurrText(e.target.value);

  // Handle positions for left handles
  const handleLeft = variables.map((variable, index) => ({
    id: `${id}-${variable}`,
    position: (index * 20 + 20) / nodeSize.height * 100, // Dynamic handle positions
  }));

  // Define the right handle at the center
  const handleRight = [{ id: `${id}-output`, position: 50 }];

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text Node"
      options={[]} // No options for TextNode
      style={{
        width: nodeSize.width,
        height: nodeSize.height,
      }}
      handleLeft={handleLeft}
      handleRight={handleRight}
    >
      {/* Custom content inside TextNode */}
      <div className="flex flex-col space-y-2">
        <label className="flex flex-col text-xs">
          <span className="text-gray-400">Text:</span>
          <textarea
            value={currText}
            onChange={handleTextChange}
            className="mt-1 p-2 text-sm bg-gray-700 border border-gray-600 rounded-md focus:ring focus:ring-blue-500 focus:outline-none resize-none"
            style={{
              height: '60px',
              width: '100%',
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
