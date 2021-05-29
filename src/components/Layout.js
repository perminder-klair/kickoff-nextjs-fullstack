import styled from 'styled-components';
import Header from './global/Header';
import Footer from './global/Footer';

const Container = styled.div.attrs({ className: 'container mx-auto' })``;

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
