import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Switch, Route, Redirect } from 'react-router-dom';
//components
import SideBar from '../layouts/SideBar';
import Contacts from '../contacts';
import Passwords from '../passwords';
import Notes from '../notes';

const Home = () => {
	// console.log(path, url);
	const { loadUser } = useContext(AuthContext);
	useEffect(() => {
		loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div className='row container-fluid'>
			<div className='col-2'>
				<SideBar />
			</div>
			<div className='col-10 container'>
				<Switch>
					<Route path='/app/contacts' component={Contacts} exact />
					<Route path='/app/passwords' component={Passwords} exact />
					<Route path='/app/notes' component={Notes} exact />
					<Redirect from='/app' to='/app/contacts' exact />
				</Switch>
			</div>
		</div>
	);
};

export default Home;
