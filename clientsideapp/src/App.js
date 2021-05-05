import logo from './logo.svg';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import './App.css';
import UserProfileCentralPage from './Pages/UserProfileCentralPage';
import { Button } from '@material-ui/core';
function App() {
	return (
		<div className='App'>
			<Router>
				{/* <Route path='/' component={UserProfileCentralPage} /> */}

				<Route
					path='/UserProfileCentralPage'
					component={UserProfileCentralPage}
				/>
			</Router>
			{/* <Button> Go to UserProfile</Button> */}
		</div>
	);
}

export default App;
