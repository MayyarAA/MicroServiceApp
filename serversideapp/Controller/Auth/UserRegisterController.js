import express from 'express';
import User from '../../Model/UserModel.js';
import bcrypt from 'bcrypt';
const router = express.Router();
// let User = require('../Model/UserModel');

// 		username: { type: String, required: true },
// 		userEmail: { type: String, required: true },
// 		description: { type: String, required: false },
// 		password: { type: String, required: true },
router.route('/nativeregister').post(async (req, res) => {
	//check if there a user with the same username
	console.log('req.body.password ---->>' + req.body.password);
	const hashedPassword = await hashPassword(req.body.password);
	console.log('hashedPassword ---->>' + hashedPassword);
	const nativeRegisterUserObj = new User({
		username: req.body.username,
		userEmail: req.body.userEmail,
		description: req.body.description,
		password: hashedPassword,
	});

	nativeRegisterUserObj
		.save()
		.then(() => res.json(`User ${req.body.username} addedd successfully`))
		.catch((err) => res.status(400).json('Error' + err + req.body.username));
	// res.redirect('/login');

	// res.redirect('/login');
});

const hashPassword = async (passwordUnHashed) => {
	const hashedPassword = await bcrypt.hash(passwordUnHashed, 10);
	return hashedPassword;
};
router.route('/addUser').post((req, res) => {
	const username = req.body.username;
	const userEmail = req.body.userEmail;
	const description = req.body.description;
	const passwordUnHashed = req.body.password;

	const newUser = new User({
		username: username,
		userEmail: userEmail,
		description: description,
		password: passwordUnHashed,
	});
	newUser
		.save()
		.then(() => res.json(`User ${username} addedd successfully`))
		.catch((err) => res.status(400).json('Error' + err + username));
});

// module.exports = router;
export { router as userRegisterRouter };
