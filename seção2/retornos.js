let nome = 'Leone'

// Declara uma função para mostrar meu nome.
function dizerNome() {
    console.log('Meu nome é ' + nome);
}

// Chama a função que mostra a string 'Meu nome é Leone'.
const mensagem = dizerNome(); 
console.log(mensagem); // undefined

function dizerNome2() {
    return `Meu nome é ${nome}`;
}

// Chama a função que retorna a string 'Meu nome é Leone'.
const mensagem2 = dizerNome2(); 
console.log(mensagem2); // Meu nome é Leone

// Declara uma função com um parâmetro que retorna o dobro do parâmetro a ser chamado. 
function dobro(x) {
    return x*2;
}

// Mostra o dobro de 3 no console.
console.log(dobro(3)); // 6

// Maneira alternativa de declarar uma função
const triplo = function(x) {
    return x*3;
};

console.log(triplo(3)); // 9

// Arrow function
const raiz = x => x ** 0.5;

console.log(raiz(9)); // 3

// Declara uma função que retorna a soma de dois parâmetros a serem chamados.
function soma(a, b) {
    return a + b;
};

// Mostra a soma de 4 e 11 no console.
console.log(soma(4, 11)); // 15

// Armazena na variável resultado a soma entre 3 e 8.
let resultado = soma(3, 8);

// Mostra o valor armazenado na variável 'resultado'.
console.log(resultado); // 11

// Declara uma função que não retorna nada.
function fazerNada() {
    return;
};

// Mostra no console uma função que não retorna nada.
console.log(fazerNada()); // undefined

