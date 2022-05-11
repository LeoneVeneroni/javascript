const { look, texto2 } = require('./base');

// \S -> casa algo que não seja um espaço
// (?<=ER) -> casa com que estiver após a palavra à direita de ?<=
// (?<!ER) -> casa com que não estiver após a palavra à direita de ?<!

console.log(look);

// Positive lookbehind (frases que começam com ONLINE)
console.log(look.match(/(?<=ONLINE\s+)\S.*/gm));

// Negative lookbehind (frases que NÃO começam com ONLINE)
console.log(look.match(/^.+(?<!ONLINE.+)$/gm));

console.log(texto2.match(/[a-z]+/g));