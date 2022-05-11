const elementos = [
   {tag: 'p', texto: 'Frase 1'},
   {tag: 'div', texto: 'Frase 2'},
   {tag: 'footer', texto: 'Frase 3'},
   {tag: 'section', texto: 'Frase 4'},
];

const res = document.querySelector('.container');

// Cria o elemento <div>
const campo = document.createElement('div');

// Adiciona a <div> criada à section de classe 'container'.
res.appendChild(campo); 

campo.innerText += '<p><strong>Texto sem formatação</strong></p>';
campo.innerHTML += '<p><strong>Texto com formatação</strong></p>';

for (let i = 0; i < elementos.length; i++) {
   // Primeiramente, acessa o elemento 0 do array 'elementos' e "transporta" as variáveis 'tag' e 'texto' para fora do escopo do array. Depois faz isso para os elementos 1, 2 e 3, respectivamente.
   let { tag, texto } = elementos[i];

   // No primeiro laço, como em elementos[0] temos tag='p', criamos o elemento <p>. Em seguida, em elementos[1] temos tag='div', então criamos o elemento <div>. E assim por diante.
   let tagCriada = document.createElement(tag);

   // Poderia ser tagCriada.innerHTML = texto ou tagCriada.innerText = texto no lugar dos códigos da linhas 23 e 26
   // No primeiro laço, vamos atribuir a string 'Frase 1' à variável 'textoCriado'. Depois, 'Frase 2', 'Frase 3' e 'Frase 4'. Como muda a cada laço, tem que ser 'let' e não 'const'.
   let textoCriado = document.createTextNode(texto);

   // Primeiramente, coloca a string 'Frase 1' ('textoCriado') dentro do elemento <p> ('tagCriada'). Depois coloca 'Frase 2' em <div>, 'Frase 3' em <footer> e 'Frase 4' em <section>.
   tagCriada.appendChild(textoCriado)

   // Adiciona 'tagCriada' à <div> que está dentro da <section> de classe 'container'. No primeiro laço, adiciona <p>Frase 1</p> a essa <div>.
   campo.appendChild(tagCriada); 
}