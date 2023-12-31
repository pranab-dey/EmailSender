/**
 * Load variables from env
 */

const loggerName = process.env.LOGGER_NAME;
const env = process.env.NODE_ENV || 'local';
const appPort = process.env.APP_PORT || 4000;
const logLevel = process.env.LOG_LEVEL;
const host = process.env.HOST || 'localhost';

const apiRateLimitInterval = process.env.API_RATE_LIMIT_INTERVAL_IN_MIN;
const apiMaxRequestLimit = process.env.API_MAX_REQUEST_LIMIT;

const mongodbHost = process.env.MONGO_DB_HOST;
const mongodbDBName = process.env.MONGO_DB_NAME;
const mongoDBUserName = process.env.MONGO_DB_USERNAME;
const mongoDBPassword = process.env.MONGO_DB_PASSWORD;
const mongoDBPort = process.env.MONGO_DB_PORT;

const batchSize = process.env.EMAIL_QUEUE_BATCH_SIZE;

const emailId = process.env.SENDER_EMAIL;
const emailPassword = process.env.SENDER_EMAIL_PASSWORD;

const redisUri = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;
const redisPort = process.env.REDIS_PORT;

/**
 * Expose variables so that other modules can use them
 */

const variables = {
  loggerName,
  env,
  appPort,
  logLevel,
  host,
  apiRateLimitInterval,
  apiMaxRequestLimit,
  mongodbHost,
  mongodbDBName,
  mongoDBUserName,
  mongoDBPassword,
  mongoDBPort,
  batchSize,
  emailId,
  emailPassword,
  redisUri,
  redisPort,
};

module.exports = variables;
