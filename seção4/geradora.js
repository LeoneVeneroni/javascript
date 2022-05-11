function* geradora1() {
   // Código qualquer
   yield 'Valor 1';
   // Código qualquer
   yield 'Valor 2';
   // Código qualquer
   yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1); // Object [Generator] {}

// Se coloco o .next(), ele vai mostrar o primeiro yield, depois o segundo, e assim por diante. O 'done' indicada se o código acabou ou não. Se o script tem três yields, só vai dar com true se chamarmos quatro vezes.
console.log(g1.next()); // { value: 'Valor 1', done: false }
console.log(g1.next().value); // Valor 2
console.log(g1.next().value); // Valor 3
console.log(g1.next()); // { value: undefined, done: true }

// for (let valor of g1) {
//    console.log(valor);
// }

function* geradora2() {
   let i = 0;

   while(true) {
      yield i;
      i++;
   }
}

const g2 = geradora2();
console.log(g2.next().value); // 0
console.log(g2.next().value); // 1 
console.log(g2.next().value); // 2

console.log('=====');

function* geradora3() {
   yield 0;
   yield 1;
   yield 2;
}

function* geradora4() {
   yield* geradora3();
   yield 3;
   yield 4;
   yield 5;
}

const g4 = geradora4();

console.log('=====');

for (const valor of g4) {
   console.log(valor);
} // 0 / 1 / 2 / 3 / 4 / 5 

console.log('=====');

function* geradora5() {
   yield function () {
      console.log('Vim do y1');
   };

   // seu eu colocar o 'return', o segundo 'yield' não será executado
   /* return function() {
      console.log('Vim do y2');
   };
   */

   yield function() {
      console.log('Vim do y2');
   };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1(); // Vim do y1
func2(); // Vim do y2
