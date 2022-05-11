import { nome as nome2, sobrenome2, idade, soma, Pessoa as Gente, nome3, sobrenome3, idade2} from './modulo1';

// Usando o * exporta tudo
// import * from './modulo1';

// se eu colocar qualquer nome diferente dos já definidos, vai importar o que definido como 'default', e vai ser definida neste arquivo como 'produto'
import produto, { nome3, sobrenome3, idade2 } from './modulo1';

// Como a constante importada e a definida neste arquivo se chamam 'nome', podemos renomear a constante importada usando 'as'
const nome = 'Lourival';
const sobrenome = 'Peixoto';

console.log(nome, sobrenome, nome2, sobrenome2, idade); // Lourival Peixoto Neuza Mendes 60
console.log(soma(5, 2)); // 7

const p1 = new Gente('Patrícia', 'Falkowski');
console.log(p1);

console.log(nome3, sobrenome3, idade2); // Lívia Cardoso 40

console.log(produto(4, 6)); // 24