'use strict';

/**
 *  Load Dependencies
 */
const { multerUpload } = require('../config');

/**
 *
 * @param {*} fieldName
 * @returns
 */
const validateUpload = (fieldName) => async (req, res, next) => {
  try {
    await new Promise((resolve, reject) => {
      multerUpload.single(fieldName)(req, res, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
    await next();
  } catch (error) {
    errorResponseHandler(error, req, res);
  }
};

module.exports = validateUpload;
