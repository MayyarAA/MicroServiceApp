import React, { useContext, useEffect } from 'react';
import logo from './logo.svg';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import UserProfileCentralPage from './Pages/UserProfileCentralPage';
import { Button } from '@material-ui/core';
import UserProfileLinks from './Components/UserProfleLinks.js';
import { MainPage } from './Components/MainPage.js';
import { Login } from './Components/Auth/Login.js';
import {
	UserDataContext,
	UserDataContextProvider,
} from './Components/Context/Context.js';
function App() {
	return (
		<UserDataContextProvider>
			<div className='App'>
				<div>here</div>
				<Login />
				<MainPage />
				<UserProfileLinks />
			</div>
		</UserDataContextProvider>
	);
}

export default App;
