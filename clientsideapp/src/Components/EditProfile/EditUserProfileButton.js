import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserEditeRoute } from '../../Routes/UserProfileRoute.js';
import { UserDataContext } from '../Context/Context.js';
function EditUserProfileButton() {
	const { userId } = useContext(UserDataContext);

	let button = (
		<div>
			<Button variant='outlined' component={Link} to={UserEditeRoute.EditProfilePage}>
				Edit Profile
			</Button>
		</div>
	);

	return <div>{button}</div>;
}

export { EditUserProfileButton };
