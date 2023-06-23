/**
 * Load Dependencies
 */
const { batchSize } = require('../variables');

/**
 *
 * @param {*} data
 * @param {*} emailQueue
 * @param {*} payload
 */
const buildEmailBatch = async (data, emailQueue, payload) => {
  const { subject, body, scheduleAt } = payload;
  const sendEmailJobsBatch = [];

  const validScheduleAt = Date.parse(scheduleAt);

  const date = !isNaN(validScheduleAt) ? new Date(scheduleAt) : '';
  const timestamp = date ? date.getTime() : null;

  const jobScheduledAt = timestamp ? timestamp - Date.now() : 1000;

  for (let i = 0; i < data.length; i++) {
    const rowData = data[i];

    const JobData = {
      to: rowData?.Email,
      subject,
      body: `Hi ${rowData?.Name},\n\n${body}`,
      scheduleAt,
      enabled: rowData?.Enabled,
      name: rowData?.Name,
      address: rowData?.Address,
    };

    sendEmailJobsBatch.push(JobData);

    if (
      sendEmailJobsBatch.length === Number(batchSize) ||
      i === data.length - 1
    ) {
      const batch = [...sendEmailJobsBatch];

      // can be extended to handle process failures
      emailQueue
        .add(batch, {
          delay: jobScheduledAt,
          fifo: true,
          attempts: 1,
        })
        .then(() => {
          console.log('Bulk jobs added to the queue.');
        })
        .catch((err) => {
          console.error('Error adding bulk jobs to the queue:', err);
        });

      sendEmailJobsBatch.length = 0;
    }
  }
};

module.exports = { buildEmailBatch };
