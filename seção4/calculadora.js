function criaCalculadora() {
   return {
      display: document.querySelector('.display'),

      //Sempre que eu quiser referenciar uma chave de meu objeto (inicia(), cliqueBotoes(), etc) dentro do objeto (criaCalculadora()), eu tenho que colocar o 'this'
      inicia() {
         // this -> [object Object] -> calculadora
         this.cliqueBotoes();
         this.pressionaEnter();
      },

      pressionaEnter() {
         // poderia colocar function(e) no lugar de e =>, mas aí teria que colocar .bind(this) no final
         // 'keyup' faz com que assim que eu soltar o botão indicado, a ação será realizada
         this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
               this.realizaConta();
            }
         });
      },

      clearDisplay() {
         this.display.value = '';
      },

      apagaUm() {
         this.display.value = this.display.value.slice(0, -1); // slice(0, -1) mais mostrar da primeira substring (posição 0) até a penúltima (-1)
      },

      realizaConta() {
         let conta = this.display.value;

         try {
            conta = eval(conta);

            if(!conta) {
               alert('Conta inválida');
               return;
            }

            this.display.value = String(conta);
         } catch(e) {
            alert('Conta inválida');
            return;
         }
      },
      
      cliqueBotoes() {
         // this -> [object Object] -> calculadora
         // Se eu colocasse a arrow function, não precisaria colocar o .bind(this), pois a arrow function não muda o 'this'. 
         //document.addEventListener('click', e => {
         document.addEventListener('click', function(e) {
            // this -> #document
            const el = e.target;

            if(el.classList.contains('btn-num')) {
               this.btnParaDisplay(el.innerText); // innerText é 1, 2, 7, +, (, ) etc
            }

            if(el.classList.contains('btn-clear')) {
               this.clearDisplay();
            }

            if(el.classList.contains('btn-del')) {
               this.apagaUm();
            }

            if(el.classList.contains('btn-eq')) {
               this.realizaConta();
            }

            // Quando você clica em algo, o "focus" fica na coisa que você clicou. Assi, devemos mandar o foco para o display a cada botão clicado
            this.display.focus();

         }.bind(this)); // o método bind faz com que o 'this' seja o original no objeto, isto é, 'calculadora'
      },

      btnParaDisplay(valor) {
         this.display.value += valor; // += vai concatenar os valores no campo onde aparece os números
      },

   };
}

const calculadora = criaCalculadora();
calculadora.inicia();