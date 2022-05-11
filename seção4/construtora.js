// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)
// Dentro das funções construtoras não precisam usar a vírgula como nas funções fábricas
function Pessoa(nome, sobrenome) { 
   // Atributos ou métodos privados
   const ID = 345210;
   const metodoInterno = function() {
   };

   // Atributos ou métodos públicos
   this.nome = nome;
   this.sobrenome = sobrenome;

   this.metodo = function() {
      console.log(this.nome + ': sou um método');
   };
}

// A palavra 'new' cria um objeto vazio, faz o 'this' retornar para esse objeto vazio, e daí retorna implicitamente o objeto para as variáveis (p1 e p2). Então não é necessário usar o 'return'
const p1 = new Pessoa('Leo', 'Santana');
const p2 = new Pessoa('Pedro', 'Sampaio');

p1.metodo(); // Leo: sou um método
p2.metodo(); // Pedro: sou um método
console.log(p1.nome, p1.sobrenome) // Leo Santana
console.log(p2.nome) // Pedro
console.log(p2.sobrenome) // Sampaio