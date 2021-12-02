import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../Context/Context.js';
import { Link } from 'react-router-dom';
import { UserProfileRoute } from '../../Routes/UserProfileRoute.js';
import { UserObject } from '../Objects/UserObject.js';
function Login() {
	const { userId, setUserId } = useContext(UserDataContext);
	const { userObject, setUserObject } = useContext(UserDataContext);
	useEffect(() => {
		let userObject = new UserObject('6194cac522f034395880e7ad', 'user1');
		setUserId('user1');
		setUserObject(userObject);
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
