import React, { useContext } from 'react';

<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import { Link, NavLink } from 'react-router-dom';
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
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
<<<<<<< HEAD
			<li className='nav-item' style={{ fontSize: '16px' }}>
				<span className='nav-link'>Hello {user && user.name} </span>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/about'>
=======
			<li className='navbar-brand text-secondary'>Hello {user && user.name}</li>
			<li className='nav-item'>
				<NavLink to='/about' className='nav-link'>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					About
				</NavLink>
			</li>
			<li className='nav-item'>
<<<<<<< HEAD
				<NavLink className='nav-link' onClick={onLogout} to='/auth/login'>
=======
				<NavLink
					to='/login'
					className='nav-link mr-4'
					activeClassName='active'
					onClick={onLogout}
				>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					<i className='fas fa-sign-out-alt'></i>
					<span className='hide-sm'> Logout</span>
				</NavLink>
			</li>
		</>
	);
	const guestLinks = (
		<>
			<li className='nav-item'>
<<<<<<< HEAD
				<NavLink className='nav-link' to='/auth/register'>
					Register
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/auth/login'>
=======
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
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
					Login
				</NavLink>
			</li>
		</>
	);

	return (
<<<<<<< HEAD
		<div
			className='navbar navbar-light navbar-expand-sm mb-3'
			style={{ background: '#e3f2fd' }}
		>
			<div class='container-fluid'>
				<NavLink to='/app/contacts' className='navbar-brand mr-auto'>
					<h5 className='ml-5'>
						<i className={icon} /> {title}
					</h5>
=======
		<nav
			className='navbar navbar-light navbar-expand-sm'
			style={{ background: '#e3f2fd' }}
		>
			<div className='container-fluid'>
				<NavLink to='/app/contacts' className='navbar-brand'>
					<h4 className='ml-4'>
						<i className={icon} /> {title}
					</h4>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
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
<<<<<<< HEAD
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto mr-5 mb-2 mb-lg-0'>
=======
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
						{isAuthenticated ? authLinks : guestLinks}
					</ul>
				</div>
			</div>
<<<<<<< HEAD
		</div>
=======
		</nav>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
	);
}

export default Navbar;
