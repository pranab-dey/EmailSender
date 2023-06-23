'use strict';

const {
  errorResponseHandler,
  successResponseHandler,
  processCsv,
} = require('../../helpers');
const { emailQueue } = require('../../config');

exports.createCustomers = async (req, res) => {
  try {
    await processCsv(req.file.path, req.body, emailQueue);
    return successResponseHandler(
      res,
      {},
      'customers added to queue successfully to send emails!'
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};
