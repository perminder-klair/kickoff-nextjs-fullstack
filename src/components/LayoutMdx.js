import styled from 'styled-components';
import Layout from './Layout';

const Container = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.75rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

const LayoutMdx = ({ children }) => (
  <Layout>
    <Container>{children}</Container>
  </Layout>
);

export default LayoutMdx;
