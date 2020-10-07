const express = require('express');
const router = express.Router();

//@route    GET api/contacts
//@desc     Get all contacts
// @access  Private
router.get('/', (req, res) => {
	res.send('Gets all contacts');
});

//@route    POST api/contacts
//@desc     Add new Contact
// @access  Private
router.post('/', (req, res) => {
	res.send('Add new Contact');
});

//@route    POST api/contacts/:id
//@desc     Update Contact
//@access  Private
router.put('/:id', (req, res) => {
	res.send('Update Contact');
});

//@route    POST api/contacts/:id
//@desc     Delete Contact
//@access  Private
router.delete('/:id', (req, res) => {
	res.send('Delete Contact');
});

module.exports = router;
