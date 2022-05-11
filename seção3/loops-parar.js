const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {

   // O 'continue' faz com que todo o código abaixo não seja lido caso a condição seja satisfeita, e o laço prossegue em cima
   if (numero === 3) {
      console.log('Pulei o 3');
      continue;
   }

   // O 'break' encerra o código caso a condição seja satisfeita.
   if (numero === 7) {
      console.log('7 detectado. Código encerrado.');
      break;
   }
   console.log(numero); // 1 / 2 / 4 / 5 / 6
}

console.log('#########');

for (let numero in numeros) {

   if (numeros[numero] === 2 || numeros[numero] === 5) {
      continue;
   }

   if (numeros[numero] === 8) {
      console.log('8 detectado. Código encerrado.');
      break;
   }
   console.log(numeros[numero]); // 1 / 3 / 4 / 6 / 7
}

console.log('#########');

let numero = 0;
while (numero < numeros.length) {
   
   if (numeros[numero] % 2 !== 0) {
      numero++;
      continue;
   }

   if (numeros[numero] === 8) {
      console.log('8 detectado. Código encerrado.');
      break;
   }

   console.log(numeros[numero]); // 1 / 2 / 3 / 5
   numero++;
}

console.log('#########');

numero = 0;
do {
   if (numeros[numero] % 2 === 0) {
      numero++;
      continue;
   }

   if (numeros[numero] % 9 === 0) {
      console.log('Número divisível por 9 detectado. Finalizar.');
      break;
   }

   console.log(numeros[numero]);
   numero++;

} while (numero < numeros.length);
