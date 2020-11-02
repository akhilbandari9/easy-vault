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
<<<<<<< HEAD
		<div className='card bg-light mb-2 py-3 px-4'>
=======
		<div className='card bg-light mb-2 pt-3 pb-2 px-3'>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
			<h5 className='text-secondary text-left'>
				{name}
				<span
					style={{ float: 'right', fontSize: '.8rem' }}
					className={
						'badge rounded-pill ' +
<<<<<<< HEAD
						(type === 'professional' ? 'bg-primary' : 'bg-success')
=======
						(type === 'professional' ? 'bg-success' : 'bg-primary')
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					}
				>
					{type[0].toUpperCase() + type.slice(1)}
				</span>
			</h5>
<<<<<<< HEAD
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
=======
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
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
				<button
					className='btn btn-outline-secondary btn-sm'
					onClick={() => setCurrent(contact)}
				>
<<<<<<< HEAD
					{/* <span>Edit</span> */}
					<i className='fas fa-pencil-alt ml-2'></i>
				</button>
				<button className='btn btn-outline-danger btn-sm' onClick={onDelete}>
					{/* <span>Delete</span> */}
					<i className='fas fa-trash ml-2'></i>
=======
					<i className='fas fa-pencil-alt'></i>
				</button>
				<button className='btn btn-outline-danger btn-sm' onClick={onDelete}>
					<i className='fas fa-trash'></i>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
				</button>
			</div>
		</div>
	);
};

ContactItem.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default ContactItem;
