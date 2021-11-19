import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
	userName: { type: String, required: true },
	userPhoto: { type: Buffer, required: true },
	userPhotoName: { type: String, required: true },
	userPhotoExtensionType: { type: String, required: true },
	userTitle: { type: String, required: true },
});

userProfileSchema.index({ userName: 1 }, { unique: true });

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

export { UserProfile, userProfileSchema };
