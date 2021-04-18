import { ApolloServer } from 'apollo-server-micro';
import connectDatabase from '../../graphql/utils/mongoose';
import config from '../../graphql/utils/config';
import { typeDefs, resolvers } from '../../graphql/utils/graphql';
import { isAuthenticated } from '../../graphql/utils/auth';

const cors = require('micro-cors')();

connectDatabase(config.get('mongodb'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: async ({ req }) => ({
    user: await isAuthenticated(req),
  }),
});

const optionsHandler = (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  // eslint-disable-next-line consistent-return
  return server.createHandler({ path: '/api' })(req, res);
};

module.exports = cors(optionsHandler);
