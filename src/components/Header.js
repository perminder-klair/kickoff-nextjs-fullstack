import Link from 'next/link';
import styled from 'styled-components';
import config from '../utils/config';

const NavTitle = styled.div`
  align-self: center;
  a {
    font-weight: 900;
    :hover {
      color: #000;
    }
  }
`;

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <NavTitle className="navbar-brand">
      <Link href="/">
        <a className="navbar-item has-text-black is-size-4">
          <span>{config.siteName}</span>
        </a>
      </Link>
    </NavTitle>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <Link href="/">
          <a className="navbar-item">Home</a>
        </Link>
        <Link href="/about">
          <a className="navbar-item">About</a>
        </Link>
        <Link href="/contact">
          <a className="navbar-item">Contact</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
