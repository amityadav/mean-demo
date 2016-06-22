var mongoose = require('mongoose');

module.exports = mongoose.model('meetup', {
	name: String
})