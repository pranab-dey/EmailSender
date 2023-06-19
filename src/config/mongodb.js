/**
 * Load Dependencies
 */

const mongoose = require('mongoose');
const {
	mongoDBUserName,
	mongoDBPassword,
	mongoDBPort,
	mongodbHost,
	mongodbDBName,
} = require('../variables');

const mongoURL = `mongodb://${mongoDBUserName}:${mongoDBPassword}@${mongodbHost}:${mongoDBPort}/${mongodbDBName}?authSource=admin`;

const connectWithRetry = () => {
	mongoose.connect(mongoURL).catch((e) => {
		console.log(e);
		setTimeout(connectWithRetry, 5000);
	});
};

module.exports = {
	connectWithRetry,
};
