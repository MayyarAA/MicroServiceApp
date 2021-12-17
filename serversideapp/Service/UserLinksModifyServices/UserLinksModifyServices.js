import { UserLinks } from '../../Model/UserLinksModel.js';

const callAddLinkService = async (res, userName, userAPIData) => {
	// console.log(' userAPIData ' + userAPIData[0]);
	const newUserLink = new UserLinks({
		userName: userName,
		userData: userAPIData,
	});
	await newUserLink
		.save()
		.then((status) => res.status(201).json(status))
		.catch((err) => res.status(400).json(`Error ${err}`));
};

const deleteUserLinksService = (
	res,
	userIdFromReq,
	userNameFromReq,
	listOfLinksIdToRemove
) => {
	for (let i = 0; i < listOfLinksIdToRemove.length; i++) {
		const linkIdToRemove = listOfLinksIdToRemove[i];
		UserLinks.updateOne(
			// { _id: userIdFromReq },
			{ userName: userNameFromReq },
			{ $pull: { userData: { _id: linkIdToRemove } } },
			{ safe: true, multi: true },
			(error, result) => {
				if (error !== null) {
					res.status(404).send(error);
					return;
				}
				res.status(201).json(result);
				return;
			}
		);
	}
};

const addNewLinkExistingUserService = (
	res,
	userNameFilter,
	userDataLinksSchemaLocal,
	userNotFoundError
) => {
	UserLinks.findOneAndUpdate(
		userNameFilter,
		{
			$push: { userData: userDataLinksSchemaLocal },
		},
		{ new: true },
		(error, result) => {
			console.log('userNameFilter ' + JSON.stringify(userNameFilter));
			if (result === null) {
				console.log('in addNewLinkExistingUserService result ' + JSON.stringify(result));
				res.status(404).send(userNotFoundError);
				return;
			}
			console.log('int addNewLinkExistingUserService result ' + JSON.stringify(result));
			res.status(201).json(result);
			return;
		}
	);
};

const updateUserLinkValueService = (res, userNameFromReq, linkIdFromReq, linkObj) => {
	UserLinks.findOneAndUpdate(
		{ userName: userNameFromReq, userData: { $elemMatch: { _id: linkIdFromReq } } },
		{
			$set: {
				'userData.$.link': linkObj.link,
				'userData.$.linkName': linkObj.linkName,
				'userData.$.linkImage': linkObj.linkImage,
			},
		},
		{ new: true, useFindAndModify: false },

		(error, responseMongoo) => {
			// console.log('----- error ' + error + ' -----responseMongoo ' + responseMongoo);
			if (error === 'MongoError' || error !== null || responseMongoo === null) {
				res.status(404).json(error);
				return;
			}
			res.status(201).json(responseMongoo);
			return;
		}
	);
};
export {
	callAddLinkService,
	deleteUserLinksService,
	addNewLinkExistingUserService,
	updateUserLinkValueService,
};
