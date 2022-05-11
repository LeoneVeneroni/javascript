// Produto -> aumento, desconto
// camiseta = cor, caneca = material
function Produto(tipo, preço) {
   this.tipo = tipo;
   this.preço = preço;
}
Produto.prototype.aumento = function(quantia) {
   this.preço += quantia;
};
Produto.prototype.desconto = function(quantia) {
   this.preço -= quantia;
};

function Camiseta(tipo, preço, cor) {
   Produto.call(this, tipo, preço);
   this.cor = cor;
}

// Camiseta.prototype vai herdar os métodos de Produto.prototype
Camiseta.prototype = Object.create(Produto.prototype);

const camiseta = new Camiseta('regata', 20, 'verde');
console.log(camiseta); // Camiseta { tipo: 'regata', 'preço': 20 }
const compra = new Produto('chinelo', 10.5)

camiseta.aumento(10); // aumento o preço em 10 unidades
console.log(camiseta); // Produto { tipo: 'regata', 'preço': 11 }
console.log(compra); // Produto { tipo: 'chinelo', 'preço': 10.5 }

// Faz com que apareça a função construtora Camiseta. Também é aplicado nos console.log(camiseta) definidos anteriormente
Camiseta.prototype.constructor = Camiseta;
console.log(camiseta); // Camiseta { tipo: 'regata', 'preço': 30, cor: 'verde' }

// Vai ser executado primeiro que Produto.prototype.aumento
Camiseta.prototype.aumento = function(percentual) {
   this.preço = this.preço + (this.preço * (percentual/100));
}

camiseta.aumento(10); // aumenta o preço em 10%
console.log(camiseta); // Camiseta { tipo: 'regata', 'preço': 36, cor: 'verde' }

function Caneca(tipo, preço, quantidade) {
   Produto.call(this, tipo, preço);
   this.quantidade = quantidade;

   Object.defineProperty(this, 'pedidos', {
      enumerable: true,
      configurable: false,
      get: function() {
         return pedidos;
      },
      set: function(valor) {
         if (typeof valor !== 'number') return;
         pedidos = valor;
      }
   });
}

Caneca.prototype = Object.create(Produto.prototype);

const caneca = new Caneca('plástico', 40, 5);

Caneca.prototype.constructor = Caneca;
console.log(caneca); // Caneca { tipo: 'plástico', 'preço': 40, quantidade: 5, pedidos: [Getter/Setter] }

caneca.desconto(20); // desconto de 20 unidades

console.log(caneca); // Caneca { tipo: 'plástico', 'preço': 20, quantidade: 5, pedidos: [Getter/Setter] }

Caneca.prototype.desconto = function(percentual) {
   this.preço = this.preço - (this.preço * percentual/100);
}

caneca.desconto(20); // desconto de 20%

// Ver no console do navegador
caneca.pedidos = 12;

console.log(caneca); // Caneca { tipo: 'plástico', 'preço': 16, quantidade: 5, pedidos: [Getter/Setter] }