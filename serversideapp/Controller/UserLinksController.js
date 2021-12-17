import express from 'express';
import { UserLinks } from '../Model/UserLinksModel.js';
import { UserNotFoundErrorMessage } from '../General/ErrorMessages/APIErrorrMessages.js';
import { CheckIfUserExistsService } from '../Service/AddLinkExistUserService.js';
import {
	CheckIfValidDeleteLinkRequest,
	getLinksForUserValidatorService,
} from '../Service/ServiceValidator/CheckIfValidRequest.js';
import { callAddLinkService, getLinksForUserService } from '../Service/UserLinksService.js';
const router = express.Router();

router.route('/addLink').post((req, res) => {
	const userName = req.body.userName;
	let userAPIData = [];
	for (let i = 0; i < req.body.userData.length; i++) {
		userAPIData.push(req.body.userData[i]);
	}
	callAddLinkService(res, userName, userAPIData);
});

router.route('/getLink/:userName').get(async (req, res) => {
	getLinksForUserValidatorService(req, res);
	await getLinksForUserService(res, req.params.userName);
});

export { router as userLinksRouter };
