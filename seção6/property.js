// defineProperty - para uma chave
// defineProperties - para várias chaves
function Produto(nome, preço, estoque) {
   this.nome = nome;
   this.preço = preço;
   //this.estoque = estoque;

   // 'this' faz referência ao objeto criado (no caso, p1)
   Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave 'estoque'
      value: estoque, // mostra o valor definido no objeto p1
      writable: true, // false - não permite alteração do valor da propriedade 'estoque' (esse é o padrão). true - permite alteração do valor da propriedade 'estoque'
      configurable: true // true - configurável, isto é, posso criar outro Object.defineProperty e apagar ou alterar as configurações da propriedade. false - não permite criar outro Object.defineProperty, e nem apagar ou alterar uma variável
   });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 45;
console.log(p1); // Produto { nome: 'Camiseta', 'preço': 20, estoque: 45 }

// Mostra as chaves
console.log(Object.keys(p1)); // ['nome', 'preço', 'estoque']

function Produto2(nome, preço, estoque) {

   Object.defineProperties(this, {
      nome: {
         enumerable: true, 
         value: nome, // 'nome' é o nome do parâmetro
         writable: true,
         configurable: true
      }, 
      preço: {
         enumerable: true,
         value: preço, // 'preço' é o nome do parâmetro
         writable: true,
         configurable: true
      },
      estoque: {
         enumerable: true,
         value: estoque,
         writable: true,
         configurable: true
      }
   });
}

const p2 = new Produto2('Bermuda', 59.90, 40);
console.log(p2); // Produto2 { nome: 'Bermuda', 'preço': 59.9, estoque: 40 }


