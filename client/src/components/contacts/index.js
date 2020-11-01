import React from 'react';
import ContactFilter from '../contacts/ContactFilter';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';

const ContactsHome = () => {
	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-5'>
						<ContactForm />
					</div>
					<div className='col-lg-7'>
						<ContactFilter />
						<Contacts />
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactsHome;
