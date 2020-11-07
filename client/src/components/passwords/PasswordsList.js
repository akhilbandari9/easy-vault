import React, { useEffect, useContext } from 'react';
import PasswordItem from './PasswordItem';
import Spinner from '../layouts/Spinner';
import PasswordsContext from '../../context/passwords/passwordsContext';

const PasswordsList = () => {
	const context = useContext(PasswordsContext);
	const { getPasswords, passwords, loading } = context;

	useEffect(() => {
		getPasswords();
	}, [passwords]);

	if (passwords !== null && passwords.length === 0 && !loading) {
		return <h4>Please add a contact</h4>;
	}
	return (
		<>
			{passwords !== null && !loading ? (
				passwords.map((item) => <PasswordItem key={item._id} item={item} />)
			) : (
				<Spinner />
			)}
		</>
	);
};

export default PasswordsList;
