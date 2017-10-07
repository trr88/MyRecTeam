'use strict';
var Sequelize = require("sequelize");

module.exports = function(sequelize, Sequelize) {
	var Games = sequelize.define("Games", {
		visitingTeam: {
			type: Sequelize.STRING,
			//allowNull: false
		},
		homeTeam: {
			type: Sequelize.STRING,
			//allowNull: false
		},
		startTime: {
			type: Sequelize.DATE,
			// allowNull: false,
			isDate: true
		},
		endTime: {
			type: Sequelize.DATE,
			// allowNull: false,
			isDate: true
		},
		park: {
			type: Sequelize.STRING,
			// notEmpty: true
		}
	});
	Games.associate = function(models) {
		Games.belongsTo(models.Teams);
		Games.belongsTo(models.League);
	}
	return Games;
}