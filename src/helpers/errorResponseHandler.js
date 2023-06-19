'use strict';

/**
 * Common Error Response Handler
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @returns error
 */

exports.errorResponseHandler = (err, req, res) => {
	const { message, status = 400, data = {}, errors = undefined } = err;
	switch (status) {
		case 400:
			return res.status(400).json({
				status: 'failed',
				data,
				errors,
				message: message || 'Bad request',
			});
		case 401:
			return res.status(401).json({
				status: 'failed',
				data,
				errors,
				message: message || 'Unauthenticated',
			});
		case 404:
			return res.status(404).json({
				status: 'failed',
				data,
				errors,
				message: message || 'Not Found',
			});
		case 405:
			return res.status(405).json({
				status: 'failed',
				data,
				errors,
				message: message || 'Method not allowed',
			});
		case 501:
			return res.status(501).json({
				status: 'failed',
				data,
				errors,
				message: message || 'Not implemented',
			});
		case 502:
			return res.status(502).json({
				status: 'failed',
				data,
				errors,
				message: message || 'Bad gateway',
			});
		case 503:
			return res.status(503).json({
				status: 'failed',
				data,
				errors,
				message: message || 'Service unavailable',
			});
		case 504:
			return res.status(503).json({
				status: 'failed',
				data,
				errors,
				message: message || 'Gateway timeout',
			});
		default:
			return res.status(500).json({
				status: 'failed',
				data,
				errors,
				message: 'Internal Server Error',
			});
	}
};
