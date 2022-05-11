// new Object -> Object.prototype
const objA = {
   chaveA: 'A'
   // __proto__: Object.prototype 
   // Isso ocorre por baixo dos panos ao definir o objeto (aparece só [[Prototype]]: Object). É o último da cadeia (não aparece outro __proto__ no fim).
};

console.log(objA.__proto__ === Object.prototype); // true

const objB = {
   chaveB: 'B'
   // Como fazer a associação comentada na linha de baixo?
   // __proto__: objA
};

// Podemos fazer a associação do seguinte modo:
Object.setPrototypeOf(objB, objA);

// Quando escrevermos 'objB' no console, vai mostrar a chaveB sendo pai da chaveA.
console.log(objB.chaveA); // A

const objC = new Object();
objC.chaveC = 'C';

// A chaveC é pai da chaveB, que por sua vez é pai da chaveA
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB); // B
console.log(objC.chaveA); // A

// A chaveC é pai da chaveA. Sem relação com a chaveB
Object.setPrototypeOf(objC, objA);
console.log(objC.chaveB); // undefined
console.log(objC.chaveA); // A
