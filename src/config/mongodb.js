/**
 * Load Dependencies
 */

const mongoose = require('mongoose');
const {
  mongoDBUserName,
  mongoDBPassword,
  mongoDBPort,
  mongodbHost,
  mongodbDBName,
} = require('../variables');

const mongoUri = `mongodb://${mongodbHost}:${mongoDBPort}/${mongodbDBName}`;

const connectDBwithRetry = () => {
  console.log(':: mongoDB Uri ::: ', mongoUri);

  mongoose.set('strictQuery', false);

  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(':: MongoDB is connected with app :: ');
    })
    .catch((e) => {
      console.log(e);
      setTimeout(connectDBwithRetry, 5000);
    });
};

module.exports = {
  connectDBwithRetry,
};
