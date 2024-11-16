// ConditionNode.js
import React from 'react';
import BaseNode from './baseNode';

export const ConditionNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    label="Condition"
    options={['True', 'False']}
    handleLeft={true}
    handleRight={true}
  />
);
