import { createLogger, format, transports } from 'winston';

import config from './config';

require('winston-mongodb');

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.metadata(), format.json()),
  transports: [
    new transports.MongoDB({
      db: config.get('mongodb'),
    }),
  ],
});

if (config.get('env') !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}

export default logger;
