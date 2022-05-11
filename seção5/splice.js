//               -5       -4         -3        -2       -1
//                0        1          2         3        4
const nomes = ['Maju', 'Sandra', 'Evaristo', 'Doni', 'Carlos'];

// nomes.splice(índice inicial, quantos elementos a serem deletados, primeiro elemento a ser adicionado, segundo elemento a ser adicionado, terceiro elemento a ser adicionado);

// pop
const removidoFim = nomes.splice(-1, 1); // retorna um array
console.log(nomes, removidoFim); // [ 'Maju', 'Sandra', 'Evaristo', 'Doni' ] [ 'Carlos' ]

// push
const adicionadoFim = nomes.splice(nomes.length, 0, 'Glória');
console.log(nomes, adicionadoFim); // [ 'Maju', 'Sandra', 'Evaristo', 'Doni', 'Glória' ] []

// shift
const removidoInicio = nomes.splice(0, 1);
console.log(nomes, removidoInicio); // [ 'Sandra', 'Evaristo', 'Doni', 'Glória' ] [ 'Maju' ]

// unshift
const adicionadoInicio = nomes.splice(0, 0, 'Pedro');
console.log(nomes, adicionadoInicio); // [ 'Pedro', 'Sandra', 'Evaristo', 'Doni', 'Glória' ] []

// Number.MAX_VALUE se refere ao último elemento possível analisado pelo JavaScript, nesse array faz ser 2 elementos.
const removidos = nomes.splice(3, Number.MAX_VALUE); 

console.log(nomes, removidos); // [ 'Pedro', 'Sandra', 'Evaristo' ] [ 'Doni', 'Glória' ]
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// A partir do índice 1, elimina 2 e adiciona 'Patrícia', 'Fátima', 'Cid'.
const modificar1 = nomes.splice(1, 2, 'Patrícia', 'Fátima', 'Cid');
console.log(nomes, modificar1); // [ 'Pedro', 'Patrícia', 'Fátima', 'Cid' ] [ 'Sandra', 'Evaristo' ]

// A partir do índice 2, elimina 1 e adicionar 'William', 'Renata'
const modificar2 = nomes.splice(2, 1, 'William', 'Renata');
console.log(nomes, modificar2); // [ 'Pedro', 'Patrícia', 'William', 'Renata', 'Cid' ] [ 'Fátima' ]
