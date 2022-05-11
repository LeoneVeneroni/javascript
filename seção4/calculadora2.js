function Calculadora() {
   this.display = document.querySelector('.display');

   this.inicia = () => {
      this.cliqueBotoes();
      this.pressionaEnter();
   };

   this.pressionaEnter = () => {
      this.display.addEventListener('keyup', e => {
         if(e.keyCode === 13) this.realizaConta();
      });
   };

   // this.clearDisplay = () => {
   this.clearDisplay = function() {
      this.display.value = '';
   };

   this.apagaUm = () => {
      this.display.value = this.display.value.slice(0, -1); // slice(0, -1) mais mostrar da primeira substring (posição 0) até a penúltima (-1)
   };

   this.realizaConta = () => {
      let conta = eval(this.display.value);

      try {
         if(Number.isNaN(conta) || typeof conta !== `number`) {
            alert('Conta inválida');
            return;
         }

         this.display.value = String(conta);
      } catch(e) {
         alert('Conta inválida');
         return;
      }
   };
      
   this.cliqueBotoes = () => {
      document.addEventListener('click', function(e) {
      const el = e.target;

      if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
      if(el.classList.contains('btn-clear')) this.clearDisplay();
      if(el.classList.contains('btn-del')) this.apagaUm();
      if(el.classList.contains('btn-eq')) this.realizaConta();

      this.display.focus();

      }.bind(this)); // o método bind faz com que o 'this' seja o original no objeto, isto é, 'calculadora'
   }

   this.btnParaDisplay = (valor) => this.display.value += valor;
};

const calculadora = new Calculadora();
calculadora.inicia();