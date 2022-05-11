const expresso = require('express');
const aplicativo = expresso();
const mod = require('./modulo')

aplicativo.get('/', function(req, res) {
   res.send('Olá, mundo!');
   res.send(`A área de um quadrado é ${mod.area(4)}`);
   res.send(`O perímetro de um quadrado é ${mod.perimetro(4)}`);
});

aplicativo.listen(3000, function() {
   console.log('Acesso pela porta 3000.');
});