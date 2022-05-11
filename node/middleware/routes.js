// carregar o express
const express = require('express');
const rota = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
rota.get('/', homeController.paginaInicial); // homeController loga e paginaInicial responde ao cliente
rota.post('/', homeController.trataPost)

// Rotas de contato
rota.get('/contato', contatoController.paginaInicial);

module.exports = rota;