class Pessoa {
   constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
   }
}

exports.Pessoa = Pessoa;

const nome = 'João';
const sobrenome = 'Silva';

// se eu colocar exports = { } - ao invés de module.exports = `{ }, vai gerear um undefined
module.exports = {
   nome, sobrenome, Pessoa
};
