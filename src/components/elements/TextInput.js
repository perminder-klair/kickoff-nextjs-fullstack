import React from 'react';

import Label from './Label';

const TextInput = ({ name, label, error, ...props }) => (
  <div className="relative">
    <Label htmlFor={name}>{label}</Label>
    <input
      type="text"
      id={name}
      name={name}
      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      {...props}
    />
    {error && <p className="mt-0 text-sm text-red-500">{error}</p>}
  </div>
);

export default TextInput;
