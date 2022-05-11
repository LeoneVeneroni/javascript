const { alfabeto2 } = require('./base');

// [0-9] -> range - tem que ser de menor para o maior. O inverso dá erro
console.log(alfabeto2.match(/[0-9]/g)); // [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

// Separa em dois elementos pois há um espaço entre '4' e '5' em 'alfabeto2'
console.log(alfabeto2.match(/[0-9]+/g)); // [ '01234', '56789' ]

// Faz o mesmo que [0-9]+
console.log(alfabeto2.match(/\d+/g)); // [ '01234', '56789' ]

// Faz o mesmo que [^0-9]+
console.log(alfabeto2.match(/\D+/g)); // [    'ABCDEFGHIJKLMNOPQRSTUVWXYZ éçãà abcdefghijklmnopqrstuvwxyz @; ', ' ', ' ;' ]

console.log(alfabeto2.match(/[A-Z]+/g)); // [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ]

// Não identifica caracteres acentuados, nem ç.
console.log(alfabeto2.match(/[a-zA-Z0-9]+/g)); // [    'ABCDEFGHIJKLMNOPQRSTUwVXYZ', 'abcdefghijklmnopqrstuvwxyz', '01234', '56789' ]

// Faz a mesma do que [a-zA-Z0-9]+
console.log(alfabeto2.match(/\w+/g)); // [    'ABCDEFGHIJKLMNOPQRSTUwVXYZ', 'abcdefghijklmnopqrstuvwxyz', '01234', '56789' ]

// Se colocarmos os caracteres desejados, aí casa
console.log(alfabeto2.match(/[a-zA-Z0-9çãéà]+/g)); // [    'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'éçãà', 'abcdefghijklmnopqrstuvwxyz',  '01234', '56789' ]

console.log(alfabeto2.match(/[^a-zA-Z0-9]+/g)); // [ ' éçãà ', ' @; ', ' ', ' ;' ]

// Faz a mesma do que [^a-zA-Z0-9]+
console.log(alfabeto2.match(/\W+/g)); // [ ' éçãà ', ' @; ', ' ', ' ;' ]

// Range usando unicode
console.log(alfabeto2.match(/[\u0041-\u004C]+/g)); // [ 'ABCDEFGHIJKL' ]

// Encontra todos os espaços
console.log(alfabeto2.match(/\s/g)); // [ ' ', ' ', ' ', ' ', ' ', ' ' ]