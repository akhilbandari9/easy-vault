const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
	tag: {
		type: String,
		required: true,
	},
});

const NoteSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
	},
	tags: [tagsSchema],
	color: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('note', NoteSchema);
