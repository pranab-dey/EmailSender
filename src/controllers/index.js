'use strict';

/**
 * Load Dependencies
 */
const { health } = require('./health');
const { getCustomers, createCustomers } = require('./customers');

/**
 * Expose to use in other files
 */
module.exports = {
	health,
	getCustomers,
	createCustomers,
};
