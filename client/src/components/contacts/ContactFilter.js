import React, { useContext, useEffect, useRef } from 'react';

import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
	const { filtered, filterContacts, clearFilter } = useContext(ContactContext);

	const text = useRef('');

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChnage = (e) => {
		if (text.current.value !== '') {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};
	return (
		<form>
			<input
				ref={text}
				type='text'
				placeholder='Filter Contacts'
				onChange={onChnage}
			/>
		</form>
	);
};

export default ContactFilter;
