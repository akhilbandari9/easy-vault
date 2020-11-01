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
		<div className='card bg-light mb-2 py-3 px-4'>
			<h5 className='text-secondary text-left'>
				{name}
				<span
					style={{ float: 'right' }}
					className={
						'badge rounded-pill ' +
						(type === 'professional' ? 'bg-primary' : 'bg-success')
					}
				>
					{type[0].toUpperCase() + type.slice(1)}
				</span>
			</h5>
			<ul className='list'>
				{email && (
					<div className='mb-2'>
						<i className='fas fa fa-envelope-open mr-2'></i>
						<span>{email}</span>
					</div>
				)}
				{phone && (
					<div>
						<i className='fas fa fa-phone mr-2'></i>
						<span>{phone}</span>
					</div>
				)}
			</ul>
			<div className='btn-group w-50 ml-auto'>
				<button
					className='btn btn-outline-secondary btn-sm'
					onClick={() => setCurrent(contact)}
				>
					{/* <span>Edit</span> */}
					<i className='fas fa-pencil-alt ml-2'></i>
				</button>
				<button className='btn btn-outline-danger btn-sm' onClick={onDelete}>
					{/* <span>Delete</span> */}
					<i className='fas fa-trash ml-2'></i>
				</button>
			</div>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
