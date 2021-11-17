import React from 'react';

import './App.css';
import UserProfileCentralPage from './Pages/UserProfileCentralPage';

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
