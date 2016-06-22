var Meetup = require('../models/meetup');

module.exports.create = function(req, res){
	var meetup = new Meetup(req.body);
	meetup.save(function(err, result){
		res.json(result);
	});
}

module.exports.list = function(req, res){
	Meetup.find({}, function(err, results){
		res.json(results);
	});
}

module.exports.remove = function(req, res){
	console.log(req.params._id);
    var meetup = new Meetup(req.body);
    meetup.remove({_id: req.params._id}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });

}