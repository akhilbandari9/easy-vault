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
				<div>
					<SearchNotes />
				</div>
				<div className='col-4'>
					<div className='d-none d-md-block'>
						<AddNewNote addNewNoteHandler={addNewNoteHandler} />
					</div>
					<NotesList list={notesList} setViewer={setViewer} />
				</div>
				<div className='col-8'>
					{!editMode ? (
						<div>
							{viewerComponent ? (
								<NotesViewer
									item={currentNote}
									activateEditor={activateEditor}
									deleteNote={deleteNote}
									setViewerComponent={setViewerComponent}
								/>
							) : (
								<>
									<div className='large-screen d-flex justify-content-center align-items-center  d-none d-md-block'>
										<h5 className='text-center'>Select a note to view</h5>
									</div>
									<div className='small-screen d-md-none'>
										<h6>Select a note to view or Add New</h6>
									</div>
								</>
							)}
							<div
								className='small-screen-add-btn d-md-none'
								style={{
									position: 'fixed',
									right: '10px',
									bottom: '10px',
									height: '50px',
									width: '50px',
								}}
							>
								<AddNewNote addNewNoteHandler={addNewNoteHandler} />
							</div>
						</div>
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
