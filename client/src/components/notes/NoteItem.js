import React, { useRef } from 'react';

const NoteItem = ({ item: { _id, title, body, color }, setViewer }) => {
	const inputref = useRef();

	const setRef = () => {
		setViewer(inputref.current.id);
	};

	return (
		<div
			className='border-bottom m-3'
			ref={inputref}
			id={_id}
			onClick={setRef}
			style={{ cursor: 'pointer' }}
		>
			<div className='title d-flex justify-content-between'>
				<h5 className='h6'>{title}</h5>
				<div
					className='card mr-3 p-0'
					style={{ background: `${color}`, height: '20px', width: '20px' }}
				></div>
			</div>
			<p className='mb-3' style={{ fontSize: '14px' }}>
				{body.slice(0, 30)}...
			</p>
		</div>
	);
};

export default NoteItem;
