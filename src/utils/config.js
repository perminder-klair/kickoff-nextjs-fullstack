const config = {
  debug: process.env.NODE_ENV === 'development',
  siteName: process.env.NEXT_PUBLIC_ENV_SITE_NAME || 'My Site',
  projectKey: 'kickoff-nextjs-apollo',
  graphQlUri:
    process.env.NEXT_PUBLIC_ENV_GRAPHQL_URI ||
    'http://localhost:3000/api/graphql',
  graphQlUriDev: 'http://localhost:3000/api/graphql',

  email: 'no-reply@site.com',
  telephone: '+1123123123',
  address: 'London, UK',
};

export default config;
