// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import logger from '../../graphql/utils/logger';

export default (req, res) => {
  logger.info('This is a hello API!');

  res.status(200).json({ name: 'John Doe' });
};
