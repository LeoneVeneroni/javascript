function criaPessoa(nome, sobrenome) {
   return { nome, sobrenome };
}

// Os dois comandos abaixo fazem a mesma coisa, a diferença é que p1 se vale de uma função que faz a declaração que é feita em p2.
const p1 = criaPessoa('Luiz', 'Felipe');
const p2 = {
   nome: 'Maria',
   sobrenome: 'Joana'
};

console.log(p1); // { nome: 'Luiz', sobrenome: 'Felipe' }
console.log(p2); // { nome: 'Maria', sobrenome: 'Joana' }

function falaFrase(comeco) {
   function falaResto(resto) {
      return comeco + ", " + resto;
   }
   return falaResto;
}

const olaMundo1 = falaFrase('Olá')
console.log(olaMundo1); // [Function: falaResto]
const olaMundo2 = olaMundo1('mundo!')
console.log(olaMundo2); // Olá, mundo!

function criaMultiplicador(multiplicador) {
   return function(n) {
      return multiplicador * n;
   };
}

const dobro = criaMultiplicador(2);
const triplo = criaMultiplicador(3);
const quadruplo = criaMultiplicador(4);

console.log(dobro); // [Function (anonymous)]
console.log(dobro(3)); // 6
console.log(triplo(3)); // 9
console.log(quadruplo(3)); // 12
