import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

function Navbar({ title = 'Easy Vault', icon = 'fas fa-user-shield' }) {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);
	// const [toggle, setToggle] = useState(false);
	const { isAuthenticated, logout, user } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<>
			<li className='nav-item' style={{ fontSize: '16px' }}>
				<span className='nav-link'>Hello {user && user.name} </span>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/about'>
					About
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' onClick={onLogout} to='/auth/login'>
					<i className='fas fa-sign-out-alt'></i>
					<span className='hide-sm'> Logout</span>
				</NavLink>
			</li>
		</>
	);
	const guestLinks = (
		<>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/auth/register'>
					Register
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/auth/login'>
					Login
				</NavLink>
			</li>
		</>
	);

	return (
		<div
			className='navbar navbar-light navbar-expand-sm mb-3'
			style={{ background: '#e3f2fd' }}
		>
			<div class='container-fluid'>
				<NavLink to='/app/contacts' className='navbar-brand mr-auto'>
					<h5 className='ml-5'>
						<i className={icon} /> {title}
					</h5>
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
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto mr-5 mb-2 mb-lg-0'>
						{isAuthenticated ? authLinks : guestLinks}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
