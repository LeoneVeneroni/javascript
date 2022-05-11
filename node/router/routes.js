// carregar o express
const express = require('express');
const rota = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

// Rotas da home
rota.get('/', homeController.paginaInicial);
rota.post('/', homeController.trataPost)

// Rotas de contato
rota.get('/contato', contatoController.paginaInicial);

module.exports = rota;