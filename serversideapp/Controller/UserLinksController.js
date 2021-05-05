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

router.route('/getLink/:userName').get((req, res) => {
	// UserLinks.findById(req.params.id, (result, error) => {
	// 	if (error) {
	// 		res.send(`Error no user links found for this userName ${error}`);
	// 	} else {
	// 		res.json(result);
	// 	}
	// })
	// 	.then((result) => res.status(200).json(result.toJSON))
	// 	.catch((error) => res.status(400).json(`Error ${error}`));
	UserLinks.findById(req.params.id)
		.then((links) => res.json(links))
		.catch((error) => res.status(400).json(`Error ${error}`));
});

module.exports = router;

// UserLinks.findById(req.params.id)
// 	.then((links) => res.json(links))
// 	.catch((error) => res.status(400).json(`Error ${error}`));
