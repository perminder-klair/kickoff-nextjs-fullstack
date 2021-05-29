import React from 'react';
import Link from 'next/link';

const AnchorLink = ({ children, href, ...props }) => (
  <Link href={href}>
    <a
      className="text-base font-medium text-gray-900 hover:text-gray-700"
      {...props}
    >
      {children}
    </a>
  </Link>
);

export default AnchorLink;
