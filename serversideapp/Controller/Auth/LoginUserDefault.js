import express from 'express';
import passport from 'passport';
import { getUserByUsernameService } from '../../Service/Auth/AuthenticationService.js';
const router = express.Router();

router.post(
	'/login',
	passport.authenticate(
		'local',
		{
			successRedirect: '/loginsuccess',
			failureRedirect: '/loginError',
			failureMessage: true,
		}
		// ,
		// () => {
		// 	console.log('here in login route');
		// 	return;
		// }
	)
);

router.route('/getUserPassword').get((req, res) => {
	console.log('here from login post');
});

router.route('/getUserByUsernameService/:username').get((req, res) => {
	// const userObj = getUserByUsernameService();
	getUserByUsernameService(req, res);
});

export { router as AuthLoginRouter };
