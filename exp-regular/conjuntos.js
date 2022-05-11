const { alfabeto } = require('./base');

console.log(alfabeto);

// [abc] -> Conjunto
// [^] -> Negação

// Casa a sequência 'abc', que existe
console.log(alfabeto.match(/abc/g)); // [ 'abc' ]

// Conjunto - cada caractere vira um elemento de uma array
console.log(alfabeto.match(/[abc]/g)); // [ 'a', 'b', 'c' ]

// Não precisa ser a mesma sequência de 'alfabeto'
console.log(alfabeto.match(/[abc123]/g)); // [ 'a', 'b', 'c', '1', '2', '3' ]

// Tenta casar a sequência 'abc123', que não existe.
console.log(alfabeto.match(/abc123/g)); // null

// Cada sequência de 'alfabeto' vira um elemento de uma array
console.log(alfabeto.match(/[abc123]+/g)); // [ 'abc', '123' ]

// Casa todos os caracteres diferentes de a, b, c, 1, 2 e 3.
console.log(alfabeto.match(/[^abc123]/g)); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'w', 'V', 'X', 'Y', 'Z', ' ', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '@', ';', ' ', '0', '4', '5', '6', '7', '8', '9', ' ', ';' ]

// Todos os caracteres anteriores a 'a' formam um elemento de uma array, todos os caracteres entre 'c' e '1' formam outro elemento, todos os elementos após 3 formam outro elemento
console.log(alfabeto.match(/[^abc123]+/g)); // [ 'ABCDEFGHIJKLMNOPQRSTUwVXYZ ', 'defghijklmnopqrstuvwxyz @; 0', '456789 ;' ]
