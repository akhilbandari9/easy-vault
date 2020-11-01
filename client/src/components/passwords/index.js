import React from 'react';
import { useEffect } from 'react';
import PasswordsForm from './PasswordsForm';
import PasswordsList from './PasswordsList';
import PasswordsSearch from './PasswordsSearch';

import { useContext } from 'react';
import PasswordsContext from '../../context/passwords/passwordsContext';

const Index = () => {
	const { getPasswords, passwords, loading } = useContext(PasswordsContext);

	useEffect(() => {
		getPasswords();

		//eslint-disable-next-line
	}, [passwords]);
	return (
		<div className='grid-2'>
			<div className='form'>
				<PasswordsForm />
			</div>
			<div className='list'>
				<PasswordsSearch />
				<PasswordsList list={passwords} loading={loading} />
			</div>
		</div>
	);
};

export default Index;
