import 'twin.macro';
import { NextSeo } from 'next-seo';
import { useStoreState } from 'easy-peasy';
import { gql, useQuery } from '@apollo/client';
import { Heading } from '@zeiq/web';

import config from '../../utils/config';
import Layout from '../../components/Layout';

const meQuery = gql`
  query me {
    me {
      id
      email
    }
  }
`;

const Account = () => {
  const apiData = useQuery(meQuery, { fetchPolicy: 'cache-and-network' });
  const isLoggedIn = useStoreState((state) => state.isLoggedIn.value);
  const me = apiData.data ? apiData.data.me : {};

  console.log('isLoggedIn', isLoggedIn);
  console.log('me data', me);

  return (
    <Layout>
      <NextSeo title="My Account" url={`${config.siteUrl}/auth/account`} />
      <section tw="text-gray-600 body-font">
        <div tw="container px-5 py-24 mx-auto">
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
