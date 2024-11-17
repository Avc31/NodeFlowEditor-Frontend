import React from 'react';
import BaseNode from '../components/BaseNode';

export const InputNode = ({ id, data }) => {
  const options = ['Text', 'File'];

  return (
    <BaseNode
      id={id}
      data={{
        name: data?.inputName || id.replace('customInput-', 'input_'),
        type: data?.inputType || 'Text',
      }}
      label="Input"
      options={options}
      handleRight
    />
  );
};
