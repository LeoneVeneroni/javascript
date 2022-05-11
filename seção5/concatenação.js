const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

var a3 = a1 + a2;
console.log(a3); // 1,2,34,5,6
console.log(typeof a3); // string

var a3 = a1.concat(a2);
console.log(a3); // [ 1, 2, 3, 4, 5, 6 ]

const a4 = a1.concat(a2, [7, 8, 9], 'Luiz');
console.log(a4); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Luiz' ]

var a5 = [a1, a2];
console.log(a5); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// ...rest -> ...spread
var a5 = [...a1, ...a2];
console.log(a5); // [ 1, 2, 3, 4, 5, 6 ]

const a6 = [...a1, 'Leone', ...a2, ...[7, 8, 9]];
console.log(a6); // [ 1, 2, 3, 'Leone', 4, 5, 6, 7, 8, 9 ]
