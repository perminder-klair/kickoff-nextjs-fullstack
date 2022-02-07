import 'twin.macro';
import styled from 'styled-components';
import '@tailwindcss/typography';

import Layout from './Layout';

const Container = styled.div``;

const LayoutMdx = ({ children }) => (
  <Layout>
    <section tw="text-gray-600 ">
      <div tw="container px-5 py-24 mx-auto">
        <Container>{children}</Container>
      </div>
    </section>
  </Layout>
);

export default LayoutMdx;
