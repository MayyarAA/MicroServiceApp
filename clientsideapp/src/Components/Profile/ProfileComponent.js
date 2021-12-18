import React, { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Context/Context.js';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

function ProfilePageUserHeader() {
	const { userObject, unAuthenticatedUserObj } = useContext(UserDataContext);
	const [userProfileData, setUserProfileData] = useState();
	const [userProfileImage, setUserProfileImage] = useState();
	// console.log(JSON.stringify(unAuthenticatedUserObj));
	// console.log('userObject ' + JSON.stringify(userObject));
	useEffect(() => {
		//call to get user details
		getUserProfileAPICall();
	}, [userObject]);
	useEffect(() => {
		renderUserProfileData();
	}, [userProfileData]);

	let getUserProfileAPICall = useCallback(async () => {
		let url = `${baseURL}/getprofile/getUserProfile/${userObject.username}`;
		await axios({
			method: 'get',
			url,
		})
			.then(function (response) {
				let user = response.data[0];
				//how to turn MongoDB Buffer to Base64
				setUserProfileImage(
					`data:${user.userPhotoExtensionType};base64, ${Buffer.from(
						user.userPhoto.data
					).toString('base64')}`
				);
				setUserProfileData(user);
				// console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	});

	let renderUserProfileData = () => {
		if (userProfileData !== undefined && userProfileData !== null) {
			return (
				<div>
					<ProfileUserNameComponent userNanme={userObject.username} />
					<ProfilePageUserHeaderTitleComponent title={userProfileData.userTitle} />
					<ProfilePageUserHeaderImageComponent profileImage={userProfileImage} />
				</div>
			);
		} else {
			return <div>waiting user may not have any links</div>;
		}
	};
	return <div>{renderUserProfileData()}</div>;
}

function ProfileUserNameComponent(props) {
	return (
		<div>
			<h1>@{props.userNanme}</h1>
		</div>
	);
}
function ProfilePageUserHeaderTitleComponent(props) {
	return (
		<div>
			<h2> {props.title}</h2>
		</div>
	);
}

function ProfilePageUserHeaderImageComponent(props) {
	return (
		<div>
			<img src={props.profileImage} class='ProfileImg' />
		</div>
	);
}

export { ProfilePageUserHeader };
