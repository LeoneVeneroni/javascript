const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path')

// se eu não colocar isso, vai dar undefined
app.use(express.urlencoded({extended: true}));

// caminho relativo
// app.use(express.static('./public'));

// caminho absoluto
app.use(express.static(path.resolve(__dirname, 'public')));

// caminho absoluto
app.set('views', path.resolve(__dirname, 'src', 'views'));

// caminho relativo
// app.set('views', './src/views');

// ejs é uma engine que renderiza os views (tem que instalar o ejs) - npm i ejs
app.set('views engine', 'ejs');

app.use(routes);

// 3000 é o número da porta
app.listen(3000, () => {
   console.log('Acessar http://localhost:3000');
   console.log('Servidor executando na porta 3000');
});