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
		<div className='my-3'>
			<form onSubmit={onSubmit}>
				<h3 className='text-secondary'>
					{current ? 'Edit Contact' : 'Add Contact'}
				</h3>
				<input
					className='form-control mb-2'
					type='text'
					name='name'
					placeholder='Name'
					value={name}
					onChange={onChange}
				/>
				<input
					className='form-control mb-2'
					type='email'
					name='email'
					placeholder='Eame'
					value={email}
					onChange={onChange}
				/>
				<input
					className='form-control mb-2'
					type='text'
					name='phone'
					placeholder='Phone'
					value={phone}
					onChange={onChange}
				/>
				<h6>Contact Type</h6>
				<div className='form-check ml-2 mb-2'>
					<input
						className='form-check-input'
						type='radio'
						name='type'
						value='personal'
						checked={type === 'personal'}
						onChange={onChange}
						id='personal'
					/>
					<label className='form-check-label' htmlFor='personal'>
						Personal
					</label>
				</div>
				<div className='form-check ml-2 mb-2'>
					<input
						className='form-check-input'
						type='radio'
						name='type'
						value='professional'
						checked={type === 'professional'}
						onChange={onChange}
						id='professional'
					/>
					<label className='form-check-label' htmlFor='professional'>
						Professional
					</label>
				</div>
				<div>
					<input
						type='submit'
						value={current ? 'Update Contact' : 'Add Contact'}
						className='btn btn-primary btn-block'
					/>
				</div>
				{current && (
					<div>
						<button className='btn btn-light btn-block' onClick={clearAll}>
							Clear
						</button>
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
