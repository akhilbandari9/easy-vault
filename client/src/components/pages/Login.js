import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import { useHistory } from 'react-router-dom';
const Login = () => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);
	const history = useHistory();
	const { setAlert } = alertContext;
	const { error, login, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			history.push('/app');
			console.log(history);
		}

		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}
	}, [isAuthenticated, error, history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { email, password } = user;

	const onChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else {
			login({
				email,
				password,
			});
		}
	};

	return (
		<div className='container d-flex justify-content-center mt-5'>
			<form
				onSubmit={onSubmit}
				className='container-sm'
				style={{ width: '500px', margin: 'auto' }}
			>
				<h1>
					Account <span className='text-primary'>Login</span>
				</h1>
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
				<div className='mb-3'>
					<label htmlFor='password'>Password</label>
					<input
						className='form-control'
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onChange}
						required
					/>
				</div>

				<input
					type='submit'
					value='Login'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};

export default Login;
