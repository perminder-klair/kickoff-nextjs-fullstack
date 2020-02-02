const sanityClient = require('@sanity/client');

module.exports = sanityClient({
  projectId: 'quxgadtd', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
