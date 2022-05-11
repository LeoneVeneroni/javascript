// Divisível por 3 -> Fizz
// Divisível por 5 -> Buzz
// Divisível por 3 e 5 -> FizzBuzz
// Não divisível por 3 ou 5 -> valor de entrada
// Não é um número -> 'Não é um número'

function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 !== 0) {
        return 'Fizz';
    } else if (entrada % 3 !== 0 && entrada % 5 === 0) {
        return 'Buzz';
    } else if (entrada % 3 === 0 && entrada % 5 === 0) {
        return 'FizzBuzz';
    } else if (entrada % 3 !== 0 && entrada % 5 !== 0 && entrada % 1 === 0) {
        return entrada;
    } 
    return 'Não é um número';
}

for (let i = 0; i <= 20; i++) {
    console.log(i, fizzBuzz(i));   
}