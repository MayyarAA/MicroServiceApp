import React, { useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { UserDataContext } from '../Context/Context.js';

function Login() {
	const { setUserId } = useContext(UserDataContext);
	useEffect(() => {
		setUserId('user1');
	}, []);

	return <div>Login Page</div>;
}

export { Login };
