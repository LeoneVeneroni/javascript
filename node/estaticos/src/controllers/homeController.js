exports.paginaInicial = (requisicao, resposta) => {
   resposta.render('index.ejs');
};

exports.trataPost = (requisicao, resposta) => {
   resposta.send('Nova rota de post obtida.')
};