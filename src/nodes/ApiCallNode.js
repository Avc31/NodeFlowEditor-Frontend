// ApiCallNode.js
import React from 'react';
import BaseNode from './baseNode';

export const ApiCallNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    label="API Call"
    options={['GET', 'POST']}
    handleLeft={true}
    handleRight={true}
  />
);
