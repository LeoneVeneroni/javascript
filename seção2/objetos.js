const pessoa = {
    nome: "Leone",
    idade: 33,
    estaAprovado: true,
    sobrenome: "Santana de Melo Veneroni"
};

// typeof pessoa -> "object"
console.log(pessoa); // {nome: "Leone", idade: 33, estaAprovado: true, sobrenome: "Santana de Melo Veneroni"}
console.log(pessoa.nome); // Leone
console.log(pessoa.idade); // 33
console.log(pessoa.estaAprovado); // true
console.log(pessoa.sobrenome); // Santana de Melo Veneroni

// Podemos criar uma função dentro do objeto. Não preciso colocar 'function' antes do método 'fala()'
const amigo = {
    nome: "Alfredo",
    idade: 36,
    sobrenome: "Antunes",

    fala() {
        console.log(`${this.nome} ${this.sobrenome} de ${this.idade} anos trabalha aqui.`); 
    }, // 'this' faz referência ao objeto 'amigo'

    incrementaIdade() {
        this.idade++;
    } // incrementa a idade em uma unidade
};

amigo.fala(); // Alfredo Antunes de 36 anos trabalha aqui.
amigo.incrementaIdade();
amigo.fala(); // Alfredo Antunes de 37 anos trabalha aqui.
amigo.incrementaIdade();
amigo.fala(); // Alfredo Antunes de 38 anos trabalha aqui.

//Posso criar uma função que cria objetos
function criaPessoa1 (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa1('Richard', 'Santana', 17);
const pessoa2 = criaPessoa1('Thaís', 'Almeida', 27);
console.log(pessoa1.nome, pessoa2.nome);

// A função criaPessoa2 faz a mesma coisa que a função criaPessoa1
function criaPessoa2 (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa3 = criaPessoa2('Richard', 'Santana', 17);
const pessoa4 = criaPessoa2('Thaís', 'Almeida', 27);
console.log(pessoa1.sobrenome, pessoa2.sobrenome);

