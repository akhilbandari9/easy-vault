import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alerts from './components/layouts/Alerts';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import NotesState from './context/notes/notesState';
import PasswordsState from './context/passwords/passwordsState';

import setAuthToken from './utils/setAuthToken';

import PrivateRoute from './routing/PrivateRoute';
import routes from './routes';
import authContext from './context/auth/authContext';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<PasswordsState>
					<NotesState>
						<AlertState>
							<Router>
								<Navbar />
								<div className='container'>
									<Alerts />
									<Switch>
										<Route exact path='/about' component={About} />
										<Route exact path='/auth/register' component={Register} />
										<Route exact path='/auth/login' component={Login} />
										<PrivateRoute path='/' component={Home} />
										<Redirect from='/' to='/app' />
										<Route path='*' render={() => <h1>Not Found 404</h1>} />
									</Switch>
								</div>
							</Router>
						</AlertState>
					</NotesState>
				</PasswordsState>
			</ContactState>
		</AuthState>
	);
};

export default App;
