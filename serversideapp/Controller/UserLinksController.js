const router = require('express').Router();
const UserLinks = require('../Model/UserLinksModel');

router.route('/addLink').post((req, res) => {
	const userName = req.body.userName;
	const userLink = req.body.userLink;

	const newUserLink = new UserLinks({
		userName: userName,
		link: userLink,
	});
	newUserLink
		.save()
		.then(() => res.json(`New link has been added successfully, ${userLink}`))
		.catch((err) => res.status(400).json(`Error ${err}`));
});

module.exports = router;
