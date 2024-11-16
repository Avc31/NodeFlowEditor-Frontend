// ImageNode.js
import React from 'react';
import BaseNode from './baseNode';

export const ImageNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    label="Image"
    options={['JPEG', 'PNG', 'GIF']}
    handleLeft={false}
    handleRight={true}
  />
);
