import { generateSignedUrl } from '../utils/aws-s3';
import { isLoggedIn } from '../utils/auth';
import logger from '../utils/logger';
import mailer, { renderTemplate } from '../utils/mailer';

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
    contact: async (root, args) => {
      console.log('args', args);

      const [subject, html, text] = renderTemplate('welcome', {
        name: 'Parminder',
      });

      const result = await mailer.sendMail({
        from: 'perminder.klair@gmail.com',
        to: 'perminder.klair@gmail.com',
        subject: subject,
        text: text,
        html: html,
      });
      console.log('mail sent', result);

      return { success: true };
    },
  },
};
