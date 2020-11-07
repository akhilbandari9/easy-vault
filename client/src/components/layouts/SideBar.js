import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

function SideBar() {
	return (
		<>
			<div className='mb-3 container'>
				<ul className='list-group flex-row flex-md-column list-group-flush'>
					<NavLink
						to={routes.contacts}
						className='list-group-item flex-fill  border-bottom rounded'
						activeClassName='active'
					>
						Contacts
					</NavLink>

					<NavLink
						to={routes.passwords}
						className='list-group-item flex-fill border-bottom rounded'
						activeClassName='active'
					>
						Password Manager
					</NavLink>

					<NavLink
						to={routes.notes}
						className='list-group-item flex-fill border-bottom rounded'
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
