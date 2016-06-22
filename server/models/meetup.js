var mongoose = require('mongoose');

// var meetupSchema = new Schema({
//   name: String
// });

module.exports = mongoose.model('meetup', {
  name: String
})