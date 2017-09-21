'use strict';

module.exports = function(sequelize, Sequelize) {
	var Games = sequelize.define("Games", {
		visitingTeam: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		homeTeam: {
			type: Sequelize.STRING,
			allowNull: false
		},
		start: {
			type: Sequelize.Date,
			allowNull: false,
			isDate: true
		},
		end: {
			type: Sequelize.Date,
			allowNull: false,
			isDate: true
		},
		park: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		streetNumber: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		streetName: {
			type: Sequelize.STRING,
			notEmpty: true
		}
	});
	Games.associate = function(models) {
		Games.hasMany(models.Teams);
		Games.belongsTo(models.League);
	}
	return Games;
}