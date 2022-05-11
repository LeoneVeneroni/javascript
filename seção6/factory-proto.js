   // Não é eficiente fazer isso
function criaPessoa1(nome, sobrenome) {

   return {
      nome,
      sobrenome,

      falar() {
         console.log(`${this.nome} está falando`);
      },

      comer() {
         console.log(`${this.nome} está comendo`);
      },

      beber() {
         console.log(`${this.nome} está bebendo`);
      },
   };
}

const p1 = criaPessoa1('Giovanna', 'Karla')
console.log(p1);
console.log('===========');

function criaPessoa2(nome, sobrenome) {
   const pessoaPrototype2 = {
      falar() {
         console.log(`${this.nome} está falando`);
      },

      comer() {
         console.log(`${this.nome} está comendo`);
      },

      beber() {
         console.log(`${this.nome} está bebendo`);
      },
   }
   // O Object.create cria um objeto vazio, assume que quem está no primeiro argumento é o prototype desse objeto vazio, e ainda pode receber as propriedades do objeto no segundo argumento
   return Object.create(pessoaPrototype2, {
      nome: {value: nome},
      sobrenome: {value: sobrenome}
   });
}

const p2 = criaPessoa2('Marcos', 'Paulo')
console.log(p2);
console.log('===========');

const falar = {
   falar() {
      console.log(`${this.nome} está falando`);
   }
};

const comer = {
   comer() {
      console.log(`${this.nome} está comendo`);
   }
};

const beber = {
   beber() {
      console.log(`${this.nome} está bebendo`);
   }
};

function criaPessoa3(nome, sobrenome) {
   return Object.create(pessoaPrototype3, {
      nome: {value: nome},
      sobrenome: {value: sobrenome}
   });
}

const pessoaPrototype3 = {...falar, ...comer, ...beber};

const p3 = criaPessoa3('Antonio', 'Nunes');
console.log(p3);
console.log('===========');

// Função igual a criaPessoa3
function criaPessoa4(nome, sobrenome) {
   return Object.create(pessoaPrototype4, {
      nome: {value: nome},
      sobrenome: {value: sobrenome}
   });
}

// Faz a mesma coisa que o comando na linha 76
const pessoaPrototype4 = Object.assign({}, falar, comer, beber);

const p4 = criaPessoa4('Luiza', 'Trajano');
console.log(p4);