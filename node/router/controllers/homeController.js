exports.paginaInicial = (requisicao, resposta) => {
   resposta.send(`
   <form action="/" method="POST">
   Nome do cliente: <input type="text" name="blabla"><br>
   Outro nome: <input type="text" name="outrocampo">
   <button>Olá, mundo</button>
   </form>
   `);
};

exports.trataPost = (requisicao, resposta) => {
   resposta.send('Nova rota de post obtida.')
};