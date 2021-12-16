import axios from 'axios';
import dotenv from 'dotenv';
import { useContext } from 'react';
import { UserDataContext } from '../../Components/Context/Context.js';
import { UserObject } from '../../Components/Objects/UserObject.js';
dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

async function AuthenticateUserService(unAuthenticatedUserObj) {
	return await AuthenticateUserServiceAPI(unAuthenticatedUserObj);
}

// const AuthenticateUserServiceAPI = async (unAuthenticatedUserObj) => {
async function AuthenticateUserServiceAPI(unAuthenticatedUserObj) {
	let url = `${baseURL}/auth/login`;
	// console.log(JSON.stringify(unAuthenticatedUserObj));
	// const { setUserObject } = useContext(UserDataContext);
	// console.log(JSON.stringify(unAuthenticatedUserObj));
	let authenticationResult = false;

	authenticationResult = await axios
		.post(url, unAuthenticatedUserObj)
		.then((res) => {
			console.log(res);
			return true;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
	console.log(authenticationResult);
	return authenticationResult;
}

export { AuthenticateUserService };
