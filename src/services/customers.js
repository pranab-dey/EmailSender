'use strict';

/**
 * Load Dependencies
 */
const { Customer } = require('../models');
const { connectDBwithRetry } = require('../config');

/**
 *
 * @param {*} ITEMS_PER_PAGE
 * @param {*} currentPage
 * @returns
 */
const getAllCustomers = async (ITEMS_PER_PAGE, currentPage) => {
  try {
    const totalItems = await Customer.countDocuments();
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const skipCount = (currentPage - 1) * ITEMS_PER_PAGE;

    const itemsForPage = await Customer.find()
      .skip(skipCount)
      .limit(ITEMS_PER_PAGE);

    return {
      items: itemsForPage,
      currentPage: currentPage,
      totalPages: totalPages,
    };
  } catch (error) {
    console.error('Error retrieving items:', error.message);
    throw error;
  }
};

/**
 *
 * @param {*} customers
 * @returns
 */
const createCustomers = async (customers) => {
  connectDBwithRetry();
  Customer.insertMany(customers)
    .then(async (response) => {
      console.log('MongoDB insertion successful');
      return response;
    })
    .catch((e) => {
      console.error('MongoDb insertion error', error.message);
    });
};

module.exports = {
  getAllCustomers,
  createCustomers,
};
