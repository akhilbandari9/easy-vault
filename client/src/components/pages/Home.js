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
		<div className='row container-fluid mt-3'>
			<div className='col-md-2'>
				<SideBar />
			</div>
			<div className='col-md-10 container-sm'>
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
