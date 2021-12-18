import { useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { UserDataContext } from '../../Components/Context/Context.js';
import { UserLinkObj } from '../../Components/Objects/UserLinkObj';
dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

function BuildLinksFeatureSetContext() {
	const { userObject } = useContext(UserDataContext);
	const { userData, setUserData } = useContext(UserDataContext);
	const { setLinksList } = useContext(UserDataContext);
	useEffect(() => {
		if (userObject.username !== null || userObject.username !== undefined) {
			apiCallUserLinks();
		}
	}, [userObject.username]);
	useEffect(() => {
		turnAPIResponseToContextArray();
	}, [userData]);

	const apiCallUserLinks = useCallback(async () => {
		console.log(userObject.username);
		let url = `${baseURL}/UserLinks/getLink/${userObject.username}`;
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
		if (
			userData !== null &&
			userData !== undefined &&
			Object.keys(userData).length !== 0 &&
			userData.userData.length < 500
		) {
			let linksListLocal = [];
			for (let i = 0; i < userData.userData.length; i++) {
				let localInstance = userData.userData[i];
				let liistObj = new UserLinkObj(
					localInstance._id,
					localInstance.link,
					localInstance.linkName,
					localInstance.linkImage
				);
				console.log(JSON.stringify(liistObj));
				linksListLocal.push(liistObj);
			}
			setLinksList(linksListLocal);
		}
	};
}

export { BuildLinksFeatureSetContext };
