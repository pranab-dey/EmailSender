/**
 * Load Dependencies
 */
const { buildEmailBatch } = require('./buildEmailBatch');
const fs = require('fs');
const csv = require('csv-parser');
const { batchSize } = require('../variables');

/**
 *
 * @param {*} csvFilePath
 * @param {*} payload
 * @param {*} emailQueue
 */
const processCsv = async (csvFilePath, payload, emailQueue) => {
  try {
    const stream = fs.createReadStream(csvFilePath);
    let csvData = [];

    await new Promise((resolve, reject) => {
      stream
        .pipe(csv())
        .on('data', async (row) => {
          csvData.push(row);

          if (csvData.length === Number(batchSize)) {
            stream.pause();
            const csvPayload = [...csvData];
            csvData.length = 0;

            buildEmailBatch(csvPayload, emailQueue, payload)
              .then(() => {
                stream.resume();
              })
              .catch((error) => {
                stream.destroy();
                reject(error);
              });
          }
        })
        .on('end', async () => {
          if (csvData.length > 0) {
            await buildEmailBatch(csvData, emailQueue, payload);
            csvData.length = 0;
          }
          resolve();
        })
        .on('error', (error) => reject(error));
    });
  } catch (error) {
    console.error('Error processing CSV:', error);
  }
};

module.exports = processCsv;
