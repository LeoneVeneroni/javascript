//Confere a condição primeiro, e depois executa o script
let i = 0;
while (i < 3) {
    console.log("i =", i);
    i++;
} // i = 0 / i = 1 / i = 2

//Executa o script primeiro, e depois verifica a condição
let x = 0;
do {
    console.log("x =", x);
    x++;
} while (x < 3); // x = 0 / x = 1 / x = 2

function aleatorio(min, max) {
   const dado = Math.random() * (max - min) + min;
   return Math.floor(dado);
}

const min = 1;
const max = 10;
let rand = 11;

while (rand == 10) {
   rand = aleatorio(min, max);
   console.log(rand);
} // Não retorna nada. 

console.log('############');

do {
   rand = aleatorio(min, max);
   console.log(rand);
} while (rand == 10); // Retorna alguma coisa e depois para.
