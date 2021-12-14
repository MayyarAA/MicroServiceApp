import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import { exercisesRouter } from './Controller/ExcersieController.js';
import { bookRouter } from './Controller/BookController.js';
import { userRegisterRouter } from './Controller/Auth/UserRegisterController.js';
import { userLinksRouter } from './Controller/UserLinksController.js';
import { userProfileRouter } from './Controller/UserProfleController/UserProfileUploadController.js';
import { getUserProfileRouter } from './Controller/UserProfleController/UserProfileGetController.js';
import { AuthLoginRouter } from './Controller/Auth/LoginUserDefault.js';
import https from 'https';
import fs from 'fs';
import passport from 'passport';
import { initializePassport } from './config/passport-config.js';
import flash from 'express-flash';
import session from 'express-session';
const app = express();
const apiPort = 8000;
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(flash());
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
	})
);
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.listen(apiPort, () => {
	console.log(`your server is listing on ${apiPort}`);
});

connectDB();

// app.post(
// 	'/login',
// 	passport.authenticate('local', { failureRedirect: '/login' }),
// 	function (req, res) {
// 		console.log('here in login');
// 		res.status(200);
// 	}
// );

app.get('/loginerror', function (req, res) {
	console.log('here in login error');
	res.status(400).send('here in login error');
});

app.get('/loginsuccess', function (req, res) {
	console.log('here in login success');
	res.status(400).send(`login success for user ${req.user.username}`);
});

app.use('/exercises', exercisesRouter);
app.use('/books', bookRouter);
app.use('/User/', userRegisterRouter);
app.use('/UserLinks/', userLinksRouter);
app.use('/profile/', userProfileRouter);
app.use('/getprofile/', getUserProfileRouter);
app.use('/auth', AuthLoginRouter);
const sslServer = https.createServer(
	{
		key: fs.readFileSync('./Certificate/key.pem'),
		cert: fs.readFileSync('./Certificate/cert.pem'),
	},
	app
);

sslServer.listen(3443, () => console.log('Secure server 🚀🔑 on port 3443'));
