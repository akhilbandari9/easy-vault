import React, { useContext } from 'react';

import notesContext from '../../context/notes/notesContext';
import NoteItem from './NoteItem';

const NotesList = ({ list, setViewer }) => {
	const { filteredNotesList, notesList } = useContext(notesContext);
	return (
		<div className=''>
			{list !== null ? (
				filteredNotesList !== null ? (
					filteredNotesList.map((item) => (
						<NoteItem item={item} setViewer={setViewer} key={item._id} />
					))
				) : (
					list.map((item) => (
						<NoteItem item={item} setViewer={setViewer} key={item._id} />
					))
				)
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default NotesList;
