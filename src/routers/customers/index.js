'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */

const { getCustomers, createCustomers } = require('../controllers');
const { validateRequest } = require('../middlewares');

/**
 * Create Router
 */

const router = express.Router();

/**
 * customers related routes
 */
router.get('/customers', getCustomers).post(
	'/customers',
	[
		// validateRequest('checkUserId', 'headers'),
		// validateRequest('createGenre'),
	],
	createCustomers
);

module.exports = router;
