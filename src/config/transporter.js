/**
 * Load Dependencies
 */
const nodemailer = require('nodemailer');
const { emailId, emailPassword } = require('../variables');

/**
 * Create Transporter Instance for sending emails
 * Can be configured more extensively for handling more connections
 */
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  pool: true,
  auth: {
    user: emailId,
    pass: emailPassword,
  },
});

module.exports = transporter;
