import React, { useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

function Navbar({ title = 'Easy Vault', icon = 'fas fa-user-shield' }) {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);

	const { isAuthenticated, logout, user } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<>
			<li className='navbar-brand text-secondary'>Hello {user && user.name}</li>
			<li className='nav-item'>
				<NavLink to='/about' className='nav-link'>
					About
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink
					to='/login'
					className='nav-link mr-4'
					activeClassName='active'
					onClick={onLogout}
				>
					<i className='fas fa-sign-out-alt'></i>
					<span className='hide-sm'> Logout</span>
				</NavLink>
			</li>
		</>
	);
	const guestLinks = (
		<>
			<li className='nav-item'>
				<NavLink
					className='nav-link'
					activeClassName='active'
					to='/auth/register'
				>
					Register
				</NavLink>
			</li>
			<li className='nav-item mr-4'>
				<NavLink className='nav-link' activeClassName='active' to='/auth/login'>
					Login
				</NavLink>
			</li>
		</>
	);

	return (
		<nav
			className='navbar navbar-light navbar-expand-sm'
			style={{ background: '#e3f2fd' }}
		>
			<div className='container-fluid'>
				<NavLink to='/app/contacts' className='navbar-brand'>
					<h4 className='ml-4'>
						<i className={icon} /> {title}
					</h4>
				</NavLink>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
						{isAuthenticated ? authLinks : guestLinks}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
