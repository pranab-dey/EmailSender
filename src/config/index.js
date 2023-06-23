'use strict';

/**
 * Load Dependencies
 */
const loggerOptions = require('./loggerOptions');
const { connectDBwithRetry } = require('./mongodb');
const { multerUpload } = require('./multer');
const { RedisUri, RedisPort } = require('./redis');
const emailQueue = require('./emailQueue');
const transporter = require('./transporter');

/**
 * Expose to use in other files
 */
module.exports = {
  loggerOptions,
  connectDBwithRetry,
  multerUpload,
  RedisUri,
  RedisPort,
  emailQueue,
  transporter,
};
