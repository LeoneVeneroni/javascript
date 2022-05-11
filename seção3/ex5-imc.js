// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // aqui pode ser tanto 'e.target' quanto 'form'
  const inputPeso = form.querySelector('#peso'); 
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) { 
    // se peso não for 'true', retorna 'Peso inválido', e tudo o código abaixo desse bloco if não é lido
    setResultado('Peso inválido', false); 
    return;
  }

  if (!altura) {
    // se altura não for 'true', retorna 'Altura inválida', e tudo o código abaixo desse bloco if não é lido
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2); // imc com duas casas decimais
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  // o parâmetro 'isValid' é uma flag que vai retornar 'true' ou 'false'
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    // se o parâmetro isValid for 'true', vai gerar fundo verde
    p.classList.add('paragrafo-resultado');
  } else { 
    // se o parâmetro isValid for 'false', vai gerar fundo vermelho
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
