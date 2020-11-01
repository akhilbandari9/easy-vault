const express = require('express');
const router = express.Router();
const auth = require('../midleware/auth');
const { body, validationResult, check } = require('express-validator');

const User = require('../models/User');
const Password = require('../models/Password');

//@route    GET api/passwords
//@desc     Get all passwrrds
// @access  Private
router.get('/', auth, async (req, res) => {
	try {
		const passwords = await Password.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(passwords);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//@route    POST api/passwords
//@desc     Add new Password
// @access  Private
router.post(
	'/',
	[auth, [check('service_name', 'Name is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const {
			service_name,
			email,
			phone,
			username,
			password,
			details,
		} = req.body;

		try {
			const newPassword = new Password({
				service_name,
				email,
				password,
				username,
				phone,
				details,
				user: req.user.id,
			});

			const passwordDocument = await newPassword.save();

			res.json(passwordDocument);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

//@route    PUT api/passwords/:id
//@desc     Update Password
//@access  Private
router.put('/:id', auth, async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });

	const { service_name, email, phone, username, password, details } = req.body;

	// Build password object
	const passwordFields = {};
	if (service_name) passwordFields.service_name = service_name;
	if (email) passwordFields.email = email;
	if (phone) passwordFields.phone = phone;
	if (username) passwordFields.username = username;
	if (password) passwordFields.password = password;
	if (details) passwordFields.details = details;

	try {
		let password = await Password.findById(req.params.id);

		if (!password)
			return res.status(404).json({ msg: 'No Saved Passwords found' });

		// Make sure user owns passwords
		if (password.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		password = await Password.findByIdAndUpdate(
			req.params.id,
			{ $set: passwordFields },
			{ new: true }
		);
		res.json(password);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

//@route    POST api/passwords/:id
//@desc     Delete Password
//@access  Private
router.delete('/:id', auth, async (req, res) => {
	try {
		const password = await Password.findById(req.params.id);

		if (!password)
			return res.status(404).json({ msg: 'No Saved Passwords found' });

		// Make sure user owns passwords
		if (password.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'Not authorized' });

		await Password.findByIdAndRemove(req.params.id);

		res.json({ msg: 'Service Provider and Passwords Saved Deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

module.exports = router;
