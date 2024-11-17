// ConditionNode.js
import React from 'react';
import BaseNode from '../components/BaseNode';

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
