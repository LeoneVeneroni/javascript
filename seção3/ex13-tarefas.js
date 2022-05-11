const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function() {
   if (!inputTarefa.value) return; // se não tem inputTarefa (false), retorna vazio
   criarTarefa(inputTarefa.value); // o conteúdo do campo de texto (inputTarefa) vai ser ser o parâmetro 'textoInput'  
});

document.addEventListener('click', function(e) {
   const el = e.target;
   
   if (el.classList.contains('apagar')) {
      // console.log(el.parentElement); // <li>
      el.parentElement.remove(); // remove o elemento pai do <button> de classe 'apagar', que é o seu respectivo <li>. O que acaba apagando todos os seus elementos filhos (como o próprio <button>).
      salvarTarefas(); // Se eu apertar o botão 'Apagar', vai apagar também no Local Storage no navegador (Application), pois ele apagaria as <li>s também, mas como não tem, salva sem eles
   }
})

inputTarefa.addEventListener('keypress', function(e) {
   if (e.keyCode === 13){
      //console.log('enter pressionado.');
      if (!inputTarefa.value) return; 
      criarTarefa(inputTarefa.value); 
   }
});

function limparInput() {
   inputTarefa.value = '';
   inputTarefa.focus(); // relacionado à barra vertical que fica piscando
}

function criarBotaoApagar(li) {
   li.innerText += ' ';
   const botaoApagar = document.createElement('button');
   botaoApagar.innerText = 'Apagar';
   li.appendChild(botaoApagar); // coloca um botão ao lado dos <li>s.
   //botaoApagar.classList.add('apagar');
   botaoApagar.setAttribute('class', 'apagar'); // cria o atributo 'class' de valor 'apagar'
   botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // cria o atributo 'title' de valor 'Apagar esta tarefa' (quando eu passo o cursor em cima de 'apagar' aparece 'Apagar esta tarefa')
}

function criarTarefa(textoInput) {
   const li = criarLi(); // coloca o <li> criado na função criarLi()
   li.innerText = textoInput; // o 'inputTarefa.value' é colocado no <li>
   tarefas.appendChild(li); // coloca o <li> no <ul> de classe 'tarefas1 
   limparInput();
   criarBotaoApagar(li);
   salvarTarefas();
}

function criarLi() {
   // Função cria um elemento <li>, que é um item pra ser colocado em um <ul>
   const li = document.createElement('li');
   return li;
}

function salvarTarefas() {
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];

   for (const tarefa of liTarefas) {
      //console.log(tarefa.innerText); // aparece o conteúdo do <li> e 'Apagar'
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Troca 'Apagar' por nada (remove 'Apagar') e o trim() remove um espaço que aparece à direita. 
      listaDeTarefas.push(tarefaTexto); // adiciona um elemento ao array
   }

   const tarefasJSON = JSON.stringify(listaDeTarefas); // transforma o array em string (posso fazer o contrário depois)
   localStorage.setItem('Minhas tarefas', tarefasJSON); // armazena as strings no navegador.
}

function adicionarTarefasSalvas() {
   const tarefas = localStorage.getItem('Minhas tarefas'); // retorna as strings armazenadas no Local Storage 'Minhas tarefas'
   const listaDeTarefas = JSON.parse(tarefas); // Converte as strings em arrays novamente
   
   //Salva todas as tarefas criadas no navegador
   for (let tarefa of listaDeTarefas) {
      criarTarefa(tarefa);
   }
}
adicionarTarefasSalvas();
