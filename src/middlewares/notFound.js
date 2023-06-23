'use strict';

/**
 *  Load Dependencies
 */
const { errorResponseHandler } = require('../helpers');

/**
 * Not found route middileware
 * @param {*} req
 * @param {*} res
 * @return throw error
 */

const notFound = (req, res) =>
  errorResponseHandler(
    {
      status: 404,
      data: {},
      errors: {},
      message: `Not Found`,
    },
    req,
    res
  );

module.exports = notFound;
