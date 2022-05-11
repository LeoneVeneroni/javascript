const {texto2} = require('./base');

const meuTeste = /(?<nome>Thaís)\s(?<verbo>come)/g;
const meuTeste2 = /(\()?[0-9]+(?(1) \ ))/g;

console.log(texto2.match(meuTeste));
console.log(texto2.match(meuTeste2));