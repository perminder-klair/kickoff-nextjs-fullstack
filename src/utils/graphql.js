import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import UsersSchema from '../users/schema';
import UsersResolvers from '../users/resolvers';

export const typeDefs = mergeTypes([UsersSchema]);
export const resolvers = mergeResolvers([UsersResolvers]);
