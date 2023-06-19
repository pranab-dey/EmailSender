'use strict';

/**
 * Common Success Response Handler
 * @param {*} res
 * @param {*} data
 * @param {*} message
 * @returns response
 */
exports.successResponseHandler = (res, data, message) =>
  res.status(200).json({
    status: 'success',
    data,
    message,
  });
