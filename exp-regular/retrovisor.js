const { html } = require('./base');

const texto1 = 'quero-quero é um passarinho';
const texto2 = 'lentamente é mente lenta';
const texto3 = 'bandeirante bandeira banda';
const texto4 = 'indolor é sem dor';
const texto5 = 'abcd-1 = abcd,abc,ab,a';

// só funciona em grupos (conteúdo entre parênteses)
// serve para procurar palavras repetidas
// numeram-se retrovisores contando os grupos da esquerda para a direita
// temos no máximo 9 retrovisores
const retrovisor1 = /(quero)-\1/g;
const retrovisor2 = /(lenta)(mente) é \2 \1/g;
const retrovisor3 = /((band)eira)nte \1 \2a/g;
const retrovisor4 = /in(d)ol(or) é sem \1\2/g;
const retrovisor5 = /((((a)b)c)d)-1 = \1,\2,\3,\4/g;

// console.log(texto1.match(retrovisor1)); // [ 'quero-quero' ]
// console.log(texto2.match(retrovisor2)); // [ 'lentamente é mente lenta' ]
// console.log(texto3.match(retrovisor3)); // [ 'lentamente é mente lenta' ]
// console.log(texto4.match(retrovisor4)); // [ 'indolor é sem dor' ]
// console.log(texto5.match(retrovisor5)); // [ 'abcd-1 = abcd,abc,ab,a' ]

const retrovisor6 = /<(\w)>/g;
const retrovisor7 = /<(\w+)>/g;
const retrovisor8 = /<(\w).+>/g;
const retrovisor9 = /<(\w+)>.*?<(\/.+?)>/g;
const retrovisor10 = /<(\w+)>.*?<(\/\1)>/g;

console.log(html); // <p>Olá, mundo</p> <p>Olá de novo</p> <div>Comprar pote</div>

console.log(html.match(retrovisor6)); // [ '<p>', '<p>' ]
console.log(html.match(retrovisor7)); // [ '<p>', '<p>', '<div>' ]
console.log(html.match(retrovisor8)); // [ '<p>Olá, mundo</p> <p>Olá de novo</p> <div>Comprar pote</div>' ]
console.log(html.match(retrovisor9)); // [ '<p>Olá, mundo</p>, <p>Olá de novo</p>, <div>Comprar pote</div>' ]
console.log(html.match(retrovisor10)); // [ '<p>Olá, mundo</p> <p>Olá de novo</p> <div>Comprar pote</div>' ]
