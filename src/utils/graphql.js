import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import MainSchema from '../main/schema';
import MainResolvers from '../main/resolvers';
import UsersSchema from '../users/schema';
import UsersResolvers from '../users/resolvers';

export const typeDefs = mergeTypes([MainSchema, UsersSchema]);
export const resolvers = mergeResolvers([MainResolvers, UsersResolvers]);
