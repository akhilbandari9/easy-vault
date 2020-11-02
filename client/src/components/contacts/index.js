import React from 'react';
import ContactFilter from '../contacts/ContactFilter';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';

const ContactsHome = () => {
	return (
		<>
			<div className='row'>
				<div className='col-lg-6'>
					<ContactForm />
				</div>
				<div className='col-lg-6'>
					<ContactFilter />
					<Contacts />
				</div>
			</div>
		</>
	);
};

export default ContactsHome;
