// Verbo + substantivo

let corSite = "verde";

// Declara a função que apaga o conteúdo de corSite
function resetaCor(){
    corSite = "";
};

console.log(corSite); // verde
resetaCor();
console.log(corSite); //

// Declara uma função com um parâmetro que permite a mudança de cor.
function mudaCor(cor){
    corSite = cor;
};

// Chama uma função que permite a mudança de cor. O parâmetro será a nova cor.
mudaCor('rosa');
console.log(corSite); // rosa

// Declara uma função com dois parâmetros que permitem a mudança de cor e adiciona uma tonalidade. O símbolo + significa concatenação.
function mudaCorTon(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade;
};

// Chama uma função que permite a mudança de cor e adiciona uma tonalidade. O primeiro parâmetro é a cor e o segundo a tonalidade. 
mudaCorTon('azul', 'marinho');
console.log(corSite); // azul marinho

// Declara uma função que permite a mudança de cor e adiciona uma tonalidade com um default 'claro'.
function mudaCorTon2(cor, tonalidade='claro') {
    corSite = cor + ' ' + tonalidade;
};

// Chama a função acima com apenas o parâmetro da cor. A tonalidade chamada será o default.
mudaCorTon2('vermelho');
console.log(corSite);
