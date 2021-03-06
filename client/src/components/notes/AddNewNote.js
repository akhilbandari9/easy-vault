import React from 'react';

const AddNewNote = ({ addNewNoteHandler }) => {
	const addNewHandler = () => {
		addNewNoteHandler();
	};
	return (
		<div className=''>
			<button
				className='btn btn-secondary mb-2 btn-block'
				onClick={addNewHandler}
			>
				<i className='fas fa-plus d-inline'></i>
				<span className='ml-3 d-none d-md-inline-block'>New Note</span>
			</button>
		</div>
	);
};

export default AddNewNote;
