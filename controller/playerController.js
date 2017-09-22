var models = require('../models');
var Teams = models.teams;

var express = require("express");
var router = express.Router();

var Players = require("../models/players.js");

router.get("/", function(req, res) {
	Players.show(function(data){
		res.render("index", {Players: data});
	})
});

router.post("/", function(req, res) {
	Players.add(req.body.Players, function(){
		return res.redirect("/");
	})
});

router.delete("/:id", function(req, res){
	Players.delete(req.body.id, function(){
		return res.redirect('/');
	}
});

router.put("/", function(req, res){
	Players.update(req.body.Players, req.body.id, function(){
		return res.redirect("/");
	})
});

module.exports = router;