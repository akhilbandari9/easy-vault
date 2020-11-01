import React from 'react';

const AddNewNote = ({ addNewNoteHandler }) => {
	const addNewHandler = () => {
		addNewNoteHandler();
	};
	return (
		<button
			className='btn btn-outline-secondary btn-block mb-3'
			onClick={addNewHandler}
		>
			<i className='fas fa-plus d-inline'></i>
			<span className='ml-3 text-nowrap'>New Note</span>
		</button>
	);
};

export default AddNewNote;
