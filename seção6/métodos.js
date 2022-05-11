const produto = { 
   nome: 'caneca', 
   preço: 3.55
};
// Se eu não usar ..., a alteração em 'compra1' vai ser feita em 'produto'.
// ... (spread)
const compra1 = { ...produto, material: 'porcelana'};

compra1.preço = 1.99;
console.log(produto); // { nome: 'caneca', 'preço': 3.55 }
console.log(compra1); // { nome: 'caneca', 'preço': 1.99, material: 'porcelana' }

// Object.assign(destino, fonte)
const compra2 = Object.assign({}, produto, {material: 'metal'});

console.log(compra2); // { nome: 'caneca', 'preço': 3.55, material: 'metal' }

// Desse jeito também não atrela os conteúdos
const compra3 = { nome: produto.nome, preço: produto.preço };

compra3.material = 'alumínio';

console.log(produto); // { nome: 'caneca', 'preço': 3.55 }
console.log(compra3); // { nome: 'caneca', 'preço': 3.55, material: 'alumínio' }

console.log(Object.getOwnPropertyDescriptor(compra1, 'nome'));
// { value: 'caneca', writable: true, enumerable: true, configurable: true }

console.log(Object.keys(compra2)); // [ 'nome', 'preço', 'material' ]
console.log(Object.values(compra2)); // [ 'caneca', 3.55, 'metal' ]
console.log(Object.entries(compra2)); // [ [ 'nome', 'caneca' ], [ 'preço', 3.55 ], [ 'material', 'metal' ] ]

for(let entrada of Object.entries(compra3)) {
   console.log(entrada);
}
// [ 'nome', 'caneca' ] / [ 'preço', 3.55 ] / [ 'material', 'alumínio' ]

for(let [chave, valor] of Object.entries(compra3)) {
   console.log(chave, valor);
} 
// nome caneca / preço 3.55 / material alumínio