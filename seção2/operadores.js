let numero = 5;

// Resto da divisão
console.log(numero % 3); // 2

// numero + 1 (mas não mostra ela somada - pós-incremento)
console.log(numero++); // 5

// Mostra a variável já somada no comando anterior
console.log(numero); // 6

// numero + 1 (mostra ela já somada - pré-incremento)
console.log(++numero); // 7

// numero - 1 (mas não mostra ela subtraída - pós-decremento)
console.log(numero--); // 7

// Mostra a variável já subtraída no comando anterior
console.log(numero); // 6

// numero - 1 (mostra ela já subtraída - pré-decremento)
console.log(--numero); // 5

// numero = numero + numero
numero += numero;
console.log(numero); // 10

// numero = numero / numero
numero /= numero; 
console.log(numero); // 1

numero = 6;
// numero = numero * numero
numero *= numero;
console.log(numero); // 36

// numero = numero - numero
numero -= numero;
console.log(numero); // 0
 
const passo = 2;
let contador = 0;

contador += passo; // contador = contador + passo;
console.log(contador); // 2
contador += passo;
console.log(contador); // 4
