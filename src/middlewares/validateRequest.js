'use strict';

/**
 *  Load Dependencies
 */

const { errorResponseHandler } = require('../helpers');
const { validate } = require('../utils');

/**
 * Validate user request
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*} next() / throws error
 */

const validateRequest =
  (type, valdationSource = 'body') =>
  async (req, res, next) => {
    try {
      switch (valdationSource) {
        case 'query':
          validate(type, req.query);
          break;
        case 'body':
          validate(type, req.body);
          break;
        case 'file':
          validate(type, req.file);
          break;
        case 'headers':
          validate(type, req.headers);
          break;
        default:
          validate(type, {});
      }
      await next();
    } catch (error) {
      errorResponseHandler(error, req, res);
    }
  };

module.exports = validateRequest;
