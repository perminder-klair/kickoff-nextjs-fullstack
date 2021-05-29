/* eslint-disable no-undef */
import convict from 'convict';
import fs from 'fs';
import dotenv from 'dotenv';

// to load .env file
dotenv.config();

const conf = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  webAppUrl: {
    doc: 'Web app url',
    format: String,
    default: 'http://www.site.com',
    env: 'WEB_APP_URL',
  },
  mongodb: {
    doc: 'URL to mongodb.',
    format: String,
    default: '',
    env: 'MONGODB',
  },
  adminEmail: {
    doc: 'Admin email ',
    format: String,
    default: 'no-reply@site.com',
    env: 'ADMIN_EMAIL',
  },
  jwtSecret: {
    doc: 'JWT secret.',
    format: String,
    default: 'MY_SITE_SECRET',
    env: 'JWTSECRET',
  },
  mailer: {
    user: {
      doc: 'Mailer user.',
      format: String,
      default: '',
    },
    password: {
      doc: 'Mailer password.',
      format: String,
      default: '',
    },
  },
});

const env = conf.get('env');
try {
  const path = `${__dirname}/${env}.json`;

  console.log('trying to access %s', path);
  fs.accessSync(path, fs.F_OK);

  conf.loadFile(path);
} catch (error) {
  console.log("file doesn't exist, loading defaults");
}

conf.validate({ allowed: 'strict' });

export default conf;
