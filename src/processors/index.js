const { emailQueue } = require('../config');
const path = require('path');

emailQueue.process(path.join(__dirname, 'emailQueueProcessor.js'));
emailQueue.on('completed', (job) => {
  console.log(`Batch Email Job completed for JobId = ${job.id}`);
});
