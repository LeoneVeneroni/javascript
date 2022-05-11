class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    // a arrow function não permite a mudança do this. Assim, o this vai se referir à instância
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    // preventDefault() previne que o formulária seja enviado
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    // se camposValidos e senhasValidas forem 'true', o formulário é enviado
    if(camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    // valid é uma flag
    let valid = true;

    // pega conteúdo do campo com classe 'senha'
    const senha = this.formulario.querySelector('.senha');
    // pega conteúdo do campo com classe 'repetir-senha'
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    // o conteúdo de senha for diferente de repetirSenha, a flag muda para 'false' e o formulário não é enviado
    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
    }

    // se a senha tiver menos de 6 ou 12 de caracteres, a flag muda para 'false' e o formulário não é enviado
    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  camposSaoValidos() {
    // valid é uma flag.
    let valid = true;

    // remove todos os erros que tinham aparecidos anteriormente nos campos com classe 'error-text' pra evitar que a mesma mensagem de erro apareça mais de uma vez
    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      // o primeiro elemento irmão de classe "validar" é <input type="text" class="nome validar">, e o seu elemento anterior é <label>Nome</label>, que tem como innerText "Nome". Portanto, label="Nome", depois label="sobrenome", e assim por diante
      const label = campo.previousElementSibling.innerText;

      // se o campo estiver vazio, esse comando vai ser acionado
      if(!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        // quando esse trecho é lido, a flag muda pra 'false', ou seja, o formulário não é enviado
        valid = false;
      }

      // se um trecho tiver a classe 'cpf', lê esse trecho
      if(campo.classList.contains('cpf')) {
        // se não tiver sido inserido o CPF ou ele for inválido (retornado 'false'), a flag valid muda de 'true' para 'false', e o formulário não é enviado
        if(!this.validaCPF(campo)) valid = false;
      }

      // se um trecho tiver a classe 'usuario', lê esse trecho
      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false;
      }

    }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    // valid é uma flag.
    let valid = true;

    // se o usuário tiver poucos ou muitos caracteres, a flag value muda para 'false' e o formulário não é enviado
    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    // expressão regular - o usuário pode ter caracteres de 'a' a 'z, de 'A' a 'Z' e de '0' a '9'. Se qualquer outro caractere, a flag valid muda para 'false' e o formulário não é enviado
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    // instância criada a partir da classe ValidaCPF do outro arquivo JS
    const cpf = new ValidaCPF(campo.value);

    // se o CPF não for válido, a mensagem 'CPF inválido.' aparece e retorna 'false'
    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    // cria uma div
    const div = document.createElement('div');
    // o que for atribuído a msg, vai ser colocado nessa div recém-criada
    div.innerHTML = msg;
    // cria uma classe chamada 'error-text'
    div.classList.add('error-text');
    // indica onde a mensagem de erro será inserida. No caso, será depois do campo
    campo.insertAdjacentElement('afterend', div);
  }
}
 
// instância da classe ValidaFormulario presente na primeira linha deste arquivo
const valida = new ValidaFormulario();
