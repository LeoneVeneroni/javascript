// Declaração literal do objeto
const pessoa1 = {
   nome: 'Leone',
   sobrenome: 'Santana',
   idade: 33
};

console.log(pessoa1);

// Notação de ponto
console.log(pessoa1.nome); // Leone
console.log(pessoa1.sobrenome); // Santana

// Notação de colchete
console.log(pessoa1['nome']); // Leone
console.log(pessoa1['sobrenome']); // Santana
console.log(pessoa1['idade']); // 33

// Se mudarmos o conteúdo de chave, o output vai mudar
var chave = 'nome';
console.log(pessoa1[chave]); // Leone

// Declaração com um contrutor
const pessoa2 = new Object();
pessoa2.nome = 'Antonella';
pessoa2.sobrenome = 'Melo';

console.log(pessoa2.nome); // Antonella
console.log(pessoa2.sobrenome); // Melo

console.log(pessoa2); // { nome: 'Antonella', sobrenome: 'Melo' }
delete pessoa2.nome; // apaga uma chave do objeto 'pessoa2'
console.log(pessoa2); // { sobrenome: 'Melo' }

// Objetos podem conter métodos. 
// Métodos são funções que executam ações.

pessoa1.falarNome = function chamada() {
   // this = pessoa1
   console.log(`Prazer, me chamo ${this.nome}`);
};
pessoa1.falarNome(); // Prazer, me chamo Leone

pessoa1.obterDataNascimento = function() {
   const dataAtual = new Date();
   return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.obterDataNascimento()); // 1988

for (let chave in pessoa1) {
   console.log(pessoa1[chave]);
} 
// Leone / Santana / 33 
// [Function: chamada] // falarNome
// [Function (anonymous)] // obterDataNascimento

// Contructor functions
function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Italo', 'Ferreira');

console.log(p1); // Pessoa { nome: 'Italo', sobrenome: 'Ferreira' }

// Podemos mudar o valor do valor da variável, e não o valor da variável, isto é, mudamos p1.nome, mas não p1. Assim, é possível mudar mesmo usando declarando const.
p1.nome = 'Renan';

console.log(p1); // Pessoa { nome: 'Renan', sobrenome: 'Ferreira' }

const p2 = new Pessoa('Gabriel', 'Medina');
// Se usarmos o Object.freeze, não deixa mais mudar.
Object.freeze(p2);
p2.nome = 'Kanoa';

console.log(p2); // Pessoa { nome: 'Gabriel', sobrenome: 'Medina' }

function Gente(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;

   // Agora nenhuma variável pode ser alterada
   Object.freeze(this);
}

const p3 = new Gente('Adoniran', 'Barbosa')
console.log(p3); // Gente { nome: 'Adoniran', sobrenome: 'Barbosa' }

// Tentativa de mudança de nome
p3.nome = 'Felipe';

// Não funciona
console.log(p3); // Gente { nome: 'Adoniran', sobrenome: 'Barbosa' }
