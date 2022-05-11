// Caso a seja maior do que b, retorna a. Caso contrário, retorna b.
function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

// Caso a seja menor do que b, retorna a. Caso contrário, retorna b.
function menorNumero(a, b) {
    return a < b ? a : b;
};

console.log(maiorNumero(7, 4)); // 7
console.log(menorNumero(7, 4)); // 4
