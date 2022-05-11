function relogio() {
   function criaSegundos(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-br', {
         hour12: false,
         timeZone: 'UTC' // o mesmo que 'GMT' (hora do Reino Unidos)
      });
   }

   const relogio = document.querySelector('.relogio');
   // const iniciar = document.querySelector('.iniciar');
   // const pausar = document.querySelector('.pausar');
   // const zerar = document.querySelector('.zerar');
   let segundos = 0;
   let timer;

   function iniciaRelogio() {
      timer = setInterval(() => {
         segundos++;
         relogio.innerHTML = criaSegundos(segundos);
      }, 1000);
   }

   document.addEventListener('click', function (evento) {
      const ver = evento.target; // mostra o elemento em que cliquei

      if (ver.classList.contains('iniciar')) {
         // A cada vez que eu clico em 'iniciar', cria-se um timer. Para não ficar vários timers contando os segundos independentementes, temos que apagar um assim que eu apertar em 'iniciar'
         relogio.classList.remove('pausado'); // remove a classe 'pausado'
         clearInterval(timer); // Interrompe o timer
         iniciaRelogio();
      }

      if (ver.classList.contains('pausar')) {
         clearInterval(timer);
         relogio.classList.add('pausado'); // adiciona a classe 'pausado' (presente no arquivo css linkado no html) à classe 'relogio' - <p class = "relogio pausado">
      }

      if (ver.classList.contains('zerar')) {
         relogio.classList.remove('pausado');
         relogio.innerHTML = '00:00:00';
         segundos = 0; // se não redefirmos a variável segundos para zero, quando iniciarmos após termos zerado, vai voltar para o tempo em que tinha sido zerado (pausado)
      }

   })

   /*
      iniciar.addEventListener('click', function(evento) {

      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
      })

      pausar.addEventListener('click', function(evento) {
      clearInterval(timer);
      relogio.classList.add('pausado');
      })

      zerar.addEventListener('click', function(evento) {
      relogio.classList.remove('pausado');
      relogio.innerHTML = '00:00:00';
      segundos = 0;
      })
   */
}

relogio();
