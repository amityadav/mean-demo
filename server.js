var express = require('express'),
	app = express(),
	bodyParser	= require('body-parser'),
	mongoose = require('mongoose'),
	meetupsController= require('./server/controllers/meetups-controller.js');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

app.get('/', function(req, res){
	res.sendfile(__dirname + '/client/views/index.html');
});


app.use('/js', express.static(__dirname + '/client/js'))
app.use('/css', express.static(__dirname + '/client/css'))

app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);
//app.put('/api/meetups', meetupsController.update);
app.delete('/api/meetups/:meetupsId', meetupsController.remove);

app.listen(3000, function(){
	console.log("Server: I am listening");
})