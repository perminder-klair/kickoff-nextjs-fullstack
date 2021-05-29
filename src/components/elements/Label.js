import React from 'react';

const Label = ({ children, ...props }) => (
  <label className="leading-7 text-sm text-gray-600" {...props}>
    {children}
  </label>
);

export default Label;
