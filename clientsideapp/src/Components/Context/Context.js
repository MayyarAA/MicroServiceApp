import React, { createContext } from 'react';
const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
	const [userData, setUserData] = React.useState({});
	const [userId, setUserId] = React.useState('');
	return (
		<UserDataContext.Provider
			value={{
				userData,
				setUserData,
				userId,
				setUserId,
			}}>
			{props.children}
		</UserDataContext.Provider>
	);
};

export { UserDataContext, UserDataContextProvider };
