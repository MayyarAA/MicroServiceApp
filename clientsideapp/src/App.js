import React from 'react';

import './App.css';
import ProflePage from './Pages/ProfilePage.js';

import { Login } from './Components/Auth/Login.js';
import { UserDataContextProvider } from './Components/Context/Context.js';
function App() {
	return (
		<UserDataContextProvider>
			<div className='App'>
				<Login />
				<ProflePage />
			</div>
		</UserDataContextProvider>
	);
}

export default App;
