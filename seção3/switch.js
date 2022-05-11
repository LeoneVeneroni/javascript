const dia = new Date();
const diaSemana = dia.getDay();
let diaSemanaTexto;

switch (diaSemana) {
   case 0:
      diaSemanaTexto = 'Domingo';
      break;
   case 1:
      diaSemanaTexto = 'Segunda';
      break;
   case 2:
      diaSemanaTexto = 'Terça';
      break;
   case 3:
      diaSemanaTexto = 'Quarta';
      break;
   case 4:
      diaSemanaTexto = 'Quinta';
      break;
   case 5:
      diaSemanaTexto = 'Sexta';
      break;
   case 6:
      diaSemanaTexto = 'Sábado';
      break;
   default:
      diaSemanaTexto = 'ERRO';
}

console.log(`${diaSemana} -> ${diaSemanaTexto}`); // 6 -> Sábado

// O parâmetro dentro de diaTexto() não precisa ser igual ao usado lá embaixo ('semana' é diferente de 'diaSemana')
function diaTexto(semana) {
   switch (semana) {
   case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;
   case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
   case 2:
      diaSemanaTexto = 'Terça';
      return diaSemanaTexto;
   case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
   case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
   case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
   case 6:
      diaSemanaTexto = 'Sábado';
      return diaSemanaTexto;
   default:
      diaSemanaTexto = 'ERRO';
      return diaSemanaTexto;
   }
}

console.log(`${diaSemana} -> ${diaTexto(diaSemana)}`); // 6 -> Sábado