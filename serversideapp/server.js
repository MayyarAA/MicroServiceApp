// const express = require('express');
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
import bcrypt from 'bcrypt';
import https from 'https';
import path from 'path';
import fs from 'fs';
const app = express();
const apiPort = 8000;
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.listen(apiPort, () => {
	console.log(`your server is listing on ${apiPort}`);
});

connectDB();

app.use('/exercises', exercisesRouter);
app.use('/books', bookRouter);
app.use('/User/', userRegisterRouter);
app.use('/UserLinks/', userLinksRouter);
app.use('/profile/', userProfileRouter);
app.use('/getprofile/', getUserProfileRouter);

const sslServer = https.createServer(
	{
		key: fs.readFileSync('./Certificate/key.pem'),
		cert: fs.readFileSync('./Certificate/cert.pem'),
	},
	app
);

sslServer.listen(3443, () => console.log('Secure server 🚀🔑 on port 3443'));

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
