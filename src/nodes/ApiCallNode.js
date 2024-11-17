// ApiCallNode.js
import React from 'react';
import BaseNode from '../components/BaseNode';

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
