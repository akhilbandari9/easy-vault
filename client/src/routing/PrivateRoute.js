import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

import { Route, Navigate, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loading } = authContext;
	return (
		<Route
			{...rest}
			path='/app'
			render={(props) =>
				!isAuthenticated && !loading ? (
					<Redirect to='/auth/login' />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
}

export default PrivateRoute;
