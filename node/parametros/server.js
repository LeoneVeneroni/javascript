const { application } = require('express');
const express = require('express');
const app = express();

// se eu não colocar isso, vai dar undefined
app.use(
   express.urlencoded(
      {extended: true}
   )
);

app.get('/', (requisicao, resposta) => {
   resposta.send(`
   <form action="/" method="POST">
   Nome do cliente: <input type="text" name="blabla">
   <button>Olá, mundo</button>
   </form>
   `);
});

app.get('/testes/:idUsuarios?/:parametro?', (requisicao, resposta) => {
   // params -> /profile/3
   // query -> /profiles/?chave1=valor1&chave2=valor2
   console.log(requisicao.params);
   // resposta.send(requisicao.params);
   // url: http://localhost:3000/testes/123/zeca 
   // saída: {"idUsuarios":"123","parametro":"zeca"}
   resposta.send(requisicao.query);
   console.log(requisicao.query);
});

app.post('/', (requisicao, resposta) => {
   console.log(requisicao.body);
   resposta.send(`O que você me enviou foi: ${requisicao.body.blabla}`)
});

// 3000 é o número da porta
app.listen(3000, () => {
   console.log('Acessar http://localhost:3000');
   console.log('Servidor executando na porta 3000');
});