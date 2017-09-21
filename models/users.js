'use strict';

module.exports = function(sequelize, Sequelize) {
	var Users = sequelize.define("Users", {
		email: {
			type: Sequelize.STRING,
			notEmpty: true,
			isEmail: true
		},
		password: {
			type: Sequelize.STRING,
			notEmpty: true
		}
	});
	Users.associate = function(models) {
		Users.belongsTo(models.Players);
	}
	return Users;
};