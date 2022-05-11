class Carro {
   constructor(nome) {
      this.nome = nome;
      this.velocidade = 0;
   }

   acelerar() {
      // Limita a velocidade até 100
      if(this.velocidade >= 100) return;
      this.velocidade++;
   }

   frear() {
      if(this.velocidade <= 0) return;
      this.velocidade--;
   }
}

const c1 = new Carro('Fusca');
console.log(c1); // Carro { nome: 'Fusca', velocidade: 0 }
c1.acelerar();
console.log(c1); // Carro { nome: 'Fusca', velocidade: 1 }

for (let i = 1; i <= 200; i++) {
   c1.acelerar();
}

// O 'if' dentro do método acelerar impede que a velocidade passe de 100
console.log(c1); // Carro { nome: 'Fusca', velocidade: 100 }

// Mas se fizermos assim, podemos redefini-la como
c1.velocidade = 120;

console.log(c1); // Carro { nome: 'Fusca', velocidade: 120 }

// O Symbol gera um valor único e aleatório
// Para proteger o limite, podemos fazer:
const _velocidade = Symbol('velocidade')
class Carro2 {
   constructor(nome) {
      this.nome = nome;
      this[_velocidade] = 0;
   }

   acelerar() {
      // Limita a velocidade até 100
      if(this[_velocidade] >= 100) return;
      this[_velocidade]++;
   }

   frear() {
      if(this[_velocidade] <= 0) return;
      this[_velocidade]--;
   }
}

const c2 = new Carro2('Corsa');

console.log(c2); // Carro2 { nome: 'Corsa', [Symbol(velocidade)]: 0 }

// Permite aumentar a velocidade até o limite definido
for (let i = 1; i <= 80; i++) {
   c2.acelerar();
}

console.log(c2); // Carro2 { nome: 'Corsa', [Symbol(velocidade)]: 80 }

// A velocidade aumentada pelo método fica protegida
c2.velocidade = 150;
console.log(c2); // Carro2 { nome: 'Corsa', velocidade: 150, [Symbol(velocidade)]: 80 }

// Com getter e setter
const _velocidade2 = Symbol('velocidade2')
class Carro3 {
   constructor(nome) {
      this.nome = nome;
      this[_velocidade2] = 25;
   }

   set velocidade(valor) {
      console.log('SETTER');
      if(typeof valor !== 'number') return;
      if(valor >= 100 || valor <= 0) return;
      this[_velocidade2] = valor;
   }
   
   get velocidade() {
      console.log('GETTER');
      return this[_velocidade2];
   }

   acelerar() {
      // Limita a velocidade até 100
      if(this[_velocidade2] >= 100) return;
      this[_velocidade2]++;
   }

   frear() {
      if(this[_velocidade2] <= 0) return;
      this[_velocidade2]--;
   }
}

const c3 = new Carro3('Palio');

for (let i = 1; i <= 50; i++) {
   c3.acelerar();
}

console.log(c3); // Carro3 { nome: 'Palio', [Symbol(velocidade2)]: 75 }

console.log(c3.velocidade);
// GETTER
// 75

c3.velocidade = 12; // Aciona o setter
console.log(c3.velocidade);
// SETTER
// GETTER
// 12

class Pessoa {
   constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
   }

   get nomeCompleto() {
      return this.nome + ' ' + this.sobrenome;
   }

   set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
   }
}

const p1 = new Pessoa('Adoniran', 'Barbosa');
p1.nomeCompleto = 'Adoniran Barbosa Mendes';
console.log(p1.nome); // Adoniran
console.log(p1.sobrenome); // Barbosa Mendes