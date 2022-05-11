function esperaAi(msg, tempo) {
   setTimeout(()=> {
      console.log(msg);
   }, tempo)
}

// o tempo está milissegundos (1000 ms = 1 s)
esperaAi('Frase 1', 500); // Frase 1
esperaAi('Frase 2', 700); // Frase 2
esperaAi('Frase 3', 900); // Frase 3
esperaAi('============', 950);

function rand(min, max) {
   // Faz com que o argumento seja dado em segundos ao invés de milissegundos
   min *= 1000;
   max *= 1000;
   return Math.floor(Math.random() * (max - min) + min);
}

// a ordem que aparece as frases é aleatória (entre 1 e 3 segundos)
esperaAi('Frase A', rand(1, 3)); // Frase A
esperaAi('Frase B', rand(1, 3)); // Frase B
esperaAi('Frase C', rand(1, 3)); // Frase C
esperaAi('============', 3001);

// função de callback (cb)
function frasesOrdenadas(msg, tempo, cb) {
   setTimeout(()=> {
      console.log(msg);
      if(cb) cb();
   }, tempo);
}

// Os textos aparecem na ordem: Texto X, Texto Y, Texto Z
frasesOrdenadas('Texto X', rand(0.4, 0.5), function() {
   frasesOrdenadas('Texto Y', rand(0.4, 0.5), function() {
      frasesOrdenadas('Texto Z', rand(0.4, 0.5));
   }); 
}); 

// se tudo der certo, o 'resolve' é lido, caso dê erro, o 'reject' vai ser lido
function promessa(msg, tempo) {
   return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject('Valor inválido');
      setTimeout(()=> {
         resolve(msg);
      }, tempo)
   });
}

// O then está associado ao 'resolve', e o catch ao 'reject'
promessa('Conectando com o banco de dados', rand(2, 3))
   .then(resposta => {
      console.log(resposta);
      return promessa('Buscando dados da base', rand(1, 2));
   })
   .then(resposta => {
      console.log(resposta);
      return promessa('Tratando os dados da base', rand(1, 2));
   })
   .then(resposta => {
      console.log(resposta);
   })
   .then(() => {
      return promessa(345, rand(1, 2));
   })
   .then(() => {
      console.log('Exibindo os dados na tela');
   })
   .catch(e => {
      console.log('ERRO:', e);
   });

