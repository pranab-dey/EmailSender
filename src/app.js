'use strict';

/**
 * Load external dependencies
 */
require('dotenv').config();
require('./processors');
const express = require('express');
const cors = require('cors');
const logger = require('@chaudhryjunaid/express-bunyan-logger');
const rateLimit = require('express-rate-limit');

/**
 * Load custom dependencies
 */
const variables = require('./variables');
const { loggerOptions, connectDBwithRetry } = require('./config');
const routes = require('./routers');
const { notFound } = require('./middlewares');

/**
 * Initialise app with express
 */
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'development') {
  app.use(logger(loggerOptions));
}

/**
 * API rate limit
 */
const limiter = rateLimit({
  windowMs: variables.apiRateLimitInterval * 60 * 1000,
  max: variables.apiMaxRequestLimit,
  standardHeaders: false,
  legacyHeaders: true,
});

/**
 * Apply the rate limiting middleware to all requests
 */
app.use(limiter);
connectDBwithRetry();

/**
 * All routes
 */
app.use('/rest/v1', routes);
app.use(notFound);

/**
 * app.listen(variables.appPort);
 */

/**
 * Expose the app
 */
module.exports = { app };
