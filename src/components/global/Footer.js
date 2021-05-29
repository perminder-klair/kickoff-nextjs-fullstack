import styled from 'styled-components';
import Link from 'next/link';
import { AnchorLink } from '@zeiq/web';

import config from '../../utils/config';

const Container = styled.div``;

const Footer = () => (
  <Container className="footer-2  pt-6 md:pt-12">
    <div className="border-t border-solid border-gray-900 mt-4 py-4">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:-mx-4 md:items-center">
          <div className="md:flex-1 md:px-4 text-center md:text-left">
            <p>
              &copy; 2021 <strong>{config.siteName}</strong>
            </p>
          </div>
          <div className="md:flex-1 md:px-4 text-center md:text-right">
            <Link href="/about">
              <AnchorLink className="py-2 px-4 inline-block hover:underline">
                About
              </AnchorLink>
            </Link>
            <Link href="/contact">
              <AnchorLink className="py-2 px-4 inline-block hover:underline">
                Contact
              </AnchorLink>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Footer;
