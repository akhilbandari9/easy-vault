import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

function SideBar() {
	return (
		<>
			<div className=''>
				<ul className='list-group'>
					<NavLink
						to={routes.contacts}
						className='list-group-item'
						activeClassName='active'
					>
						Contacts
					</NavLink>

					<NavLink
						to={routes.passwords}
						className='list-group-item'
						activeClassName='active'
					>
						Password Manager
					</NavLink>

					<NavLink
						to={routes.notes}
						className='list-group-item'
						activeClassName='active'
					>
						Notes
					</NavLink>
				</ul>
			</div>
		</>
	);
}

export default SideBar;
