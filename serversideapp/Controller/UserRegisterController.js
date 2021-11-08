import express from 'express';
import User from '../Model/UserModel.js';
const router = express.Router();
// let User = require('../Model/UserModel');

router.route('/addUser').post((req, res) => {
	const username = req.body.username;
	const userEmail = req.body.userEmail;
	const description = req.body.description;
	console.log(username);
	const newUser = new User({
		username: username,
		userEmail: userEmail,
		description: description,
	});
	console.log(newUser);
	newUser
		.save()
		.then(() => res.json(`User ${username} addedd successfully`))
		.catch((err) => res.status(400).json('Error' + err + username));
});

// module.exports = router;
export { router as userRegisterRouter };
