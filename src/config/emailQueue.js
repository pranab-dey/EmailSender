/**
 * Load Dependencies
 */
const Queue = require('bull');
const { redisUri } = require('../variables');

const emailQueue = new Queue('emailQueue', redisUri);

module.exports = emailQueue;
