const data = new Date();
const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();
let diaSemanaTexto;
let mesTexto;

function obterMes(numeroMes) {
   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
   return meses[numeroMes];
}

function obterDia(numeroDia) {
   const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
   return diasSemana[numeroDia];
}

switch (diaSemana) {
   case 0:
      diaSemanaTexto = 'Domingo';
      break;
   case 1:
      diaSemanaTexto = 'Segunda-feira';
      break;
   case 2:
      diaSemanaTexto = 'Terça-feira';
      break;
   case 3:
      diaSemanaTexto = 'Quarta-feira';
      break;
   case 4:
      diaSemanaTexto = 'Quinta-feira';
      break;
   case 5:
      diaSemanaTexto = 'Sexta-feira';
      break;
   case 6:
      diaSemanaTexto = 'Sábado';
      break;
   default:
      diaSemanaTexto = 'ERRO';
}

switch (mes) {
   case 0:
      mesTexto = 'janeiro'
      break;
   case 1:
      mesTexto = 'fevereiro'
      break;
   case 2:
      mesTexto = 'março'
      break;
   case 3:
      mesTexto = 'abril'
      break;
   case 4:
      mesTexto = 'maio'
      break;
   case 5:
      mesTexto = 'junho'
      break;
   case 6:
      mesTexto = 'julho'
      break;
   case 7:
      mesTexto = 'agosto'
      break;
   case 8:
      mesTexto = 'setembro'
      break;
   case 9:
      mesTexto = 'outubro'
      break;
   case 10:
      mesTexto = 'novembro'
      break;
   case 11:
      mesTexto = 'dezembro'
      break;
   default:
      mesTexto = 'mês inválido'
}

function zeroAEsquerda(num) {
   return num < 10 ? `0${num}` : num;
}

const hoje = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}`;
const horario = `${zeroAEsquerda(hora)}:${zeroAEsquerda(minuto)}`;

const resultado = document.querySelector('.container h1');
resultado.innerHTML += `Modo 1: <p>${hoje} ${horario}</p>`;

const hoje2 = `${obterDia(diaSemana)}, ${dia} de ${obterMes(mes)} de ${ano}`;
resultado.innerHTML += `Modo 2: <p>${hoje2} ${horario}</p>`;

resultado.innerHTML += `Modo 3: <p>${ data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}) }</p>`;
