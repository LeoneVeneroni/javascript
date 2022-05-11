/*
CPF: 124.443.857-05

10  9  8  7  6  5  4  3  2 
x1 x2 x4 x4 x4 x3 x8 x5 x7
10 18 32 28 24 15 32 15 14 = 188

Se o número for maior do que 9, consideramos 0
11 - (188 % 11) = 11 - 1 = 10 -> 0 (primeiro dígito)

11 10  9  8  7  6  5  4  3  2 
x1 x2 x4 x4 x4 x3 x8 x5 x7 x0
11 20 36 32 28 18 40 20 21  0 = 226

Se o número for maior do que 9, consideramos 0
11 - (226 % 11) = 11 - 6 = 5 (segundo dígito)
*/
function ValidaCPF(cpfEnviado) {
   Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      get: function() {
         // .replace(/\D+/g, '') retira os pontos do CPF
         return cpfEnviado.replace(/\D+/g, ''); 
      }
   });
}

// Retorna 'true' se o cpf for válido. Caso contrário, retorna 'false'
ValidaCPF.prototype.valida = function() {
   if(typeof this.cpfLimpo === 'undefined') return false;
   if(this.cpfLimpo.length !== 11) return false;
   // se isSequencia() for 'true', retorna 'false'
   if(this.isSequencia()) return false;

   const cpfParcial = this.cpfLimpo.slice(0, -2);
   const digito1 = this.criaDigito(cpfParcial);
   const digito2 = this.criaDigito(cpfParcial + digito1);
   
   const novoCpf = cpfParcial + digito1 + digito2;
   //console.log(novoCpf);
   return novoCpf === this.cpfLimpo;
   

   return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
   // converte o CPF em um array
   const cpfArray = Array.from(cpfParcial);
   let regressivo = cpfArray.length + 1;
   const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
   }, 0);

   const digito = 11 - (total % 11);
   // é colocado para retornar com uma string para poder concatenar
   return digito > 9 ? '0' : String(digito);  
};

// trecho para evitar que uma exceção: quando todos os números são iguais, dá válido, mas queremos que não seja
ValidaCPF.prototype.isSequencia = function() {
   const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
   return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('602.512.047-15');
console.log(cpf.cpfLimpo); // 12444385705
console.log(cpf.valida()); // true

if(cpf.valida()) {
   console.log('CPF válido');
} else {
   console.log('CPF inválido');
}