function Produto(nome, preço) {
   this.nome = nome;
   this.preço = preço;
}

Produto.prototype.desconto = function(percentual) {
   this.preço = this.preço - (this.preço * (percentual/100));
};

Produto.prototype.aumento = function(percentual) {
   this.preço = this.preço + (this.preço * (percentual/100));
};

const p1 = new Produto('bermuda', 100);
console.log(p1); // Produto { nome: 'bermuda', 'preço': 25 }

p1.aumento(30);
console.log(p1); // Produto { nome: 'bermuda', 'preço': 130 }

p1.desconto(50);
console.log(p1); // Produto { nome: 'bermuda', 'preço': 65 }

// Literal
const p2 = {
   nome: 'caneca',
   preço: 15
};

// Faz com que p2 herde os métodos de Produto.prototype
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(60);
console.log(p2); // Produto { nome: 'caneca', 'preço': 24 }

// Cria um objeto vazio (sem chaves)
const p3 = Object.create(Object.prototype); // { }
const p4 = Object.create(Produto.prototype); // Produto { }

p3.preço = 40;
console.log(p3); // { 'preço': 40 }

p4.nome = 'short';
p4.preço = 45;
console.log(p4); // Produto { nome: 'short', 'preço': 45 }

const p5 = Object.create(Produto.prototype, {
   preço: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 100
   },
   tamanho: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 40
   },
});
console.log(p5); // Produto { 'preço': 100, tamanho: 40 }
p5.desconto(20);
console.log(p5); // Produto { 'preço': 80, tamanho: 40 }