// não podemos esquecer o parâmetro 'proximo' (next) dentro do middleware, senão a requisição não termina

// module.exports = (requisicao, resultado, proximo) => { 
//    if(requisicao.body.cliente) {
//       requisicao.body.cliente = requisicao.body.cliente.replace('Santana', 'NÃO USE SANTANA')
//       console.log();
//       console.log(`Vi que você postou ${requisicao.body.cliente}`);
//       console.log();
//    }
//    proximo();
// };

exports.middlewareGlobal = (requisicao, resultado, proximo) => { 
   proximo();
};