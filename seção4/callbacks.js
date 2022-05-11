// Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
    min;
  return Math.floor(num);
}

// O parâmetro não precisa se chamar callback, mas ele tem que ter o mesmo nome da função.
function f1(caubacko) {
  setTimeout(function () {
    console.log('f1');
    // se existir uma função de callback, execute-a
    if (caubacko) caubacko();
  }, rand());
}

function f2(callfront) {
  setTimeout(function () {
    console.log('f2');
    if (callfront) callfront();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

// f1(function () {
//   f2(function() {
//     f3(function() {
//       console.log('Olá, mundo!');
//     });
//   });
// });

// Faz o mesmo do que o script comentado acima
f1(exemplo);

function exemplo() {
  f2(leone);
}

function leone() {
  f3(final);
}

function final() {
  console.log('Olá mundo!');
}
