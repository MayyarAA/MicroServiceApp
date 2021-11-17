import React, { useContext, useEffect } from 'react';
import { UserDataContext } from './Context/Context.js';
function MainPage() {
	const { userData, setUserData } = useContext(UserDataContext);
	const { userId } = useContext(UserDataContext);

	useEffect(() => {}, [userData]);

	return (
		<div>
			{/* <div>{userData.userData[0].link}</div> */}
			<div>{userId}</div>
		</div>
	);
}

export { MainPage };
