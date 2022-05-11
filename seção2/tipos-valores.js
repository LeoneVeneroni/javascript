/*
Primitivos (imutáveis): string, number, boolean, undefined, null (bigint, symbol) -> valores copiados

Referência (mutável): array, object, function -> passados por referência
*/

let x = 'X';
let y = x; // cópia
console.log(x, y);

x = 'oi'; // Alterando x, não mudamos y
console.log(x, y);

let a = [1, 2, 3];
let b = a; // a e b ficam no mesmo lugar na memória
console.log(a, b);

// se alteramos a, mudamos b
a.push(4); // se adicionamos o elemento 4 em a, adicionamos em b
console.log(a, b);

b.pop(); // se removemos um elemento em a, removemos em b
console.log(a, b);

let c = [3, 6, 9]
let d = [...c] // copia, mas c e d ficam em lugares diferentes na memória
console.log(c, d);

c.push(12);
console.log(c, d); // se adicionamos o elemento 12 em c, não adicionamos em d

const i = {
    nome: 'Leone',
    sobrenome: 'Santana'
};

const j = i;
console.log(j); // { nome: 'Leone', sobrenome: 'Santana' }
i.nome = 'Sueli'
// Se eu mudo o objeto i, mudo j igualmente (mesmo lugar na memória)
console.log(i); // { nome: 'Sueli', sobrenome: 'Santana' }
console.log(j); // { nome: 'Sueli', sobrenome: 'Santana' }

const k = {...i};
i.sobrenome = 'Melo'
// Se eu mudo o objeto i, não mudo j (lugares diferentes na memória)
console.log(i); // { nome: 'Sueli', sobrenome: 'Melo' }
console.log(k); // { nome: 'Sueli', sobrenome: 'Santana' }