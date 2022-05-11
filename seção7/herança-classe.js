class DispositoEletronico {
   constructor(nome, ano) {
      this.nome = nome;
      this.ano = ano;
      this.ligado = false;
   }

   ligar() {
      if(this.ligado) {
         console.log(this.nome + ' já ligado');
         return;
      }

      this.ligado = true;
   }

   desligar() {
      if(!this.ligado) {
         console.log(this.nome + ' já desligado');
         return;
      }

      this.ligado = false;
   }
}

// A classe Telefone herda todas propriedades da classe DispositoEletronico
class Telefone extends DispositoEletronico {}

const d1 = new DispositoEletronico('Tablet', 2012);
const t1 = new Telefone('Samsung', 1999);

d1.ligar();
console.log(d1); // DispositoEletronico { nome: 'Tablet', ano: 2012, ligado: true }

d1.desligar(); 
console.log(d1); // DispositoEletronico { nome: 'Tablet', ano: 2012, ligado: false }

t1.ligar();
console.log(t1); // Telefone { nome: 'Samsung', ano: 1999, ligado: true }

// A classe Smartphone herda todas propriedades da classe DispositoEletronico. 
// Para adicionar outras propriedades, tem que usar super com as propriedades da classe pai
class Smartphone extends DispositoEletronico {
   constructor(nome, ano, cor, modelo) {
      super(nome, ano);
      this.cor = cor;
      this.modelo = modelo;
   }

   ligar() {
      console.log('Método ligar da classe Smartphone ativado');
   }
}

const s1 = new Smartphone('iPhone', 2015, 'branco', '6S');

console.log(s1); // Smartphone { 
// nome: 'iPhone', ano: 2015, ligado: false, cor: 'branco', modelo: '6S' }

// Método ligar da classe Smartphone será ativado ao invés do método ligar da classe DispositoEletronico
s1.ligar();

console.log(s1); // Método ligar da classe Smartphone ativado
// Smartphone { nome: 'iPhone', ano: 2015, ligado: false, cor: 'branco', modelo: '6S'}