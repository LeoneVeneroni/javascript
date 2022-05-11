const { texto, arquivos } = require('./base');

// * (opcional) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcional) 0 ou 1 {0,1}
// \ Caractere de escape
// . Qualquer caractere, exceto o caractere de nova linha.
// {n,m} n é mínimo de vezes e m é o máximo de vezes que repete
// {10,} no mínimo 10
// {,10} no máximo 10
// {5,10} de 5 a 10
// {10} repete 10 vezes

const er1 = /leone/gi
const er2 = /leo+ne/gi

console.log(texto.match(er1)); // [ 'Leone', 'leone' ]
console.log(texto.match(er2)); // [ 'Leone', 'leone', 'Leooooooooooone' ]

const er3 = /\./ // Mostra todos os pontos '.' com as chaves 'index', 'input' e 'groups'
const er4 = /\./g // Só mostra todos os pontos
const er5 = /\.jpg/ig // mostra todos os '\.jpg' e '\.JPG'
const er6 = /\.(jpg|jpeg)/ig // pode ser '\.jpg' ou '\.jpeg'
const er7 = /\.jpe*g/ig // 'e' pode aparecer em qualquer quantidade, inclusive nenhuma vez
const er8 = /\.jpe?g/ig // 'e' pode aparecer uma vez ou não
const er9 = /\.jpe+g/ig // 'e' tem que aparecer de uma a infinita vezes
const er10 = /\.(jp|JP)(e|E)?(g|G)/g // casa com 'jp' ou 'JP', pode casar com 'e' ou 'E', e casa com 'g' ou 'G'

// for (const arquivo of arquivos) {
//     console.log(arquivo.match(er3));
// }

for (const arquivo of arquivos) {
    const valido = arquivo.match(er10);

    if(!valido) continue;

    console.log(arquivo, valido);
}

