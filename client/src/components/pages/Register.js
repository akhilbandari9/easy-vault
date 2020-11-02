import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { useHistory } from 'react-router-dom';
const Register = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const history = useHistory();
	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			history.push('/');
		}
		// eslint-disable-next-line
	}, [isAuthenticated]);

	useEffect(() => {
		if (error === 'User already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const { name, email, password, password2 } = user;

	const onChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (name === '' || email === '' || password === '') {
			setAlert('Please enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('Passwords do not Match', 'danger');
		} else {
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className='container-sm d-flex justify-content-center mt-5'>
			<form
				onSubmit={onSubmit}
				className='container-sm'
				style={{ width: '500px', margin: 'auto' }}
			>
				<h1>
					Account <span className='text-primary'>Register</span>
				</h1>
				<div className='mb-2'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						className='form-control'
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onChange}
						required
					/>
				</div>
				<div className='mb-2'>
					<label htmlFor='email' className='form-label'>
						Email
					</label>
					<input
						className='form-control'
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className='mb-2'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input
						className='form-control'
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onChange}
						required
						minLength='6'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='password2' className='form-label'>
						Confirm Password
					</label>
					<input
						className='form-control'
						type='password'
						name='password2'
						id='password2'
						value={password2}
						onChange={onChange}
						required
						minLength='6'
					/>
				</div>
				<input
					type='submit'
					value='Register'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Register;
