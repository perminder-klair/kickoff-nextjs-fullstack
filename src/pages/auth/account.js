import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';
import { gql, useQuery } from '@apollo/client';

import config from '../../utils/config';
import Layout from '../../components/Layout';
import { apolloQuerySsr } from '../../utils/apolloClient';

const Section = styled.section`
  p {
    margin-bottom: 1rem;
  }
  .image {
    width: 500px;
    height: auto;
    margin: 0 auto;
    object-position: center;
  }
  .button {
    margin-top: 2rem;
  }
`;

const meQuery = gql`
  query me {
    me {
      id
      email
    }
  }
`;

const Account = ({ me }) => {
  const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);
  const { data } = useQuery(meQuery);

  console.log('isLoggedIn', isLoggedIn);
  console.log('server side data', me);
  console.log('client side data', data);

  return (
    <Layout>
      <NextSeo title="My Account" url={`${config.siteUrl}/auth/account`} />

      <Section className="section">
        <div className="container">
          <h2 className="heading">My Account</h2>
          <div className="columns is-vcentered">
            <div className="column is-12">
              <p>
                {isLoggedIn
                  ? `Welcome! You are logged in as: ${me.email}`
                  : `You are not logged in!`}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Account;

export async function getServerSideProps(ctx) {
  const data = await apolloQuerySsr({
    ctx,
    query: meQuery,
    skipRedirect: false,
  });
  // console.log('apollo data', data);

  return {
    props: {
      me: data.me,
    },
  };
}
