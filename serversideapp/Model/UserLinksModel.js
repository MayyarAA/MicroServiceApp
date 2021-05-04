const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userLinksSchema = new Schema(
	{
		userName: { type: String, required: true },
		link: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const UserLinks = mongoose.model('UserLinks', userLinksSchema);

module.exports = UserLinks;
