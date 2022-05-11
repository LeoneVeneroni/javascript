const request = obj => {
   const xhr = new XMLHttpRequest();
   // xhr.open('GET', 'URL', true)
   xhr.open(obj.method, obj.url, true);
   xhr.send();

   xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
         // função de callback
         obj.success(xhr.responseText);
      } else {
         // função de callback
         obj.error(xhr.statusText);
      }
   });
};

document.addEventListener('click', e => {
   const el = e.target;
   const tag = el.tagName.toLowerCase();

   if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
   }
});

function carregaPagina(el) {
   const href = el.getAttribute('href');
   
   const objConfig = {
      method: 'GET',
      url: href,
      // callback
      success(response) {
         carregaResultado(response);
      },
      // callback
      error(errorText) {
         console.log(errorText);
      }
   };

   request(objConfig);
}

function carregaResultado(response) {
   const resultado = document.querySelector('.resultado');
   resultado.innerHTML = response;
}