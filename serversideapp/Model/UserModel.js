const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: { type: String, unique: true, required: true },
		userEmail: { type: String, unique: true, required: true },
		description: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
