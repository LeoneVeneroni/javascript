/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos têm um referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
   //this.nomeCompleto = () => 'Original:' + this.nome + ' ' + this.sobrenome;
}

// Seu eu tirar o comentário de this.nomeCompleto na função construtora Pessoa, o motor do JS não vai ler o comando abaixo.
Pessoa.prototype.nomeCompleto = function() {
   return this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Gilmar', 'Edy') // <-- Pessoa = Função construtora
const pessoa2 = new Pessoa('Sonia', 'Regina') // <-- Pessoa = Função construtora
const data = new Date() // <-- Date = Função construtora

console.log(Pessoa.prototype === pessoa1.__proto__); // true

// O motor do JavaScript vai buscar informações na seguinte ordem:
// pessoa1 -> Pessoa.prototype -> Object.prototype
console.dir(pessoa1); 
// Pessoa { pessoa: 'Gilmar', sobrenome: 'Edy', nomeCompleto: [Function (anonymous)] }

// No diretório: data -> Date.prototype -> Object.prototype
console.dir(data); // 2021-08-10T19:54:19.797Z
