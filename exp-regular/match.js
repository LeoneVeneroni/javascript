const { texto } = require('./base');

const reg1 = /Leone/i;
const reg2 = /Leone/ig;
const reg3 = /Leone|Maria/ig;

// Mostra a mesma coisa do arquivo test.js
console.log(texto.match(reg1));

// Mostra o texto puro, sem as chaves e indicações de espaços (\n)
console.log(texto);

// Se eu colocar a flag global (g), só retorna as palavras casadas
console.log(texto.match(reg2)); // [ 'Leone', 'leone' ]

// Vai casar com Leone ou Maria
console.log(texto.match(reg3)); // [ 'Leone', 'Maria', 'leone', 'maria', 'Maria' ]
