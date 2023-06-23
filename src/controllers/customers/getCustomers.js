'use strict';

const {
  errorResponseHandler,
  successResponseHandler,
} = require('../../helpers');
const { getAllCustomers } = require('../../services');

const ITEMS_PER_PAGE = 1;

exports.getCustomers = async (req, res) => {
  try {
    const currentPage = parseInt(req?.query?.page) || 1;
    const response = await getAllCustomers(ITEMS_PER_PAGE, currentPage);
    return successResponseHandler(
      res,
      response,
      'Successfully fetched Customers!'
    );
  } catch (error) {
    return errorResponseHandler(error, req, res);
  }
};
