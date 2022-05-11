// Delcaração de função (function hoisting) - posso chamar a função antes da declaração dela
falaOi(); // Oi!
function falaOi() {
   console.log('Oi!');
}

// First-class object (objetos de primeira classe) - podemos tratas as funções com um dado
// Function expression

// 1) Função anônima
const souUmDado = function() {
   console.log('Sou um dado.');
};
souUmDado(); // Sou um dado.

// 2) Função com nome
const souUmDado2 = function nomeDafuncao() {
   console.log('Sou um dado também.');
};
souUmDado2(); // Sou um dado também.

function executaFuncao(funcao) {
   console.log('Vou executar sua função abaixo');
   funcao();
}
executaFuncao(souUmDado); // Vou executar sua função abaixo /Sou um dado.

// Arrow function
// Function expression mais curta
const funcaoArrow = () => {
   console.log('Sou uma arrow function');
};
funcaoArrow(); // Sou uma arrow function

// Dentro de um objeto (maneira clássica)
const obj = {
   falar: function() {
      console.log('Estou falando...');
   }
};
obj.falar(); // Estou falando...

// Dentro de um objeto (maneira moderna)
const obj2 = {
   dizer() {
      console.log('Estou dizendo...');
   }
};
obj2.dizer(); // Estou dizendo...
