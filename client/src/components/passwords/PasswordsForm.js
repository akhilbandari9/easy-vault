import React, { useState, useContext } from 'react';
import PasswordsContext from '../../context/passwords/passwordsContext';

const PasswordsForm = () => {
	const passwordContext = useContext(PasswordsContext);

	const { addPassword } = passwordContext;

	const [input, setInput] = useState({
		service_name: '',
		username: '',
		email: '',
		password: '',
	});

	const [active, setActive] = useState(false);

	const inputHandler = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		addPassword(input);
		setInput({
			service_name: '',
			username: '',
			email: '',
			password: '',
		});
	};

	const toggle = (e) => {
		e.preventDefault();
		setActive((prev) => !prev);
	};

	return (
		<form className='form' onSubmit={submitHandler}>
			<h4 className='text-center mb-2 text-secondary'>Save Password</h4>
			<div className='mb-2'>
				<label className='form-label'>Servide Provider</label>
				<input
					type='text'
					className='form-control'
					placeholder='Service Provider'
					name='service_name'
					onChange={inputHandler}
				/>
			</div>
			<div className='mb-3'>
				<label className='form-label'>Username</label>
				<input
					type='text'
					className='form-control'
					placeholder='Username'
					name='username'
					onChange={inputHandler}
				/>
			</div>
			<div className='mb-3'>
				<label className='form-label'>Email Address</label>
				<input
					type='email'
					className='form-control'
					placeholder='Email Address'
					name='email'
					onChange={inputHandler}
				/>
			</div>
			<div className='mb-3'>
				<label className='form-label'>Password</label>
				<div className='input-group'>
					<input
						type={active ? 'text' : 'password'}
						className='form-control'
						placeholder='Password'
						name='password'
						onChange={inputHandler}
					/>
					<button className='btn btn-outline-secondary' onClick={toggle}>
						<i className={active ? 'far fa-eye' : 'far fa-eye-slash'}></i>
					</button>
				</div>
			</div>
			<input
				type='submit'
				value='Submit'
				className='btn btn-primary btn-block mt-4'
			/>
		</form>
	);
};

export default PasswordsForm;
