import express from 'express';
import {
	callAddLinkService,
	deleteUserLinksService,
} from '../../Service/UserLinksModifyServices/UserLinksModifyServices.js';
import {
	CheckIfValidDeleteLinkRequest,
	getLinksForUserValidatorService,
} from '../../Service/ServiceValidator/CheckIfValidRequest.js';
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

export { router as userLinksEditRouter };
