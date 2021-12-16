import React from 'react';
import './App.css';
import ProflePage from './Pages/ProfilePage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './Components/Auth/Login.js';
import { UserDataContextProvider } from './Components/Context/Context.js';
import {
	UserProfileRoute,
	UserEditeRoute,
	EditSingleLinkRoute,
} from './Routes/UserProfileRoute.js';
import { EditProfilePage } from './Pages/EditProfilePage.js';
import { EditSingleLinkPage } from './Pages/EditSingleLinkPage.js';
function App() {
	return (
		<UserDataContextProvider>
			<BrowserRouter>
				{/* <Router> */}
				<Switch>
					<div className='App'>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path={UserProfileRoute.ProfilePage}>
							<ProflePage />
						</Route>
						<Route path={UserEditeRoute.EditProfilePage}>
							<EditProfilePage />
						</Route>
						<Route path={EditSingleLinkRoute.EditSingleLinkPage}>
							<EditSingleLinkPage />
						</Route>
					</div>
				</Switch>
				{/* </Router> */}
			</BrowserRouter>
		</UserDataContextProvider>
	);
}

export default App;
