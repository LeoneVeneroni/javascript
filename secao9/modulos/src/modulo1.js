const nome = 'Neuza';
const sobrenome = 'Mendes';
const idade = 60;

function soma(x, y) {
   return x + y;
}

// Quando o outro arquivo for importar a constante 'sobrenome', vai ter que escrever 'sobrenome2', e a constante 'sobrenome' fica livre pra ser usada
export { nome, sobrenome as sobrenome2, idade, soma };

// Podemos exportar direto
export const nome3 = 'Lívia';
export const sobrenome3 = 'Cardoso';
export const idade2 = 40;

// só pode exportar uma coisa como 'default'
export default function mult(x, y) {
   return x * y;
}

// export { nome as default, sobrenome as sobrenome2, idade, soma };

export class Pessoa {
   constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome= sobrenome
   }
}