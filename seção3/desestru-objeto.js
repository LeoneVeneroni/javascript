// Atribuição normal (objetos)

const pessoa = {
   nome: 'Leone',
   sobrenome: 'Santana',
   // apelido: 'Brizola',
   idade: 33,
   endereco: {
      rua: 'Rua Pão de Açúcar',
      numero: 277
   },
   familia: {
      //mamae: ' ',
      irmao: 'Richard'
   } 
};

console.log(pessoa.nome); // Leone
console.log(pessoa.endereco.rua); // Rua Pão de Açúcar

// Atribuição por desestruturação (objetos)

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome); // Leone Santana
console.log(resto); // { idade: 33, endereco: { rua: 'Rua Pão de Açúcar', numero: 277 } }

// Se 'nome' não tiver nada associado, vai ser atribuído 'Zeca'.
// Mudando o nome do atributo de 'nome' para 'n'
const {nome: n = 'Zeca'} = pessoa;
// Como já tem uma atribuição ('Leone'), vai ser essa que vai mostrar
console.log(n); // Leone

const {apelido: aka = 'Deserto'} = pessoa;
console.log(aka); // Deserto

const {
   familia: {mamae: mae = 'Josenilda', irmao: mano}, familia
} = pessoa;
console.log(mae, mano, familia); // Josenilda Richard { irmao: 'Richard' }