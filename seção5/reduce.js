// Reduce - reduz um array a um único elemento

// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 32, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total1 = numeros.reduce(function(acumulador, valor, indice, array) {
   acumulador += valor; // acumulador = acumulador + valor
   return acumulador
}, 0); // O '0' é o valor inicial (opcional). Se não colocarmos o '0', é usado o primeiro elemento do array
console.log(total1); // 218

// Com arrow function
const total1b = numeros.reduce((acumulador, valor) =>  acumulador + valor);
console.log(total1b); // 218

const total2a = numeros.reduce(function(acumulador, valor) {
   if(valor % 2 === 0) acumulador.push(valor);
   return acumulador
}, []); // Pra retornar um array, é só colocar []
console.log(total2a); // [ 32, 80, 2, 8, 22 ]

// Posso fazer o mesmo com o filter
const total2b = numeros.filter(function(valor) {
   return valor % 2 === 0;
}); //
console.log(total2b);

const total3a = numeros.reduce(function(acumulador, valor) {
   acumulador.push(valor*2);
   return acumulador;
}, []); // Pra retornar um array, é só colocar []
console.log(total3a); // [ 10, 64, 160, 2, 4, 6, 10, 16, 14, 22, 30, 44, 54 ]

// Dá pra fazer a mesma coisa com o map
const total3b = numeros.map(function(valor) {
   return valor*2;
});
console.log(total3b); // [ 10, 64, 160, 2, 4, 6, 10, 16, 14, 22, 30, 44, 54 ]

// Some só os números pares
const total4 = numeros.reduce(function(acumulador, valor) {
   if(valor % 2 === 0) acumulador += valor;
   return acumulador;
}, 0); // Se eu não colocar '0', vai somar o '5' (primeiro elemento), que é ímpar
console.log(total4); // 144

// Retorne a pessoa mais velha
const pessoas = [
   {nome: 'Luiz', idade: 61},
   {nome: 'Maria', idade: 24},
   {nome: 'Eduardo', idade: 58},
   {nome: 'Rosana', idade: 72},
   {nome: 'Wallace', idade: 39},
   {nome: 'Letícia', idade: 41},
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
   // console.log(acumulador, valor);
   if(acumulador.idade > valor.idade) return acumulador;
   return valor;
});
console.log(maisVelha); // { nome: 'Rosana', idade: 72 }
