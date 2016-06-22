var Meetup = require('../models/meetup');

module.exports.create = function(req, res){
	var meetup = new Meetup(req.body);
	meetup.save(function(err, result){
		if (err) throw err;
        res.json(result);
	});
}

module.exports.list = function(req, res){
	Meetup.find({}, function(err, results){
		if (err) throw err;
        res.json(results);
	});
}

module.exports.remove = function(req, res){
	console.log("Deleting meetup " + req.params.meetupsId);
    Meetup.remove({_id: req.params.meetupsId}, function (err, result) {
        if (err) throw err;
        res.json(result);
    });

}