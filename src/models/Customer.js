const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: false,
			index: true,
		},
		email: {
			type: String,
			require: false,
			index: true,
		},
		address: {
			type: String,
			required: false,
		},
		isEnabled: {
			type: Boolean,
			required: false,
			default: false,
			index: true,
		},
	},
	{
		timestamps: true,
	}
);

const customer = mongoose.model('customers', customerSchema);
module.exports = customer;
