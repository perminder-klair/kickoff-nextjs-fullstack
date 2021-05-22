import Link from 'next/link';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Router, { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import config from '../../utils/config';

const NavTitle = styled.div`
  align-self: center;
  a {
    font-weight: 900;
    :hover {
      color: #000;
    }
  }
`;

const Header = () => {
  const router = useRouter();
  const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);
  const setIsLoggedIn = useStoreActions((actions) => actions.isLoggedIn.toggle);
  // console.log('isLoggedIn', isLoggedIn);

  const toggleLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      Cookies.remove('token');
      Router.push('/');
    } else {
      router.push('/auth/login');
    }
  };

  return (
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
          <Link href="/blog">
            <a className="navbar-item">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="navbar-item">Contact</a>
          </Link>
          <Link href="/auth/account">
            <a className="navbar-item">My Account</a>
          </Link>
          <a className="navbar-item" onClick={toggleLogin}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
