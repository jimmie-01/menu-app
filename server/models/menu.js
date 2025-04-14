const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
	section: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});


module.exports = mongoose.model('Menu', menuSchema);
