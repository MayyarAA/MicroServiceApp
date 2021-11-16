import React, { useContext, useEffect } from 'react';
import { UserDataContext } from './Context/Context.js';
function MainPage() {
	const { userData, setUserData } = useContext(UserDataContext);
	useEffect(() => {}, []);

	return <div>{userData.createdAt}</div>;
}

export { MainPage };
