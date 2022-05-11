const nome = 'Lourival';
const sobrenome = 'Santana';

const falaNome = () => {
   console.log(nome, sobrenome);
};

// console.log(module);
// module.exports.nome = nome;
// module.exports.sobrenome = nome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

// se eu omitir module, vai dar o mesmo resultado
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// this faz referência a module.exports ou exports
this.qualquerCoisa = 'texto qualquer'

console.log(exports); // {  nome: 'Lourival', 
// sobrenome: 'Lourival',  falaNome: [Function: falaNome],
// qualquerCoisa: 'texto qualquer' }
