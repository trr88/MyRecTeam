var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session')

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api.json" }));

app.use(session({secret: 'deligionships'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(express.static("./public"));

require("./routes/auth.js")(app, passport);
require("./routes/games.js")(app, db);
require("./routes/league.js")(app, db);
require("./routes/players.js")(app, db);
require("./routes/teams.js")(app, db);
require("./routes/user.js")(app, db);



db.sequelize.sync({force: true}).then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT)
	});
});