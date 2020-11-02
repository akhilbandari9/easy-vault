import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, current, clearCurrent, updateContact } = contactContext;

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'personal',
			});
		}
	}, [current, contactContext]);

	const { name, email, phone, type } = contact;

	const onChange = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};
	return (
<<<<<<< HEAD
		<div className='container'>
			<form onSubmit={onSubmit} className=''>
				<h4 className='text-secondary text-center mb-2'>
					{current ? 'Edit Contact' : 'Add Contact'}
				</h4>
				<input
					className='form-control  mb-3'
=======
		<div className='my-3'>
			<form onSubmit={onSubmit}>
				<h3 className='text-secondary'>
					{current ? 'Edit Contact' : 'Add Contact'}
				</h3>
				<input
					className='form-control mb-2'
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					type='text'
					name='name'
					placeholder='Name'
					value={name}
					onChange={onChange}
				/>
				<input
<<<<<<< HEAD
					className='form-control mb-3'
					type='email'
					name='email'
					placeholder='Email'
=======
					className='form-control mb-2'
					type='email'
					name='email'
					placeholder='Eame'
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					value={email}
					onChange={onChange}
				/>
				<input
<<<<<<< HEAD
					className='form-control mb-3'
=======
					className='form-control mb-2'
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					type='text'
					name='phone'
					placeholder='Phone'
					value={phone}
					onChange={onChange}
				/>
<<<<<<< HEAD
				<h5>Contact Type</h5>
				<div className='form-check'>
=======
				<h6>Contact Type</h6>
				<div className='form-check ml-2 mb-2'>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					<input
						className='form-check-input'
						type='radio'
						name='type'
						value='personal'
						checked={type === 'personal'}
						onChange={onChange}
<<<<<<< HEAD
						id='personal-check'
					/>
					<label className='form-check-label' htmlFor='personal-check'>
						Personal
					</label>
				</div>
				<div className='form-check'>
=======
						id='personal'
					/>
					<label className='form-check-label' htmlFor='personal'>
						Personal
					</label>
				</div>
				<div className='form-check ml-2 mb-2'>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					<input
						className='form-check-input'
						type='radio'
						name='type'
						value='professional'
						checked={type === 'professional'}
						onChange={onChange}
<<<<<<< HEAD
						id='perofessional-check'
					/>
					<label className='form-check-label' htmlFor='perofessional-check'>
						Professional
					</label>
				</div>
				<div className='mt-2 mb-3'>
=======
						id='professional'
					/>
					<label className='form-check-label' htmlFor='professional'>
						Professional
					</label>
				</div>
				<div>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					<input
						type='submit'
						value={current ? 'Update Contact' : 'Add Contact'}
						className='btn btn-primary btn-block'
					/>
				</div>
				{current && (
					<div>
<<<<<<< HEAD
						<button className='btn btn-light btn-block mb-3' onClick={clearAll}>
=======
						<button className='btn btn-light btn-block' onClick={clearAll}>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
							Clear
						</button>
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
