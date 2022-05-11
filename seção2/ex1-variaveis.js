let varA = 'A';
let varB = 'B';
let varC = 'C';
let varT;

console.log(varA, varB, varC); // A B C

varT = varA; // varT = A, varA = A, varB = B, varC = C
varA = varC; // varT = A, varA = C, varB = B, varC = C
varC = varB; // varT = A, varA = C, varB = B, varC = B
varB = varT; // varT = A, varA = C, varB = A, varC = B

console.log(varA, varB, varC); // C A B

// Maneira mais moderna e simples

let varX = 'X';
let varY = 'Y';
let varZ = 'Z';

console.log('======')
console.log(varX, varY, varZ);

[varX, varY, varZ] = [varZ, varX, varY]

console.log(varX, varY, varZ);
