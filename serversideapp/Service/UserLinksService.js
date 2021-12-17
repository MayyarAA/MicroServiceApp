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

const updateUserLinkValueService = (res, userNameFromReq, linkIdFromReq, linkObj) => {
	UserLinks.findOneAndUpdate(
		{ userName: userNameFromReq, userData: { $elemMatch: { _id: linkIdFromReq } } },
		{
			$set: {
				'userData.$.link': linkObj.link,
				'userData.$.linkName': linkObj.linkName,
				'userData.$.linkImage': linkObj.linkImage,
			},
		},
		{ new: true, useFindAndModify: false },

		(error, responseMongoo) => {
			// console.log('----- error ' + error + ' -----responseMongoo ' + responseMongoo);
			if (error === 'MongoError' || error !== null || responseMongoo === null) {
				res.status(404).json(error);
				return;
			}
			res.status(201).json(responseMongoo);
			return;
		}
	);
};

const getLinksForUserService = async (res, userNameFromReq) => {
	// async function getLinksForUserService(res, userNameFromReq) {
	await UserLinks.find({ userName: userNameFromReq })
		.then((userData) => {
			console.log(userData);
			// if (userDate === undefined || userDate === null || userDate.length === 0) {
			// 	console.log('here in if statement');
			// 	res.status(404).send('Error no user found with given userName');
			// 	return;
			// }
			console.log('here after if statement');
			res.json(userData);
			return;
		})
		.catch((error) => {
			console.log('here in catch block');
			res.status(400).json(error);
			return;
		});
};
export { callAddLinkService, updateUserLinkValueService, getLinksForUserService };
