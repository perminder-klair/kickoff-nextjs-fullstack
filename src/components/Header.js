import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

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
          <Image src="/images/dummy.jpg" height="90" width="90" alt="dummy" />
        </a>
      </Link>
    </NavTitle>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <Link href="/">
          <a className="navbar-item">Home</a>
        </Link>
        <Link href="/about">
          <a className="navbar-item">About </a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
