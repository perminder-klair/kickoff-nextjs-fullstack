import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export default typeDefs;
