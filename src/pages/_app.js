import Head from 'next/head';
import { ZeiqProvider } from '@zeiq/web';
import { StoreProvider } from 'easy-peasy';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ApolloProvider } from '@apollo/client/react';
import NProgress from 'nprogress';
import Router from 'next/router';

import withReduxStore from '../utils/with-redux-store';
import apolloClient from '../utils/apolloClient';
import GlobalStyles from '../utils/styles';
import config from '../utils/config';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <script async src="/scripts.js" />
      </Head>
      <DefaultSeo
        titleTemplate={`%s | ${config.siteName}`}
        description="Free Images Gallery Builder"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: config.siteUrl,
          site_name: config.siteName,
        }}
        twitter={{
          handle: '@galllery',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <ZeiqProvider>
        <NextThemeProvider attribute="class" defaultTheme="light">
          <StoreProvider store={reduxStore}>
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </StoreProvider>
        </NextThemeProvider>
      </ZeiqProvider>
    </>
  );
}

export default withReduxStore(MyApp);
