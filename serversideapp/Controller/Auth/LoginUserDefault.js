import express from 'express';
import passport from 'passport';
const router = express.Router();

// router
// 	.route(
// 		'/login',
// 		passport.authenticate('local', {
// 			// successRedirect: '/',
// 			failureRedirect: '/login',
// 			// successFlash: true,
// 		})
// 	)
// 	.post((req, res) => {
// 		console.log('here in login');
// 		console.log('here from login post');
// 		// console.log(res);
// 	});

router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/loginsuccess',
		failureRedirect: '/loginError',
		failureMessage: true,
	})
);

router.route('/getUserPassword').get((req, res) => {
	console.log('here from login post');
});

export { router as AuthLoginRouter };
