var models = require('../models');
var League = models.league;
var Teams = models.teams;

var express = require("express");
var router = express.Router();

var League = require("../models/league.js");

router.get("/", function(req, res) {
	League.show(function(data){
		res.render("index", {League: data});

});

router.post("/", function(req, res) {
	League.add(req.body.League, function(){
		return res.redirect("/");
	})
});

router.delete("/:id", function(req, res){
	League.delete(req.body.id, function(){
		return res.redirect('/');
	}
});

router.put("/", function(req, res){
	League.update(req.body.League, req.body.id, function(){
		return res.redirect("/");
	})
});

module.exports = router;