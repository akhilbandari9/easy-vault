const express = require('express');
const router = express.Router();
const auth = require('../midleware/auth');
const { body, validationResult, check } = require('express-validator');

const User = require('../models/User');
const Note = require('../models/Note');

//@route    GET api/notes
//@desc     Get all Notes
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const notes = await Note.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(notes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send(err.message);
	}
});

//@route    POST api/notes
//@desc     Add new Note
// @access  Private
router.post(
	'/',
	[auth, [check('title', 'Title is Required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { title, body, tags, color } = req.body;
		try {
			const newNote = new Note({
				title,
				body,
				tags,
				color,
				user: req.user.id,
			});

			const note = await newNote.save();

			res.json(note);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route    PUT api/notes/:id
//@desc     Update a Note
//@access  Private
router.put('/:id', auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });

	const { title, body, tags, color } = req.body;

	// Build contact object
	const noteFields = {};
	if (title) noteFields.title = title;
	if (body) noteFields.body = body;
	if (tags) noteFields.tags = tags;
	if (color) noteFields.color = color;

	try {
		let note = await Note.findById(req.params.id);

		if (!note) return res.status(404).json({ msg: 'Note not found' });

		// Make sure user owns the note
		if (note.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		note = await Note.findByIdAndUpdate(
			req.params.id,
			{ $set: noteFields },
			{ new: true }
		);
		res.json(note);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

//@route    POST api/notes/:id
//@desc     Delete Note
//@access  Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const note = await Note.findById(req.params.id);

		if (!note) return res.status(404).json({ msg: 'Note not found' });

		// Make sure user owns contact
		if (note.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		await Note.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Contact removed' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
