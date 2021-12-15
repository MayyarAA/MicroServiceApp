import express from 'express';
import passport from 'passport';
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

export { router as AuthLoginRouter };
