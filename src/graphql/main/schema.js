import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar Date

  type Success {
    success: Boolean
  }

  type Query {
    hello: String
  }
`;

export default typeDefs;
