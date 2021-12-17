import { UserLinks } from '../Model/UserLinksModel.js';
import express from 'express';

const callAddLinkService = async (res, userName, userAPIData) => {
	console.log(' userAPIData ' + userAPIData[0]);
	const newUserLink = new UserLinks({
		userName: userName,
		userData: userAPIData,
	});
	await newUserLink
		.save()
		.then((status) => res.status(201).json(status))
		.catch((err) => res.status(400).json(`Error ${err}`));
};

const getLinksForUserService = async (res, userNameFromReq) => {
	// async function getLinksForUserService(res, userNameFromReq) {
	await UserLinks.find({ userName: userNameFromReq })
		.then((userData) => {
			res.json(userData);
			return;
		})
		.catch((error) => {
			res.status(400).json(error);
			return;
		});
};
export { callAddLinkService, getLinksForUserService };
