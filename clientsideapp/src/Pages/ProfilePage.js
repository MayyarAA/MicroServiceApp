import React from 'react';

import UserProfileLinks from '../Components/UserProfleLinks.js';
import { ProfilePageUserHeader } from '../Components/Profile/ProfileComponent.js';
function ProfilePage() {
	return (
		<div>
			<ProfilePageUserHeader />
			<UserProfileLinks />
		</div>
	);
}

export default ProfilePage;