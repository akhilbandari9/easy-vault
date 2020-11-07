import React from 'react';
import PasswordsForm from './PasswordsForm';
import PasswordsList from './PasswordsList';
import PasswordsSearch from './PasswordsSearch';

const Index = () => {
	return (
		<div className='row'>
			<div className='col-lg-6'>
				<PasswordsForm />
			</div>
			<div className='col-lg-6'>
				<PasswordsSearch />
				<PasswordsList />
			</div>
		</div>
	);
};

export default Index;
