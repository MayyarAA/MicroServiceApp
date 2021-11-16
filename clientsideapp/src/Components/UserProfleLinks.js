import React, { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { UserDataContext } from './Context/Context.js';
function UserProfileLinks() {
	// let userId = 'user1';
	const { userId } = useContext(UserDataContext);

	const { userData, setUserData } = useContext(UserDataContext);
	useEffect(() => {
		apiCallUserLinks();
	}, [userId]);
	let apiCallUserLinks = useCallback(async () => {
		let url = `http://localhost:8000/UserLinks/getLink/${userId}`;
		await axios({
			method: 'get',
			url,
		})
			.then(function (response) {
				setUserData(response.data[0]);
			})
			.catch(function (error) {
				console.log(error);
			});
	});

	let printFcn = async () => {};
	printFcn();
	if (Object.keys(userData).length != 0) {
		console.log(userData);
	}

	return <div>here from UserProfileLinks</div>;
}

export default UserProfileLinks;
