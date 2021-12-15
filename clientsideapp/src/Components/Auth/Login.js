import React, { useContext, useEffect } from 'react';
import { UserDataContext } from '../Context/Context.js';
import { Link, useHistory } from 'react-router-dom';
import { UserObject } from '../Objects/UserObject.js';
// import { Redirect, useHistory } from 'react-router-dom';
import { UserProfileRoute } from '../../Routes/UserProfileRoute.js';
import { AuthenticateUserService } from '../../Services/AuthService/AuthenticateUserService.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
function Login() {
	const { userId, setUserId } = useContext(UserDataContext);
	const {
		userObject,
		setUserObject,
		unAuthenticatedUserObj,
		setUnAuthenticatedUserObj,
	} = useContext(UserDataContext);
	useEffect(() => {
		let userObject = new UserObject('6194cac522f034395880e7ad', 'user1');
		setUserId('user1');
		setUserObject(userObject);
	}, [userId]);

	return (
		<div>
			<Grid container spacing={3} alignItems='center' justify='center'>
				<Grid item>
					<h2> Username</h2>
				</Grid>
				<Grid item>
					<LoginUserNameComponent />
				</Grid>
			</Grid>

			<Grid container spacing={3} alignItems='center' justify='center'>
				<Grid item>
					<h2> Password</h2>
				</Grid>
				<Grid item>
					<LoginUserPasswordComponent />
				</Grid>
			</Grid>
			<DeleteLinkSubmitButton />

			<Link to={UserProfileRoute.ProfilePage}>Go To {userId}</Link>
		</div>
	);
}

function LoginUserNameComponent() {
	const { unAuthenticatedUserObj, setUnAuthenticatedUserObj } = useContext(UserDataContext);
	let unAuthUserObj = unAuthenticatedUserObj;
	return (
		<div>
			<TextField
				required
				label='Username'
				id='outlined-required'
				onChange={(e) => {
					unAuthUserObj.username = e.target.value;
					setUnAuthenticatedUserObj(unAuthUserObj);
				}}
			/>
		</div>
	);
}

function LoginUserPasswordComponent() {
	const { unAuthenticatedUserObj, setUnAuthenticatedUserObj } = useContext(UserDataContext);
	let unAuthUserObj = unAuthenticatedUserObj;
	return (
		<div>
			<TextField
				required
				label='Username'
				id='outlined-required'
				onChange={(e) => {
					unAuthUserObj.password = e.target.value;
					setUnAuthenticatedUserObj(unAuthUserObj);
				}}
			/>
		</div>
	);
}

function DeleteLinkSubmitButton() {
	const history = useHistory();
	const { unAuthenticatedUserObj } = useContext(UserDataContext);
	const callAuthenticateUserService = () => {
		return AuthenticateUserService(unAuthenticatedUserObj);
	};

	let button = (
		<div>
			<Button
				variant='outlined'
				onClick={() => {
					if (callAuthenticateUserService()) {
						history.push(UserProfileRoute.ProfilePage);
					}
					console.log('error not auth');
				}}>
				Log in
			</Button>
		</div>
	);

	return <div>{button}</div>;
}

export { Login };
