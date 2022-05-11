/* 
Variáveis primitivas
String, number, undefined, null, boolean, symbol
*/

let nome = 'Leone'; // typeof nome -> "string"
let idade = 4; // typeof idade -> "number"
const pi = 3.14; // typeof pi -> "number"
let estado = true; // typeof estado -> "boolean" 
let sobrenome; // typeof sobrenome -> "undefined"
let corSelecionada = null; // typeof corSelecionada -> "object"

console.log(nome); // Leone
console.log(idade); // 4
console.log(pi); // 3.14
console.log(estado); // true
console.log(sobrenome); // undefined
console.log(corSelecionada); // null

/* Não pode colocar 'let' (nem 'var') para redifinir a variável 'idade'.
Não é possível redefinir 'const'. */

nome = "Richard";
console.log(nome); // Richard
idade = 6;
console.log(idade); // 6
estado = false;
console.log(false); // false

// Exemplo de variáveis primitivas
let a = 2;
const b = a;
console.log(a, b); // 2 2

a = 3;
console.log(a, b); // 3 2

// Exemplo de variáveis não primitivas
let c = [1, 2];
let d = c;
console.log(c, d); // [ 1, 2 ] [ 1, 2 ]

d.push(4);
console.log(c, d); // [ 1, 2, 4 ] [ 1, 2, 4 ]
