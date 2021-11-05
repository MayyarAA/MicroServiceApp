const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: { type: String, required: true },
		userEmail: { type: String, required: true },
		description: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);
userSchema.index({ username: 1 }, { unique: true });
const User = mongoose.model('User', userSchema);

module.exports = User;
