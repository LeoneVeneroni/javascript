const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// Pega todos os estilos do arquivo css linkado no html
const estilosCorpo = getComputedStyle(document.body);

// Pega só a cor de fundo do arquivo css linkado no html
const corFundoCorpo = estilosCorpo.backgroundColor;

console.log(corFundoCorpo); // rgb(17, 86, 102)

for (const p of ps) {
   p.style.backgroundColor = corFundoCorpo;
   p.style.color = "#fff";
   console.log(p);
}
