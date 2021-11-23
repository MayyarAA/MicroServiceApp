import express, { Router } from 'express';
import { UserProfile } from '../../Model/UserProfileModel.js';
import multer from 'multer';
import { GetProfileService } from '../../Service/Profile/GetProfileService.js';
const router = express.Router();

const error = 'No user data found';

router.route('/getUserProfile/:userName').get(async (req, res) => {
	const userNameValue = req.params.userName;
	const queryResult = await GetProfileService(userNameValue);
	console.log(queryResult);
	if (Object.keys(queryResult).length === 0) res.status(400).json(`Error ${error}`);
	res.send(queryResult);
});

export { router as getUserProfileRouter };
