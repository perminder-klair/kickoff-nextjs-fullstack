import React from 'react';

const Heading = ({ type, children, ...props }) => {
  if (type === 'h1') {
    return (
      <h1
        className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        {...props}
      >
        {children}
      </h1>
    );
  }
  if (type === 'h2') {
    return (
      <h2
        className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
        {...props}
      >
        {children}
      </h2>
    );
  }

  return (
    <h3 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      {children}
    </h3>
  );
};

export default Heading;
