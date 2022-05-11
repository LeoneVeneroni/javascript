// recebe de rota.get('/', homeController.paginaInicial) de routes.js
exports.paginaInicial = (requisicao, resposta) => {
   resposta.render('index.ejs');
   return;
};


// recebe de rota.post('/', homeController.trataPost) de routes.js
exports.trataPost = (requisicao, resposta) => {
   resposta.send(requisicao.body);
   return;
};