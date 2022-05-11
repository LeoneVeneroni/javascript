// Atribuição por desestruturação (arrays)

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// ... rest, ... spread
const [primeiro, segundo, ...resto] = numeros;
console.log(primeiro, segundo); // 10 20
console.log(resto); // [ 30, 40, 50, 60, 70, 80, 90 ]

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete); // 10 30 50 70

//                      0          1          2
//                   0  1  2    0  1  2    0  1  2
const inception = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(inception[2]); // [ 7, 8, 9 ]
console.log(inception[0][1]); // 2

const [[,,three]] = inception;
const [,[four,,]] = inception;
const [,,[,eight,]] = inception;
console.log(three); // 3
console.log(four); // 4
console.log(eight); // 8

const [lista1, lista2, lista3] = inception;
console.log(lista3); // [ 7, 8, 9 ]
console.log(lista3[0]); // 7