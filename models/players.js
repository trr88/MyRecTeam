'use strict';
var Sequelize = require("sequelize");

module.exports = function(sequelize, Sequelize) {
	var Players = sequelize.define("Players", {
		firstName: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		lastName: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		age: {
			type: Sequelize.INTEGER,
			allowNull: false,
			validate: {
				isInt: true
			}
		},
		parentGuardian: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		phone: {
			type: Sequelize.INTEGER,
			allowNull: false,
			validate: {
				len: [10, 10]
			}
		},
		email: {
			type: Sequelize.STRING,
			notEmpty: true,
			validate: {
				isEmail: true
			}
		}
	});
	Players.associate = function(models) {
		Players.belongsTo(models.Teams);
		Players.belongsTo(models.League);
	}
	return Players;
};