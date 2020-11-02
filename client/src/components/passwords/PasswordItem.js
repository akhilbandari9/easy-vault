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
		<div className='card bg-light mb-2 pt-3 pb-2 px-3'>
			<div className='mb-2'>
				<label> Provider : </label>
				<h5 style={{ display: 'inline' }}>{`  ${service_name}`}</h5>
			</div>

			{username && (
				<div className='mb-2'>
					<label> Email : </label>
					<span>{`  ${username}`}</span>
				</div>
			)}

			{email && (
				<div className='mb-2'>
					<label> Username : </label>
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
