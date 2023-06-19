'use strict';

/**
 * Load Dependencies
 */
const { Genre } = require('../models');

const getAllCustomers = async () =>
	Genre.find({ isActive: true }).sort({ name: 1 });

const createCustomers = async ({ name, description, isActive }) =>
	Genre.create({
		name,
		description,
		isActive,
	}).then(async (response) => {
		return response;
	});

module.exports = {
	getAllCustomers,
	createCustomers,
};
