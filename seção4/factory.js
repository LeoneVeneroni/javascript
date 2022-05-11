// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
   return {
      nome,
      sobrenome,

      fala(assunto) { // fala: function(assunto)
         return `${nome} está ${assunto}`;
      },

      nomeCompleto() {
         return `${nome} ${sobrenome}`;
      },

      altura: a,
      peso: p,
      imc() { // imc: function()
         // Se eu não colocar this na variáveis abaixo, vai dar erro, pois 'peso' e 'altura' não foram definidos neste escopo.
         const indice = this.peso / this.altura ** 2;
         return indice.toFixed(2);
      }
   };
}

const p1 = criaPessoa('Manoel', 'Pereira', 1.70, 58);

console.log(p1.imc()); // 20.07
console.log(p1.nome); // Manoel
console.log(p1.sobrenome); // Pereira
console.log(p1.fala('boladão comigo')); // Manoel está boladão comigo
console.log(p1.peso); // 58
console.log(p1.nomeCompleto()); // Manoel Pereira

// Tentativa de redefinição (não funcionou)
p1.nomeCompleto = 'Jorge Silveira'
console.log(p1.nome); // Manoel
console.log(p1.sobrenome); // Pereira

function criaPessoa2(nome, sobrenome, altura, peso) {
   return {
      nome,
      sobrenome,
      fala(assunto) { // fala: function(assunto)
         return `${nome} está ${assunto}`;
      },
      altura, 
      peso,
      imc() { // imc: function()
         // Agora se coloco 'altura' ou 'peso' sem o this funciona, pois são os nomes dos parâmetros
         const indice = peso / altura ** 2;
         return indice.toFixed(2);
      }
   };
}

const p2 = criaPessoa2('José', 'Santos', 1.84, 76)

console.log(p2.imc()); // 22.45
console.log(p2.nome); // José
console.log(p2.peso); // 76

function criaPessoa3(nome, sobrenome, alt, pe) {
   return {
      nome,
      sobrenome,

      // Getter
      get nomeCompleto() {
         return nome + ' ' + sobrenome; 
      },

      // Setter
      set nomeCompleto(valor) {
         valor = valor.split(' '); // transforma caracteres sperador um espaço como elementos de um array
         this.nome = valor.shift(); // remove o primeiro elemento do array e joga ele na variável 'this.nome'
         this.sobrenome = valor.join(' ') // pega os outros elementos e junta com uma string separada por um espaço
      },

      fala(assunto = 'falando sobre você') { // fala: function(assunto)
         // Se eu colocar ${nome} ao invés de ${this.nome}, quando eu chamar p3.fala(), vai retornar 'Richard está falando sobre você', e não 'Élida está falando sobre você'
         return `${this.nome} está ${assunto}`;
      },

      altura: alt,
      peso: pe,

      // Getter
      get imc() { // imc: function()
         // O get faz com que imc() finja ser um atributo do objeto
         const indice = this.peso / this.altura ** 2;
         return indice.toFixed(2);
      }
   };
}

const p3 = criaPessoa3('Richard', 'Santana', 1.95, 70);

// console.log(p3.imc()); // dá erro
console.log(p3.imc); // 18.41
console.log(p3.nomeCompleto);

// Com o setter é possível redefinir
p3.nomeCompleto = 'Élida Muniz Souza';
console.log(p3.nome); // Élida
console.log(p3.sobrenome); // Muniz Souza
console.log(p3.fala()); // Élida está falando sobre você