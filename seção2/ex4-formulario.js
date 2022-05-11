function meuEscopo() {
    const formulario = document.querySelector('.meu-form');
    const resultado = document.querySelector('.result');
    let pessoas = [];

    // formulario.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado');
    // };

    function recebeEventoForm (evento) {
        evento.preventDefault(); // evita  que os dados sumam do console
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        //console.log(nome, sobrenome, peso, altura);
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: Number(peso.value), 
            altura: Number(altura.value)
        });
        
        console.log(pessoas);
                
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} tem ${peso.value} kg e mede ${altura.value} m</p>`;
        
        nome.value = "";
        sobrenome.value = "";
        peso.value = "";
        altura.value = "";
    }

    formulario.addEventListener('submit', recebeEventoForm);  
}
meuEscopo();

