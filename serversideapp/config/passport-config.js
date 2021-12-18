import passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
import { getUserByUsernameDirectService } from '../Service/Auth/AuthenticationService.js';
const LocalStrategy = passportLocal.Strategy;

const initializePassport = async (passport) => {
	const authenticateUserPassport = async (username, password, done) => {
		console.log('<<<<--here in authenticateUserPassport ->>>>>>');
		let user = await getUserByUsernameDirectService(username);
		if (user == null) {
			console.log('user is null in initpass');
			return done(null, false, { message: 'no user found' });
		}
		try {
			if (await bcrypt.compare(password, user.password)) {
				console.log('bcrypt.compare success');
				return done(null, user);
			} else {
				console.log('bcrypt.compare error');
				return done(null, false, { message: 'incorrect password' });
			}
		} catch (err) {
			return done(err);
		}
	};
	console.log('here ins passportInti ->>>>>>');
	passport.use(new LocalStrategy(authenticateUserPassport));

	passport.serializeUser((user, done) => done(null, user.username));
	passport.deserializeUser(async (username, done) => {
		let user = await getUserByUsernameDirectService(username);
		return done(null, user);
	});
};

export { initializePassport };
