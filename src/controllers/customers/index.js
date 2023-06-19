'use strict';

/**
 * Load Dependencies
 */
const { getCustomers } = require('./getCustomers');
const { createCustomers } = require('./createCustomers');

/**
 * Expose to use in other files
 */
module.exports = {
	getCustomers,
	createCustomers,
};
