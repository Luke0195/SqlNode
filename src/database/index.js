// Conexão com a base de dados
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);


module.exports = connection;