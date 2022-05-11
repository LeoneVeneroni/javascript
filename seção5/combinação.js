// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)
const numeros = [3, 34, 82, 21, 2, 13, 39, 38, 7, 18, 15, 26];
const numerosPares = numeros.filter(function(valor) {
   return valor % 2 === 0;
}).map(function(valor) {
   return valor * 2;
}).reduce(function(acumulador, valor) {
   acumulador += valor;
   return acumulador;
});

// [ 34, 82, 2, 38, 18, 26 ] -> pares
// [ 68, 164, 4, 76, 36, 52 ] -> dobro dos pares
// 400 -> soma dos elementos do dobro dos pares
console.log(numerosPares);

// Com arrow function
const numerosImpares = numeros
   .filter(valor => valor % 2 !== 0)
   .map(valor => valor * 3)
   .reduce((acum, valor) => acum + valor);

// [ 3, 21, 13, 39, 7, 15 ] -> ímpares
// [ 9, 63, 39, 117, 21, 45 ] -> triplo dos ímpares
// 294 -> soma dos elementos do triplo dos ímpares
console.log(numerosImpares);
