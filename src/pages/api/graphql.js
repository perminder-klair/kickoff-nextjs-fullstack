import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro';
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

const optionsHandler = (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }
  // eslint-disable-next-line consistent-return
  return server.createHandler({ path: '/api/graphql' })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(optionsHandler);
