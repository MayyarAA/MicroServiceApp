import express from 'express';
import { UserLinks } from '../Model/UserLinksModel.js';
import { UserNotFoundErrorMessage } from '../General/ErrorMessages/APIErrorrMessages.js';
import { CheckIfUserExistsService } from '../Service/AddLinkExistUserService.js';
import { CheckIfValidDeleteLinkRequest } from '../Service/CheckIfValidRequest.js';
const router = express.Router();

router.route('/addLink').post((req, res) => {
	const userName = req.body.userName;
	let userAPIData = [];
	for (let i = 0; i < req.body.userData.length; i++) {
		userAPIData.push(req.body.userData[i]);
	}

	console.log(' req.body.userData ' + req.body.userData[0].linkName);
	console.log(' userAPIData ' + userAPIData[0]);
	const newUserLink = new UserLinks({
		userName: userName,
		userData: userAPIData,
	});
	console.log(newUserLink);
	newUserLink
		.save()
		.then(() => res.json(`New link has been added successfully, ${userData}`))
		.catch((err) => res.status(400).json(`Error ${err}`));
});

router.route('/addLinkExistingUser').put((req, res) => {
	const userNameFromReq = req.body.userName;
	const userDataLinksSchemaLocal = req.body.userDataObject;
	const userNameFilter = { userName: userNameFromReq };
	const userNotFoundError = UserNotFoundErrorMessage(userNameFromReq);

	const addNewLinkToExsitingUserInnerAction = () => {
		UserLinks.findOneAndUpdate(
			userNameFilter,
			{
				$push: { userData: userDataLinksSchemaLocal },
			},
			{ new: true },
			(error, result) => {
				if (result === null) {
					res.status(404).send(userNotFoundError);
					return;
				}
				res.status(201).json(`New link has been added successfully, ${result}`);
				return;
			}
		);
	};
	addNewLinkToExsitingUserInnerAction();
});

router.route('/deleteLinkExistingUser').patch((req, res) => {
	const userNameFromReq = req.body.userName;
	const userIdFromReq = req.body.userId;
	const linkIdToRemove = req.body.linkIdToRemove;
	if (!CheckIfValidDeleteLinkRequest(userNameFromReq, userIdFromReq, linkIdToRemove)) {
		res.status(400).send('Bad Request');
		return;
	}

	UserLinks.updateOne(
		{ _id: userIdFromReq },
		{ $pull: { userData: { _id: linkIdToRemove } } },
		{ safe: true, multi: true },
		(error, result) => {
			if (error) {
				res.status(404).send(error);
				return;
			}
			res
				.status(201)
				.json(
					`The link ${linkIdToRemove} was removed for the user ${userNameFromReq} ` + result
				);
			return;
		}
	);
	// .then((resultFromResponse) => res.json(resultFromResponse))
	// .catch((error) => res.status(400).json(`Error ${error}`));
});

router.route('/getLink/:userName').get((req, res) => {
	UserLinks.find({ userName: req.params.userName })
		.then((userData) => res.json(userData))
		.catch((error) => res.status(400).json(`Error ${error}`));
});

export { router as userLinksRouter };
