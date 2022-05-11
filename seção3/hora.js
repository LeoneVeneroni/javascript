// CTRL + ALT + M para parar o código
// setInterval e setTimeout são funções do JS, então estão disponíveis no nodejs e no browser

function mostraHora() {
   let data = new Date();

   return data.toLocaleTimeString('pt-br', {
      //hour12: true // 0:42:32 PM
      hour12: false // 12:42:32
   });
}

//A função setInterval faz o passar do tempo. 1000 está em em milissegundos

/*
function funcaoDoInterval() {
   console.log(mostraHora());
}
setInterval(funcaoDoInterval, 1000); 
*/

// O código abaixo faz o mesmo que os dois acimas comentados.
// setInterval(function () {
//    console.log(mostraHora());
// }, 1000);

// const tempo = setInterval(function () {
//    console.log(mostraHora());
// }, 1000);

const tempo = setInterval( () => {
   console.log(mostraHora());
}, 1000);

// setTimeout faz alguma ação no tempo indicado em milissegundos
setTimeout(function() {
   clearInterval(tempo); // interrompe o contador
}, 5000);

setTimeout(function() {
   console.log(`Hora de comer!`);
}, 5000);

