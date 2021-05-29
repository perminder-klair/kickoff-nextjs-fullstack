import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloProvider } from '@apollo/client/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tailwindcss/tailwind.css';

import withReduxStore from '../utils/with-redux-store';
import apolloClient from '../utils/apolloClient';
import theme, { GlobalStyle } from '../utils/theme';
import config from '../utils/config';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <StoreProvider store={reduxStore}>
          <ApolloProvider client={apolloClient}>
            <Head>
              <title>{config.siteName}</title>
            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
          </ApolloProvider>
        </StoreProvider>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
