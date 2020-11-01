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

export default (state, { type, payload }) => {
	switch (type) {
		case GET_NOTES:
			return {
				...state,
				notesList: payload,
				loading: false,
			};
		case ADD_NOTE:
			return {
				...state,
				notesList: [payload, ...state.notesList],
				loading: false,
			};
		case DELETE_NOTE:
			return {
				...state,
				notesList: state.notesList.filter((item) => item._id !== payload),
			};
		case UPDATE_NOTE:
			return {
				...state,
				notesList: state.notesList.map((item) =>
					item._id === payload._id ? payload : item
				),
			};
		case NOTE_ERROR:
			return {
				...state,
				error: payload,
			};
		case SET_CURRENT_NOTE:
			return {
				...state,
				currentNote: payload,
			};
		case CLEAR_CURRENT_NOTE:
			return {
				...state,
				currentNote: null,
			};
		case FILTER_NOTES:
			return {
				...state,
				filteredNotesList: state.notesList.filter((item) => {
					const regex = new RegExp(`${payload}`, 'gi');
					return item.title.match(regex);
				}),
			};
		default:
			return state;
	}
};
