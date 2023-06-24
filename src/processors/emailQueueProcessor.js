/**
 * Load Dependencies
 */
const { emailId } = require('../variables');
const { sendEmail } = require('../helpers');
const { createCustomers } = require('../services');

/**
 *
 * @param {*} param0
 * @returns
 */
const buildEmailOptions = ({ to, subject, body }) => {
  return {
    from: emailId,
    to: to || '',
    subject: subject || '',
    text: body || '',
  };
};

/**
 *
 * @param {*} resp
 * @param {*} param1a
 * @returns
 */
const buildDbItem = (resp, { to, scheduleAt, name, address }) => {
  return {
    mUserEmail: to,
    mSendStatus: resp?.messageId || false,
    mSender: emailId,
    mProcessingTime: new Date(),
    mCreatedAt: new Date(),
    mScheduleAt: scheduleAt || '',
    mUserName: name || '',
    mAddress: address || '',
  };
};

/**
 *
 * @param {*} job
 * @param {*} done
 */
const emailQueueProcessor = async (job, done) => {
  console.log('Processing job:', job.id, 'at', new Date());
  const { data = [] } = job;

  const mailResponse = await Promise.all(
    data.map(async (item) => {
      try {
        if (item?.enabled && item?.enabled === 'true') {
          // this can be improved by sending bulk mails using appropriate package
          const resp = await sendEmail(buildEmailOptions(item));
          return buildDbItem(resp, item);
        } else throw Error;
      } catch (error) {
        if (error.message)
          console.error(':: Sending Email Failed in Queue ::', error.message);
        else
          console.error(':: Sending Email Failed as Enabled field is falsy ::');
        return buildDbItem(null, item);
      }
    })
  );

  try {
    const dbResponse = await createCustomers(mailResponse);
    if (dbResponse) console.log('DB insertion successful');
  } catch (error) {
    console.error('DB insertion error', error);
  }

  setTimeout(() => done(), 2000);
};

module.exports = emailQueueProcessor;
