// não precisa especificar o caminho, pois há uma pasta chamada expressa dentro de node_modules
const { application } = require('express');
const express = require('express');
const app = express();

//         Criar   ler   atualizar apagar
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (requisicao, resposta) => {
   resposta.send(`
   <form action="/" method="POST">
   Nome: <input type="text" name="nome">
   <button>Enviar</button>
   </form>
   `);
});

app.post('/', (requisicao, resposta) => {
   resposta.send('Recebi o formulário')
});

app.get('/contato', (requisicao, resposta) => {
   resposta.send('Obrigado por entrar em contato conosco.')
})

// 3000 é o número da porta
app.listen(3000, () => {
   console.log('Acessar http://localhost:3000');
   console.log('Servidor executando na porta 3000');
});