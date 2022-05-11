// NaN - Not a number
// parseInt (inteiro), parseFloat (decimais)
const num1 = 10;
let num2 = '5';
console.log(num1 * num2); // 50
console.log(typeof (num1 * num2)); // number

num2 = 'Leone';
console.log(num1 * num2); // NaN
console.log(typeof (num1 * num2)); // number

// Transforma a string em um número inteiro. Ignora o número após o ponto.
num2 = parseInt('5.7');
console.log(num2); // 5
console.log(typeof num2); // number

// Transforma a string em um número real (flutuante).
num2 = parseFloat('5.4');
console.log(num2); // 5.4
console.log(typeof num2); // number

// Também transforma a string em um número real (flutuante).
num2 = Number('5.6');
console.log(num2); // 5.6
console.log(typeof num2); // number
