import User from '../../Model/UserModel.js';
const checkIfUserIsAuthenticated = (req, res, next) => {
	// console.log(JSON.stringify(req));
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/notloggedin');
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
