// UserInputNode.js
import React from 'react';
import BaseNode from '../components/BaseNode';

export const UserInputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    label="User Input"
    options={['Text', 'Number']}
    handleLeft={false}
    handleRight={true}
  />
);
