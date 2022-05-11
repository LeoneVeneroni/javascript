//               01234567
let umaString = 'Um corpo';

console.log(umaString[0]); // U
console.log(umaString[1]); // m
console.log(umaString[4]); // o
console.log(umaString[8]); // undefined
console.log(umaString[-1]); // undefined

// Faz o mesmo que o caso acima. Com exceção de quando não há um espaço associado a uma letra, que dá um valor vazio ao invés de undefined
console.log(umaString.charAt(5)); // r
console.log(umaString.charAt(8)); // 

 // Um corpo muito sensual
console.log(umaString.concat(' muito ', 'sensual')); 
console.log(umaString + ' muito sensual');
console.log(`${umaString} muito sensual`);

// Retorna a posição da primeira substring indicada
// Analisa da esquerda para a direita
console.log(umaString.indexOf('Um')); // 0
console.log(umaString.indexOf('o')); // 4
console.log(umaString.indexOf('o', 5)); // 7

// Retorna a posição da primeira substring indicada
// Analisa da direita para a esquerda
console.log(umaString.lastIndexOf('o')); // 7
console.log(umaString.lastIndexOf('corpo')); // 3
console.log(umaString.lastIndexOf('o', 5)); // 4

// Quando não acha a substring, retorna -1
console.log(umaString.lastIndexOf('o', 2)); // -1

// Expressão regular - relativos à letras minúsculas
console.log(umaString.match(/[a-z]/)); // [ 'm', index: 1, input: 'Um corpo', groups: undefined ]

// Letras minúsculas até n
console.log(umaString.match(/[a-n]/g)); // [ 'm', 'c']

console.log(umaString.search(/p/)); // 6

console.log(umaString.replace('corpo', 'beijo')); // Um beijo
console.log(umaString); // Um corpo
console.log(umaString.replace(/corpo/, 'olhar')); // Um olhar

let outraString = 'O rato roeu a roupa do rei de roma.';

console.log(outraString.replace(/r/, '#')); // O #ato roeu a roupa do rei de roma.
console.log(outraString.replace(/r/g, '#')); // O #ato #oeu a #oupa do #ei de #oma.

console.log(outraString.length); // 35

// slice(primeira, última). A última não inclui a substring em questão
console.log(outraString.slice(23)); // rei de roma.
console.log(outraString.slice(2, 5)); // rat

// Faz a mesma coisa do de cima
console.log(outraString.substring(2, 5)); // rat

// outraString.length - 5 ou apenas -5
console.log(outraString.slice(-5)); // roma.
console.log(outraString.slice(-5, -1)); // roma

// outraString.substring(-5, -1) dá sting vazia
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));

console.log(outraString.split(' ')); // [ 'O', 'rato',   'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma.' ]
console.log(outraString.split(' ', 3)); // [ 'O', 'rato', 'roeu' ]
console.log(outraString.split('', 3)); // [ 'O', ' ', 'r' ]

console.log(outraString.toLowerCase()); // o rato roeu a roupa do rei de roma.
console.log(outraString.toUpperCase()); // O RATO ROEU A ROUPA DO REI DE ROMA.
