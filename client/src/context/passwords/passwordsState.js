import React, { useReducer } from 'react';
import PasswordsContext from './passwordsContext';
import PasswordsReducer from './passwordsReducer';
import axios from 'axios';
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

const PasswordsState = (props) => {
	const initialState = {
		passwords: null,
		filtered: null,
		current_password: null,
		error: null,
	};
	const [state, dispatch] = useReducer(PasswordsReducer, initialState);

	//getPasswords
	const getPasswords = async () => {
		try {
			const res = await axios.get('/api/passwords');
			dispatch({
				type: GET_PASSWORDS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: PASSWORD_ERROR,
				payload: error.response,
			});
		}
	};

	//AddPassword
	const addPassword = async (passObject) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.post('/api/passwords', passObject, config);
			dispatch({
				type: ADD_PASSWORD,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: PASSWORD_ERROR,
				payload: error.response,
			});
		}
	};

	//Delete Password
	const deletePassword = async (id) => {
		try {
			const res = await axios.delete(`/api/passwords/${id}`);
			dispatch({
				type: DELETE_PASSWORD,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: PASSWORD_ERROR,
				payload: error.response,
			});
		}
	};

	//UpdatePassword
	const updatePassword = async (passObject) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const res = await axios.put(
				`/api/passwords/${passObject._id}`,
				passObject,
				config
			);
			dispatch({
				type: UPDATE_PASSWORD,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: PASSWORD_ERROR,
				payload: error.response,
			});
		}
	};

	//clearPasswords
	const clearPasswords = () => {
		dispatch({
			type: CLEAR_PASSWORDS,
		});
	};

	//set Current
	const setCurrentPassword = (passObject) => {
		dispatch({
			type: SET_CURRENT_PASSWORD,
			payload: passObject,
		});
	};

	//clearCurrent
	const clearCurrentPassword = () => {
		dispatch({
			type: CLEAR_CURRENT_PASSWORD,
		});
	};

	//filter Passwords
	const filterPasswords = (text) => {
		dispatch({
			type: FILTER_PASSWORDS,
			payload: text,
		});
	};

	//Clear Filter
	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER_PASSWORDS,
		});
	};

	return (
		<PasswordsContext.Provider
			value={{
				passwords: state.passwords,
				current_password: state.current,
				filtered_passwords: state.filtered,
				passwords_error: state.error,
				addPassword,
				deletePassword,
				setCurrentPassword,
				clearCurrentPassword,
				updatePassword,
				filterPasswords,
				clearCurrentPassword,
				clearFilter,
				clearPasswords,
				getPasswords,
			}}
		>
			{props.children}
		</PasswordsContext.Provider>
	);
};

export default PasswordsState;
