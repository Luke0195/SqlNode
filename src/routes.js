const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) =>{
  return response.json({ message : ' SQL no Node.js com Sequelize| Masterclass#01'});
});

module.exports = routes;