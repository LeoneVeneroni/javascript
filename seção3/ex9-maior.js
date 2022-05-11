// Funções que retornam o maior valor

function retornaMaior0(x, y) {
   if (x >= y){
      return x;
   } else {
      return y;
   }
}

function retornaMaior1(x, y) {
   if (x >= y){
      return x;
   } 
   return y;
}

function retornaMaior2(x, y) {
   if (x >= y) return x;
   return y;
}

function retornaMaior3(x, y) {
   return x > y ? x : y;
}

const retornaMaior4 = (x, y) => {
   return x > y ? x : y;
}

const retornaMaior5 = (x, y) => x > y ? x : y;

function retornaMaior6(x, y) {
   return Math.max(x, y);
}

const maior = retornaMaior6(4, 6)
console.log(maior);
