/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras
|| -> OR -> OU -> Apenas uma expressão precisa ser verdadeira
! -> NOT -> NÃO 
*/

const expressaoAnd = true && true && true && true;
const expressaoAnd2 = true && true && false && true;
const expressaoOr = false || false || false || false;
const expressaoOr2 = false || true || false || false;

console.log(expressaoAnd); // true
console.log(expressaoAnd2); // false
console.log(expressaoOr); // false
console.log(expressaoOr2); // true

const usuario = 'Leone';
const senha = '12345';

//                        true                 true
const vaiLogar1 = usuario === 'Leone' && senha === '12345';
console.log(vaiLogar1); // true

//                        true                 false           
const vaiLogar2 = usuario === 'Leone' && senha === '54321';
console.log(vaiLogar2); // false

console.log(!false); // true
console.log(!!false); // false

/*
Curto-Circuito (Short-Circuit)
&& -> false && true -> retorna o primeiro falsy ou o último o último truthy
|| -> true || false -> retorna o primeiro truthy ou último falsy

FALSY
false, 0 , '' "" ``, null / indefined, NaN
*/
console.log('========');
console.log('Leone' && null && 'Santana' && 0); // null
console.log('Leone' && 123 && true && 'olá'); // olá
console.log(NaN || null || 'Santana' || 'Leone'); // Santana
console.log(NaN || null || false || 0); // 0

let corUsuario = null;
let corPadrao = corUsuario || 'preto';

console.log(corPadrao); // preto

corUsuario = 'verde';

// Se eu não defino de novo, continua como preto
corPadrao = corUsuario || 'preto';

console.log(corPadrao); // verde

//Operador ternário
const gols = 3;
const pedeMusica = gols >= 3 ? 'Pede música no Fantástico' : 'Não pede música no Fantástico';
console.log(pedeMusica);
