import React, { useState } from 'react';
import { useEffect } from 'react';

const NotesViewer = ({
	item,
	activateEditor,
	deleteNote,
	setViewerComponent,
}) => {
	const handleEditButton = () => {
		activateEditor();
	};

	const deleteHandler = () => {
		deleteNote(item._id);
		setViewerComponent(false);
	};

	return (
		<>
			{item !== null ? (
				<div>
					<div className='d-flex justify-content-between'>
						<h1>{item.title}</h1>
						<div className='btn-group align-self-baseline'>
							<button
								className='btn btn-outline-secondary mr-0'
								onClick={handleEditButton}
							>
								<span className='mr-3'>Edit</span>
								<i className='fas fa-pencil-alt'></i>
							</button>
							<button
								className='btn btn-outline-danger mr-0'
								onClick={deleteHandler}
							>
								<i className='fas fa-trash'></i>
							</button>
						</div>
					</div>
					<div
						className='card mb-2'
						style={{
							background: `${item.color}`,
							height: '30px',
							width: '50px',
						}}
					></div>
					<p>{item.body}</p>
				</div>
			) : (
				<h3>Select a Note</h3>
			)}
		</>
	);
};

export default NotesViewer;
