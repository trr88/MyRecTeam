var models = require('../models');
var Players = models.players;
var League = models.league;

var express = require("express");
var router = express.Router();

var Teams = require("../models/teams.js");

router.get("/", function(req, res) {
	Teams.show(function(data){
		res.render("index", {Teams: data});

});

router.post("/", function(req, res) {
	Teams.add(req.body.Teams, function(){
		return res.redirect("/");
	})
});

router.delete("/:id", function(req, res){
	Teams.delete(req.body.id, function(){
		return res.redirect('/');
	}
});

router.put("/", function(req, res){
	Teams.update(req.body.Teams, req.body.id, function(){
		return res.redirect("/");
	})
});

module.exports = router;