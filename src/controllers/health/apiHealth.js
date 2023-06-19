'use strict';

const pkginfo = require('../package.json');
const { successResponseHandler } = require('../helpers');

/**
 * Health Check
 * @param {*} req
 * @param {*} res
 * @returns object with version and build information
 */
exports.health = (req, res) =>
	successResponseHandler(
		res,
		{
			status: 'OK',
			instance: req.url,
			name: pkginfo.name,
			version: pkginfo.version,
			author: pkginfo.author,
		},
		'Health Check Successful'
	);
