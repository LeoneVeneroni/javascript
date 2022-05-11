const { look } = require('./base');

// \b -> borda, limítrofe
// \b -> marca os limites de uma palavra
// "palavra" engloba letras, números e sublinhado
// a borda é útil para casar palavras exatas e não parciais

// (?=ER) -> não casa caracteres na posição atual, mas dá uma espiada adiante, e caso a ER embutida case, retorna sucesso.

// (?!ER) -> é o contrário do anterior, só casando um trecho se este não for seguido da ER embutida

// \s -> casa um espaço

console.log(look); // ONLINE  192.168.0.1 ABCDEF inactive
// OFFLINE  192.168.0.2 ABCDEF active
// ONLINE  192.168.0.3 ABCDEF active
// ONLINE  192.168.0.4 ABCDEF active
// OFFLINE  192.168.0.5 ABCDEF active
// OFFLINE  192.168.0.6 ABCDEF inactive

// positive lookahead (frases que tem active)
console.log(look.match(/.+\bactive/g)); // [ 'OFFLINE  192.168.0.2 ABCDEF active', 'ONLINE  192.168.0.3 ABCDEF active', 'ONLINE  192.168.0.4 ABCDEF active', 'OFFLINE  192.168.0.5 ABCDEF active' ]

// ?= não casa com o trecho à direita, mas só casa com o conteúdo que for seguido pelo estiver após ?=
console.log(look.match(/.+(?=\s\bactive)/g)); // [ 'OFFLINE  192.168.0.2 ABCDEF', 'ONLINE  192.168.0.3 ABCDEF', 'ONLINE  192.168.0.4 ABCDEF', 'OFFLINE  192.168.0.5 ABCDEF' ]

// Negative lookahead (frases que NÃO tem active)
console.log(look.match(/^(?!.+\bactive).+$/gm));
