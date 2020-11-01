import React, { useContext, useState } from 'react';
import NotesContext from '../../context/notes/notesContext';
function SearchNotes() {
	const [input, setInput] = useState('');
	const { filteredNotes } = useContext(NotesContext);
	const searchHandler = (e) => {
		setInput(e.target.value);
		filteredNotes(input);
	};
	const searchButtonHandler = () => {
		filteredNotes(input);
	};
	return (
		<div className='input-group'>
			<input
				type='text'
				className='form-control'
				placeholder='Search Notes...'
				onChange={searchHandler}
			></input>
			<button className='btn btn-primary mr-0' onClick={searchButtonHandler}>
				<i className='fas fa-search'></i>
			</button>
		</div>
	);
}

export default SearchNotes;
