import { generateSignedUrl } from '../utils/aws-s3';
import { isLoggedIn } from '../utils/auth';
import logger from '../utils/logger';

export default {
  Query: {
    hello: () => {
      logger.info('This is a hello query!');

      return 'Hello world!';
    },
  },
  Mutation: {
    getSignedUploadUrl: async (root, args, ctx) => {
      await isLoggedIn(ctx);

      return generateSignedUrl({
        fileKey: args.fileKey,
        fileType: args.fileType,
      });
    },
  },
};
