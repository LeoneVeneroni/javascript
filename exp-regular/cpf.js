const { cpfs } = require('./base');

// ^ = começa com
// $ = termina com
// [^] = negação
// m = multiline (avalia cada linha, normalmente usada com ^ no início)

const theCpf = '123.543.765-21';
const theCpf2 = ' 123.543.765-21';
const theCpf3 = '123.543.765-21 ';
const theCpf4 = `123.543.765-21
135.865.332-04
    254.668.012-45`;

const meuCpf = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g;
const meuCpf2 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const meuCpf3 = /2*\d{3}\.\d{3}-\d{2}/g;
const meuCpf4 = /(\d{3}\.){2}\d{3}-\d{2}/g;

const comecaCpf = /^(\d{3}\.){2}\d{3}-\d{2}/g;
const terminaCpf = /(\d{3}\.){2}\d{3}-\d{2}$/g;
const linhaCpf = /^(\d{3}\.){2}\d{3}-\d{2}/gm;

console.log(theCpf.match(comecaCpf)); // [ '123.543.765-21' ]
console.log(theCpf.match(terminaCpf)); // [ '123.543.765-21' ]

console.log('=============');

console.log(theCpf2.match(comecaCpf)); // null
console.log(theCpf2.match(terminaCpf)); // [ '123.543.765-21' ]

console.log('=============');

console.log(theCpf3.match(comecaCpf)); // [ '123.543.765-21' ]
console.log(theCpf3.match(terminaCpf)); // null

console.log('=============');

console.log(theCpf4.match(comecaCpf)); // [ '123.543.765-21' ]
console.log(theCpf4.match(terminaCpf)); // [ '254.668.012-45' ]
console.log(theCpf4.match(linhaCpf)); // [ '123.543.765-21', '135.865.332-04' ]
