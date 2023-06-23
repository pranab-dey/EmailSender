const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    mUserEmail: {
      type: String,
      required: true,
    },
    mSendStatus: {
      type: String,
      default: false,
    },
    mSender: {
      type: String,
      required: true,
    },
    mProcessingTime: {
      type: Date,
      default: Date.now,
    },
    mCreatedAt: {
      type: Date,
      default: Date.now,
    },
    mScheduleAt: {
      type: Date,
      default: '',
    },
    mUserName: {
      type: String,
      default: '',
    },
    mAddress: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const customer = mongoose.model('Customers', customerSchema);
module.exports = customer;
