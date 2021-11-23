import React, { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Context/Context.js';

function ProfilePageUserHeader() {
	const { userId } = useContext(UserDataContext);
	const [userProfileData, setUserProfileData] = useState();
	const [userProfileImage, setUserProfileImage] = useState();
	useEffect(() => {
		//call to get user details
		getUserProfileAPICall();
	}, [userId]);
	useEffect(() => {
		renderUserProfileData();
	}, [userProfileData]);
	let getUserProfileAPICall = useCallback(async () => {
		let url = `http://localhost:8000/getprofile/getUserProfile/${userId}`;
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
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	});

	let renderUserProfileData = () => {
		if (userProfileData !== undefined && userProfileData !== null) {
			return (
				<div>
					<ProfileUserNameComponent userNanme={userId} />
					<ProfilePageUserHeaderTitleComponent title={userProfileData.userTitle} />
					<ProfilePageUserHeaderImageComponent profileImage={userProfileImage} />
				</div>
			);
		} else {
			return <div>waiting</div>;
		}
	};
	return <div>{renderUserProfileData()}</div>;
}

function ProfileUserNameComponent(props) {
	return (
		<div>
			<h1>{props.userNanme}</h1>
		</div>
	);
}
function ProfilePageUserHeaderTitleComponent(props) {
	return (
		<div>
			<h2>{props.title}</h2>
		</div>
	);
}

function ProfilePageUserHeaderImageComponent(props) {
	return (
		<div>
			<img src={props.profileImage} />
		</div>
	);
}

export { ProfilePageUserHeader };