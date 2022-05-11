const conta = document.querySelector('#calculo');

conta.addEventListener('submit', function (ev) {
   ev.preventDefault();
   const inputNumero = ev.target.querySelector('#numero');

   const numero = Number(inputNumero.value);

   dobro = numero*2;
   triplo = numero*3

   const vixe = `O dobro de ${numero} é ${dobro}`; 

   const resultado = document.querySelector('#res');
   resultado.innerHTML = "";
   resultado.innerHTML += vixe;
  
   const parag = document.createElement('p')
   resultado.appendChild(parag);
   parag.innerHTML += `O triplo de ${numero} é ${triplo}`;
});

