// Date() é uma função construtora
const data = new Date();
console.log(data.toString()); // data atual
const data0Bra = new Date(0); // o 0 represente miléssimo de segundo
console.log(data0Bra.toString()); // Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília) - Timestamp unix ou época unix

const tresHoras = 60 * 60 * 3 * 1000;
// Convertendo o Timestamp unix ao horário do Reino Unido
const data0Uk = new Date(0 + tresHoras); 
console.log(data0Uk.toString()); // Thu Jan 01 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília)

// Date(ano, mês, dia, hora, minuto, segundo, miléssimo de segundo)
const dataNasc = new Date(1987, 10, 14, 9, 15, 34, 640);
console.log(dataNasc.toString()); // Sat Nov 14 1987 09:15:34 GMT-0200 (Horário de Verão de Brasília)

// Se deixa só um argumento, ele vai representar miléssimo de segundo ao invés de ano
const dataAleatoria = new Date(1992, 6);
console.log(dataAleatoria.toString()); // Wed Jul 01 1992 00:00:00 GMT-0300 (Horário Padrão de Brasília)

let dataString = new Date('2003-08-27');
console.log(dataString.toString()); // Tue Aug 26 2003 21:00:00 GMT-0300 (Horário Padrão de Brasília)

// 2003-08-27T20:13:45 faz a mesma coisa
dataString = new Date('2003-08-27 20:13:45');
console.log(dataString.toString()); // Wed Aug 27 2003 20:13:45 GMT-0300 (Horário Padrão de Brasília)

function zeroAEsquerda(num) {
   return num < 10 ? `0${num}` : num;
}

// O mês varia de 0 (janeiro) a 11 (dezembro)
// A semana varia de 0 (domingo) a 6 (sábada)
function formataData(data) {
   const dia = zeroAEsquerda(data.getDate());
   const mes = zeroAEsquerda(data.getMonth() + 1);
   const ano = zeroAEsquerda(data.getFullYear());
   const hora = zeroAEsquerda(data.getHours());
   const min = zeroAEsquerda(data.getMinutes());
   const seg = zeroAEsquerda(data.getSeconds());
   const milseg = zeroAEsquerda(data.getMilliseconds());
   const diasem = zeroAEsquerda(data.getDay() + 1);

   return `${diasem} ${dia}/${mes}/${ano} ${hora}:${min}:${seg}.${milseg}`;
}

const dataBrasil = formataData(data);
console.log(dataBrasil); // 07 10/07/2021 17:32:03.29
