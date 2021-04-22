const router = require('express').Router();
let User = require('../Model/UserModel');

router.route('/addUser').post((req, res) => {
	const username = req.body.username;
	const userEmail = req.body.userEmail;
	const description = req.body.description;

	const newUser = new User({
		username: username,
		userEmail: userEmail,
		description: description,
	});
	newUser
		.save()
		.then(() => res.json(`User ${username} addedd successfully`))
		.catch((err) => res.status(400).json('Error' + err));
});

module.exports = router;
