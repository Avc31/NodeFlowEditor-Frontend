import React from 'react';
import BaseNode from './baseNode';

export const MathNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    label="Math"
    options={['Add', 'Subtract', 'Multiply', 'Divide']}
    handleLeft={true}
    handleRight={true}
  />
);
