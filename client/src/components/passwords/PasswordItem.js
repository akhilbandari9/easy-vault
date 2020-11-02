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
		<div className='card px-4 py-3 mb-2'>
			<div className='service-name mb-2'>
				<label className='text-secondary'> Provider : </label>
				<h5 style={{ display: 'inline' }}>{`  ${service_name}`}</h5>
			</div>

			{username && (
				<div className='username mb-2'>
					<label className='text-secondary'> Email : </label>
					<span>{`  ${username}`}</span>
				</div>
			)}

			{email && (
				<div className='email mb-2'>
					<label className='text-secondary'> Username : </label>
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
