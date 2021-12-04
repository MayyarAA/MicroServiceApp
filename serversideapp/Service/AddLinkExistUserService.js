import express from 'express';
import { UserLinks } from '../Model/UserLinksModel.js';
async function CheckIfUserExistsService(userId) {
	let result;
	await UserLinks.findOne({ userName: userId }, (err) => {
		// if (err) {
		// 	console.log('in error if statment in service' + userId + ' ' + err);
		// 	result = false;
		// 	return;
		// } else {
		// 	console.log('in true if statment in service' + userId);
		// 	result = true;
		// 	return;
		// }
	})
		.then(() => {
			result = true;
		})
		.catch((err) => {
			result = false;
		});
	// console.log('CheckIfUserExistsService returns ' + result);
	return await result;
}

export { CheckIfUserExistsService };
