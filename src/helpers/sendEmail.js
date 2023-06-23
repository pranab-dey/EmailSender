/**
 * Load Dependencies
 */
const { transporter } = require('../config');

/**
 *
 * @param {*} mailOptions
 * @returns
 */
const sendEmail = async (mailOptions) => {
  try {
    // can be designed to send bulks just by adding one function
    // which will iterate over mailOptions and build a new one which one have all the
    // emails into one array
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error(':: Sending Email failed for ::', mailOptions?.to);
  }
};

module.exports = sendEmail;
