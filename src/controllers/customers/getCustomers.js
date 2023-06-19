'use strict';

const { errorResponseHandler, successResponseHandler } = require('../helpers');
const { getAllGenres, createGenre } = require('../services');

exports.getCustomers = async (req, res) => {
	try {
		const response = await getAllGenres();
		return successResponseHandler(
			res,
			response,
			'Successfully fetched genres!'
		);
	} catch (error) {
		return errorResponseHandler(error, req, res);
	}
};
