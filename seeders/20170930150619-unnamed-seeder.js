'use strict';

var faker = require('faker');
var bCrypt = require('bcrypt-nodejs');

var generateHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};
var tempPassword = generateHash('test');

var playerData = [];
for (var i = 0; i < 50; i++) {
  playerData[i] = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: 'player' + i + '@gmail.com',
    parentGuardian: faker.name.firstName(),
    phone: faker.phone.phoneNumberFormat(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

var teamData = [];
for (var i = 0; i < 10; i++) {
  teamData[i] = {
    teams_name: faker.lorem.words(),
    coaches_firstname: faker.name.firstName(),
    coaches_lastname: faker.name.lastName(),
    coach_phone: faker.phone.phoneNumberFormat(),
    coach_email: 'team' + i + '@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

var usersData = [];
for (var i = 0; i < 50; i++) {
  teamData[i] = {
    email: 'team' + i + '@gmail.com',
    password: tempPassword,
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

var leagueData = [];
for (var i = 0; i < 10; i++) {
  leagueData[i] = {
    name: faker.lorem.word(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
}

module.exports = {
  up: function (queryInterface, Sequelize) {

    up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('league', leagueData).then(() => {
      return queryInterface.bulkInsert('teams',teamData).then(()=> {
        return queryInterface.bulkInsert('players', playerData).then(() => {
          return queryInterface.bulkInsert('user', usersData)
        });
      });
      });
    };
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('players', null, {});
    return queryInterface.bulkDelete('teams', null, {});
    return queryInterface.bulkDelete('users', null, {});
    return queryInterface.bulkDelete('league', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
