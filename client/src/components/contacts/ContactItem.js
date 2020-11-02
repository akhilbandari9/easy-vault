import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
	const contactContext = useContext(ContactContext);
	const { deleteContact, setCurrent, clearCurrent } = contactContext;
	const { name, _id, email, phone, type } = contact;

	const onDelete = () => {
		deleteContact(_id);
		clearCurrent();
	};
	return (
		<div className='card bg-light mb-2 pt-3 pb-2 px-3'>
			<h5 className='text-secondary text-left'>
				{name}
				<span
					style={{ float: 'right', fontSize: '.8rem' }}
					className={
						'badge rounded-pill ' +
						(type === 'professional' ? 'bg-success' : 'bg-primary')
					}
				>
					{type[0].toUpperCase() + type.slice(1)}
				</span>
			</h5>
			<ul className='mb-2'>
				{email && (
					<p className='mb-2'>
						<i className='fas fa fa-envelope-open mr-2'></i>
						<span>{email}</span>
					</p>
				)}
				{phone && (
					<p className='mb-2'>
						<i className='fas fa fa-phone mr-2'></i>
						<span>{phone}</span>
					</p>
				)}
			</ul>
			<div className='btn-group ml-auto' style={{ width: '40%' }}>
				<button
					className='btn btn-outline-secondary btn-sm'
					onClick={() => setCurrent(contact)}
				>
					<i className='fas fa-pencil-alt'></i>
				</button>
				<button className='btn btn-outline-danger btn-sm' onClick={onDelete}>
					<i className='fas fa-trash'></i>
				</button>
			</div>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
