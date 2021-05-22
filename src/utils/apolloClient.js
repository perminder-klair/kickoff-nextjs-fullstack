import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import Cookies from 'js-cookie';

import { getAppCookies } from './auth';
import config from './config';

const httpLink = createHttpLink({
  uri: config.debug ? config.graphQlUriDev : config.graphQlUri,
  credentials: 'same-origin',
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get('token');
  // console.log('token', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token || '',
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

const apolloClientSsr = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const apolloQuerySsr = async ({
  ctx,
  query,
  variables = {},
  skipRedirect = false,
}) => {
  const { req } = ctx;

  const { token } = getAppCookies(req);
  if (!token && skipRedirect === false) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  try {
    const { data } = await apolloClientSsr.query({
      context: {
        headers: {
          Authorization: token || '',
        },
      },
      query,
      variables,
    });
    return data;
  } catch (e) {
    console.log('e', e.message);
    return {};
  }
};

export default client;
