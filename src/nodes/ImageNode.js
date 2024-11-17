// ImageNode.js
import React from 'react';
import BaseNode from '../components/BaseNode';

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
