import React, { createContext, useState } from 'react';
import { UserObject } from '../Objects/UserObject.js';
const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
	const [userData, setUserData] = React.useState({});
	const [userId, setUserId] = React.useState('');
	const [linksList, setLinksList] = React.useState([]);
	const [deleteLinksList, setDeleteLinksList] = useState([]);
	const [userObject, setUserObject] = useState(new UserObject('intial', 'intial'));

	return (
		<UserDataContext.Provider
			value={{
				userData,
				setUserData,
				userId,
				setUserId,
				linksList,
				setLinksList,
				deleteLinksList,
				setDeleteLinksList,
				userObject,
				setUserObject,
			}}>
			{props.children}
		</UserDataContext.Provider>
	);
};

export { UserDataContext, UserDataContextProvider };
