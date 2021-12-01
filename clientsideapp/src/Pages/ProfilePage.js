import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../Components/Context/Context.js';
import UserProfileLinks from '../Components/LinkFeature/UserProfleLinks.js';
import { ProfilePageUserHeader } from '../Components/Profile/ProfileComponent.js';
import { EditUserProfileButton } from '../Components/EditProfile/EditUserProfileButton.js';
function ProfilePage() {
	const { userId, setUserId } = useContext(UserDataContext);
	useEffect(() => {
		// setUserId('user1');
	}, [userId]);
	console.log(userId);
	return (
		<div>
			<ProfilePageUserHeader />
			<UserProfileLinks />
			<EditUserProfileButton />
		</div>
	);
}

export default ProfilePage;
