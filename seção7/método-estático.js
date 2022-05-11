// Métdos estáticos são funções que estão dentro de uma classe, mas poderiam ser criadas sem problemas fora da classe
class ControleRemoto {
   constructor(tv) {
      this.tv = tv;
      this.volume = 0;
   }

   // Métodos de instância
   aumentarVolume() {
      this.volume += 2;
   }
   diminurVolume() {
      this.volume -= 2;
   }
   testeThisA1() {
      console.log(this);
   }
   testeThisA2() {
      console.log(this.tv);
   }

   // Métodos estáticos
   static trocaPilha() {
      console.log('Pilha trocada');
   }
   static testeThisB1() {
      console.log(this);
   }
   static testeThisB2() {
      console.log(this.tv);
   }
   static soma(x, y) {
      return x + y;
   }
}

const controle1 = new ControleRemoto('Samsung');

controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1); // ControleRemoto { tv: 'Samsung', volume: 4 }

// controle1.trocaPilha(); -> Dá erro - sem relação com instâncias 

// Métodos estáticos estão ligados diretamente às classes, e não às instâncias
ControleRemoto.trocaPilha(); // Pilha trocada

// Métodos estáticos não reconhem o 'this'
ControleRemoto.testeThisB2('LG'); // undefined 

ControleRemoto.testeThisB1(); // [class ControleRemoto]

// ControleRemoto.testeThisA2(); -> dá erro
controle1.testeThisA2(); // Samsung 

controle1.testeThisA1(); // ControleRemoto { tv: 'Samsung', volume: 4 }

console.log(ControleRemoto.soma(5, 8)); // 13

// Math é como se fosse uma classe e random sem método estático
console.log(Math.random()); // número aleatório de 0 a 1 