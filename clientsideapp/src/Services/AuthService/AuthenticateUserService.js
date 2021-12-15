import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = process.env.REACT_APP_LOCALHOSTURL;

function AuthenticateUserService(unAuthenticatedUserObj) {
	return AuthenticateUserServiceAPI(unAuthenticatedUserObj);
}

const AuthenticateUserServiceAPI = async (unAuthenticatedUserObj) => {
	let url = `${baseURL}/auth/login`;
	console.log(JSON.stringify(unAuthenticatedUserObj));

	await axios
		.post(url, unAuthenticatedUserObj)
		.then((res) => {
			console.log(res + ' res.status ' + res.status);
			if (res.status === 200) {
				console.log('inside if ' + res.status);
				return true;
				// return <Redirect to={UserProfileRoute.ProfilePage} />;
			}
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
};

export { AuthenticateUserService };
