import React, { useContext, useEffect } from 'react';

import { UserDataContext } from '../Context/Context.js';

function Login() {
	const { setUserId } = useContext(UserDataContext);
	useEffect(() => {
		setUserId('user1');
		// console.log()
	}, [setUserId]);
	// });

	return <div>Login Page</div>;
}

export { Login };
