var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

// Mongoose connection with mongodb
var promise = mongoose.connect('mongodb://admin:s0las0la@ds129333.mlab.com:29333/react', {
  	useMongoClient: true,
  	/* other options */
	})
  mongoose.Promise = global.Promise;
  mongoose.connection.once('open',function(){
		console.log('Connection has been made with mongoDB...')});

// Required application specific custom router module
var itemRouter = require('../src/routes/itemRouter');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port)
})
