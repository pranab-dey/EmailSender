/**
 * Load Dependencies
 */

const { getAllCustomers, createCustomers } = require('./customers');

/**
 * Expose to use in other files
 */

module.exports = {
	getAllCustomers,
	createCustomers,
};
