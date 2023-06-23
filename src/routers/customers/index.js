'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */
const { getCustomers, createCustomers } = require('../../controllers');
const { validateRequest, validateUpload } = require('../../middlewares');

/**
 * Create Router
 */
const router = express.Router();

/**
 * customers related routes
 */
router
  .get('/customers', getCustomers)
  .post(
    '/customers',
    [
      validateUpload('csv'),
      validateRequest('customersFile', 'file'),
      validateRequest('createCustomers', 'body'),
    ],
    createCustomers
  );

module.exports = router;
