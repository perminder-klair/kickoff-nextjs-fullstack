import 'twin.macro';
import Link from 'next/link';
import { AnchorLink } from '@zeiq/web';

import ToggleDarkMode from './ToggleDarkMode';
import config from '../../utils/config';

const Footer = () => (
  <div tw="pt-6 md:pt-12">
    <div tw="border-t border-solid border-gray-900 mt-4 py-4">
      <div tw="container px-4 mx-auto">
        <div tw="md:flex md:-mx-4 md:items-center">
          <div tw="md:flex-1 md:px-4 text-center md:text-left">
            <p>
              &copy; 2021 <strong>{config.siteName}</strong>
            </p>
          </div>
          <div tw="md:flex-1 md:px-4 text-center md:text-right">
            <Link href="/about">
              <AnchorLink tw="py-2 px-4 inline-block hover:underline">
                About
              </AnchorLink>
            </Link>
            <Link href="/contact">
              <AnchorLink tw="py-2 px-4 inline-block hover:underline">
                Contact
              </AnchorLink>
            </Link>
            <ToggleDarkMode />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
