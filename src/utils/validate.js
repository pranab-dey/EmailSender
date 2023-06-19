'use strict';

const Validator = require('validatorjs');

/**
 * Register Custom Validation Rules
 */

Validator.registerImplicit(
	'isArray',
	(value) => {
		if (value === undefined) return true;
		return Array.isArray(value) && value.length > 0;
	},
	':attribute must be an array and not empty'
);

Validator.registerImplicit(
	'isValidLength',
	(value) => {
		if (value === undefined) return true;
		return Array.isArray(value) && value.length <= 5;
	},
	'Only 5 Images Allowed'
);

/**
 * List of validation rules
 */
const validationRules = {
	createCustomers: {
		name: 'required',
		email: 'required',
		isEnaled: 'boolean',
	},
	getCustomers: {
		page: 'required_if:page,|integer',
		limit: 'required_if:page,|integer',
	},
};

/**
 * Get validation rules for a specific type
 * @param {*} type
 * @returns object
 */
const getRules = (type, data = {}) => {
	switch (type) {
		case 'createCustomers':
			return validationRules.createCustomers;
		case 'getCustomers':
			return validationRules.getCustomers;
		default:
			return {};
	}
};

/**
 * Validate user reuqest
 * @param {*} req
 * @returns boolean / throw error
 */
const validate = (type, data = {}) => {
	const rules = getRules(type, data);
	const validation = new Validator(data, rules);
	if (validation.fails()) {
		throw Object.assign({}, new Error(), {
			status: 400,
			data: {},
			errors: validation.errors.all(),
			message: `Invalid Parameter(s): ${Object.keys(
				validation.errors.all()
			)
				.map((item) => item)
				.join(',')}`,
		});
	}
	return true;
};

module.exports = {
	getRules,
	validate,
};
