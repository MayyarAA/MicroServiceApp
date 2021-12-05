import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserDataLinksSchema = new Schema({
	link: { type: String, required: true },
	linkName: { type: String, required: true },
	linkImage: { type: String, required: true },
});
const userLinksSchema = new Schema(
	{
		userName: { type: String, required: true },
		userData: [UserDataLinksSchema],
	},
	{
		timestamps: true,
	}
);
userLinksSchema.index({ userName: 1 }, { unique: true });

const UserLinks = mongoose.model('UserLinks', userLinksSchema);

export { UserLinks, UserDataLinksSchema };
