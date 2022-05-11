// forEach serve para iterar arrays

const a1 = [10, 20, 30];
a1.forEach(function(valor, indice, array) {
   console.log(valor, indice, array);
});
// 10 0 [ 10, 20, 30 ]
// 20 1 [ 10, 20, 30 ]
// 30 2 [ 10, 20, 30 ]

a1.forEach((valor, indice, array) => console.log(valor, indice, array));
// 10 0 [ 10, 20, 30 ]
// 20 1 [ 10, 20, 30 ]
// 30 2 [ 10, 20, 30 ]

let total = 0;
a1.forEach(valor => {
   total += valor;
}); // 0+10 = 10 -> 10+20 = 30 -> 30+30 = 60
console.log(total); // 60
