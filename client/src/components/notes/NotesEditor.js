import React, { useState, useContext } from 'react';
import NotesContext from '../../context/notes/notesContext';
const NotesEditor = ({ setViewerComponent, setEditMode }) => {
	const { currentNote, addNewNote, updateNote } = useContext(NotesContext);

	const [data, setData] = useState({
		title: currentNote?.title,
		body: currentNote?.body,
	});

	const colorArr = [
		'#d00000',
		'#ffdf00',
		'#4361ee',
		'#e81cff',
		'#2b9348',
		'#f3722c',
		'#6c757d',
	];
	const [currColor, setCurrColor] = useState(currentNote?.color || '#4361ee');

	const handleText = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	const handleColor = (e) => {
		setCurrColor(e.target.value);
	};

	const Submit = (e) => {
		e.preventDefault();
		if (currentNote === null) {
			addNewNote({
				title: data.title,
				color: currColor,
				body: data.body,
			});
			setData({
				title: '',
				body: '',
			});
			setCurrColor('#4361ee');
		} else {
			updateNote({
				id: currentNote._id,
				title: data.title,
				color: currColor,
				body: data.body,
			});
		}
		setEditMode(false);
		setViewerComponent(false);
	};

	return (
		<form onSubmit={Submit} className='mb-4'>
			<div className='container'>
				<h2>Notes Editor</h2>
				<div>
					<div>
						<div className='title d-flex align-items-center flex-wrap'>
							<label className='form-label m-0 mr-3 mb-2'>Title</label>
							<input
								type='text'
								className='form-control'
								name='title'
								value={data.title}
								onChange={handleText}
							/>
						</div>
<<<<<<< HEAD
						<div className='color-box d-flex mt-3 flex-wrap'>
=======
						<div className='color-box d-flex mt-2 flex-wrap'>
>>>>>>> c6610fa28e5f0d540171f7cb1253d6603c323fa5
							<label className='form-label mr-3'>Color Tag</label>
							<div className='color-array d-flex flex-wrap'>
								{colorArr.map((item, i) => (
									<ColorPicker
										color={item}
										key={i}
										handleColor={handleColor}
										currColor={currColor}
									/>
								))}
							</div>
						</div>
					</div>
					<div className='text-area'>
						<label className='form-label'>Notes</label>
						<textarea
							cols='30'
							rows='12'
							className='form-control'
							name='body'
							value={data.body}
							onChange={handleText}
						/>
					</div>
					<input
						type='submit'
						value={currentNote === null ? `Save` : `Update`}
						className='btn btn-primary mt-2'
					/>
				</div>
			</div>
		</form>
	);
};

const ColorPicker = ({ color, handleColor, currColor = '#4361ee' }) => {
	return (
		<div className='form-check'>
			<label
				className={`form-check-label ${
					currColor === color ? `border border-dark border-5` : `border-0`
				}`}
				htmlFor={`color-select-${color}`}
				name='color'
				style={{
					background: `${color}`,
					width: '40px',
					height: '40px',
					display: 'block',
					cursor: 'pointer',
				}}
			>
				<input
					className='form-check-input d-none'
					id={`color-select-${color}`}
					type='radio'
					style={{ display: 'block' }}
					name='color'
					onChange={handleColor}
					value={color}
					checked={currColor === color}
					defaultValue='#4361ee'
				/>
			</label>
		</div>
	);
};

export default NotesEditor;
