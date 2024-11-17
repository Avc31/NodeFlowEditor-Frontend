import React from 'react';
import BaseNode from '../components/BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      label="LLM"
      options={[]} // No options required for this node
      handleLeft={[
        { id: `${id}-system`, position: 33 },
        { id: `${id}-prompt`, position: 66 },
      ]}
      handleRight={[
        { id: `${id}-response`, position: 50 },
      ]}
    >
      <div className="text-gray-300 text-xs text-center mt-1">
        This is a Language Learning Model node.
      </div>
    </BaseNode>
  );
};
