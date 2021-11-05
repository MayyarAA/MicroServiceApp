const router = require('express').Router();
const UserLinks = require('../Model/UserLinksModel');

router.route('/addLink').post((req, res) => {
	const userName = req.body.userName;
	let userAPIData = [];
	for (let i = 0; i < req.body.userData.length; i++) {
		userAPIData.push(req.body.userData[i]);
	}
	// userAPIData.push(req.body.userData);
	console.log(' req.body.userData ' + req.body.userData[0].linkName);
	console.log(' userAPIData ' + userAPIData[0]);
	const newUserLink = new UserLinks({
		userName: userName,
		userData: userAPIData,
	});
	console.log(newUserLink);
	newUserLink
		.save()
		.then(() => res.json(`New link has been added successfully, ${userData}`))
		.catch((err) => res.status(400).json(`Error ${err}`));
});

router.route('/getLink/:userName').get((req, res) => {
	UserLinks.find({ userName: req.params.userName })
		.then((userData) => res.json(userData))
		.catch((error) => res.status(400).json(`Error ${error}`));
});

module.exports = router;
