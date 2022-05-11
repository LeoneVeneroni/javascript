// Criando uma função sem parâmetros
// Em outras linguagens, o que foi feito acima daria erro. Para onde foi a string 'Valor'?
function funcao() {
   console.log('Testando...');
}
funcao('Valor'); // Testando...

// A variável 'arguments' contém todos os argumentos presentes na chamada da função sob a forma de um objeto
// Não funciona com arrow function
function funcao2() {
   console.log(arguments);
}
funcao2('Valor', 13, 4.5, 'Leone') // [Arguments] { '0': 'Valor', '1': 13, '2': 4.5, '3': 'Leone' }

function funcao3() {
   console.log(arguments[2]);
}
funcao3('Valor', 13, 4.5, 'Leone') // 4.5

//Os parâmetros da função são associados com os argumentos escolhidos (em ordem)
function funcao4(a, b, c, d, e) {
   console.log(a, b, c, d, e);
}
funcao4(1, 2, 3); // 1 2 3 undefined undefined

// Soma os argumentos da função
function soma() {
   let total = 0;
   for (const argumento of arguments) {
      total += argumento // total =  total + argumento
   }

   console.log(total);
}
soma(1, 2, 3, 4, 5); // 15

function soma2(a, b, c) {
   let total = 0;
   for (const argumento of arguments) {
      total += argumento // total =  total + argumento
   }

   console.log(total, a, b, c);
}
soma2(1, 2, 3, 4, 5); // 15 1 2 3

function padrao(a, b = 2, c = 4) {
   console.log(a + b + c);
}
// a = 7, b = 2, c= 4
padrao(7) // 13

// a = 1, b = 5, c= 4
padrao(1, 5) // 10

// a = 8, b = 2, c = 6
padrao(8, undefined, 6) // 16

// a = 8, b = 0, c = 6
padrao(8, null, 6) // 14

// Desestruturação - objeto
function desustruturacao({ nome, sobrenome, idade}) {
   console.log(nome, sobrenome, idade);
}
meuObjeto = {nome: 'Lourival', sobrenome: 'Mendes', idade: 60};
desustruturacao(meuObjeto); // Lourival Mendes 60

// Desestruturação - array
function desustruturacao2([valor1, valor2, valor3]) {
   console.log(valor1, valor2, valor3);
}
meuArray = ['Marilene', 'Alves', 80];
desustruturacao2(meuArray); // Marilene Alves 80

function conta0(operador, acumulador, numeros) {
   console.log(operador, acumulador, numeros);
}
conta0('+', 0, [20, 30, 40, 50]) // + 0 [ 20, 30, 40, 50 ]

// O operador resto (...) faz com que não precisemos colocar os colchetes
function conta1(operador, acumulador, ...numeros) {
   console.log(operador, acumulador, numeros);
}
conta1('+', 0, 20, 30, 40, 50); // + 0 [ 20, 30, 40, 50 ]

// Arrow function
const conta2 = (operador, acumulador, ...numeros) => {
   console.log(operador, acumulador, numeros);
};
conta2('+', 0, 12, 24, 36, 48); // + 0 [ 12, 24, 36, 48 ]

function conta3(operador, acumulador, ...numeros) {
   for(let numero of numeros) {
      console.log(numero);
   }
}
conta3('+', 0, 20, 30, 40, 50); // 20 / 30 / 40 / 50

function conta4(operador, acumulador, ...numeros) {
   for(let numero of numeros) {
      if(operador === '+') acumulador += numero;
      if(operador === '-') acumulador -= numero;
      if(operador === '*') acumulador *= numero;
      if(operador === '/') acumulador /= numero;
   }
   console.log(acumulador);
}
conta4('+', 0, 20, 30, 40, 50); // 140
conta4('-', 200, 20, 30, 40, 50); // 60
conta4('*', 1, 2, 3, 4, 5); // 120
conta4('/', 600, 2, 3, 4, 5); // 5

// Não tem 'arguments' com arrow functions
const conta5 = function(operador, acumulador, ...numeros) {
   console.log(arguments);
};
conta5('+', 0, 20, 30, 40, 50); // [Arguments] { '0': '+', '1': 0, '2': 20, '3': 30, '4': 40, '5': 50 }

// Rest operator sempre funciona
const conta6 = (...numeros) => {
   console.log(numeros);
};
conta6('+', 0, 20, 30, 40, 50); // [ '+', 0, 20, 30, 40, 50 ]
