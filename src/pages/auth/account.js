import { NextSeo } from 'next-seo';
import { useStoreState } from 'easy-peasy';
import { gql, useQuery } from '@apollo/client';

import config from '../../utils/config';
import Layout from '../../components/Layout';
import { apolloQuerySsr } from '../../utils/apolloClient';
import { Heading } from '../../components/elements';

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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <Heading type="h2">My Account</Heading>
          <p data-cy="check-login">
            {isLoggedIn
              ? `Welcome! You are logged in as: ${me.email}`
              : `You are not logged in!`}
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Account;

export async function getServerSideProps(ctx) {
  const data = await apolloQuerySsr({
    ctx,
    query: meQuery,
    isPrivate: true,
  });
  // console.log('apollo data', data);

  return {
    props: {
      me: data && data.me ? data.me : {},
    },
  };
}
