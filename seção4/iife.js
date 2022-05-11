// Funções imediatas (IIFE) -> Immediately invoked function expression
// É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. 
// A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.
// A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.

(function () {
   const nome = 'Serjula'
   console.log(nome); // Serjula
})();

// // A variável 'nome' não é acessível fora do escopo da expressão. Gerará o erro "Uncaught ReferenceError: nome is not defined". Assim, podemos defini-la no escopa global.
const nome = 'Mariete'
console.log(nome); // Mariete

(function (idade, peso, altura) {

   const sobrenome = 'Medeiros'
   function criaNome(nome) {
      return nome + ' ' + sobrenome
   }

   function falaNome() {
      console.log(criaNome('Martha'));
   }

   falaNome();
   console.log(`${idade} anos, ${peso} kg, ${altura} m`);

})(56, 70, 1.76);

const resultado = (function () {
   const nome = 'Marcos';
   return nome;
})();

console.log(resultado); // Marcos
