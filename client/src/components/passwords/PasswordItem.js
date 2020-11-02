import React, { useState, useContext } from 'react';
import PasswordsContext from '../../context/passwords/passwordsContext';
const PasswordItem = ({
	item: { service_name, password, username, email, _id },
}) => {
	const [slash, setSlash] = useState(false);

	const { deletePassword } = useContext(PasswordsContext);

	const toggleSlash = () => {
		setSlash((prev) => !prev);
	};

	const deleteHandler = () => {
		deletePassword(_id);
	};

	return (
<<<<<<< HEAD
		<div className='card px-4 py-3 mb-2'>
			<div className='service-name mb-2'>
				<label className='text-secondary'> Provider : </label>
=======
		<div className='card bg-light mb-2 pt-3 pb-2 px-3'>
			<div className='mb-2'>
				<label> Provider : </label>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
				<h5 style={{ display: 'inline' }}>{`  ${service_name}`}</h5>
			</div>

			{username && (
<<<<<<< HEAD
				<div className='username mb-2'>
					<label className='text-secondary'> Email : </label>
=======
				<div className='mb-2'>
					<label> Email : </label>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					<span>{`  ${username}`}</span>
				</div>
			)}

			{email && (
<<<<<<< HEAD
				<div className='email mb-2'>
					<label className='text-secondary'> Username : </label>
=======
				<div className='mb-2'>
					<label> Username : </label>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					<span>{`  ${email}`}</span>
				</div>
			)}

			{password && (
				<div className='d-flex'>
					<input
						className=''
						type={!slash ? 'password' : 'text'}
						disabled
						value={password}
					/>
					<button className='btn btn-light' onClick={toggleSlash}>
						<i className={slash ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
					</button>
				</div>
			)}

			<button
				className='btn btn-outline-danger w-25 ml-auto mt-2'
				onClick={deleteHandler}
			>
				<i className='fas fa-trash'></i>
			</button>
		</div>
	);
};

export default PasswordItem;
