'use strict';
var Sequelize = require("sequelize");

module.exports = function(sequelize, Sequelize){
	var Teams = sequelize.define("Teams", {
		teams_name: {
			type: Sequelize.STRING,
			allowNull: false,
			len: [1]
		},
		coach_firstname: {
			type: Sequelize.STRING,
			allowNull: false,
			len: [1]
		},
		coach_lastname: {
			type: Sequelize.STRING,
			allowNull: false,
			len: [1]
		},
		coach_phone: {
			type: Sequelize.INTEGER,
			allowNull: false,
			len: [10, 10]
		},
		coach_email: {
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