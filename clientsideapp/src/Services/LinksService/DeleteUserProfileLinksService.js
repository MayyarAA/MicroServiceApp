import React, { useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { UserDataContext } from '../../Components/Context/Context.js';
import { UserLinkObj } from '../../Components/Objects/UserLinkObj';
import { DeleteLinkObject } from '../../Components/Objects/DeleteLinkObject.js';
import { UserObject } from '../../Components/Objects/UserObject.js';
dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;
function DeleteUserProfileLinksService(userObject, deleteLinksList) {
	let deleteLinksAPIObject = {
		userName: '',
		userId: '',
		listOfLinksIdToRemove: [],
	};
	const deletUserProfileLinksAPI = async (deleteLinksAPIObject) => {
		let url = `${baseURL}/UserLinks/deleteLinkExistingUser`;
		await axios.patch(url, deleteLinksAPIObject);
	};
	deleteLinksAPIObject.userId = userObject.userId;
	deleteLinksAPIObject.userName = userObject.userName;
	for (let i = 0; i < deleteLinksList.length; i++) {
		console.log(deleteLinksList[i]);
		deleteLinksAPIObject.listOfLinksIdToRemove.push(deleteLinksList[i].id);
		// let deleteLinkObj = new DeleteLinkObject(
		// 	userObject.userId,
		// 	userObject.userName,
		// 	deleteLinksList[i].id
		// );
		// console.log(deleteLinkObj);
	}
	console.log(JSON.stringify(deleteLinksAPIObject));
	deletUserProfileLinksAPI(deleteLinksAPIObject);
}

export { DeleteUserProfileLinksService };