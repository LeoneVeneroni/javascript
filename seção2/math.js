let num1 = 9.51;

console.log(Math.floor(num1)); // 9
console.log(Math.ceil(num1)); // 10
console.log(Math.round(num1)); // 10

let num2 = 9.49;

console.log(Math.round(num2)); // 9

console.log(Math.max(1,4,-13,12,6,-3,-6)); // 12
console.log(Math.min(1,4,-13,12,6,-3,-6)); // -13

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); 
console.log(aleatorio);

console.log(Math.sqrt(9)); // 3
console.log(Math.pow(4,2)); // 16
console.log(Math.PI); // 3.141592653589793

let seno = Math.sin(Math.PI / 6);
console.log(seno); // 0.49999999999999994
seno = Number(seno.toFixed(1)); 
console.log(seno); // 0.5

console.log(Math.sign(-7)); // -1

// No JavaScript essa operação não dá erro
console.log(100/0); // infinity
console.log(!!(100/0)); // true
