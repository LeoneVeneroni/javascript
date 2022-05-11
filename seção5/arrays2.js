// const nomes = ['Melina', 'Sarah', 'Natasha'];
// Podemos criar arrays via construtores
const nomes = new Array('Melina', 'Sarah', 'Natasha');

console.log(nomes); // [ 'Melina', 'Sarah', 'Natasha' ]

nomes[2] = 'Silvia';
console.log(nomes); // [ 'Melina', 'Sarah', 'Silvia' ]

// Delete o elemento indicado, mas não coloca nada no lugar.
delete nomes[1];
console.log(nomes); // [ 'Melina', <1 empty item>, 'Silvia' ]

nomes.push('Jon')
console.log(nomes); // [ 'Melina', <1 empty item>, 'Silvia', 'Jon' ]

const novo = nomes;

novo.pop(); // remove o último elemento do array 'novo'
// o elemento de 'nomes' também é apagado
console.log(nomes); // [ 'Melina', <1 empty item>, 'Silvia' ]

// [... ] -> operador spread 
const novo2 = [...nomes];
novo2.pop();

// o elemento de 'nomes' não é apagado
console.log(nomes); // [ 'Melina', <1 empty item>, 'Silvia' ]
console.log(novo2); // [ 'Melina', undefined ]

// podemos jogar o conteúdo removido em uma variável (constante)
const removido = nomes.pop()
console.log(removido); // Silvia

const pessoas = ['João', 'José', 'Maria', 'Dinorá', 'Leonor'];

// slice(0, -1) remove o último elemento
const convidados = pessoas.slice(0, -1)
console.log(convidados); // [ 'João', 'José', 'Maria', 'Dinorá' ]

const individuo = 'Leone Santana de Melo Veneroni';

// Converte uma string em um array. O espaço vai determinar os elementos da array
const separado = individuo.split(' ');
console.log(separado); // [ 'Leone', 'Santana', 'de', 'Melo', 'Veneroni' ]
const separado2 = individuo.split(' ', 2);
console.log(separado2); // [ 'Leone', 'Santana' ]

const separado3 = individuo.split('ne');
console.log(separado3); // [ 'Leo', ' Santana de Melo Ve', 'roni' ]

const separado4 = individuo.split();
console.log(separado4); // [ 'Leone Santana de Melo Veneroni' ]

// join() converte uma array em uma string. Cada elemento vai ser separado por um espaço
const stringIndividuo = separado.join(' ');
console.log(stringIndividuo); // Leone Santana de Melo Veneroni
const stringIndividuo2 = separado.join();
console.log(stringIndividuo2); // Leone,Santana,de,Melo,Veneroni

// A vírgula vai determinar os elementos da array
const bbbs = 'Babu, Prior, Thelma';
const arrayBbb = bbbs.split(',')
console.log(arrayBbb); // [ 'Babu', ' Prior', ' Thelma' ]

// Cada elemento vai ser separado por uma vígula
const stringBbb = arrayBbb.join(',');
console.log(stringBbb); // Babu, Prior, Thelma
