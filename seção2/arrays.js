const familia = [true, 41, 'leleco', -4];

console.log(typeof familia); // object
console.log(familia instanceof Array); // true

console.log(familia[0]); // true
console.log(familia[1]); // 41
console.log(familia[2]); // leleco
console.log(familia[3]); // -4

// Informa o número de elementos
console.log(familia.length); // 4

// Métodos push/pop compilam rápido, equanto shift/unshift são lentos. //

// Adiciona o elemento 6.2 (number) na última posição.
familia.push(6.2);

console.log(familia); // (5) [true, 41, 'leleco', -4, 6.2]

// Adiciona o elemento "12" (string) na primeira posição.
familia.unshift('12');

console.log(familia); // (6) ['12', true, 41, 'leleco', -4, 6.2]

// Remove o último elemento.
familia.pop();

console.log(familia); // (6) ['12', true, 41, 'leleco', -4]

// Remove o primeiro elemento.
familia.shift();

console.log(familia); // (4) [true, 41, 'leleco', -4]

// Adiciona no fim
familia[familia.length] = 'Luiza';
console.log(familia); // [true, 41, 'leleco', -4, 'Luiza']

// Retorna uma cópia de uma seção de um array. 
console.log(familia.slice(3)); // [ -4, 'Luiza' ]

//Se o índice inicial é undefined, começa do início.
console.log(familia.slice(undefined, 3)); // [ -4, 'Luiza' ]

// O índice final não é incluído
console.log(familia.slice(1, 3)); // [41, 'leleco']
console.log(familia.slice(-3, -1)); // ['leleco'. -4]
