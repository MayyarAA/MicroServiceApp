import { AuthLoginRouter } from '../../Controller/Auth/LoginUserDefault.js';

const checkIfUserIsAuthenticated = (req, res, next) => {
	console.log(JSON.stringify(req));
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/notloggedin');
};

export { checkIfUserIsAuthenticated };
