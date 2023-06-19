'use strict';

const variables = require('../variables');

module.exports = {
	name: variables.loggerName,
	genReqId: (req) => req.id,
	streams: [
		{
			level: variables.logLevel,
			stream: process.stdout,
		},
	],
	excludes: [
		'short-body',
		'response-hrtime',
		'req-headers',
		'res-headers',
		'incoming',
	],
};
