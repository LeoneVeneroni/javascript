const falaNome1 = require('./mod1').falaNome;

falaNome1(); // Lourival Santana

const mod1 = require('./mod1');

console.log(mod1); // {  nome: 'Lourival', 
// sobrenome: 'Lourival',  falaNome: [Function: falaNome],
// qualquerCoisa: 'texto qualquer' }

mod1.falaNome(); // Lourival Santana

const falaNome2 = mod1.falaNome;

falaNome2(); // Lourival Santana

// console.log(nome, sobrenome); // Dá erro

// Podemos importar cada variável
const { nome, sobrenome, falaNome } = require('./mod1');

console.log(nome, sobrenome); // Lourival Santana


const { Pessoa } = require('./mod2');

const p1 = new Pessoa('Luiz', 'Miranda');

console.log(p1); 
// Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }

const mod2 = require('./mod2');

console.log(mod2.nome, mod2.sobrenome); // João Silva

// npm i axios
// npm init - y
const path = require('path');
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
   .then(response => console.log(response.data))
   .catch(e => console.log(e));
