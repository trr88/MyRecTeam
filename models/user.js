'use strict';
var Sequelize = require("sequelize");
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, Sequelize) {
	var User = sequelize.define("User", {
		name: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		email: {
			type: Sequelize.STRING,
			unique: true,
			notEmpty: true,
			isEmail: true
		},
		password: {
			type: Sequelize.STRING,
			notEmpty: true
		}
	});
	User.associate = function(models) {
		User.belongsTo(models.Players);
	}
	return User;
};

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(newUser.password, salt, function(err, hash){
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}