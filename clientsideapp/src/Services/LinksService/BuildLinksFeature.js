import React, { useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { UserDataContext } from '../../Components/Context/Context.js';
import { UserLinkObj } from '../../Components/Objects/UserLinkObj';
dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

function BuildLinksFeatureSetContext() {
	const { userId } = useContext(UserDataContext);
	const { userData, setUserData } = useContext(UserDataContext);
	const { linksList, setLinksList } = useContext(UserDataContext);
	useEffect(() => {
		if (userId !== null || userId !== undefined) {
			apiCallUserLinks();
		}
	}, [userId]);
	useEffect(() => {
		turnAPIResponseToContextArray();
	}, [userData]);

	const apiCallUserLinks = useCallback(async () => {
		let url = `${baseURL}/UserLinks/getLink/${userId}`;
		await axios({
			method: 'get',
			url,
		})
			.then(function (response) {
				setUserData(response.data[0]);
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	});

	const turnAPIResponseToContextArray = () => {
		if (Object.keys(userData).length !== 0 && userData.userData.length < 500) {
			let linksListLocal = [];
			for (let i = 0; i < userData.userData.length; i++) {
				let localInstance = userData.userData[i];
				let liistObj = new UserLinkObj(
					localInstance._id,
					localInstance.link,
					localInstance.linkName,
					localInstance.linkImage
				);
				linksListLocal.push(liistObj);
			}
			setLinksList(linksListLocal);
		}
	};
}

export { BuildLinksFeatureSetContext };
