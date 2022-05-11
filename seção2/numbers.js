// IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

// Quando trabalhamos com números flutantes, há uma certa imprecisão no JavaScript
console.log(num1 + num2) // 0.7999999999999999

num1 += num2 // num1 = num1 + num2
num1 += num2
num1 += num2  
console.log(num1) // 0.9999999999999999
console.log(Number.isInteger(num1)); // false

// Para resolver esse problema, podemos fazer
num1 = Number(num1.toFixed());
// num1 = parseFloat(num1.toFixed()); também funcionaria
console.log(Number.isInteger(num1)); // true
console.log(num1) // 1

let num3 = 10.34950381;

console.log(Number(num3.toFixed(2))); // 10.35

console.log(typeof num3); // number
// Esse método sem argumento transforma em string
num3 = num3.toString();
console.log(typeof num3); // string

let num4 = 42;
// Esse método com argumento 2 mostra o número em binário (base 2)
console.log(num4.toString(2)); // 101010
console.log(typeof num4.toString(2)); // string

let temp = num4 * 'texto';
console.log(Number.isNaN(temp)); // true