import React from 'react';
import ContactFilter from '../contacts/ContactFilter';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';

const ContactsHome = () => {
	return (
		<>
<<<<<<< HEAD
			<div className='container'>
				<div className='row'>
					<div className='col-lg-5'>
						<ContactForm />
					</div>
					<div className='col-lg-7'>
						<ContactFilter />
						<Contacts />
					</div>
=======
			<div className='row'>
				<div className='col-lg-6'>
					<ContactForm />
				</div>
				<div className='col-lg-6'>
					<ContactFilter />
					<Contacts />
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
				</div>
			</div>
		</>
	);
};

export default ContactsHome;
