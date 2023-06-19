'use strict';

const { errorResponseHandler, successResponseHandler } = require('../helpers');
const { getAllGenres, createGenre } = require('../services');

exports.createCustomers = async (req, res) => {
	try {
		const { name, description, isActive } = req.body;
		const response = await createGenre({
			name,
			description,
			isActive,
		});

		return successResponseHandler(
			res,
			response,
			'Genre created successfully!'
		);
	} catch (error) {
		return errorResponseHandler(error, req, res);
	}
};
