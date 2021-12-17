import express from 'express';
import {
	callAddLinkService,
	deleteUserLinksService,
	addNewLinkExistingUserService,
	updateUserLinkValueService,
} from '../../Service/UserLinksModifyServices/UserLinksModifyServices.js';
import {
	CheckIfValidDeleteLinkRequest,
	getLinksForUserValidatorService,
} from '../../Service/ServiceValidator/CheckIfValidRequest.js';
import { validateAddLinkExistingUserRequest } from '../../Service/ServiceValidator/UserLinksServiceValidator.js';
import { updateUserLinkValueValidatorService } from '../../Service/ServiceValidator/UpdateUserLinkValueValidatorService.js';
import { UserNotFoundErrorMessage } from '../../General/ErrorMessages/APIErrorrMessages.js';
const router = express.Router();

router.route('/addLink').post((req, res) => {
	const userName = req.body.userName;
	let userAPIData = [];
	for (let i = 0; i < req.body.userData.length; i++) {
		userAPIData.push(req.body.userData[i]);
	}
	callAddLinkService(res, userName, userAPIData);
});

router.route('/deleteLinkExistingUser').patch((req, res) => {
	const userNameFromReq = req.body.userName;
	const userIdFromReq = req.body.userId;

	const listOfLinksIdToRemove = req.body.listOfLinksIdToRemove;
	if (!CheckIfValidDeleteLinkRequest(userNameFromReq, userIdFromReq, listOfLinksIdToRemove)) {
		res.status(400).send('Bad Request');
		return;
	}

	deleteUserLinksService(res, userIdFromReq, userNameFromReq, listOfLinksIdToRemove);
});

router.route('/addLinkExistingUser').patch((req, res) => {
	const userNameFromReq = req.body.userName;
	const userDataLinksSchemaLocal = req.body.userDataObject;

	const userNameFilter = { userName: userNameFromReq };
	const userNotFoundError = UserNotFoundErrorMessage(userNameFromReq);
	// console.log('here before');
	if (!validateAddLinkExistingUserRequest(res, userNameFromReq, userDataLinksSchemaLocal)) {
		console.log('here in if');
		return;
	}
	addNewLinkExistingUserService(
		res,
		userNameFilter,
		userDataLinksSchemaLocal,
		userNotFoundError
	);
});

router.route('/updateLinkValue').patch((req, res) => {
	const userNameFromReq = req.body.userName;
	const linkIdFromReq = req.body.linkId;
	const linkObj = req.body.linkObj;
	if (!updateUserLinkValueValidatorService(res, userNameFromReq, linkIdFromReq, linkObj)) {
		return;
	}
	//wait for response from validator
	updateUserLinkValueService(res, userNameFromReq, linkIdFromReq, linkObj);
});

export { router as userLinksEditRouter };
