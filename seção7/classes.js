// Classe
class Pessoa {
   constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
   }

   falar() {
      console.log(`${this.nome} gosta de falar`);
   }

   comer() {
      console.log(`${this.nome} gosta de comer`);
   }

   beber() {
      console.log(`${this.nome} gosta de beber`);
   }
}

// Função construtora usando prototype
function Pessoa2(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
   console.log(`${this.nome} gosta de falar`);
}
Pessoa2.prototype.comer = function() {
   console.log(`${this.nome} gosta de comer`);
}
Pessoa2.prototype.beber = function() {
   console.log(`${this.nome} gosta de beber`);
}

// Função construtora com os métodos definidos na própria função (não recomendado)
function Pessoa3(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;

   this.falar = function() {
      console.log(`${this.nome} gosta de falar`);
   };

   this.comer = function() {
      console.log(`${this.nome} gosta de comer`);
   };

   this.beber = function() {
      console.log(`${this.nome} gosta de beber`);
   };
}

// Função fábrica
function pessoa4(nome, sobrenome) {
   return {
      nome,
      sobrenome,

      falar() {
         return `${nome} gosta de falar`
      },

      comer() {
         return `${nome} gosta de comer`
      },

      beber() {
         return `${nome} gosta de beber`
      }
   };
}

const p1a = new Pessoa('Luiza', 'Dalmagro');
const p1b = new Pessoa('Adalberto', 'Veneroni');

const p2 = new Pessoa2('Sueli', 'Melo');

const p3 = new Pessoa3('Richard', 'Silva');

const p4 = pessoa4('Leone', 'Santana');

console.log(p1a); 
// Pessoa { nome: 'Luiza', sobrenome: 'Dalmagro' }
   // nome: "Luiza"
   // sobrenome: "Dalmagro"
   // [[Prototype]]: Object
      // beber: f beber()
      // comer: f comer()
      // constructor: class Pessoa
      // falar: f falar()
      // [[Prototype]]: Object

console.log(p1b);
// Pessoa { nome: 'Adalberto', sobrenome: 'Veneroni' }
   // nome: "Adalberto"
   // sobrenome: "Veneroni"

console.log(p2);
// Pessoa2 { nome: 'Sueli', sobrenome: 'Melo' }
   // nome: "Sueli"
   // sobrenome: "Melo"
   // [[Prototype]]: Object
      // beber: f ()
      // comer: f ()
      // falar: f ()
      // constructor: f Pessoa2(nome, sobrenome)
      // [[Prototype]]: Object

console.log(p3);
// Pessoa { nome: 'Richard', sobrenome: 'Silva', falar: f, comer: f, beber: f }
   // beber: f ()
   // comer: f ()
   // falar: f ()
   // nome: "Richard"
   // sobrenome: "Silva"
   // [[Prototype]]: Object

console.log(p4);
// { nome: 'Richard', sobrenome: 'Silva', falar: f, comer: f, beber: f }
   // beber: f beber()
   // comer: f comer()
   // falar: f falar()
   // nome: "Leone"
   // sobrenome: "Santana"
   // [[Prototype]]: Object