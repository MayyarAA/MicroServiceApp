import User from '../../Model/UserModel.js';

const checkIfUserIsAuthenticated = (req, res, next) => {
	// console.log(JSON.stringify(req));
	console.log('checkIfUserIsAuthenticated' + req.user);
	if (req.isAuthenticated()) {
		console.log('user is authenitcated');
		return checkIfSameUserIsMakingRequest(req, res, next);
		// return next();
	}
	res.redirect('/notloggedin');
};

const checkIfSameUserIsMakingRequest = (req, res, next) => {
	if (req.user === null || req.user === undefined) {
		console.log('req.user is null');
		res.redirect('/notloggedin');
		return;
	}
	if (req.body.userName === null || req.body.userName === undefined) {
		console.log('req.body.userName is null');
		res.redirect('/notloggedin');
		return;
	}
	if (req.user.username !== req.body.userName) {
		console.log(
			'req.user ' + req.user + ' req.body.userName ' + req.body.userName + ' are not equal'
		);
		// res.status(401).redirect('/notloggedin').send('user is unauthorized to make request');
		res.status(401).send('user is unauthorized to make request');
		return;
	}
	console.log('authn and authz is fully completed successfully');
	return next();
};

const getUserByUsernameService = async (req, res) => {
	console.log(req.params.username);
	await User.find({ username: req.params.username })
		.then((userObj) => {
			//
			res.status(200).json(userObj);
		})
		.catch((err) => {
			res.status(400).send('Error ' + err);
			//
		});
};

const getUserByUsernameDirectService = async (username) => {
	console.log(username);
	let userObj;
	await User.find({ username: username })
		.then((userObjMongo) => {
			// console.log('getUserByUsernameDirectService succ ' + JSON.stringify(userObjMongo));
			console.log('getUserByUsernameDirectService succ');
			userObj = userObjMongo[0];
			return userObj;
		})
		.catch((err) => {
			console.log('getUserByUsernameDirectService ' + err);
			userObj = null;
			return userObj;
		});
	return userObj;
};

export {
	checkIfUserIsAuthenticated,
	getUserByUsernameService,
	getUserByUsernameDirectService,
};
