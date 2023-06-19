/**
 * Load Dependencies
 */
const { errorResponseHandler } = require('./errorResponseHandler');
const { successResponseHandler } = require('./successResponseHandler');

/**
 * Expose to use in other files
 */
module.exports = {
	errorResponseHandler,
	successResponseHandler,
};
