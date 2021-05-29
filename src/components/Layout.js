import styled from 'styled-components';
import Header from './global/Header';
import Footer from './global/Footer';

const Container = styled.div.attrs({ className: 'container mx-auto' })``;

const Layout = ({ children }) => (
  <Container className="">
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
