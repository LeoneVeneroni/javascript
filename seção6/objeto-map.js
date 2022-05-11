const pessoas = [
   {id: 3, nome: 'Marilene'},
   {id: 2, nome: 'Adriano'},
   {id: 1, nome: 'Eduardo'},
];

// Dessa forma, coloca na ordem crescente e as chaves como strings
const novasPessoas0 = {};
for (const pessoa of pessoas) {
   const {id} = pessoa;
   novasPessoas0[id] = {...pessoa};
}
console.log(novasPessoas0);
// { '1': { id: 1, nome: 'Eduardo' },
//   '2': { id: 2, nome: 'Adriano' },
//   '3': { id: 3, nome: 'Marilene' } }

// Chaves são numbers e coloca na ordem definida da declaração do objeto
const novasPessoas = new Map();
for (const pessoa of pessoas) {
   const {id} = pessoa;
   novasPessoas.set(id, { ...pessoa });
}
console.log(novasPessoas); 
// Map(3) { 
// 3 => { id: 3, nome: 'Marilene' },
// 2 => { id: 2, nome: 'Adriano' }, 
// 1 => { id: 1, nome: 'Eduardo' } }

// Para acessar os elementos neste caso, temos que usar o método .get()
console.log(novasPessoas.get(2)); 
// { id: 2, nome: 'Adriano' }

for (const pessoa of novasPessoas) {
   console.log(pessoa);
}
// [ 3, { id: 3, nome: 'Marilene' } ]
// [ 2, { id: 2, nome: 'Adriano' } ]
// [ 1, { id: 1, nome: 'Eduardo' } ]

for (const [identificador, {id, nome}] of novasPessoas) {
   console.log(identificador, id, nome);
}
// 3 3 Marilene
// 2 2 Adriano
// 1 1 Eduardo

for (const pessoa of novasPessoas.keys()) {
   console.log(pessoa);
} 
// 3
// 2
// 1

for (const pessoa of novasPessoas.values()) {
   console.log(pessoa);
} 
// { id: 3, nome: 'Marilene' }
// { id: 2, nome: 'Adriano' }
// { id: 1, nome: 'Eduardo' }

// Como deletar uma chave. No caso, foi a 2.
novasPessoas.delete(2);
console.log(novasPessoas);
// Map(2) {
//    3 => { id: 3, nome: 'Marilene' },
//    1 => { id: 1, nome: 'Eduardo' } }
