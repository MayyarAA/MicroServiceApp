import express from 'express';
import { UserLinks } from '../Model/UserLinksModel.js';
import { UserNotFoundErrorMessage } from '../General/ErrorMessages/APIErrorrMessages.js';
import { CheckIfUserExistsService } from '../Service/AddLinkExistUserService.js';
import {
	CheckIfValidDeleteLinkRequest,
	getLinksForUserValidatorService,
} from '../Service/ServiceValidator/CheckIfValidRequest.js';
import { updateUserLinkValueValidatorService } from '../Service/ServiceValidator/UpdateUserLinkValueValidatorService.js';
import {
	callAddLinkService,
	updateUserLinkValueService,
	getLinksForUserService,
} from '../Service/UserLinksService.js';
const router = express.Router();

router.route('/addLink').post((req, res) => {
	const userName = req.body.userName;
	let userAPIData = [];
	for (let i = 0; i < req.body.userData.length; i++) {
		userAPIData.push(req.body.userData[i]);
	}
	callAddLinkService(res, userName, userAPIData);
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

router.route('/getLink/:userName').get(async (req, res) => {
	getLinksForUserValidatorService(req, res);
	await getLinksForUserService(res, req.params.userName);
	console.log('here after service call');
});

export { router as userLinksRouter };
