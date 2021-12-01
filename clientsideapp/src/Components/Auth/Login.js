import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../Context/Context.js';
import { Link } from 'react-router-dom';
import { UserProfileRoute } from '../../Routes/UserProfileRoute.js';
function Login() {
	const { userId, setUserId } = useContext(UserDataContext);
	useEffect(() => {
		setUserId('user1');
	}, [userId]);
	// });

	return (
		<div>
			<div>Login Page</div>
			<div>Logged in {userId}</div>
			<Link to={UserProfileRoute.ProfilePage}>Go To {userId}</Link>
		</div>
	);
}

export { Login };
