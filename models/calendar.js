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
		address: {
			type: Sequelize.STRING,
			isAlphanumeric: true,
			notEmpty: true
		},
		state: {
			type: Sequelize.STRING,
			notEmpty: true,
			len: [2,2]
		},
		zipCode: {
			type: Sequelize.INTEGER,
			allowNull: false,
			len: [5,5]
		}
	});
	Games.associate = function(models) {
		Games.hasMany(models.Teams);
		Games.belongsTo(models.League);
	}
	return Games;
}