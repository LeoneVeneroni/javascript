function Produto(nome, preço, estoque) {
   this.nome = nome;
   this.preço = preço;

   let estoquePrivado = estoque;
   Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      configurable: true, // configurável
      get: function() {
         return estoquePrivado; 
      },
      set: function(valor) {
         if (typeof valor !== 'number') {
            console.log('Valor inválido');
            return;
         }
         estoquePrivado = valor;
      }
   });
}

const p1 = new Produto('chinelo', 12.40, 5);
console.log(p1); // Produto { nome: 'chinelo', 'preço': 12.4, estoque: [Getter/Setter] }
// Como não é um number, não vai ser alterado
p1.estoque = 'O valor que eu dei'; // Valor inválido
console.log(p1.estoque); // 5
p1.estoque = 34;
console.log(p1.estoque); // 34
