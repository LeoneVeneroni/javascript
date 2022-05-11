// Filter - array retornado pode ser menor ou maior do que o array original

// Retorne os números maiores que 10
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 32, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Podemos usar três argumentos (valor, índice, array)
function callbackFilter(valor) {
   return valor > 10; // retorna 'true' ou 'false'
   // if (valor > 10) {
   //    return true;
   // } else {
   //    return false;
   // }
}

// O método .filter() vai fazer a função passada como argumento iterarar (loop) sobre o array indicado.
// Se for retornado 'true', o elemento será imbutido no novo array. Se for 'false, não será colocado no novo array.
const numerosFiltrados = numeros.filter(callbackFilter);

console.log(numerosFiltrados); // [ 32, 80, 11, 15, 22, 27 ]

// Podemos fazer a mesma coisa como função anônima
const numerosFiltrados2 = numeros.filter(function(valor) {     return valor > 10; });

console.log(numerosFiltrados2); // [ 32, 80, 11, 15, 22, 27 ]

// Como arrow function
const numerosFiltrados3 = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados3); // [ 32, 80, 11, 15, 22, 27 ]

const numeros2 = [7, 22, 70, -1];

const numerosFiltrados4 = numeros2.filter((valor, indice, array) => {
   console.log(valor, indice, array);
   return valor > 10;
});
console.log(numerosFiltrados4); 
// 7 0 [ 7, 22, 70, -1 ]
// 22 1 [ 7, 22, 70, -1 ]
// 70 2 [ 7, 22, 70, -1 ]
// -1 3 [ 7, 22, 70, -1 ]
// [ 22, 70 ]

// Retorne as pessoas que têm o nome com mais de 5 letras 
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
   {nome: 'Luiz', idade: 61},
   {nome: 'Maria', idade: 24},
   {nome: 'Eduardo', idade: 58},
   {nome: 'Rosana', idade: 12},
   {nome: 'Wallace', idade: 39},
   {nome: 'Letícia', idade: 41},
];
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length > 5);

console.log(pessoasNomeGrande);
// [ { nome: 'Eduardo', idade: 58 }, 
//   { nome: 'Rosana', idade: 12 },
//   { nome: 'Wallace', idade: 39 },
//   { nome: 'Letícia', idade: 41 } ]

const pessoasVelhas = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasVelhas); // [ { nome: 'Luiz', idade: 61 }, { nome: 'Eduardo', idade: 58 } ]

const pessoasAcabaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a') );

const person = pessoas.filter(obj => obj.nome.substr(-1) === "a")
 
console.log(pessoasAcabaComA);
// [ { nome: 'Maria', idade: 24 },
//    { nome: 'Rosana', idade: 12 },
//    { nome: 'Letícia', idade: 41 } ]

console.log(person); // igual ao de cima
