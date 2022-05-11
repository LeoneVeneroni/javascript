function soma(a, b) {
   if (typeof a !== 'number' || typeof b !== 'number') {
      throw ('Você precisa inserir números.');
      //throw new ReferenceError ('Você precisa inserir números.');
   }
   return a + b;
}

try {
   // É executado quando não há erros
   console.log(soma(3, 2));
   console.log(soma(3, "2"));
} catch(erro) {
   // É executado quando há erros
   console.log(erro); // Você precisa inserir números.
} finally {
   console.log('Finally: eu sempre sou executado, idependentemente se há erro ou não');
}

