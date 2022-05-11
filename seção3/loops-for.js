/*
For clássico - geralmente com iteráveis (arrays ou strings)
For in - retorna o índice ou a chave (strings, arrays ou objetos)
For of - retorna o valor em si (iteráveis - arrays ou strings)
*/

for (let c = 0; c < 3; c++) {
     console.log("c =", c);    
} // c = 0, c = 1, c = 2

const familia = ['Leone', 'Richard', 'Sueli'];

// Versão antiga e mais rápida de loop. 
for (let pessoa = 0; pessoa < familia.length; pessoa++) {
    console.log(familia[pessoa]);
}; // Leone / Richard / Sueli

//O loop for..in loop é otimizado para objetos genéricos, não para arrays, e por isso é mais lento. Evite usar.
//For.. in lê índices.
for (let pessoa in familia) {
    console.log(pessoa);   
}; // 0 / 1 / 2
for (let pessoa in familia) {
    console.log(familia[pessoa]);   
}; // Leone / Richard / Sueli

const sujeito = {
    nome: 'Rui',
    sobrenome: 'Nunes',
    idade: 29
}

for (let chave in sujeito) {
    console.log(`${chave}: ${sujeito[chave]}`);
} // nome: Rui / sobrenome: Nunes / idade: 29

// // Sintaxe moderna. O for..of não dá acesso ao número dos elementos, mas apenas de seus valores.
for (let pessoa of familia) {
    console.log(pessoa);
}; // Leone / Richard / Sueli
