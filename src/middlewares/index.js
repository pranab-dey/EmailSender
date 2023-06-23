'use strict';

/**
 * Load Dependencies
 */
const notFound = require('./notFound');
const validateRequest = require('./validateRequest');
const validateUpload = require('./validateUpload');

/**
 * Expose to use in other files
 */
module.exports = {
  notFound,
  validateRequest,
  validateUpload,
};
