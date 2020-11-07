import React, { useRef } from 'react';

const NoteItem = ({ item: { _id, title, body, color }, setViewer }) => {
	const inputref = useRef();

	const setRef = () => {
		setViewer(inputref.current.id);
	};

	return (
		<div
			className='border-bottom my-2'
			ref={inputref}
			id={_id}
			onClick={setRef}
			style={{ cursor: 'pointer' }}
		>
			<div className='title'>
				<h5 className='h6'>{title}</h5>
				<div
					className='rounded w-25 mb-2'
					style={{ background: `${color}`, height: '1rem' }}
				></div>
			</div>
			<p className='mb-3 d-none d-md-block' style={{ fontSize: '14px' }}>
				{body.slice(0, 30)}...
			</p>
		</div>
	);
};

export default NoteItem;
