const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userOverallFavTopic = new Schema(
	{
		username: { type: String, unique: true, required: true },
		userEmail: { type: String, unique: true, required: true },
		description: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const UserOverallFavTopic = mongoose.model('User', userOverallFavTopic);

module.exports = UserOverallFavTopic;
