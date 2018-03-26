require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Mongoose stuff
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/projectworkfloworganizer');
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});


var auth = require('./routes/auth');
var create = require('./routes/create');
var edit = require('./routes/edit');
var view = require('./routes/view');
var destroy = require('./routes/destroy');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

// Do we still need this?
app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.currentUser = req.user;
  next();
});

app.use('/auth', auth);
app.use('/create', create);
app.use('/edit', edit);
app.use('/view', view);
app.use('/destroy', destroy)

app.get('*', function(req, res, next) {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
})

module.exports = app;
