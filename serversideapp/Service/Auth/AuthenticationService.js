import { AuthLoginRouter } from '../../Controller/Auth/LoginUserDefault.js';

const checkIfUserIsAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/notloggedin');
};

export { checkIfUserIsAuthenticated };
