import React, { useReducer } from 'react';
import NotesContext from './notesContext';
import notesReducer from './notesReducer';
import axios from 'axios';
import {
	ADD_NOTE,
	DELETE_NOTE,
	SET_CURRENT_NOTE,
	CLEAR_CURRENT_NOTE,
	UPDATE_NOTE,
	FILTER_NOTES,
	CLEAR_FILTER_NOTES,
	NOTE_ERROR,
	GET_NOTES,
	CLEAR_NOTES,
} from '../types';

const NotesState = (props) => {
	const initalState = {
		notesList: null,
		currentNote: null,
		filteredNotesList: null,
		error: null,
	};

	const [state, dispatch] = useReducer(notesReducer, initalState);

	//get Notes
	const getNotes = async () => {
		try {
			const res = await axios.get('/api/notes');
			dispatch({
				type: GET_NOTES,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: NOTE_ERROR,
				payload: err.response,
			});
		}
	};
	//add new Note
	const addNewNote = async (newNote) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/notes', newNote, config);
			dispatch({
				type: ADD_NOTE,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: NOTE_ERROR,
				payload: err.response,
			});
		}
	};
	const deleteNote = async (id) => {
		try {
			await axios.delete(`/api/notes/${id}`);
			dispatch({
				type: DELETE_NOTE,
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: NOTE_ERROR,
				payload: err.response,
			});
		}
	};
	//set current Note
	const setCurrentNote = (note) => {
		dispatch({
			type: SET_CURRENT_NOTE,
			payload: note,
		});
	};
	const clearCurrentNote = () => {
		dispatch({
			type: CLEAR_CURRENT_NOTE,
		});
	};
	//update Notes
	const updateNote = async (editedNote) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.put(
				`/api/notes/${editedNote.id}`,
				editedNote,
				config
			);
			dispatch({
				type: UPDATE_NOTE,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: NOTE_ERROR,
				payload: err.response,
			});
		}
	};
	//filter Notes
	const filteredNotes = (text) => {
		dispatch({
			type: FILTER_NOTES,
			payload: text,
		});
	};
	return (
		<NotesContext.Provider
			value={{
				notesList: state.notesList,
				currentNote: state.currentNote,
				filteredNotesList: state.filteredNotesList,
				error: state.error,
				addNewNote,
				getNotes,
				setCurrentNote,
				clearCurrentNote,
				deleteNote,
				filteredNotes,
				updateNote,
			}}
		>
			{props.children}
		</NotesContext.Provider>
	);
};
export default NotesState;
