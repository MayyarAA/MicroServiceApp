import passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
const LocalStrategy = passportLocal.Strategy;

const initializePassport = (passport) => {
	const authenticateUserPassport = async (username, password, done) => {
		console.log('<<<<--here in authenticateUserPassport ->>>>>>');
		const user = getUserByUsernameService(username);
		// const userPasswordInDB = getUserByUsernameService(username);
		if (user == null) {
			return done(null, false, { message: 'no user found' });
		}

		try {
			if (await bcrypt.compare(password, user.password)) {
				return done(null, user);
			} else {
				return done(null, false, { message: 'incorrect password' });
			}
		} catch (err) {
			return done(err);
		}
	};
	console.log('here ins passportInti ->>>>>>');
	// passport.use(new LocalStrategy({ usernameField: 'username' }, authenticateUserPassport));
	passport.use(new LocalStrategy(authenticateUserPassport));
	// passport.use(
	// 	new LocalStrategy(async (username, password, done) => {
	// 		const user = getUserByUsernameService(username);
	// 		// const userPasswordInDB = getUserByUsernameService(username);
	// 		if (user == null) {
	// 			console.log('here in if statment for user null');
	// 			return done(null, false, { message: 'no user found' });
	// 		}
	// 		// console.log('');
	// 		try {
	// 			console.log('<<<<--here in authenticateUserPassport ->>>>>>k');
	// 			if (await bcrypt.compare(password, user.password)) {
	// 				console.log('bcrypt.compare success');
	// 				return done(null, user);
	// 			} else {
	// 				// console.log('bcrypt.compare error');
	// 				return done(null, false, { message: 'incorrect password' });
	// 			}
	// 		} catch (err) {
	// 			console.log('big error');
	// 			return done(err);
	// 		}
	// 	})
	// );
	passport.serializeUser((user, done) => done(null, user.username));
	passport.deserializeUser((username, done) => {
		return done(null, getUserById(username));
	});
};

const getUserByUsernameService = (username) => {
	const user = {
		username: 'usertwo',
		userEmail: 'usertwo@gmail.com',
		description: 'usertwo funtime description',
		password: '$2b$10$71r9kRsWkY/rNuykPx.RQufXKxoIakUH4HkJddWZFJUAph7ZBjdZi',
	};
	return user;
};

const getUserById = (username) => {
	const user = {
		username: 'usertwo',
		userEmail: 'usertwo@gmail.com',
		description: 'usertwo funtime description',
		password: '$2b$10$71r9kRsWkY/rNuykPx.RQufXKxoIakUH4HkJddWZFJUAph7ZBjdZi',
	};
	return user;
};

export { initializePassport };
