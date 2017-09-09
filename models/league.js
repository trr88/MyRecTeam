'use strict';

module.exports = function(sequelize, Sequelize) {
	var League = sequelize.define("League", {
		name: {
			type: Sequelize.STRING,
			notEmpty: true
		}
	});
	League.associate = function(models) {
		League.hasMany(models.Teams);
	}
	return League;
};