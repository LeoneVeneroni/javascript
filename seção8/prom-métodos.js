function esperaAi(msg, tempo) {
   return new Promise((resolve, reject) => {
      // Se algum erro, vai aparecer 'false' e vai encerrar o código. Não vai aparecer assim a mensagem de erro
      if(typeof msg !== 'string') {
         reject(false); 
         return;
      }

      setTimeout(() => {
         resolve(msg.toUpperCase() + ' - ativando a promise')
      }, tempo);
   });
}

const promises1 = [
   'Primeiro valor',
   esperaAi('Promise 1', 200),
   esperaAi('Promise 2', 500),
   esperaAi('Promise 3', 100),
   'Outro valor'
];

const promises2 = [
   'Primeiro valor',
   esperaAi('Promise 1', 200),
   esperaAi('Promise 2', 500),
   esperaAi('Promise 3', 100),
   esperaAi(566, 1000),
   'Outro valor'
];

const promises3 = [
   esperaAi('Promise 1', 200),
   esperaAi('Promise 2', 500),
   esperaAi('Promise 3', 100),
   'Outro valor'
];

const promises4 = [
   esperaAi('Promise 1', 200),
   esperaAi('Promise 2', 500),
   esperaAi('Promise 3', 100),
];

// Promise.all
// retorna na ordem dos arrays, independentemente do tempo colocado
Promise.all(promises1)
   .then(function(valor) {
      console.log(valor);
   })
   .catch(function(erro) {
      console.log(erro);
   }); 
// [ 'Primeiro valor', 'PROMISE 1 - ativando a promise', 'PROMISE 2 - ativando a promise', 'PROMISE 3 - ativando a promise', 'Outro valor' ]

Promise.all(promises2)
   .then(function(valor) {
      console.log(valor);
   })
   .catch(function(erro) {
      console.log(erro);
   }); // false

// Promise.race
// retorna apenas um elemento do array, seguindo a ordem:
// 1) elementos sem marcação de tempo
//    a) menor valor de posição ([0] > [1] > [2] > etc.)
// 2) elementos com marcação de tempo
//    a) menor tempo indicado
//    b) menor valor de posição ([0] > [1] > [2] > etc.)
Promise.race(promises1)
   .then(function(valor) {
      console.log(valor);
   })
   .catch(function(erro) {
      console.log(erro);
   }); // Primeiro valor

Promise.race(promises3)
   .then(function(valor) {
      console.log(valor);
   })
   .catch(function(erro) {
      console.log(erro);
   }); // Outro valor

Promise.race(promises4)
   .then(function(valor) {
      console.log(valor);
   })
   .catch(function(erro) {
      console.log(erro);
   }); // PROMISE 3 - ativando a promise

// Promise.resolve - retorna uma promessa já resolvida
function baixaPagina1() {
   const emCache = true;

   if(emCache) {
      return Promise.resolve('Página em cache');
   } else {
      return esperaAi('Baixei a página', 2000);
   }
}

baixaPagina1()
   .then(dadosPagina => {
      console.log('baixaPagina1 ->', dadosPagina);
   })
   .catch(e => console.log('Erro1 ->', e));
// baixaPagina1 -> Página em cache

function baixaPagina2() {
   const emCache = false;

   if(emCache) {
      return Promise.resolve('Página em cache');
   } else {
      return esperaAi('Baixei a página', 2000);
   }
}

baixaPagina2()
   .then(dadosPagina => {
      console.log('baixaPagina2 ->', dadosPagina);
   })
   .catch(e => console.log('Erro2 ->', e)); 
// baixaPagina2 -> BAIXEI A PÁGINA - ativando a promise

// Promisse.reject - retorna uma promessa já rejeitada. Faz o inverso da promise.resolve
function baixaPagina3() {
   const emCache = true;

   if(emCache) {
      return Promise.reject('Página em cache');
   } else {
      return esperaAi('Baixei a página', 2000);
   }
}

baixaPagina3()
   .then(dadosPagina => {
      console.log('baixaPagina3 ->', dadosPagina);
   })
   .catch(e => console.log('Erro3 ->', e));
// Erro3 -> Página em cache 

function baixaPagina4() {
   const emCache = false;

   if(emCache) {
      return Promise.reject('Página em cache');
   } else {
      return esperaAi('Baixei a página', 2000);
   }
}

baixaPagina4()
   .then(dadosPagina => {
      console.log('baixaPagina4 ->', dadosPagina);
   })
   .catch(e => console.log('Erro4 ->', e));
// baixaPagina4 -> BAIXEI A PÁGINA - ativando a promise
