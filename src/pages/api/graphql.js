import { ApolloServer } from 'apollo-server-micro';
import { makeExecutableSchema } from '@graphql-tools/schema';
import connectDatabase from '../../graphql/utils/mongoose';
import { typeDefs, resolvers } from '../../graphql';
import { isAuthenticated } from '../../graphql/utils/auth';
import apiConfig from '../../graphql/utils/config';

const cors = require('micro-cors')();

connectDatabase(apiConfig.get('mongodb'));

export const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
  context: async ({ req }) => ({
    user: await isAuthenticated(req),
  }),
});
const startServer = server.start();

const optionsHandler = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  await startServer;
  // eslint-disable-next-line consistent-return
  await server.createHandler({ path: '/api/graphql' })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(optionsHandler);
