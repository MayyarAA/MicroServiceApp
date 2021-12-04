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

	// console.log(' req.body.userData ' + req.body.userData[0].linkName);
	// console.log(' userAPIData ' + userAPIData[0]);
	const newUserLink = new UserLinks({
		userName: userName,
		userData: userAPIData,
	});
	// console.log(newUserLink);
	newUserLink
		.save()
		.then(() => res.json(`New link has been added successfully, ${userData}`))
		.catch((err) => res.status(400).json(`Error ${err}`));
});

router.route('/addLinkExistingUser').patch((req, res) => {
	const userNameFromReq = req.body.userName;
	const userDataLinksSchemaLocal = req.body.userDataObject;
	// console.log(userNameFromReq);
	// console.log(JSON.stringify(userDataLinksSchemaLocal));
	const userNameFilter = { userName: userNameFromReq };
	const userNotFoundError = UserNotFoundErrorMessage(userNameFromReq);
	if (
		userNameFromReq === null ||
		userDataLinksSchemaLocal === null ||
		userDataLinksSchemaLocal.length === 0
	) {
		res.status(404).send('userNotFoundError');
		return;
	}
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

	const listOfLinksIdToRemove = req.body.listOfLinksIdToRemove;
	if (!CheckIfValidDeleteLinkRequest(userNameFromReq, userIdFromReq, listOfLinksIdToRemove)) {
		res.status(400).send('Bad Request');
		return;
	}
	// console.log(listOfLinksIdToRemove.length);
	console.log(userNameFromReq);
	console.log(userIdFromReq);
	console.log(JSON.stringify(listOfLinksIdToRemove));
	for (let i = 0; i < listOfLinksIdToRemove.length; i++) {
		const linkIdToRemove = listOfLinksIdToRemove[i];
		console.log('ran ' + i);
		// try {
		UserLinks.updateOne(
			{ _id: userIdFromReq },
			{ $pull: { userData: { _id: linkIdToRemove } } },
			{ safe: true, multi: true },
			(error, result) => {
				if (error !== null) {
					res.status(404).send(error);
					return;
				}
			}
		);
	}
	res.status(201).json(`The links were removed for the user ${userNameFromReq} `);
	return;
});

router.route('/updateLinkValue').patch((req, res) => {
	const userNameFromReq = req.body.userName;
	const userIdFromReq = req.body.userId;
	const linkIdFromReq = req.body.linkId;
	const linkObj = req.body.linkObj;
	const userNameFilter = { userName: userNameFromReq };
	console.log(JSON.stringify(linkObj));
	console.log('userNameFromReq ' + userNameFromReq + ' linkIdFromReq ' + linkIdFromReq);
	UserLinks.findOneAndUpdate(
		{ userName: userNameFromReq, userData: { $elemMatch: { _id: linkIdFromReq } } },
		{
			$set: {
				'userData.$.link': linkObj.link,
				'userData.$.linkName': linkObj.linkName,
				'userData.$.linkImage': linkObj.linkImage,
			},
		},
		{ new: true },

		(error, responseMongoo) => {
			console.log('----- error ' + error + ' -----responseMongoo ' + responseMongoo);
			if (error === 'MongoError' || error !== null || responseMongoo === null) {
				res.status(404).json(error);
				return;
			}
			res.status(201).json(responseMongoo);
			return;
		}
	);
});

router.route('/getLink/:userName').get((req, res) => {
	UserLinks.find({ userName: req.params.userName })
		.then((userData) => res.json(userData))
		.catch((error) => res.status(400).json(`Error ${error}`));
});

export { router as userLinksRouter };
