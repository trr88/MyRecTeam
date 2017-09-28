'use strict';
var Sequelize = require("sequelize");

module.exports = function(sequelize, Sequelize){
	var Teams = sequelize.define("Teams", {
		teamsName: {
			type: Sequelize.STRING,
			allowNull: false,
			len: [1]
		},
		coachFirstName: {
			type: Sequelize.STRING,
			allowNull: false,
			len: [1]
		},
		coachLastName: {
			type: Sequelize.STRING,
			allowNull: false,
			len: [1]
		},
		coachPhone: {
			type: Sequelize.INTEGER,
			allowNull: false,
			len: [10, 10]
		},
		coachEmail: {
			type: Sequelize.STRING,
			allowNull: false,
			len: [1]
		}
	});
	Teams.associate = function(models) {
		Teams.belongsTo(models.League);
		Teams.hasMany(models.Players);
	};

	return Teams;
};