// A função inicia() cria uma varíavel chamada 'nome' e depois defina uma função chamada mostraNome().
// mostraNome() é uma função aninhada (um closure) - ela é definida dentro da função inicia()
// Diferentemente de inicia(), mostraNome() não tem variáveis locais próprias, e ao invés disso, reusa a variável 'nome' declarada na função pai.
function inicia() {
   const nome = 'Leone'
   function mostraNome() {
      console.log(nome);
   }
   mostraNome();
}
inicia();

// Se você rodar este código o mesmo terá exatamente o mesmo efeito que o inicia() do exemplo anterior: a palavra "Mozilla" será mostrada.A diferença é que a função interna do displayName() foi retornada da função externa antes de ser executada.
// Normalmente variáveis locais a uma função apenas existem pela duração da execução da mesma. Uma vez que makeFunc() terminou de executar, é razoável esperar que a variável 'name' não será mais necessária. Dado que o código ainda funciona como o esperado, este não é o caso.
// A solução para tal problema é que a função 'myFunc' tornou-se uma closure. Uma closure (fechamento) trata-se de um tipo especial de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis que estavam no escopo naquele momento em que a função foi criada. Neste caso, myFunc é a closure que incorpora tanto a função 'displayName' quanto a palavra 'Mozilla' que existia quando a closure foi criada.
function makeFunc() {
   var name = "Mozilla";
   function displayName() {
      console.log(name);
   }
   return displayName;
}

var myFunc = makeFunc();
console.dir(myFunc); // [Function: displayName]
myFunc();

function retornaFuncao(nome) {
   return function () {
      return nome;
   };
}
const funcao1 = retornaFuncao('Zeca');
const funcao2 = retornaFuncao('Jeiza');

console.dir(funcao1); // [Function (anonymous)]
console.dir(funcao2); // [Function (anonymous)]
console.dir(funcao1()); // 'Zeca'
console.dir(funcao2()); // 'Jeiza'

// Na essência o makeAdder trata-se de uma função fábrica - irá construir outras funções que podem adicionar um determinado valor específico a seu argumento. No exemplo acima usamos a fábrica de funções para criar duas novas funções - uma que adiciona 5 ao argumento, e outra que adiciona 10.
function makeAdder(x) {
   return function (y) {
      return x + y;
   };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.dir(add5(2));  // 7
console.dir(add10(2)); // 12
