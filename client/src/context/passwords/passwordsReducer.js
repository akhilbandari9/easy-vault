import contactReducer from '../contact/contactReducer';
import {
	GET_PASSWORDS,
	PASSWORD_ERROR,
	ADD_PASSWORD,
	DELETE_PASSWORD,
	UPDATE_PASSWORD,
	CLEAR_PASSWORDS,
	SET_CURRENT_PASSWORD,
	CLEAR_CURRENT_PASSWORD,
	FILTER_PASSWORDS,
	CLEAR_FILTER_PASSWORDS,
} from '../types';

export default (state, { type, payload }) => {
	switch (type) {
		case GET_PASSWORDS:
			return {
				...state,
				passwords: payload,
				loading: false,
			};
		case CLEAR_PASSWORDS:
			return {
				...state,
				passwords: null,
				current: null,
				filtered: null,
				error: null,
			};

		case ADD_PASSWORD:
			return {
				...state,
				passwords: [payload, ...state.passwords],
				loading: false,
			};

		case UPDATE_PASSWORD:
			return {
				...state,
				passwords: state.passwords.map((item) =>
					item._id === payload.id ? payload : item
				),
				loading: false,
			};
		case SET_CURRENT_PASSWORD:
			return {
				...state,
				current: payload,
			};

		case CLEAR_CURRENT_PASSWORD:
			return {
				...state,
				current: null,
			};

		case DELETE_PASSWORD:
			return {
				...state,
				passwords: state.passwords.filter((item) => item._id !== payload),
				loading: false,
			};
		case PASSWORD_ERROR:
			return {
				...state,
				error: payload,
			};

		case FILTER_PASSWORDS:
			return state;

		case CLEAR_FILTER_PASSWORDS:
			return state;

		default:
			return state;
	}
};
