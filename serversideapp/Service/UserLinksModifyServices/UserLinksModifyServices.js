import { UserLinks } from '../../Model/UserLinksModel.js';

const callAddLinkService = async (res, userName, userAPIData) => {
	console.log(' userAPIData ' + userAPIData[0]);
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

export { callAddLinkService, deleteUserLinksService };
