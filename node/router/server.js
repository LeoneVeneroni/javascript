const express = require('express');
const app = express();
const routes = require('./routes');

// se eu não colocar isso, vai dar undefined
app.use(express.urlencoded({extended: true}));
app.use(routes);

// 3000 é o número da porta
app.listen(3000, () => {
   console.log('Acessar http://localhost:3000');
   console.log('Servidor executando na porta 3000');
});