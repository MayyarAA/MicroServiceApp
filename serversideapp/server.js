import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import { exercisesRouter } from './Controller/ExcersieController.js';
import { bookRouter } from './Controller/BookController.js';
import { userRegisterRouter } from './Controller/Auth/UserRegisterController.js';
import { userLinksRouter } from './Controller/UserLinksController.js';
import { userLinksEditRouter } from './Controller/UserLinksEditsController/UserLinksModifyController.js';
import { userProfileRouter } from './Controller/UserProfleController/UserProfileUploadController.js';
import { getUserProfileRouter } from './Controller/UserProfleController/UserProfileGetController.js';
import { AuthLoginRouter } from './Controller/Auth/LoginUserDefault.js';
import { checkIfUserIsAuthenticated } from './Service/Auth/AuthenticationService.js';
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
// app.use(cors());
app.use(
	cors({
		// origin: 'http://localhost:3000', // allow to server to accept request from different origin
		origin: `${process.env.CLIENTSIDE_PORT}`, // allow to server to accept request from different origin
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true, // allow session cookie from browser to pass through
	})
);
app.use(bodyParser.json());
app.use(flash());
connectDB();
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
	})
);
await initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());
app.listen(apiPort, () => {
	console.log(`your server is listing on ${apiPort}`);
});

app.get('/', checkIfUserIsAuthenticated, (req, res) => {
	// console.log(JSON.stringify(req.user));
	res.send(`Hello ${req.user}!`);
});

app.get('/loginerror', function (req, res) {
	console.log('here in login error ');
	res.status(400).send('here in login error');
});

app.get('/loginsuccess', function (req, res) {
	console.log('here in login success ');
	res.status(200).json(req.user);
});

app.get('/notloggedin', function (req, res) {
	console.log('here in notloggedin' + req.user);
	res.status(400).send(`user needs to login to access E.P`);
});

app.use('/exercises', exercisesRouter);
app.use('/books', checkIfUserIsAuthenticated, bookRouter);
app.use('/User/', userRegisterRouter);
app.use('/UserLinks/', userLinksRouter);
app.use('/profile/', userProfileRouter);
app.use('/getprofile/', getUserProfileRouter);
app.use('/auth', AuthLoginRouter);
app.use('/modifylinks', checkIfUserIsAuthenticated, userLinksEditRouter);

const sslServer = https.createServer(
	{
		key: fs.readFileSync('./Certificate/key.pem'),
		cert: fs.readFileSync('./Certificate/cert.pem'),
	},
	app
);

sslServer.listen(3443, () => console.log('Secure server 🚀🔑 on port 3443'));
