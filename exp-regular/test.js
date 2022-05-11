// g - global (encontra todas as ocorrências)
// i - insensitive (casa tanto com a letra maiúscula quanto a minúscula)
// ( ) - grupos
// | - ou

const { texto } = require('./base');

const reg1 = /teve 5 filhos/;
const reg2 = /teve 5 filhos/i;

// o método 'test' retorna 'true' se tiver o texto entre as barras inclinadas (case sentive) na string entre os parênteses. Caso contrário, retorna 'false'.
// No texto está "Teve 5 filhos" (t maiúsculo)
console.log(reg1.test(texto)); // false
console.log(reg2.test(texto)); // true

// o método exec mostra todo o conteúdo da arquivo 'base'
console.log(reg2.exec(texto));

// só mostra o conteúdo relacionado à chave 'index'
console.log(reg2.exec(texto).index); // 139

const reg3 = /(maria)(, hoje sua esposa)/i;
const achar = reg3.exec(texto);

if(achar) {
    console.log(achar[0]); // maria, hoje sua esposa
    console.log(achar[1]); // maria
    console.log(achar[2]); // , hoje sua esposa
}
