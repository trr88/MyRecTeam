'use strict';
var Sequelize = require("sequelize");

module.exports = function(sequelize, Sequelize) {
	var League = sequelize.define("League", {
		name: {
			type: Sequelize.STRING,
			notEmpty: true
		}
	});
	League.associate = function(models) {
		League.hasMany(models.Teams);
		League.hasMany(models.Players);
	}
	return League;
};