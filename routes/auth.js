var express = require('express');
var passport = require('passport');
var User = require('../models/user.js');
var router = new express.Router();

module.exports = function(app, passport) {

    router.get('/', function(req, res) {
        res.render('index', { user: req.user });
    });

    router.get('/user', function(req, res) {
        res.render('user', {});
    });

    router.post('/user/new', function(req, res) {
        User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
            if (err) {
                return res.render('register', { user: user });
            }

            passport.authenticate('local')(req, res, function() {
                res.redirect('/');
            });
        });
    });

    router.get('/login', function(req, res) {
        res.render('login', { user: req.user });
    });

    router.post('/user/new', passport.authenticate('local'), function(req, res) {
        res.redirect('/');
    });

    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    router.get('/ping', function(req, res) {
        res.status(200).send("pong!");
    });

    module.exports = router;
}