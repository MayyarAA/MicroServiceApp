import express from 'express';
import { UserProfile } from '../../Model/UserProfileModel.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

//to-do to do
//protect the in memory file storage of the buffer to have max file size
//to reduce the memory the app takes on the server RAM/in-memory resources
//http://expressjs.com/en/resources/middleware/multer.html

const router = express.Router();

// let storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, './uploads');
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, file.fieldname + '-' + Date.now());
// 	},
// });

const storage = multer.memoryStorage();
let upload = multer({ storage: storage });

router.route('/addUserProfile').post(upload.single('userPhoto'), (req, res) => {
	const userName = req.body.userName;
	const userProfileTitle = req.body.userTitle;
	const userImage = req.file.buffer;
	// console.log('here in addUserProfile ' + userImage);

	//TO:DO To:do need to check the size of the image
	const userImageFileType = req.file.mimetype;
	const userImageOrgName = req.file.originalname;
	const newUserProfile = new UserProfile({
		userName: userName,
		userPhoto: userImage,
		userPhotoName: userImageOrgName,
		userPhotoExtensionType: userImageFileType,
		userTitle: userProfileTitle,
	});
	newUserProfile
		.save()
		.then(() => res.status(201).json(`New User Profile data has been added successfully`))
		.catch((err) => {
			console.log(err);
			res.status(400).json(`Error now: ${err} `);
			// res.status(400);
		});
});

export { router as userProfileRouter };

// curl -d  'userName=user1&userTitle=userTitle&userPhoto=@userprofilepic1.jpeg' http://localhost:8000/profile/addUserProfile
