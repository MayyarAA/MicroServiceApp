import React, { useContext } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { UserLinkObj } from '../../Components/Objects/UserLinkObj.js';
import { UserDataContext } from '../../Components/Context/Context.js';
dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

function AddNewUserLinksService(linkName, linkURL, linkImage, userObject) {
	console.log(JSON.stringify(userObject));
	let addNewLinkExistingUserObj = {
		userName: '',
		userDataObject: [],
	};
	let userLinkObject = { link: linkURL, linkName: linkName, linkImage: linkImage };
	addNewLinkExistingUserObj.userDataObject.push(userLinkObject);
	addNewLinkExistingUserObj.userName = userObject.username;
	addNewUserLinksAPI(addNewLinkExistingUserObj);
}
const addNewUserLinksAPI = async (addNewLinkExistingUserObj) => {
	console.log(JSON.stringify(addNewLinkExistingUserObj));
	console.log(addNewLinkExistingUserObj.userName);
	let url = `${baseURL}/modifylinks/addLinkExistingUser`;
	await axios
		.patch(url, addNewLinkExistingUserObj)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
};

export { AddNewUserLinksService };
