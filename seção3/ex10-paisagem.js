// Retorna true se a imagem estiver no modo paisagem.

function ePaisagem0(largura, altura) {
   return largura > altura ? true : false;
}

function ePaisagem1(largura, altura) {
   return largura > altura;
}

const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(250, 300));
   