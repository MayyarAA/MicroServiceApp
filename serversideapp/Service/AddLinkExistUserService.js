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
			console.log(
				'in .then of CheckIfUserExistsService' +
					userId +
					'result is set to ' +
					result
			);
		})
		.catch((err) => {
			result = false;
			console.log(
				'in .catch of CheckIfUserExistsService ' +
					err +
					+' ' +
					userId +
					'result is set to ' +
					result
			);
		});
	console.log('CheckIfUserExistsService returns ' + result);
	return await result;
}

export { CheckIfUserExistsService };
