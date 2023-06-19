'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */
const customersRoutes = require('./customers');
const apiHealthRoutes = require('./health');

/**
 * Create Router
 */

const routers = express.Router();

routers.use('/', customersRoutes);
routers.use('/', apiHealthRoutes);

module.exports = routers;
