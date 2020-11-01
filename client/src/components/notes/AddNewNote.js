import React from 'react';

const AddNewNote = ({ addNewNoteHandler }) => {
	const addNewHandler = () => {
		addNewNoteHandler();
	};
	return (
		<button
			className='btn btn-outline-secondary btn-block mb-2'
			onClick={addNewHandler}
		>
			<i className='fas fa-plus d-inline'></i>
			<span className='ml-3 text-nowrap'>Add New Note</span>
		</button>
	);
};

export default AddNewNote;
