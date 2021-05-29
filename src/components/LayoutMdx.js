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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <Container>{children}</Container>
      </div>
    </section>
  </Layout>
);

export default LayoutMdx;
