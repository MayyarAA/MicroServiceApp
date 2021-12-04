import React, { createContext, useState } from 'react';
import { UserObject } from '../Objects/UserObject.js';
import { EditUserLinkObj } from '../Objects/UserLinkObj.js';

const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
	const [userData, setUserData] = React.useState({});
	const [userId, setUserId] = React.useState('');
	const [linksList, setLinksList] = React.useState([]);
	const [deleteLinksList, setDeleteLinksList] = useState([]);
	const [userObject, setUserObject] = useState(new UserObject('intial', 'intial'));
	const [editedLinkObj, setEditedLinkObj] = useState(new EditUserLinkObj('', '', '', ''));

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
				editedLinkObj,
				setEditedLinkObj,
			}}>
			{props.children}
		</UserDataContext.Provider>
	);
};

export { UserDataContext, UserDataContextProvider };
