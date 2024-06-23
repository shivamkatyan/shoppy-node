const Sequelize = require('sequelize');

const sequelize = new Sequelize('shoppy-node', 'user', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
