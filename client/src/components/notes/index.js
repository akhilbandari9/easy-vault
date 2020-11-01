import React, { useState, useEffect, useContext } from 'react';

import AddNewNote from './AddNewNote';
// import { BrowserRouter, Route } from 'react-router-dom';
import NotesEditor from './NotesEditor';
import NotesList from './NotesList';
import NotesViewer from './NotesViewer';
import SearchNotes from './SearchNotes';
import NotesContext from '../../context/notes/notesContext';

const Index = () => {
	const {
		notesList,
		getNotes,
		setCurrentNote,
		currentNote,
		clearCurrentNote,
		deleteNote,
	} = useContext(NotesContext);
	const [viewerComponent, setViewerComponent] = useState(false);
	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		getNotes();
		//eslint-disable-next-line
	}, []);
	const setViewer = (id) => {
		setEditMode(false);
		if (notesList !== null) {
			const foundItem = notesList.find((item) => item._id === id);
			setCurrentNote(foundItem);
			setViewerComponent(true);
		}
	};

	const activateEditor = () => {
		setEditMode(true);
	};
	const addNewNoteHandler = () => {
		clearCurrentNote();
		setEditMode(true);
	};

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-4'>
					<div>
						<AddNewNote addNewNoteHandler={addNewNoteHandler} />
						<SearchNotes />
					</div>
					<NotesList list={notesList} setViewer={setViewer} />
				</div>
				<div className='col-8'>
					{!editMode ? (
						viewerComponent ? (
							<NotesViewer
								item={currentNote}
								activateEditor={activateEditor}
								deleteNote={deleteNote}
								setViewerComponent={setViewerComponent}
							/>
						) : (
							<div className='d-flex justify-content-center align-items-center'>
								<h5>Select a note to view</h5>
								<h6 className='text-secondary ml-2'>or</h6>
								<div className='w-25 ml-3'>
									<AddNewNote addNewNoteHandler={addNewNoteHandler} />
								</div>
							</div>
						)
					) : (
						<NotesEditor
							setViewerOnSubmit={setViewer}
							setEditMode={setEditMode}
							setViewerComponent={setViewerComponent}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Index;
