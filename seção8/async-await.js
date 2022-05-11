function esperaAi(msg, tempo) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if(typeof msg !== 'string') {
            reject('Caí no erro'); 
            return;
         }

      resolve(msg.toUpperCase() + ' - ativando a promise');
      return;
      }, tempo);
   });
}

function rand(min=0.5, max=1) {
   // Faz com que o argumento seja dado em segundos ao invés de milissegundos
   min *= 1000;
   max *= 1000;
   return Math.floor(Math.random() * (max - min) + min);
}

// esperaAi('Fase 1', rand())
//    .then(valor => {
//       console.log(valor); // FASE 1 - ativando a promise
//       return esperaAi('Fase 2', rand());
//    })
//    .then(fase => {
//       console.log(fase); // FASE 2 - ativando a promise
//       return esperaAi('Fase 3', rand())
//    })
//    .then(fase => {
//       console.log(fase); // FASE 3 - ativando a promise
//       return fase;
//    })
//    .then(fase => {
//       console.log('Terminamos na', fase); // Terminamos na FASE 3 - ativando a promise
//    })
//    .catch(e => console.log(e));

async function executa() {
   const fase1 = await esperaAi('Fase 1', rand());
   console.log('executa1 ->', fase1);

   const fase2 = await esperaAi('Fase 2', rand());
   console.log('executa1 ->', fase2);

   const fase3 = await esperaAi('Fase 3', rand());
   console.log('executa1 ->', fase3);

   console.log('executa1 -> Terminamos na', fase3);
}

executa();
// executa1 -> FASE 1 - ativando a promise
// executa1 -> FASE 2 - ativando a promise
// executa1 -> FASE 3 - ativando a promise
// executa1 -> Terminamos na FASE 3 - ativando a promise

async function executa2() {
   try {
      const fase1 = await esperaAi('Fase 1', rand(3, 3.5));
      console.log('executa2 ->', fase1);
   
      const fase2 = await esperaAi('Fase 2', rand(1, 2));
      console.log('executa2 ->', fase2);
   
      const fase3 = await esperaAi(3, rand(1, 2));
      console.log('executa2 ->', fase3);
   
      console.log('executa2 -> Terminamos na', fase3);
   } catch(e) {
      console.log('executa2 ->', e);
   }
}

executa2();
// executa2 -> FASE 1 - ativando a promise
// executa2 -> FASE 2 - ativando a promise
// executa2 -> Caí no erro

async function executa3() {
   const fase1 = esperaAi('Fase 1', rand());
   console.log('executa3 ->', fase1);

   setTimeout(function() {
      console.log('Essa promise estava pendente ->', fase1);
   }, 1000);

   const fase2 = await esperaAi('Fase 2', rand());
   console.log('executa3 ->', fase2);

   const fase3 = await esperaAi('Fase 3', rand());
   console.log('executa3 ->', fase3);

   console.log('executa3 -> Terminamos na', fase3);
}

executa3();
// executa3 -> Promise { <pending> }
// executa3 -> FASE 2 - ativando a promise
// Essa promise estava pendente -> Promise { 'FASE 1 - ativando a promise' }
// executa3 -> FASE 3 - ativando a promise
// executa3 -> Terminamos na FASE 3 - ativando a promise

// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada