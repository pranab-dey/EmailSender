'use strict';

/**
 *
 * @param {*} page
 * @param {*} size
 * @returns object (limit,offset)
 */
exports.getLimitOffset = (page = 1, size = 10) => {
	const limit = size ? +size : 10;
	const offset = page ? page * limit - size : 0;
	return { limit, offset };
};

/**
 *
 * @param {*} data
 * @param {*} page
 * @param {*} limit
 * @param {*} fieldName
 * @returns object
 */
exports.getPaginatedData = (data, page, limit) => {
	const totalItems = data?.length;
	const currentPage = page ? +page : 0;
	const totalPages = Math.ceil(totalItems / limit);
	return {
		totalItems,
		items: data.slice((page - 1) * limit, page * limit),
		totalPages,
		currentPage,
	};
};
