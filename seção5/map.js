// Map - retorna o mesmo número de elementos. O filter só retorna 'true' ou 'false', de modo que sendo 'true', adiciona o elemento no novo array, já o retorno 'false' não adiciona. Já o map pode retornar um número ou uma string.

const numeros = [4, 27, 12, -18];

const numerosDobro = numeros.map(valor => valor * 2);
console.log(numerosDobro); // [ 8, 54, 24, -36 ]

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
   {nome: 'Luiz', idade: 61},
   {nome: 'Maria', idade: 24},
   {nome: 'Eduardo', idade: 58},
   {nome: 'Rosana', idade: 12},
   {nome: 'Wallace', idade: 39},
   {nome: 'Letícia', idade: 41},
];
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

// const idades = pessoas.map(function(obj) {
//    delete obj.nome;
//    return obj;
// }) // [ { idade: 61 }, { idade: 24 }, { idade: 58 }, { idade: 12 }, { idade: 39 }, { idade: 41 } ]

const idades = pessoas.map(function(obj) {
   return { idade: obj.idade };
})
console.log(idades); // [ { idade: 61 }, { idade: 24 }, { idade: 58 }, { idade: 12 }, { idade: 39 }, { idade: 41 } ]

// Se não botar parênteses em ({ age: obj.idade }) não funciona
const idades2 = pessoas.map(obj => ({ age: obj.idade }) );
console.log(idades2); // [ { age: 61 }, { age: 24 }, { age: 58 }, { age: 12 }, { age: 39 }, { age: 41 } ]

// Deste modo, o array original (pessoas) também é alterado
// const comIds = pessoas.map(function(obj, indice) {
//    obj.id = indice;
//    return obj;
// });
// console.log(comIds);
// [ { nome: 'Luiz', idade: 61, id: 0 }, 
//   { nome: 'Maria', idade: 24, id: 1 },
//   { nome: 'Eduardo', idade: 58, id: 2 },
//   { nome: 'Rosana', idade: 12, id: 3 },
//   { nome: 'Wallace', idade: 39, id: 4 },
//   { nome: 'Letícia', idade: 41, id: 5 } ]

// console.log(pessoas); // a mesma coisa que console.log(comIds)

// Deste modo, o array original (pessoas) também é alterado
const comIds = pessoas.map(function(obj, indice) {
   const novoObj = { ...obj };
   novoObj.id = indice;
   return novoObj;
});
 console.log(comIds); 
 // [ { nome: 'Luiz', idade: 61, id: 0 }, 
 //   { nome: 'Maria', idade: 24, id: 1 },
 //   { nome: 'Eduardo', idade: 58, id: 2 },
 //   { nome: 'Rosana', idade: 12, id: 3 },
 //   { nome: 'Wallace', idade: 39, id: 4 },
 //   { nome: 'Letícia', idade: 41, id: 5 } ]
 console.log(pessoas);
//  [ { nome: 'Luiz', idade: 61 },
//    { nome: 'Maria', idade: 24 },
//    { nome: 'Eduardo', idade: 58 },
//    { nome: 'Rosana', idade: 12 },
//    { nome: 'Wallace', idade: 39 },
//    { nome: 'Letícia', idade: 41 } ]

