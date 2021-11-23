import { UserProfile } from '../../Model/UserProfileModel.js';
const GetProfileService = async (userNameValue) => {
	// const userNameValue = req.params.userName;
	// 	console.log(userNameValue);
	const result = await UserProfile.find({ userName: userNameValue })
		.then((userData) => {
			console.log(userData);
			return userData;
		})
		.catch((error) => {
			return null;
		});
	return result;
};

export { GetProfileService };
