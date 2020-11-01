import React from 'react';
import PasswordItem from './PasswordItem';
import Spinner from '../layouts/Spinner';

const PasswordsList = ({ list, loading }) => {
	// console.log(list.length);
	if (list === null || list.length <= 0) {
		return <p className='text-center'>No Passwords Saved</p>;
	}

	return (
		<>
			{list !== null && !loading ? (
				list.map((item) => <PasswordItem key={item._id} item={item} />)
			) : (
				<Spinner />
			)}
		</>
	);
};

export default PasswordsList;
