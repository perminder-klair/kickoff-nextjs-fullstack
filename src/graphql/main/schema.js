import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  scalar Date

  type Success {
    success: Boolean
  }

  type Query {
    hello: String
  }

  type UploadResult {
    signedUrl: String!
    fileUrl: String!
  }

  type Mutation {
    getSignedUploadUrl(fileKey: String!, fileType: String!): UploadResult
  }
`;

export default typeDefs;
