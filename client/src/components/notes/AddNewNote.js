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
<<<<<<< HEAD
			<span className='ml-3 text-nowrap'>Add New Note</span>
=======
			<span className='ml-3'>New Note</span>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
		</button>
	);
};

export default AddNewNote;
